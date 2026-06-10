import type { Project } from '@/types';
import peekcartThumbnail from '@/assets/images/project/peekcart/thumbnail.svg';
import diagramEvolution from '@/assets/images/project/peekcart/diagram-evolution.png';
import diagramLock from '@/assets/images/project/peekcart/diagram-lock.png';
import diagramEvent from '@/assets/images/project/peekcart/diagram-event.png';
import diagramArchitecture from '@/assets/images/project/peekcart/diagram-architecture.png';
import diagramHarness from '@/assets/images/project/peekcart/diagram-harness.png';

const peekcartImages: Record<string, string> = {
  diagram_evolution: diagramEvolution,
  diagram_lock: diagramLock,
  diagram_event: diagramEvent,
  diagram_architecture: diagramArchitecture,
  diagram_harness: diagramHarness,
};

const peekcartMarkdown = `## 프로젝트 개요

**PeekCart**는 대용량 트래픽을 가정한 이커머스 백엔드 플랫폼이다. 단순 CRUD를 넘어 **성능·정합성·안정성·운영**을 검증 대상으로 삼았고, **모놀리식으로 구현한 뒤 MSA 전환을 염두에 두고 도메인 경계와 설계 부채를 정리하는 단계**까지 진행했다.

### 핵심 성과

- **1,000 VUser 동시 주문에서 오버셀링 0건** — Redis 분산 락 + DB 낙관적 락으로 재고 정합성 검증
- **상품 조회 TPS ×2.31 개선** — Redis Cache-Aside 적용 전후 (265.0 → 612.7, GKE 실측)
- **이벤트 유실·중복 소비 대응** — Transactional Outbox + 멱등성(\`processed_events\`) + DLQ

### 개발 동기

"이커머스 CRUD"는 많지만, 트래픽이 몰릴 때 무엇이 먼저 깨지는지, 그걸 어떤 순서로 막아야 하는지를 직접 겪어보고 싶었다. 그래서 처음부터 MSA로 가지 않고 **모놀리식으로 시작한 뒤, 동시성·이벤트 유실·중복 소비 같은 문제를 실제로 마주칠 때마다 그에 맞는 패턴을 도입**하는 방식으로 진행했다.

핵심 원칙은 "무엇을 만들었는가"가 아니라 **왜 그 방식으로 만들었는가**다. 모든 기술 도입을 \`문제 → 대안 비교 → 선택 근거 → 한계\`로 기록하고, 주요 결정은 ADR(Architecture Decision Record)로 남겼다. 측정 결과는 목표에 미달하더라도 미화하지 않고 그대로 기록했다.

현재 Phase 1~3(모놀리식 구현 · 성능/정합성 보강 · 인프라/관측성/부하 검증)을 마쳤고, **Phase 4(MSA 분리)로 넘어가기 전에 그동안의 설계와 부채를 정리하는 단계**에 있다. 아래 블로그 연재(학습 기록 20여 편)가 그 정리 작업의 산출물이다.

| 항목 | 내용 |
| --- | --- |
| 개발 기간 | 2026.03 ~ 진행 중 (Phase 1~3 완료, Phase 4 준비) |
| 개발 인원 | 1인 (설계 · 구현 · 인프라 · 부하 검증 전 과정) |
| 커밋 | 360개 |
| 코드 규모 | Java ~6,500줄 (187파일) / 테스트 272케이스 (62파일) |
| 데이터/문서 | Flyway 마이그레이션 4단계, ADR 9건 |
| 진행 단계 | Phase 1~3 완료 · Phase 4(MSA) 진입 전 정리 |

### 기술 스택

| 영역 | 스택 |
| --- | --- |
| Language / Framework | Java 17, Spring Boot 3.5 |
| Data | MySQL 8, Redis 7 (Redisson), Flyway |
| Messaging | Apache Kafka (Transactional Outbox, DLQ) |
| Infra | Docker, Kubernetes (Kustomize), GKE, GitHub Actions |
| Observability | Prometheus, Grafana, Micrometer, kube-prometheus-stack |
| Load Test | nGrinder, k6 |

### 진화 전략 — 왜 모놀리식에서 시작했나

분산 시스템의 복잡도는 **그것이 필요한 문제를 먼저 겪은 뒤** 도입해야 설명할 수 있다고 봤다. Phase별로 "이번 단계에서 해결할 문제"를 분명히 두고 진행했다.

![PeekCart Phase 1~4 진화 흐름]({{diagram_evolution}})

---

## 1. 문제와 해결 — 1,000명이 같은 상품을 동시에 주문하면

### 문제 (As-Is)

재고가 100개인 상품에 동시 주문이 몰리면, 재고 확인과 차감 사이의 틈에서 여러 트랜잭션이 같은 재고를 읽고 각자 차감해 **오버셀링**이 발생한다. Serializable이나 \`SELECT FOR UPDATE\`로 막을 수는 있지만, 락 경합과 DB 커넥션 점유를 주문 경로에 집중시키고 싶지 않았다.

### 해결 (To-Be)

평상시엔 **Redis 분산 락(Redisson)으로 동시 요청을 직렬화**한다. 락을 못 잡으면(경합) 대기 없이 즉시 409로 떨군다. 그리고 **Redis 자체가 장애일 땐 락 없이 트랜잭션을 진행하되, DB 낙관적 락(\`@Version\`)이 최후 방어선**으로 동시 차감을 막는다. '경합 차단'과 '장애 시 정합성 보장'은 서로 다른 경로다.

![재고 동시성 — 분산 락 + 낙관적 락 흐름]({{diagram_lock}})

### 기술적 고민과 결정

**1) 락 범위는 트랜잭션 범위를 감싸야 한다**

흔한 실수는 트랜잭션이 끝나기 전에 락을 푸는 것이다. 커밋 전에 락을 해제하면, 아직 커밋되지 않은 재고를 다른 스레드가 읽어 다시 오버셀링이 난다. 그래서 **락 획득 → 트랜잭션 시작 → 커밋 → 락 해제** 순서를 강제하기 위해 락 관리(Facade)와 트랜잭션 로직(Service)을 분리했다.

**2) 분산 락만 있으면 낙관적 락은 불필요한가**

분산 락이 정상 동작하는 한 충돌은 나지 않는다. 문제는 **Redis가 장애일 때**다. 이 경우 락 획득 로직은 예외를 삼키고 *락 없이 진행*하도록 했다(\`DistributedLockManager\`). 그러면 동시 요청이 모두 DB로 몰리는데, 이때 \`@Version\` 낙관적 락이 version 충돌로 한 트랜잭션만 통과시켜 오버셀링을 막는다. 정리하면 **획득 실패(경합) → 409**와 **Redis 장애 → 락 없이 진행 + 버전 충돌 방어**는 서로 다른 경로이고, 두 락은 중복이 아니라 다른 실패 모드를 막는다.

**3) "조건부 UPDATE 한 방"이면 분산 락이 필요 없을까 (재검토)**

\`UPDATE inventory SET stock = stock - :qty WHERE id = :id AND stock >= :qty\` 한 줄이면 단일 행 차감은 원자적으로 처리된다. 단일 상품 차감만 보면 분산 락은 과방어일 수 있다. 다만 "재고 확인 + 차감 + 다른 도메인 작업"을 묶어야 하거나 락 획득 실패를 빠르게 사용자에게 알려야 하는 경우엔 분산 락의 의미가 살아난다. 이 선택 기준 자체를 ADR과 블로그(학습 기록 19)로 정리했다.

| 항목 | 비관적 락 (SELECT FOR UPDATE) | 채택: 분산 락 + 낙관적 락 |
| --- | --- | --- |
| 동시 요청 처리 | DB 커넥션 점유, 대기 누적 | Redis에서 직렬화, 실패 시 즉시 409 |
| DB 부하 | 락 경합이 DB로 집중 | DB는 차감 트랜잭션만 |
| 장애 대응 | DB 단일 의존 | Redis 장애 시 락 없이 진행, \`@Version\`이 최후 방어 |
| 검증 | — | 1,000 VUser 동시 주문 **오버셀링 0건** |

> 관련 글: 학습 기록 9 (오버셀링 이중 방어), 학습 기록 19 (조건부 UPDATE vs 분산 락), 학습 기록 3 (상품/재고 분리)

---

## 2. 문제와 해결 — DB는 커밋됐는데 이벤트가 사라진다면

### 문제 (As-Is)

주문이 생기면 결제·알림 도메인에 알려야 한다. Phase 1에서는 \`@TransactionalEventListener(AFTER_COMMIT)\`로 처리했는데, **이벤트 핸들러는 커밋 이후에 실행되므로 거기서 예외가 나도 이미 커밋된 주문은 롤백되지 않는다.** 더 큰 문제는 Phase 2에서 Kafka로 넘어갈 때다. "DB 커밋 성공 → Kafka 발행 실패"가 발생하면 이벤트가 영구 유실되어 도메인 간 상태가 어긋난다.

### 해결 (To-Be)

비즈니스 데이터와 이벤트를 **하나의 트랜잭션으로 Outbox 테이블에 함께 저장**하고, 폴링 스케줄러가 Outbox를 읽어 Kafka로 발행한다. 발행 실패는 \`retry_count\`로 재시도하고, 한계를 넘으면 \`FAILED\` + Slack 알림으로 격리한다. Consumer 쪽은 멱등성과 DLQ로 중복·실패를 흡수한다.

![이벤트 파이프라인 — Outbox · 멱등성 · DLQ]({{diagram_event}})

### 기술적 고민과 결정

**1) Outbox 발행: Polling vs Debezium CDC**

Outbox를 Kafka로 내보내는 방법은 두 가지다. Debezium CDC는 MySQL binlog를 실시간으로 읽어 지연이 거의 없지만 Kafka Connect 클러스터라는 추가 인프라를 운영해야 한다. 포트폴리오 범위에서는 추가 인프라 없이 Spring Scheduler로 구현 가능한 **폴링 방식**이 적정 트레이드오프라고 판단했고, 추후 CDC로 교체 가능한 구조로 분리해 두었다.

**2) 중복 소비를 어떻게 막을 것인가**

Kafka는 at-least-once 전달이라 같은 이벤트가 두 번 올 수 있다. 그대로 처리하면 재고가 두 번 복구되거나 알림이 두 번 간다. \`processed_events\` 테이블에 \`(event_id, consumer_group)\` 복합 UK를 두고, **처리 전에 먼저 INSERT로 선점**한다. UK 충돌이 나면 이미 처리된(또는 동시에 처리 중인) 이벤트로 보고 건너뛴다. \`event_id\`는 Outbox 생성 시 UUID로 부여한다.

핵심은 이 **선점 INSERT가 비즈니스 로직과 같은 트랜잭션**이라는 점이다(\`IdempotencyChecker\`가 호출자의 \`@Transactional\`에 참여). 처리 중 예외가 나면 \`processed_events\` 행도 함께 롤백되므로, 다음 재시도에서 정상적으로 다시 처리된다 — '선점만 되고 처리는 실패해 영영 건너뛰는' 구멍이 없다.

**3) Producer 실패와 Consumer 실패는 별개다**

발행 자체가 실패하는 것(Outbox \`FAILED\`)과, 발행은 됐지만 소비 처리가 실패하는 것(DLQ)은 원인도 대응도 다르다. 둘을 같은 메커니즘으로 뭉뚱그리지 않고 분리했다. Consumer는 3회 재시도(1s · 5s · 30s) 후에도 실패하면 \`{원본 토픽}.dlq\`로 격리하고 Slack으로 알린다.

| 단계 | Phase 1 | Phase 2 이후 |
| --- | --- | --- |
| 도메인 간 전달 | \`@TransactionalEventListener\` (로컬) | Kafka 이벤트 |
| 발행 보장 | 없음 (커밋 후 유실 가능) | Outbox 단일 트랜잭션 |
| 중복 방어 | 없음 | processed_events 복합 UK |
| 처리 실패 | 로깅 + 수동 | DLQ + Slack 알림 |

> 관련 글: 학습 기록 10 (Transactional Outbox), 학습 기록 11 (멱등성 + DLQ), 학습 기록 5 (결제 실패 흐름), 학습 기록 6 (알림 실패 격리)

---

## 3. 문제와 해결 — "성능을 개선했다"를 어떻게 증명하나

### 문제 (As-Is)

"캐시를 넣어서 빨라졌다", "동시성 문제를 막았다"는 말은 수치 없이는 신뢰하기 어렵다. 실제 부하 환경에서 무엇이 병목이고, 개선이 얼마나 됐는지를 **측정**해야 했다.

### 해결 (To-Be)

GKE(e2-standard-4) 환경에 배포하고 nGrinder·k6로 시나리오를 나눠 실측했다. 캐시 효과, 동시 주문 정합성, HPA 자동 확장, Kafka Lag을 각각 분리해 측정했다.

| 시나리오 | 결과 |
| --- | --- |
| **Redis 캐싱 (상품 조회, 50 VUser)** | TPS **265.0 → 612.7 (×2.31)**, 평균 응답 188ms → 82ms (−56.5%), 에러 0 |
| **1,000 VUser 동시 주문** | **오버셀링 0건**, 재고 정합성 OK |
| **HPA 자동 확장** | CPU saturation 시 Pod **1 → 3 자동 scale-out** (신규 Pod 65초 내 Ready) |
| **Kafka Consumer Lag** | steady-state **0 유지**, peak 후 신속 복귀 |

> 테스트 조건: GKE \`e2-standard-4\` ×1 노드, peekcart Pod req 500m/1Gi·lim 2000m/2Gi, MySQL·Redis·Kafka 동일 클러스터. 캐시 시나리오 50 VUser·5분(nGrinder), 동시 주문 1,000 VUser 30s ramp-up + 1m hold(k6), 합격선 \`http_req_failed < 0.1\`.

### 기술적 고민과 결정

**1) 캐시에 재고를 넣지 않은 이유**

상품명·가격 같은 정보는 캐시(Cache-Aside)에 적합하지만, **재고는 캐시에 넣지 않았다.** 재고는 주문마다 바뀌는 강한 정합성 대상이라, 캐시에 두면 무효화 타이밍에 오버셀링 리스크가 생긴다. "자주 읽고 드물게 바뀌는 것"만 캐싱하고 재고는 DB+락으로 다뤘다.

**2) 목표 미달도 측정 결과다 (×2.31, 목표 ×3)**

캐싱 개선 목표는 3배였지만 실측은 2.31배였다. 이를 "실패"로 숨기지 않고 그대로 기록한 뒤, 원인을 분석했다. 캐시 ON 상태에서도 CPU가 ~175%까지 올라 **CPU가 병목**이었고, 단일 Pod 환경의 한계가 드러났다. 이 데이터가 다음 시나리오(동시 주문 + HPA)의 근거가 됐다.

**3) 정합성과 처리량을 분리해서 본다**

1,000 VUser 동시 주문에서 인프라 한계로 처리량 임계값(요청 실패율)은 미달했지만, **오버셀링 0건 · 재고 정합성 OK**는 달성했다. 이번 실험에서는 처리량과 정합성을 분리해 해석했다 — 처리량 미달은 노드·Pod 증설 여지가 있는 반면, 오버셀링 0건은 설계가 보장한 결과다. 실제로 HPA가 Pod를 1→3으로 늘려 CPU를 90%→15%로 안정화하는 것까지 확인했다.

> 관련 글: 학습 기록 8 (Cache-Aside), 학습 기록 16 (캐시 효과 측정), 학습 기록 17 (1,000 동시 주문 · HPA · Kafka Lag)

---

## 4. 시스템 아키텍처 — 4-Layered + DDD

도메인별로 Presentation / Application / Domain / Infrastructure 4개 레이어를 분리하고, 의존 방향을 단방향(Presentation → Application → Domain ← Infrastructure)으로 강제했다. 비즈니스 로직은 Service가 아닌 **Entity / Domain Service에 응집**시켰다.

![4-Layered + DDD 아키텍처]({{diagram_architecture}})

JPA는 실용적으로 절충했다. 도메인 엔티티에 \`@Entity\` 등 매핑 어노테이션은 허용하되, 비즈니스 로직이 \`EntityManager\` 같은 JPA API에 직접 의존하지 않도록 막았다. 엔티티-도메인 분리에 따르는 매핑 보일러플레이트를 피하면서 도메인 순수성과 생산성을 함께 확보하기 위한 선택이다. 5개 도메인(User · Product · Order · Payment · Notification)이 모두 같은 레이어 규칙을 따른다.

> 관련 글: 학습 기록 1 (4-Layered + DDD), 학습 기록 0 (모놀리스 → MSA 흐름)

---

## 5. 그 외 핵심 설계 결정

**결제 타임아웃 스케줄러 + ShedLock** — 결제 대기(\`PAYMENT_REQUESTED\`)가 15분을 넘긴 주문을 자동 취소하고 재고를 복구한다. 아직 단일 인스턴스지만, **다중 Pod로 늘어나면 스케줄러가 중복 실행**되므로 ShedLock(MySQL 락 테이블)을 미리 도입해 Phase 3~4 전환 비용을 선제거했다. (학습 기록 7, 12)

**JWT 인증 — DB와 Redis의 역할 분리** — Refresh Token은 DB에 영속(발급 이력·만료 관리), 로그아웃 블랙리스트는 Redis에 둔다. Token Rotation 시 동시 재발급으로 생기는 race condition은 Grace Period로 보완했다. (학습 기록 2)

**관측성 계약** — Actuator → Micrometer → Prometheus → Grafana로 메트릭이 흐른다. 메트릭이 수집되는데 그래프가 비는 문제(히스토그램 미활성·라벨 불일치)를 겪고, 관측성 설정의 SSOT를 ADR로 정리했다. Kafka 헤더로 trace를 전파하고 Outbox 테이블에 \`trace_id\`를 보존(의도적 무인덱스)한다. (학습 기록 13, 14, 15)

**MSA 전환 준비 — 부채 트리아지** — Phase 4 진입 전, 누적된 22개의 설계 부채를 "지금 고칠 것 / 의도적으로 남길 것"으로 나눴다. 무엇을 왜 남기는지까지 회고로 기록했다. (학습 기록 18, 부채 해결 회고)

---

## 6. 개발 방법론 — Claude × Codex 하네스

코드만이 아니라 **AI와 함께 일하는 흐름 자체**를 설계했다. Claude로 계획하고 Codex로 리뷰를 따로 쓰니 도구를 오갈 때마다 문맥을 다시 설명해야 했고 "계획엔 있는데 구현엔 빠진" 괴리가 반복됐다. 모델 성능보다 **상태·프로세스 부재**가 문제였다. 그래서 작업을 \`/plan → /work → /ship\`으로 고정하고 task마다 \`.state.json\`으로 상태를 이었다. **Claude는 계획·구현·오케스트레이션**, **Codex는 독립 리뷰어**(diff·계획서를 output-schema JSON으로 강제 응답)를 맡고, 사람의 개입은 **정해진 게이트**(GW·GS)에서만 일어난다.

![Claude × Codex 하네스 흐름]({{diagram_harness}})

| 장치 | 내용 |
| --- | --- |
| 상태 추적 | task별 \`.state.json\`(stage · 리뷰 이력 · diff · 커밋 계획). 중단돼도 **재진입 매트릭스**로 복구 |
| 독립 리뷰 | Codex가 스키마 강제 JSON으로 diff/계획 리뷰 → **P0/P1/P2** 분류, P0는 무시 시 사유 필수 |
| 사용자 게이트 | 계획 승인 · 리뷰 반영 · 커밋 분할 · PR 본문을 정해진 지점(GW·GS)에서만 사람이 결정 |
| 정합성·안전 | atomic state 치환, \`git add -A\` 금지(파일 단위 커밋), **drift detector**(state↔git 괴리 감지) |

정량 KPI보다 "체감상 편한가 · 질문이 줄었나"를 1차 기준으로 둔 **v0**이며, 계획 → 구현 → 커밋 → PR → archive 전체 흐름을 smoke 테스트로, 하네스 자체는 shell 함수(~1,300줄) + bats로 검증했다. (대용량 diff는 split 리뷰로 분할하고, Codex 호출엔 횟수 상한·토큰 메트릭을 둔다.)

> 관련 글: [Claude × Codex 하네스 구축기](https://blog.rlarbdlf222.workers.dev/blog/claude-codex/)

---

## 7. 블로그 — PeekCart 학습 기록 연재

각 설계 결정을 \`문제 → 대안 → 선택 → 한계 → 다음 Phase 연결\` 구조로 정리한 연재 글이다. 이 프로젝트의 의사결정 근거가 가장 자세히 담겨 있다.

**전체 서사**
- [0. 왜 모놀리스에서 MSA로 가는 흐름을 먼저 봐야 할까](https://blog.rlarbdlf222.workers.dev/blog/peekcart-monolith-to-msa-flow/)

**Phase 1 — 모놀리식 도메인**
- [1. 4-Layered + DDD 구조를 어떻게 읽어야 할까](https://blog.rlarbdlf222.workers.dev/blog/peekcart-layered-ddd/)
- [2. 인증·인가의 갈림길에서 무엇을 선택할 수 있을까](https://blog.rlarbdlf222.workers.dev/blog/peekcart-authn-authz-choices/)
- [3. 상품과 재고는 왜 따로 관리해야 할까](https://blog.rlarbdlf222.workers.dev/blog/peekcart-product-inventory-concurrency/)
- [4. 주문 생성 트랜잭션 안에서는 어떤 일이 일어나는가](https://blog.rlarbdlf222.workers.dev/blog/peekcart-order-transaction-flow/)
- [5. 결제 승인이 실패하면 누가 주문을 취소하는가](https://blog.rlarbdlf222.workers.dev/blog/peekcart-payment-failure-flow/)
- [6. 알림 발송이 실패해도 주문은 살아남아야 한다](https://blog.rlarbdlf222.workers.dev/blog/peekcart-notification-failure-isolation/)
- [7. 15분 후에 돌아와서 주문을 취소하는 일](https://blog.rlarbdlf222.workers.dev/blog/peekcart-order-timeout-scheduler/)

**Phase 2 — 성능 / 정합성**
- [8. 상품 조회를 캐시 뒤로 옮기기](https://blog.rlarbdlf222.workers.dev/blog/peekcart-product-cache-aside/)
- [9. 오버셀링을 두 겹으로 막기 — 분산 락과 낙관적 락](https://blog.rlarbdlf222.workers.dev/blog/peekcart-inventory-lock-defense/)
- [10. DB는 커밋됐는데 이벤트가 사라진다면 — Kafka와 Transactional Outbox](https://blog.rlarbdlf222.workers.dev/blog/peekcart-transactional-outbox/)
- [11. 같은 이벤트가 두 번 왔다 — Consumer 멱등성과 DLQ](https://blog.rlarbdlf222.workers.dev/blog/peekcart-consumer-idempotency-dlq/)
- [12. Pod이 셋이면 스케줄러도 셋이 돈다 — ShedLock](https://blog.rlarbdlf222.workers.dev/blog/peekcart-shedlock-multi-pod-scheduler/)

**Phase 3 — 인프라 / 관측성 / 부하**
- [13. "내 머신에선 되는데"를 닫는다 — CI와 Docker 이미지 빌드](https://blog.rlarbdlf222.workers.dev/blog/peekcart-ci-docker-image-build/)
- [14. 같은 매니페스트로 두 환경을 배포한다 — Kustomize와 minikube → GKE](https://blog.rlarbdlf222.workers.dev/blog/peekcart-kustomize-base-overlays-gke/)
- [15. 메트릭은 수집됐는데 그래프가 비어 있다](https://blog.rlarbdlf222.workers.dev/blog/peekcart-observability-contract/)
- [16. 캐시 효과를 어떻게 증명할까](https://blog.rlarbdlf222.workers.dev/blog/peekcart-cache-effect-measurement/)
- [17. 1,000명이 소수 상품을 동시에 주문하면](https://blog.rlarbdlf222.workers.dev/blog/peekcart-order-concurrency-hpa/)

**Phase 4 — MSA 진입 전 정리**
- [18. Phase 4로 넘어가기 전에 — 글을 쓰다 발견한 22개의 부채](https://blog.rlarbdlf222.workers.dev/blog/peekcart-phase4-debt-checklist/)
- [19. "조건부 UPDATE 한 방"이면 분산 락이 필요 없을까](https://blog.rlarbdlf222.workers.dev/blog/peekcart-inventory-conditional-update-adr/)
- [부채 해결 회고: MSA로 넘어가기 전에 무엇을 고치고 무엇을 일부러 남겼나](https://blog.rlarbdlf222.workers.dev/blog/peekcart-phase4-debt-retrospective/)
- [쿠버네티스 학습 기록: YAML을 던지면 무슨 일이 일어나는가](https://blog.rlarbdlf222.workers.dev/blog/kubernetes-reconciliation-mental-model/)

---

## 8. 프로젝트 규모 상세

| 항목 | 수치 |
| --- | --- |
| 개발 기간 | 2026.03 ~ 진행 중 |
| 커밋 | 360개 |
| 도메인 | 5개 (User · Product · Order · Payment · Notification) |
| 메인 코드 (Java) | ~6,500줄 (187파일) |
| 테스트 | 272 케이스 (62파일) — 단위 + Testcontainers 통합 |
| Flyway 마이그레이션 | 4단계 (init → outbox/processed_events → shedlock → trace context) |
| ADR (결정 기록) | 9건 |
| 부하 테스트 | nGrinder + k6, GKE 실측 (캐시 ×2.31, 동시 주문 오버셀링 0, HPA 1→3) |
| 블로그 연재 | PeekCart 학습 기록 20여 편 |
`;

export const peekcart: Project = {
  title: 'PeekCart',
  description:
    '대용량 트래픽을 고려한 이커머스 백엔드 — 모놀리식 구현 후 MSA 전환을 준비하는 프로젝트',
  projectType: 'Main',
  image: peekcartThumbnail,
  tags: ['Spring Boot', 'Kafka', 'Redis', 'MySQL', 'Kubernetes', 'Grafana'],
  github: 'https://github.com/Kimgyuilli/PeakCart',
  demo: '',
  categories: ['Backend'],
  techStack: {
    backend: [
      'Java 17',
      'Spring Boot 3.5',
      'Spring Security',
      'Spring Data JPA',
      'Redisson',
      'Spring Kafka',
      'ShedLock',
    ],
    database: ['MySQL 8', 'Redis 7', 'Flyway'],
    deployment: ['Docker', 'Kubernetes (Kustomize)', 'GKE', 'GitHub Actions', 'Prometheus', 'Grafana'],
  },
  duration: '2026.03 ~ 진행 중',
  teamSize: '1명',
  role: '백엔드 개발 (설계 · 구현 · 인프라 · 부하 검증 전 과정)',
  markdownContent: peekcartMarkdown,
  markdownImages: peekcartImages,
};
