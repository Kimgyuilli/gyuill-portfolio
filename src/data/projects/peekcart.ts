import type { Project } from '@/types';
import peekcartThumbnail from '@/assets/images/project/peekcart/thumbnail.svg';
import diagramEvolution from '@/assets/images/project/peekcart/diagram-evolution.svg';
import diagramLock from '@/assets/images/project/peekcart/diagram-lock.png';
import diagramEvent from '@/assets/images/project/peekcart/diagram-event.png';
import diagramArchitecture from '@/assets/images/project/peekcart/diagram-architecture.png';
import diagramHarness from '@/assets/images/project/peekcart/diagram-harness.svg';
import diagramInfra from '@/assets/images/project/peekcart/diagram-infra.png';
import diagramDecomposition from '@/assets/images/project/peekcart/diagram-decomposition.svg';
import diagramGatewayAuth from '@/assets/images/project/peekcart/diagram-gateway-auth.svg';
import diagramSaga from '@/assets/images/project/peekcart/diagram-saga.svg';

const peekcartImages: Record<string, string> = {
  diagram_evolution: diagramEvolution,
  diagram_lock: diagramLock,
  diagram_event: diagramEvent,
  diagram_architecture: diagramArchitecture,
  diagram_harness: diagramHarness,
  diagram_infra: diagramInfra,
  diagram_decomposition: diagramDecomposition,
  diagram_gateway_auth: diagramGatewayAuth,
  diagram_saga: diagramSaga,
};

const peekcartMarkdown = `## 프로젝트 개요

**PeekCart**는 대용량 트래픽을 가정한 이커머스 백엔드 플랫폼이다. 단순 CRUD를 넘어 **성능·정합성·안정성·운영**을 검증 대상으로 삼았고, **모놀리식으로 구현한 뒤 5개 서비스로 실제 분해하는 단계(Phase 4)까지** 진행했다.

### 핵심 성과

- **모놀리스를 5개 서비스로 분해했다.** Order↔Product · Order↔Payment의 production 동기 결합이 0이 된 뒤에 모듈을 뗐고, 마지막 peel에서 루트 앱이 해체됐다 — 순서가 반대였다면 Product는 단독으로 뜨지도 못한다
- **1,000 VUser 동시 주문에서 재고 정합성 OK · 오버셀링 0건.** 이중 방어 중 실제로 막은 것은 낙관적 락이었고, 분산 락이 주문 경로에서 무력화돼 있다는 사실도 이 측정에서 드러났다 (처리량 합격선은 미달 — 1·3장에 그대로 기록)
- **상품 조회 TPS ×2.31 개선.** Redis Cache-Aside 적용 전후 비교 (265.0 → 612.7, GKE 실측)
- **이벤트 유실·중복 소비 대응.** Transactional Outbox + 멱등성(\`processed_events\`) + DLQ, 그 위에 미결 실패를 상태로 남기는 DLQ 원장과 replay 계약
- **평문 헤더 신뢰를 폐기했다.** Gateway가 서명한 내부 토큰만 인증 근거가 되도록 격상해, NetworkPolicy 단일 통제를 defense-in-depth로 바꿨다
- **"초록"을 믿지 않는 절차가 게이트에 붙었다.** 검증 도구 자체가 조용히 통과하던 사례가 반복해서 나왔고, 이후 게이트마다 **변이 검사**(고친 것을 일부러 되돌려 빨개지는지 확인)가 붙었다
- **CI 벽시계 51m44s → 30m23s (−41%).** 테스트 단계 33m20s → 11m23s. 추가 재분할은 실측 근거로 **기각**됐고 그 판단이 기록으로 남아 있다

### 개발 동기

"이커머스 CRUD"는 많지만, 트래픽이 몰릴 때 무엇이 먼저 깨지는지, 그걸 어떤 순서로 막아야 하는지를 직접 겪어보고 싶었다. 그래서 처음부터 MSA로 가지 않고 **모놀리식으로 시작한 뒤, 동시성·이벤트 유실·중복 소비 같은 문제를 실제로 마주칠 때마다 그에 맞는 패턴을 도입**하는 방식으로 진행했다.

핵심 원칙은 "무엇을 만들었는가"가 아니라 **왜 그 방식으로 만들었는가**다. 모든 기술 도입을 \`문제 → 대안 비교 → 선택 근거 → 한계\`로 기록하고, 주요 결정은 ADR(Architecture Decision Record) 21건으로 남겼다. 측정 결과는 목표에 미달하더라도 그대로 기록했다.

현재 Phase 1\\~3(모놀리식 구현 · 성능/정합성 보강 · 인프라/관측성/부하 검증)을 마쳤고, **Phase 4(MSA 분리)의 구현 ①\\~⑥(멀티모듈 분해 · DB-per-service · Gateway · Saga · CQRS 로컬 캐시 · 커서 페이지네이션)을 끝낸 뒤 DLQ replay 계약을 구현하는 중**이다.

| 항목 | 내용 |
| --- | --- |
| 개발 기간 | 2026.03 \\~ 진행 중 (Phase 1\\~3 완료 · Phase 4 구현 ①\\~⑥ 완료) |
| 개발 인원 | 1인 (설계 · 구현 · 인프라 · 부하 검증 전 과정) |
| 커밋 | 785개 (main 기준, 2026-03-21 \\~ 2026-09-06) |
| 코드 규모 | Java 25,645줄 (413파일) / 테스트 25,534줄 (169파일) |
| 최근 빌드 | 10모듈 **1,006 테스트 0 실패** · CI lint 15종 |
| 데이터/문서 | 서비스별 Flyway 마이그레이션 34개, ADR 21건 |
| 진행 단계 | Phase 4 구현 ①\\~⑥ 완료 · ④-c-2b(DLQ replay) 진행 중 |

### 기술 스택

| 영역 | 스택 |
| --- | --- |
| Language / Framework | Java 17, Spring Boot 3.5, Spring Cloud Gateway (WebFlux) |
| Data | MySQL 8 (DB-per-service), Redis 7 (Redisson), Flyway |
| Messaging | Apache Kafka (Transactional Outbox, DLQ, Choreography Saga) |
| Auth | Spring Security, JWT RS256 + JWKS, Gateway 서명 내부 토큰 |
| Infra | Docker, Kubernetes (Kustomize · NetworkPolicy), GKE, GitHub Actions |
| Observability | Prometheus, Grafana, Micrometer, kube-prometheus-stack |
| Test / Load | JUnit 5, Testcontainers, 크로스서비스 E2E 하네스, nGrinder, k6 |

### 진화 전략: 왜 모놀리식에서 시작했나

분산 시스템의 복잡도는 **그것이 필요한 문제를 먼저 겪은 뒤** 도입해야 설명할 수 있다고 봤다. Phase별로 "이번 단계에서 해결할 문제"를 분명히 두고 진행했다.

![PeekCart Phase 1\\~4 진화 흐름]({{diagram_evolution}})

---

## 1. 문제와 해결: 1,000명이 같은 상품을 동시에 주문하면

### 문제 (As-Is)

재고가 100개인 상품에 동시 주문이 몰리면, 재고 확인과 차감 사이의 틈에서 여러 트랜잭션이 같은 재고를 읽고 각자 차감해 **오버셀링**이 발생한다. Serializable이나 \`SELECT FOR UPDATE\`로 막을 수는 있지만, 락 경합과 DB 커넥션 점유를 주문 경로에 집중시키고 싶지 않았다.

### 해결 (To-Be)

평상시엔 **Redis 분산 락(Redisson)으로 동시 요청을 직렬화**한다. 락을 못 잡으면(경합) 대기 없이 즉시 409로 응답한다. 그리고 **Redis 자체가 장애일 땐 락 없이 트랜잭션을 진행하되, DB 낙관적 락(\`@Version\`)이 최후 방어선**으로 동시 차감을 막는다. '경합 차단'과 '장애 시 정합성 보장'은 서로 다른 경로다.

![재고 동시성: 분산 락과 낙관적 락 흐름]({{diagram_lock}})

### 기술적 고민과 결정

**1) 락 범위는 트랜잭션 범위를 감싸야 한다**

흔한 실수는 트랜잭션이 끝나기 전에 락을 푸는 것이다. 커밋 전에 락을 해제하면, 아직 커밋되지 않은 재고를 다른 스레드가 읽어 다시 오버셀링이 난다. 그래서 **락 획득 → 트랜잭션 시작 → 커밋 → 락 해제** 순서를 강제하려고 락 관리(Facade)와 트랜잭션 로직(Service)을 분리했다.

**그런데 이 순서가 실제 주문 경로에서는 지켜지지 않았다.** \`OrderCommandService\`에 클래스 단위 \`@Transactional\`이 걸려 있어 재고 차감이 바깥 트랜잭션에 \`REQUIRED\`로 합류했고, 그 결과 락 해제가 커밋보다 먼저 일어나 분산 락의 직렬화 효과가 사라져 있었다. Facade 단위 테스트는 통과하는데 프로덕션 경로의 락 순서는 달랐던 셈이다. 세션 C에서 오버셀링 0건을 실제로 지킨 것은 1차 방어인 분산 락이 아니라 최후 방어선 \`@Version\`이었고, 이 사실은 부하 테스트를 돌리지 않았으면 드러나지 않았다. 락 순서 교정은 후속 과제로 분리했다.

**2) 분산 락만 있으면 낙관적 락은 불필요한가**

분산 락이 정상 동작하는 한 충돌은 나지 않는다. 문제는 **Redis가 장애일 때**다. 이 경우 락 획득 로직은 예외를 삼키고 *락 없이 진행*하도록 했다(\`DistributedLockManager\`). 그러면 동시 요청이 모두 DB로 몰리는데, 이때 \`@Version\` 낙관적 락이 version 충돌로 한 트랜잭션만 통과시켜 오버셀링을 막는다. 정리하면 **획득 실패(경합) → 409**와 **Redis 장애 → 락 없이 진행 + 버전 충돌 방어**는 서로 다른 경로이고, 두 락은 중복이 아니라 다른 실패 모드를 막는다.

**3) "조건부 UPDATE 한 방"이면 분산 락이 필요 없을까 (재검토)**

\`UPDATE inventory SET stock = stock - :qty WHERE id = :id AND stock >= :qty\` 한 줄이면 단일 행 차감은 원자적으로 처리된다. 단일 상품 차감만 보면 분산 락은 과방어일 수 있다. 다만 "재고 확인 + 차감 + 다른 도메인 작업"을 묶어야 하거나 락 획득 실패를 빠르게 사용자에게 알려야 하는 경우엔 분산 락의 의미가 살아난다. 이 선택 기준 자체를 ADR과 블로그(학습 기록 19)로 정리했다.

| 항목 | 비관적 락 (SELECT FOR UPDATE) | 채택: 분산 락 + 낙관적 락 |
| --- | --- | --- |
| 동시 요청 처리 | DB 커넥션 점유, 대기 누적 | Redis에서 직렬화(설계), 실패 시 즉시 409 |
| DB 부하 | 락 경합이 DB로 집중 | DB는 차감 트랜잭션만 |
| 장애 대응 | DB 단일 의존 | Redis 장애 시 락 없이 진행, \`@Version\`이 최후 방어 |
| 검증 | 미검증 | 1,000 VUser 동시 주문 **오버셀링 0건** — 실측상 방어한 것은 \`@Version\` (처리량은 합격선 미달) |

**4) Phase 4에서 이 문제가 다시 열렸다**

서비스를 가르자 재고는 Product, 주문 상태는 Order, 승인은 Payment가 각각 자기 DB에서 들고 있게 된다. 한 프로세스의 락으로는 덮을 수 없는 구조라, 재고 차감을 **예약 원장 + lease(만료 시각)** 계약으로 바꾸고 주문 상태 전이에 \`@Version\`을 넣었다. 9장에 이어서 적었다.

> 관련 글: 학습 기록 9 (오버셀링 이중 방어), 학습 기록 19 (조건부 UPDATE vs 분산 락), 학습 기록 3 (상품/재고 분리)

---

## 2. 문제와 해결: DB는 커밋됐는데 이벤트가 사라진다면

### 문제 (As-Is)

주문이 생기면 결제·알림 도메인에 알려야 한다. Phase 1에서는 \`@TransactionalEventListener(AFTER_COMMIT)\`로 처리했는데, **이벤트 핸들러는 커밋 이후에 실행되므로 거기서 예외가 나도 이미 커밋된 주문은 롤백되지 않는다.** 더 큰 문제는 Phase 2에서 Kafka로 넘어갈 때다. "DB 커밋 성공 → Kafka 발행 실패"가 발생하면 이벤트가 영구 유실되어 도메인 간 상태가 어긋난다.

### 해결 (To-Be)

비즈니스 데이터와 이벤트를 **하나의 트랜잭션으로 Outbox 테이블에 함께 저장**하고, 폴링 스케줄러가 Outbox를 읽어 Kafka로 발행한다. 발행 실패는 \`retry_count\`로 재시도하고, 한계를 넘으면 \`FAILED\` + Slack 알림으로 격리한다. Consumer 쪽은 멱등성과 DLQ로 중복·실패를 흡수한다.

![이벤트 파이프라인: Outbox · 멱등성 · DLQ]({{diagram_event}})

### 기술적 고민과 결정

**1) Outbox 발행: Polling vs Debezium CDC**

Outbox를 Kafka로 내보내는 방법은 두 가지다. Debezium CDC는 MySQL binlog를 실시간으로 읽어 지연이 거의 없지만 Kafka Connect 클러스터라는 추가 인프라를 운영해야 한다. 포트폴리오 범위에서는 추가 인프라 없이 Spring Scheduler로 구현 가능한 **폴링 방식**이 적정 트레이드오프라고 판단했고, 추후 CDC로 교체 가능한 구조로 분리해 두었다.

**2) 중복 소비를 어떻게 막을 것인가**

Kafka는 at-least-once 전달이라 같은 이벤트가 두 번 올 수 있다. 그대로 처리하면 재고가 두 번 복구되거나 알림이 두 번 간다. \`processed_events\` 테이블에 \`(event_id, consumer_group)\` 복합 UK를 두고, **처리 전에 먼저 INSERT로 선점**한다. UK 충돌이 나면 이미 처리된(또는 동시에 처리 중인) 이벤트로 보고 건너뛴다. \`event_id\`는 Outbox 생성 시 UUID로 부여한다.

핵심은 이 **선점 INSERT가 비즈니스 로직과 같은 트랜잭션**이라는 점이다(\`IdempotencyChecker\`가 호출자의 \`@Transactional\`에 참여). 처리 중 예외가 나면 \`processed_events\` 행도 함께 롤백되므로, 다음 재시도에서 정상적으로 다시 처리된다. '선점만 되고 처리는 실패해 영영 건너뛰는' 구멍이 없다.

**3) Producer 실패와 Consumer 실패는 별개다**

발행 자체가 실패하는 것(Outbox \`FAILED\`)과, 발행은 됐지만 소비 처리가 실패하는 것(DLQ)은 원인도 대응도 다르다. 둘을 같은 메커니즘으로 뭉뚱그리지 않고 분리했다. Consumer는 3회 재시도(1s · 5s · 30s) 후에도 실패하면 \`{원본 토픽}.dlq\`로 격리하고 Slack으로 알린다.

| 단계 | Phase 1 | Phase 2 이후 |
| --- | --- | --- |
| 도메인 간 전달 | \`@TransactionalEventListener\` (로컬) | Kafka 이벤트 |
| 발행 보장 | 없음 (커밋 후 유실 가능) | Outbox 단일 트랜잭션 |
| 중복 방어 | 없음 | processed_events 복합 UK |
| 처리 실패 | 로깅 + 수동 | DLQ + Slack 알림 |

**4) "격리했다"는 끝이 아니다 (Phase 4 확장)**

DLQ로 보내는 것까지는 유실을 막지만, 격리된 실패가 **어디에 있는지**를 상태로 들고 있지 않으면 아무도 다시 처리할 수 없다. Slack 알림은 사건을 알릴 뿐 재처리의 입력이 되지 못한다. 그래서 Phase 4에서 실패 레코드의 물리 좌표(토픽·파티션·오프셋)를 남기는 **DLQ 원장**을 넣고, 그 위에 재발행 계약(ADR-0020·0021)을 설계했다. 9장에서 다룬다.

> 관련 글: 학습 기록 10 (Transactional Outbox), 학습 기록 11 (멱등성 + DLQ), 학습 기록 5 (결제 실패 흐름), 학습 기록 6 (알림 실패 격리)

---

## 3. 문제와 해결: "성능을 개선했다"를 어떻게 증명하나

### 문제 (As-Is)

"캐시를 넣어서 빨라졌다", "동시성 문제를 막았다"는 말은 수치 없이는 신뢰하기 어렵다. 실제 부하 환경에서 무엇이 병목이고, 개선이 얼마나 됐는지를 **측정**해야 했다.

### 해결 (To-Be)

GKE(e2-standard-4) 환경에 배포하고 nGrinder·k6로 시나리오를 나눠 실측했다. 캐시 효과, 동시 주문 정합성, HPA 자동 확장, Kafka Lag을 각각 분리해 측정했다.

| 시나리오 | 결과 |
| --- | --- |
| **Redis 캐싱 (상품 조회, 50 VUser)** | TPS **265.0 → 612.7 (×2.31)**, 평균 응답 188ms → 82ms (−56.5%), 에러 0 |
| **1,000 VUser 동시 주문** | **오버셀링 0건**, 재고 정합성 OK / 실패율 35.9%로 합격선(<10%) 미달, 커밋된 주문 110건 |
| **HPA 자동 확장** | CPU saturation 시 Pod **1 → 3 자동 scale-out** (신규 Pod 65초 내 Ready) |
| **Kafka Consumer Lag** | steady-state **0 유지**, peak 후 신속 복귀 |

> 테스트 조건: GKE \`e2-standard-4\` ×1 노드, peekcart Pod req 500m/1Gi·lim 2000m/2Gi, MySQL·Redis·Kafka 동일 클러스터. 캐시 시나리오 50 VUser·5분(nGrinder), 동시 주문 1,000 VUser 30s ramp-up + 1m hold(k6), 합격선 \`http_req_failed < 0.1\`.
>
> **측정 시점은 Phase 3(모놀리식 단일 Pod)이다.** 서비스 분리 후의 격리 재측정은 부채 D-002로 여전히 추적 중이며, 아래 수치는 분해 이전 형상의 것이다.

### 기술적 고민과 결정

**1) 캐시에 재고를 넣지 않은 이유**

상품명·가격 같은 정보는 캐시(Cache-Aside)에 적합하지만, **재고는 캐시에 넣지 않았다.** 재고는 주문마다 바뀌는 강한 정합성 대상이라, 캐시에 두면 무효화 타이밍에 오버셀링 리스크가 생긴다. "자주 읽고 드물게 바뀌는 것"만 캐싱하고 재고는 DB+락으로 다뤘다.

**2) 목표 미달도 측정 결과다 (×2.31, 목표 ×3)**

캐싱 개선 목표는 3배였지만 실측은 2.31배였다. 이를 그대로 기록하고 원인을 분석했다. 캐시 ON 상태에서도 Pod CPU 피크가 **1.75 코어**(limit 2 코어의 88%)까지 올라 **CPU가 병목**이었고, 단일 Pod 환경의 한계가 드러났다. 이 데이터가 다음 시나리오(동시 주문 + HPA)의 근거가 됐다.

**3) 정합성과 처리량을 분리해서 본다**

1,000 VUser 동시 주문에서 인프라 한계로 처리량 임계값(실패율 Run 1 60.59% · Run 2 35.90%, 합격선 <10%)은 미달했지만, **오버셀링 0건 · 재고 정합성 OK**는 달성했다. 이번 실험에서는 처리량과 정합성을 분리해 해석했다. 처리량 미달은 노드·Pod 증설 여지가 있는 반면, 오버셀링 0건은 이중 방어 중 최후 방어선이 실제로 작동한 결과다. HPA는 CPU 400%(request 대비) saturation에서 Pod를 1→3으로 늘렸고, scale-out 직후 90%, 부하 종료 후 15%로 내려갔다. replica 3을 미리 띄운 Run 2에서는 커밋된 주문이 25 → 110건(×4.4)으로 늘어, **scale-out이 되는 것과 그 반응 공백이 없는 것은 별개**임을 대조로 확인했다.

다만 **이 실험의 검증 범위는 분명히 해둔다.** 경합 상품 10개 × 재고 100(총 1,000개)에 대해 커밋까지 도달한 주문은 Run 1 25건 · Run 2 110건이라, 재고가 소진되는 지점까지 경합이 몰리지는 않았다. 오버셀링 0건은 "락이 재고 고갈 경계를 지켜냈다"는 증명이 아니라 "정합성이 깨질 조건에서도 깨지지 않았다"는 1차 확인에 가깝다. 2차 병목은 실패 로그 분포(\`EOF\` 519건 · \`connection refused\` 173건 · \`dial timeout\` 130건)를 근거로 **DB 커넥션 풀·락 경합**과 **Pod readiness 손실** 두 갈래로 좁혔지만, 둘을 분리하려면 HikariCP 대기 시간과 readiness 전이를 함께 수집해야 해서 이번 세션에서는 단정하지 않았다. 인프라를 보강해 재고 고갈 경계까지 밀어붙이는 재측정과 함께 후속 과제로 남겼다.

**4) 산출물이 유실된 쪽은 근거로 쓰지 않는다**

Run 1의 \`k6-summary.json\`·\`stdout\` 은 Run 2 직전 백업 단계에서 디렉토리 미생성으로 유실됐다. 그래서 임계값 판정의 1차 근거는 파일이 보존된 **Run 2**로 두고, Run 1 수치는 채팅 전사 기준의 보조 증거로만 쓴다고 리포트에 명시했다. 정합성·HPA 타임라인은 별도 산출물(\`verify-concurrency.txt\`, \`kubectl get hpa -w\` 로그, Grafana 스크린샷)로 검증 가능하다.

> 관련 글: 학습 기록 8 (Cache-Aside), 학습 기록 16 (캐시 효과 측정), 학습 기록 17 (1,000 동시 주문 · HPA · Kafka Lag)

---

## 4. 시스템 아키텍처: 4-Layered + DDD, 그리고 5개 서비스

도메인별로 Presentation / Application / Domain / Infrastructure 4개 레이어를 분리하고, 의존 방향을 단방향(Presentation → Application → Domain ← Infrastructure)으로 강제했다. 비즈니스 로직은 Service가 아닌 **Entity / Domain Service에 응집**시켰다.

![4-Layered + DDD 아키텍처]({{diagram_architecture}})

JPA는 실용적으로 절충했다. 도메인 엔티티에 \`@Entity\` 등 매핑 어노테이션은 허용하되, 비즈니스 로직이 \`EntityManager\` 같은 JPA API에 직접 의존하지 않도록 막았다. 엔티티-도메인 분리에 따르는 매핑 보일러플레이트를 피하면서 도메인 순수성과 생산성을 함께 확보하기 위한 선택이다.

Phase 4에서 이 5개 도메인이 그대로 5개 서비스가 됐고, **레이어 규칙은 서비스 안에서 그대로 유지**된다. 도메인 경계를 먼저 잡아둔 것이 분해의 실제 이득이었다.

| Gradle 모듈 | 성격 | 메인 코드 |
| --- | --- | --- |
| \`order-service\` | 주문·장바구니 (사가 오케스트레이션의 시작점) | 5,510줄 / 89파일 |
| \`payment-service\` | 결제 승인·환불 실행 | 5,581줄 / 77파일 |
| \`product-service\` | 상품·재고 예약 원장 | 5,436줄 / 82파일 |
| \`notification-service\` | 알림 | 3,201줄 / 44파일 |
| \`user-service\` | 인증·토큰 발급 (RS256 서명 owner) | 1,227줄 / 32파일 |
| \`gateway\` | Spring Cloud Gateway (WebFlux) — 인프라 게이트웨이 | 1,192줄 / 14파일 |
| \`common\` · \`peekcart-common-auth\` · \`peekcart-common-observability\` · \`internal-token-contract\` | 공유 계약 | 3,498줄 / 75파일 |

---

## 5. 인프라 · 배포 구성

GCP/GKE 단일 노드(e2-standard-4) 위에 앱과 백킹 서비스(MySQL · Redis · Kafka), 관측성 스택을 namespace로 분리해 배포했다. 부하 테스트는 같은 VPC의 loadgen VM에서 Internal LoadBalancer로 트래픽을 보내고, k6 메트릭은 Prometheus remote-write로 수집한다.

![PeekCart 인프라 · 배포 구성]({{diagram_infra}})

- **배포**: Kustomize base/overlays(minikube · GKE), HPA 1→3(CPU 60%), Liveness/Readiness/Startup Probe로 무중단 운영
- **관측성**: ServiceMonitor가 \`/actuator/prometheus\`를 15초 주기로 스크레이프 → Prometheus(24h) → Grafana, 임계치 초과 시 Slack 알림
- **이미지 파이프라인**: GitHub Actions CI가 GHCR로 발행하고, GKE 부하 테스트용으로 Artifact Registry에 복사해 pull
- **외부 연동**: Toss Payments(결제) · Slack(알림) egress

> 위 그림은 **Phase 3 측정 환경**(단일 peekcart Deployment)이다. Phase 4에서 이 표면을 5서비스 per-service로 재구성했다 — 서비스별 Dockerfile과 CI 이미지 매트릭스, base/overlays의 Deployment·Service·ServiceMonitor 분리, 5서비스 ClusterIP 환원 + NetworkPolicy(gateway 경유 강제), 관측성 계약의 per-service 재설계(ADR-0015). 매니페스트는 62개이고, 이름·라벨·노출 계약의 드리프트는 lint로 잡는다.

---

## 6. Phase 4 ①: 모놀리스를 5개로 가르기 — 동기 결합을 먼저 끊었다

### 문제 (As-Is)

도메인 경계가 잡혀 있으니 모듈만 나누면 된다고 보기 쉽지만, 실제로 나누면 **Product 모듈이 단독으로 뜨지 않는다.** Order가 \`ProductPort\`라는 동기 빈을 들고 있어서, Product를 떼면 Order가 부팅에 실패한다. 컴파일이 되는 것과 서비스가 독립적으로 뜨는 것은 다른 문제다.

### 해결 (To-Be)

**순서를 뒤집는다 — 떼기 전에 결합을 먼저 없앤다.**

1. 의존이 없는 \`notification\` → \`user\`를 먼저 peel한다 (독립 서비스)
2. Order·Product·Payment는 하나의 **사가 클러스터**로 묶어, 모듈을 나누기 전에 동기 호출 seam을 이벤트/로컬 캐시로 교체한다
3. seam이 0이 된 뒤에 모듈을 떼고, 마지막 peel에서 **루트 앱을 해체**한다

seam 제거는 다섯 단계로 나뉜다.

![모놀리스 분해: 동기 결합 제거 후 peel]({{diagram_decomposition}})

| 단계 | 없앤 결합 | 대체 방식 |
| --- | --- | --- |
| strangler-1 | 재고 차감 직접 호출 | 예약 원장 상태머신 + 이벤트(all-or-nothing, CAS 복구) |
| strangler-2 | \`getUnitPrice\` 동기 조회 | \`product.updated\` 발행 + Order 로컬 단가 캐시(원자 upsert·stale-skip) |
| strangler-3 | 결제 시점 재고 확정 | 2-phase 예약 확정/보상 + 결제 게이트 |
| strangler-4 | \`verifyProductExists\` 동기 조회 | 로컬 캐시 조회 + 미스 시 명시적 에러 코드 |
| strangler-5 | Order↔Payment 상호 호출 | \`payment.requested\` 이벤트 + payment-로컬 소유자 검증 |

### 기술적 고민과 결정

**1) 로컬 캐시는 "캐시"가 아니라 복제본이다**

단가를 Order가 들고 있으면 조회는 빨라지지만 **오래된 값으로 주문이 만들어질 수 있다.** 그래서 \`product.updated\` payload에 \`@Version\`을 순서 키로 실어, 늦게 도착한 낮은 버전은 스킵하는 원자 upsert로 갱신한다. 순서 보장이 없는 채널에서 복제본을 유지하려면 **키가 아니라 버전으로 정렬**해야 한다.

**2) 캐시 미스는 조용히 넘어가면 안 된다**

\`verifyProductExists\`를 로컬 캐시로 바꾸면 "상품이 없다"와 "아직 복제되지 않았다"가 같은 모양이 된다. 둘을 같은 응답으로 처리하면 신규 상품 주문이 조용히 실패한다. 미스에는 별도 에러 코드(\`ORD-009\`)가 부여되고, order 모듈이 product의 소스를 참조하지 못하게 하는 가드가 빌드에 걸려 있다.

**3) 분리의 성공 판정은 "모듈이 나뉘었다"가 아니다**

판정 기준은 **production 코드의 서비스 간 동기 호출 수**다. strangler-4 시점에 Order↔Product가 0이 됐고, strangler-5로 Order↔Payment가 0이 됐다. 그 상태에서 peel은 기계적인 작업이 된다.

**4) 모듈이 늘면 암묵 규약도 는다**

서비스 모듈을 하나 추가할 때마다 Dockerfile의 의존성 워밍 레이어와 CI 이미지 매트릭스도 함께 고쳐야 한다. 사람이 기억해야 할 규약으로 남기지 않도록, Gradle 서브프로젝트 목록과 Dockerfile/CI 참조 목록을 **양방향으로 대조**하는 lint(\`dockerfile-module-sync-lint\`, \`image-contract-lint\`)가 루트 \`check\`에 걸려 있다. 누락과 제거된 모듈의 잔존을 모두 잡는다.

---

## 7. Phase 4 ②: DB-per-service — 교차 FK부터 끊는다

### 문제 (As-Is)

모듈은 나뉘었지만 5개 서비스가 한 스키마를 공유하고 있었다. 그 상태에서는 **교차 도메인 FK가 물리적으로 분리를 막는다.** \`orders.user_id\`가 \`users\`를 FK로 참조하면, 스키마를 가르는 순간 제약이 깨진다.

### 해결 (To-Be)

세 단계로 나뉜다.

1. **교차 도메인 FK 6개 드롭** (\`fk_carts_user\` · \`fk_cart_items_product\` · \`fk_orders_user\` · \`fk_order_items_product\` · \`fk_payments_order\` · \`fk_notifications_user\`). 컬럼은 남기고 **ID 참조**로 바꾼다 — 참조 무결성은 DB가 아니라 사가가 책임진다
2. **물리 스키마 분리** — 1 인스턴스 + 5 스키마/계정, Flyway를 서비스별로 소유(order 10 · product 8 · payment 8 · notification 6 · user 2)
3. **retention/cleanup 스케줄러** — outbox·processed_events가 무한히 자라지 않게 보존 기간을 정의한다

### 기술적 고민과 결정

**1) 보존 기간은 성능 정책이 아니라 정합성 정책이다**

\`processed_events\`를 지우면 그 시점 이후로는 **같은 이벤트가 다시 와도 중복으로 판정되지 않는다.** 즉 보존 기간은 곧 **멱등성 창의 상한**이다. 디스크를 아끼려고 짧게 잡으면 중복 방어가 그만큼 짧아진다. 이 결정은 부채(L-008/011)로 남아 있다가 이 단계에서 명시적으로 닫혔다.

**2) 소유 경계는 검사로 고정한다**

스키마를 갈라도 코드가 남의 테이블을 매핑하면 원상복구된다. 5개 서비스가 자기 테이블만 매핑하는지는 검증으로 고정돼 있다.

**3) 인스턴스 물리 분리는 하지 않았다**

분리는 1 인스턴스 5 스키마까지다. 인스턴스를 가르는 것은 **접속 URL 교체로 가역**이고, 지금 나눠도 얻는 것이 격리뿐인데 단일 노드 클러스터에서는 그 격리가 실현되지 않는다. 가역적인 것은 뒤로 미룬다는 기준이 적용됐다.

---

## 8. Phase 4 ③: 평문 헤더 신뢰를 폐기하기까지

### 문제 (As-Is)

서비스가 5개가 되면 5곳이 각자 JWT를 검증한다. 검증 로직이 복제되고, 키 회전이 5배로 번진다. Gateway를 두고 한 번만 검증하는 것이 정석이지만, 그러면 **Gateway가 "이 요청은 누구다"를 어떻게 뒤에 전달하는가**가 새 문제가 된다.

### 해결 (To-Be)

신뢰의 근거는 세 단계로 격상됐다.

| 단계 | 인증 근거 | 신뢰의 전제 |
| --- | --- | --- |
| PR1\\~PR2 | 서비스별 JWT 검증 (HS256 → **RS256 + JWKS** dual-validation, Refresh Token Reuse Detection) | 대칭키 공유 폐기 |
| PR3c | Gateway가 검증 후 주입한 평문 \`X-User-*\` 헤더 | **NetworkPolicy 단독** — 5서비스 ClusterIP 환원 + gateway 경유 강제 |
| PR3d | Gateway 개인키로 서명한 \`X-Internal-Auth\` (ADR-0017) | **defense-in-depth** — NetworkPolicy AND 서명 |

![인증 신뢰 경계의 3단계 격상]({{diagram_gateway_auth}})

### 기술적 고민과 결정

**1) 평문 header-trust는 "단일 통제"였다**

평문 헤더를 믿는 구조는 NetworkPolicy 하나가 뚫리면 **인증이 통째로 무력화**된다. 통제가 하나뿐이면 그것은 방어가 아니라 가정이다. 그래서 마지막 단계의 정의가 "평문 header-trust 굳히기"에서 "서명 내부 토큰으로 격상"으로 바뀌었고, 그 결정이 ADR-0017이다.

**2) 이름이 두 군데 있으면 그게 곧 드리프트다**

Gateway는 WebFlux, 검증 측(\`peekcart-common-auth\`)은 Servlet이라 **서로를 의존할 수 없다.** 양쪽에 issuer·claim·헤더 이름을 각각 적으면 언젠가 어긋난다. 그래서 이름은 프레임워크 의존이 0인 \`internal-token-contract\` 모듈에 한 번만 정의된다. 루트 가드에는 예외가 한 건 열려 있지만, **그 계약 모듈이 프로젝트/Spring 의존을 갖는 것을 금지하는 검사**가 함께 걸려 있어 예외가 우회로가 되지 않는다.

**3) 키를 나누는 기준은 kid가 아니라 지문이다**

사용자 토큰 검증용 공개키 레지스트리에 Gateway 공개키를 함께 넣으면, \`JwkController\`가 레지스트리를 통째로 JWKS로 게시하면서 **내부 신뢰 앵커가 외부에 노출**된다. 두 키 도메인이 섞이지 않게 강제하되, 기준을 kid로 두면 같은 키를 다른 kid로 등록하는 우회가 열린다. 그래서 강제는 **SPKI DER SHA-256 fingerprint 집합이 서로소인지**로 한다(lint + 5서비스 통합 테스트 이중).

**4) 두 모듈을 잇는 테스트가 불가능할 때**

발행(gateway)과 검증(common-auth)은 같은 테스트에 올릴 수 없다. 대신 공유 fixture의 **커밋된 계약 토큰**을 양쪽이 각각 고정한다. 한쪽만 바뀌면 반대편이 깨진다.

**5) 실패는 닫히는 쪽으로**

키 로딩 실패·빈 키셋·키 도메인 범위 위반은 **부팅을 거부**한다. 부팅 시 필터 구성을 검사하는 불변식(\`InternalTokenModeInvariant\`)이 있어, 사용자 verifier가 부활하거나 체인이 0개인 상태로는 뜨지 못한다.

**검증**: 10모듈 그린 · 서명 지연 p95 RSA-2048 **1.80ms** / RSA-3072 **3.00ms**(예산 10/25ms를 측정 전에 확정). 다만 **부하 하 event-loop lag은 미측정**이고 GKE 실클러스터 적용은 별도 세션 소관으로 남아 있다 — 렌더 성공은 배포 가능으로 기록하지 않는다.

---

## 9. Phase 4 ④: 이미 도는 사가의 "미결 종료"를 닫기

### 문제 (As-Is)

착수 전 코드 확인에서 계획서가 틀렸다는 것이 드러났다. ADR이 이 단계의 산출물로 규정한 4개 중 2개(예약/확정/복구 consumer, \`stock.reservation.result\`)는 **6장의 strangler 작업에서 이미 만들어져 있었다.** 실질 잔여는 "사가를 만드는 것"이 아니라 **이미 도는 사가가 남기는 미결 종료 상태를 닫는 것**이었고, 범위는 그렇게 재확정됐다.

### 해결 (To-Be)

- **lease 계약**: 재고 예약의 만료 시각을 Product가 부여해 사가 참여자가 공유한다. Order가 먼저 취소하고, Payment는 만료된 lease의 승인을 거부하고, sweeper는 만료+유예 뒤에만 회수한다
- **\`@Version\` + 수렴 규칙**: 주문 상태 전이에 낙관 락을 넣고, 진 쪽의 처리를 명시한다
- **보상 원장**: 취소된 주문에 결제 완료가 도착하는 것 같은 미결 상태를 소비 트랜잭션과 같은 트랜잭션에서 원장에 남긴다
- **환불 계약(ADR-0018)**: 감지 3지점 → Payment 단일 실행자 → 회신으로 원장 종결
- **DLQ 원장 + replay 계약(ADR-0020·0021)**: 격리된 실패의 물리 좌표를 상태로 남기고 재발행 축을 정의한다

![사가의 정상 경로와 미결 종료를 닫는 장치]({{diagram_saga}})

### 기술적 고민과 결정

**1) 고정 TTL sweeper가 폐기된 이유**

초안은 "예약 후 30분"을 Product가 혼자 판정해 회수하는 것이었다. 그런데 Order의 만료 조회 두 개가 **"예약은 확정됐으나 결제를 시작하지 않은" 구간**을 아무도 잡지 않는다. 그 구간의 재고를 sweeper가 회수하면 **살아 있는 주문의 재고를 뺏는 오버셀링**이 된다. 만료 시각을 참여자가 공유하는 lease로 바꾼 이유다. 정상 경로에서 **sweeper 회수 건수는 0이어야 정상**이며, 0이 아니면 그 자체가 알림 대상이다.

**2) 승격 조건이 "실측"이었다**

주문 상태 전이 동시성(\`Order @Version\` 부재)은 보류 항목이었고, 승격 조건이 "실측"이었다. 그래서 \`@Version\`을 먼저 넣는 대신 **재현이 선행됐다.** 두 \`EntityManager\`가 커밋 전 같은 스냅샷을 읽도록 강제한 **결정적** 재현(확률적 재현의 음성은 기각 근거로 쓸 수 없다) 결과 **양방향 lost update**가 나왔다 — 취소 선커밋이면 최종 \`PAYMENT_COMPLETED\`(취소 유실), 결제 선커밋이면 최종 \`CANCELLED\`(과금된 주문이 취소로 표시). 상태 전이 가드는 각 트랜잭션의 *스냅샷* 기준이라 통과하면서 결과가 틀린다. **가드로는 막을 수 없는 종류**였다.

**3) 알림은 종료 상태의 근거가 못 된다**

취소된 주문에 결제 완료가 도착하는 경로는 처음에 Slack 알림 + \`return\`으로 처리돼 있었다. 그런데 order 서비스의 SlackPort는 배포 구성상 **no-op**이고, 소비가 커밋되면 \`processed_events\` 때문에 **같은 이벤트를 다시 소비할 수 없다** — 나중에 만들 환불 구현이 입력을 잃는다. 소비와 같은 트랜잭션에서 원장에 남기는 것으로 교체됐다.

**4) 진입 시점 검사는 fence가 아니다**

여기까지로 오버셀링이 닫혔다고 보기 쉽지만 아니다. 결제 승인은 검사 이후 **같은 트랜잭션 안에서** PG를 호출하고, 그 시점 주문 상태는 아직 이벤트가 Kafka를 통과하기 전이라 검사를 통과한다 → 만료 취소 → 재고 복구 → 다른 주문이 재예약 → 승인 성공. 승인 마진으로 창을 줄였을 뿐이고, 진짜 fence(예약을 승인 전용 상태로 CAS 전이)는 사가 프로토콜 변경이라 별도 과제로 분리돼 있다. **어떤 상태를 진입 시점에 확인하는 것과, 그 상태가 처리 도중 바뀌지 못하게 잠그는 것은 다른 일이다.**

**5) 외부 호출을 소비 트랜잭션 안에서 하지 않는다**

환불도 같은 함정이 있었다. 감지 3지점이 각각 PG를 부르면, **PG 성공 후 롤백 시 fence 행이 사라져 fence 자체가 무효**가 된다. 그래서 진입점은 \`REQUESTED\` 커밋까지만 하고, \`REQUESTED→CLAIMED\` CAS로 claim한 **dispatcher만 PG를 호출**한다. 즉시성을 포기하고 crash 안전성을 얻는 교환이다.

**6) 보장 문구는 달성 가능한 것이어야 한다**

"환불 API 호출 1회"는 로컬 수단으로 **달성 불가능한 조건**이다(호출 후 응답 유실과 호출 실패를 로컬에서 구분할 수 없다). 계약을 **"동일 논리 환불 1건"**으로 바꾸자 crash 매트릭스 세 칸이 전부 "PG 조회로 진실 확정"으로 수렴했고, 그 결과 조회 API가 선택이 아니라 **필수 구성요소**가 됐다.

**7) 종결의 의미는 결과별로 갈린다**

환불이 실패했는데 원장이 \`RESOLVED\`로 닫히면 원장이 거짓이 된다. 실패는 \`REFUND_FAILED\`, 미확정은 전이하지 않고 reconciliation(5분 주기·조회 상한 24h) 후 수동 종결이다. \`ALREADY_CANCELED\` 응답은 **실패로 보지 않는다** — 이전 호출이 성공했는데 응답만 유실됐거나 외부에서 수동 취소된 경우라 이미 목표 상태일 가능성이 높고, 실패로 닫으면 실제로 환불된 결제가 승인 상태로 남는다.

**8) replay 대조 축에서 ADR이 스스로와 충돌하고 있었다**

재실패 상관의 대조 축에 \`outbox_events\` 전속 컬럼이 들어 있었다. 그런데 발행에 성공한 outbox 행은 retention 후 삭제되고 원장은 무기한 남는다 — **재실패가 도착했을 때 그 값을 읽을 행이 이미 없다.** 같은 절이 정확히 그 이유로 "대조의 정본은 원장"이라고 정해 놓고, 목록에는 outbox 컬럼을 남긴 것이다. 축을 빼는 것만으로는 payload를 묶는 값이 사라져 **조작된 메시지가 남의 사건에 자식으로 붙는** 경로가 열려, 절단 전 전문의 SHA-256을 따로 영속하는 것으로 닫혔다.

**9) 쓰기는 엄격하게, 읽기는 관대하게**

replay 헤더는 발행 측에서 **키 집합 정확 일치**를 요구한다(빈 값이 조용히 생략돼 헤더 0\\~3개짜리 replay가 나가는 경로를 막는다). 반대로 판독 측은 값이 이상해도 예외를 던지지 않고 null로 떨어뜨린다 — **조작 가능한 헤더 하나가 DLQ 적재 자체를 막으면 실패 사실이 유실**되기 때문이다. 판독 실패는 "상관하지 않음"이지 "적재하지 않음"이 아니다. 이 비대칭이 의도다.

### 검증

- **크로스서비스 E2E 하네스**: 시나리오 4종(격리 compose · PG stub) **3회 연속 통과** + **음성 대조군 7종**
- CI \`e2e\` 잡에서 전량 통과(잡 소요 15m41s), 로컬에서 162\\~189초로 실패하던 시나리오가 러너에서 14초
- 스케줄러 배선은 **변이 검사**로 실증됐다 — \`@Scheduled\` 한 줄을 지우자 배선 테스트 4건이 실패하고, 원복하니 통과

### 남은 것 (종결 시점에 명시)

fence 미구현(승인↔회수 경합 창이 마진 이내로 남음) · Toss 취소 API 실호출 미검증(승인된 실거래 필요, D-020과 같은 게이트) · replay의 상관·재개방 로직 미구현 · alert 발화 미검증. **"동일 논리 환불 1건"조차 PG 성공과 조회 실패가 겹치는 구간은 사람 손을 요구한다. 계약은 그 구간을 없애는 게 아니라 backlog와 최장 age 게이지로 보이게 만든다.**

---

## 10. 초록을 믿지 않는 법 — 검증 도구가 스스로를 속인 사례들

Phase 4에서 가장 자주 나온 결함은 운영 코드가 아니라 **검증 도구 자체**였다. 전부 "빨개져야 할 때 초록인" 형태다. 같은 형태가 반복된다는 것이 드러난 뒤로는, 게이트마다 **일부러 깨뜨려 빨개지는지 보는 절차**가 붙었다.

| 형태 | 실제 사례 |
| --- | --- |
| **검사 대상이 비면 통과** | 격리 lint가 목록이 비어 있지 않은지만 봐서, 서비스를 통째로 지운 fixture가 exit 0. 위반이 준 게 아니라 검사할 것이 준 것이다 |
| **남의 행이 단언을 만족** | \`processed_events\` 단언이 consumer group만 조회해, 앞 시나리오가 남긴 행으로 통과. 소비자 셋이 전부 no-op이어도 그린 |
| **도구 부재를 격리로 오인** | egress 차단 프로브가 \`python3\`를 쓰는데 이미지에 python3가 없었다. 연결이 막힌 게 아니라 명령이 없어서 실패. **양성 대조군**이 없었으면 영원히 초록이었고, 이후 판정은 종료 코드를 특정한다 |
| **단위 테스트가 트랜잭션을 증명한다고 착각** | \`@InjectMocks\` 객체 직접 호출은 Spring 프록시도 DB 트랜잭션도 없다. \`@Transactional\`을 떼도 통과하는 false-green |
| **스케줄러가 돈다는 사실이 고정되지 않음** | 잡의 로직만 직접 호출로 검증해서, \`@Scheduled\`를 통째로 지워도 전부 통과. 특히 sweeper는 평소 회수가 0이라 배선이 끊겨도 지표에 아무 일이 없다 |
| **루프가 한 번만 돌아 vacuous** | \`while read\` 안에서 \`docker compose exec -T\`가 루프의 stdin을 통째로 삼켜 20종 중 1종만 생성됐고, 같은 버그로 **검증 루프도 1건만 돌아 "대조 실패 0"이 무의미**했다 |
| **glob·목록 하드코딩** | parity lint가 파일 하나만 보게 돼 있어, 새 마이그레이션을 다른 파일에 넣으면 본실행도 self-test도 전부 그린. 파일 단위를 버리고 **최종 스키마를 합성해 대조**하도록 바뀌었다 |

**여기서 나온 규칙 두 가지.**

첫째, **양성 대조군이 없는 음성 결과는 결과가 아니다.** "차단됐다"를 주장하려면 같은 도구로 "차단되지 않은 것"을 먼저 보여야 한다.

둘째, **초록을 신뢰하려면 빨강을 먼저 봐야 한다.** 고쳤던 버그를 일부러 되돌려 해당 케이스가 실패하고 종료 코드가 1이 되는 것을 확인하는 절차가 게이트마다 붙어 있다. 변이 검사가 잡아낸 것 중 상당수는 운영 코드가 아니라 **테스트 쪽의 과잉·부족한 단언**이었다.

같은 절차가 성능 작업에도 적용됐다. 커서 페이지네이션의 실행계획 테스트는 처음에 "비어 있지 않은지"만 봤고, \`examinedRows\`가 트리 전체를 합산해 **스캔 노드가 없어도 통과**했다. 실패를 주입해 검출력을 확인한 뒤에야 수치가 근거로 쓰였다.

---

## 11. CI 51분을 30분으로 (그리고 재분할을 기각한 이유)

### 문제 (As-Is)

서비스가 늘면서 CI의 \`build\` 잡이 **32m23s 직렬**이 됐다. 전체 run은 51m44s였다.

### 해결 (To-Be)

\`build\` 하나가 **lint / test 6-shard / guards / gate**로 분해됐다. shard는 모듈이 아니라 \`@Container\` 선언 분포를 기준으로 나뉘고, \`:module:test\`가 아니라 \`:module:build\`를 돌린다 — \`test\`만 돌리면 \`bootJar\`·\`testFixturesJar\` 검증이 소실된다.

| | 분해 전 | 분해 후 | 변화 |
| --- | --- | --- | --- |
| 전체 run | 51m44s | **30m23s** | **−41%** |
| 테스트 단계 | \`build\` 33m20s | \`test\` 매트릭스 **11m23s** | **−66%** |
| images | 2m35s | 2m39s | +4s (잡음) |
| e2e | 15m37s | 15m28s | −9s (잡음) |

shard별 소요는 **\`@Container\` 선언 수와 단조 증가**했다(platform 1m21s/0개 \\~ order 11m22s/55개). shard 분할 기준을 컨테이너 분포로 잡은 근거가 실측으로 확인된 셈이다.

### 기술적 고민과 결정

**1) 레포 분리는 검토 후 기각됐다**

멀티 레포로 가르면 빨라질 것 같지만, 비용 동인이 **구조가 아니라 컨테이너 165회 기동 × 병렬성 0**이었다. 레포를 나눠도 기동 수는 그대로이고, 공유 모듈 강결합·크로스서비스 lint·단일 스택 e2e가 오히려 비용을 늘린다.

**2) 임계값을 초과했지만 재분할하지 않는다**

서비스 shard의 최대/최소 비가 3.39로 계획이 정한 2.0을 넘었다. 그래도 재분할하지 않고, **그 판단이 근거와 함께 기록**돼 있다 — 임계 경로를 쥔 것은 order-service(11m22s)가 아니라 **e2e(15m28s)**라, order를 반으로 쪼개도 **전체 run은 1초도 줄지 않는다.** 비가 큰 이유도 order가 느려서가 아니라 user/notification이 빨라서다. 재검토 조건(e2e가 빨라져 테스트 단계가 다시 임계 경로가 되면)도 함께 적혀 있다.

**3) 사전 임계값은 완료 조건이 되지 않았다**

계획 초안은 "20분 이하"를 완료 조건으로 걸려 했지만, 모듈별 시간 자료가 없는 상태에서 정한 숫자는 근거가 없다. 대신 완료 조건은 **baseline 대비 임계 경로 단축 + shard별 소요표 기록 + 불균형 시 판단을 문서로 남기기**로 바뀌었다.

> 이 저장소는 public이라 GitHub 러너에 과금이 없다. runner-minutes는 비용이 아니라 **자원·중복 컴파일 지표**로만 읽는다고 증적 문서에 명시돼 있다.

---

## 12. 그 외 핵심 설계 결정

**결제 타임아웃 스케줄러 + ShedLock.** 결제 대기(\`PAYMENT_REQUESTED\`)가 15분을 넘긴 주문을 자동 취소하고 재고를 복구한다. 단일 인스턴스 시절에도 **다중 Pod로 늘어나면 스케줄러가 중복 실행**되므로 ShedLock(MySQL 락 테이블)을 미리 도입해 Phase 3\\~4 전환 비용을 선제거했다. (학습 기록 7, 12)

**JWT 인증, DB와 Redis의 역할 분리.** Refresh Token은 DB에 영속(발급 이력·만료 관리), 로그아웃 블랙리스트는 Redis에 둔다. Token Rotation 시 동시 재발급으로 생기는 race condition은 Grace Period로 보완했고, Phase 4에서 **Reuse Detection**(재사용 감지 시 family 전체 폐기)을 추가했다. (학습 기록 2)

**커서 페이지네이션 — 문제가 성능이 아니었다.** 로드맵은 이 작업을 "offset 성능 개선"으로 잡았는데, 착수 전 코드 검증에서 다른 것이 나왔다. 주문 목록의 \`@PageableDefault\`에 **\`sort\`가 없었다.** 응답 순서가 DB가 정하는 미정의 순서였고 클라이언트가 임의 컬럼 정렬을 넣을 수도 있었다 — **offset 페이징으로서의 결과 정합성조차 없던 상태**다. 그래서 1차 가치는 성능이 아니라 **결정적 순서 계약의 최초 확립**으로 재정의됐고, "동률 \`ordered_at\`이 페이지 경계에서 누락·중복되면 미완"이 완료 명제에 들어갔다. 검사 행 수는 커서 \`[20, 20, 20]\` vs offset \`[40, 420, 920]\`(깊이 20/400/900)로, 깊이 900에서 46배 차이가 났다. 인덱스에 \`id\`를 명시하지 않은 근거도 실행계획으로 확인된다 — InnoDB 세컨더리 인덱스가 PK를 암묵 부착해 \`used_key_parts\`가 3개로 나온다.

**문서 근거를 실측이 뒤집은 사례.** 같은 작업에서 커서 상한을 정하며 \`DATETIME(6)\` 의 경계값을 문서 근거로 \`.499999\`로 잡았는데, MySQL 8.0.46 컨테이너에 직접 INSERT/SELECT 해보니 \`.999999\`까지 원형 저장됐다. 문서의 \`.499999\`는 *컬럼보다 많은 자릿수를 넣어 반올림할 때*의 경계였다. 그대로 갔으면 **정상 데이터를 400으로 거부**했다. 이후로는 사실 주장을 채택하기 전에 실행해서 확인하는 절차가 붙었다.

**관측성 계약.** Actuator → Micrometer → Prometheus → Grafana로 메트릭이 흐른다. 메트릭이 수집되는데 그래프가 비는 문제(히스토그램 미활성·라벨 불일치)를 겪고 관측성 설정의 SSOT를 ADR로 정리했으며, Phase 4에서 이를 **per-service 계약**으로 재설계했다(ADR-0015). Kafka 헤더로 trace를 전파하고 Outbox 테이블에 \`trace_id\`를 보존(의도적 무인덱스)한다.

**아직 열려 있는 부채.** \`D-002\` 캐시 TPS 2차 병목(서비스 분리 후 격리 재측정 대기) · \`D-020\` 결제 승인↔로컬 커밋 불일치(DB 트랜잭션 안에서 PG를 호출해, 승인 성공 후 커밋 실패 시 **외부 과금은 남고 로컬은 롤백**된다. 웹훅 reconciliation 부재). 둘 다 "지금 고칠 것"이 아니라 **무엇이 필요한지까지 적어 남긴 것**이다.

---

## 13. 개발 방법론: Claude × Codex 하네스 — 늘렸다가 실측으로 걷어냈다

코드만이 아니라 **AI와 함께 일하는 흐름 자체**를 설계했다. Claude로 계획하고 Codex로 리뷰를 따로 쓰니 도구를 오갈 때마다 문맥을 다시 설명해야 했고 "계획엔 있는데 구현엔 빠진" 괴리가 반복됐다. 모델 성능보다 **상태·프로세스 부재**가 문제였다. 그래서 작업을 \`/plan → /work → /ship\`으로 고정하고, **Claude는 계획·구현·오케스트레이션**, **Codex는 독립 리뷰어**(diff·계획서를 output-schema JSON으로 강제 응답)를 맡고, 사람의 개입은 **정해진 게이트**에서만 일어나게 했다.

![Claude × Codex 하네스 흐름]({{diagram_harness}})

### 그리고 절반을 걷어냈다

초기 하네스는 task마다 \`.state.json\`으로 상태를 잇는 12-step 상태머신이었다. 몇 달 돌린 뒤 **비용을 실측하고, 값을 하지 못하는 장치를 걷어냈다.**

| 걷어낸 것 | 이유 |
| --- | --- |
| lock 획득/해제, \`state.json\` init/patch, gate·metrics TSV, run_id 규약 | 12-step 상태머신이 작업 한 번당 Bash 왕복을 10\\~15회 더했는데, 그 대가로 얻은 것이 없었다. 진행 상태는 계획서 체크박스와 git 이력으로 충분히 남는다 |
| diff를 3조각으로 나눠 보내던 방식 | 조각만 보면 **조각 밖을 결함으로 오판**한다. diff가 크면 조각을 나눌 게 아니라 **PR을 나누는** 쪽이 맞다 |

| 남긴 것 | 이유 |
| --- | --- |
| \`/plan → /work → /ship\` 3단계와 사용자 게이트 | 어디까지 합의됐는지가 흐려지지 않는다 |
| 착수 전에 전제를 **코드로** 확인하는 단계 | "이미 끝나 있는 선행 작업"과 "존재하지 않는 상수"가 실제로 계속 나왔다. 6·9장의 범위 재확정이 전부 여기서 나왔다 |
| 수렴 판정 규칙(새 계약 표면이 늘지 않을 때 종료) | 언제 그만둘지를 감이 아니라 규칙으로 |

**장치를 늘리는 것과 결과가 좋아지는 것은 별개다.** 늘릴 때는 비용이 보이지 않아서 계속 늘렸고, 실측하고 나서야 어느 쪽이 값을 하는지 갈렸다. 10장의 교훈("초록을 믿으려면 빨강을 먼저 봐야 한다")을 이 하네스 자신에게 적용한 셈이다.

> 관련 글: [Claude × Codex 하네스 구축기](https://blog.rlarbdlf222.workers.dev/blog/claude-codex/)

---

## 14. 블로그: PeekCart 학습 기록 연재

각 설계 결정을 \`문제 → 대안 → 선택 → 한계 → 다음 Phase 연결\` 구조로 정리한 연재 글이다. 이 프로젝트의 의사결정 근거가 가장 자세히 담겨 있다. (Phase 4 구현 단계의 기록은 아직 저장소 문서로만 있고 연재로 옮기지 않았다.)

**전체 서사**
- [0. 왜 모놀리스에서 MSA로 가는 흐름을 먼저 봐야 할까](https://blog.rlarbdlf222.workers.dev/blog/peekcart-monolith-to-msa-flow/)

**Phase 1. 모놀리식 도메인**
- [1. 4-Layered + DDD 구조를 어떻게 읽어야 할까](https://blog.rlarbdlf222.workers.dev/blog/peekcart-layered-ddd/)
- [2. 인증·인가의 갈림길에서 무엇을 선택할 수 있을까](https://blog.rlarbdlf222.workers.dev/blog/peekcart-authn-authz-choices/)
- [3. 상품과 재고는 왜 따로 관리해야 할까](https://blog.rlarbdlf222.workers.dev/blog/peekcart-product-inventory-concurrency/)
- [4. 주문 생성 트랜잭션 안에서는 어떤 일이 일어나는가](https://blog.rlarbdlf222.workers.dev/blog/peekcart-order-transaction-flow/)
- [5. 결제 승인이 실패하면 누가 주문을 취소하는가](https://blog.rlarbdlf222.workers.dev/blog/peekcart-payment-failure-flow/)
- [6. 알림 발송이 실패해도 주문은 살아남아야 한다](https://blog.rlarbdlf222.workers.dev/blog/peekcart-notification-failure-isolation/)
- [7. 15분 후에 돌아와서 주문을 취소하는 일](https://blog.rlarbdlf222.workers.dev/blog/peekcart-order-timeout-scheduler/)

**Phase 2. 성능 / 정합성**
- [8. 상품 조회를 캐시 뒤로 옮기기](https://blog.rlarbdlf222.workers.dev/blog/peekcart-product-cache-aside/)
- [9. 오버셀링을 두 겹으로 막기 — 분산 락과 낙관적 락](https://blog.rlarbdlf222.workers.dev/blog/peekcart-inventory-lock-defense/)
- [10. DB는 커밋됐는데 이벤트가 사라진다면 — Kafka와 Transactional Outbox](https://blog.rlarbdlf222.workers.dev/blog/peekcart-transactional-outbox/)
- [11. 같은 이벤트가 두 번 왔다 — Consumer 멱등성과 DLQ](https://blog.rlarbdlf222.workers.dev/blog/peekcart-consumer-idempotency-dlq/)
- [12. Pod이 셋이면 스케줄러도 셋이 돈다 — ShedLock](https://blog.rlarbdlf222.workers.dev/blog/peekcart-shedlock-multi-pod-scheduler/)

**Phase 3. 인프라 / 관측성 / 부하**
- [13. "내 머신에선 되는데"를 닫는다 — CI와 Docker 이미지 빌드](https://blog.rlarbdlf222.workers.dev/blog/peekcart-ci-docker-image-build/)
- [14. 같은 매니페스트로 두 환경을 배포한다 — Kustomize와 minikube → GKE](https://blog.rlarbdlf222.workers.dev/blog/peekcart-kustomize-base-overlays-gke/)
- [15. 메트릭은 수집됐는데 그래프가 비어 있다](https://blog.rlarbdlf222.workers.dev/blog/peekcart-observability-contract/)
- [16. 캐시 효과를 어떻게 증명할까](https://blog.rlarbdlf222.workers.dev/blog/peekcart-cache-effect-measurement/)
- [17. 1,000명이 소수 상품을 동시에 주문하면](https://blog.rlarbdlf222.workers.dev/blog/peekcart-order-concurrency-hpa/)

**Phase 4. MSA 진입 전 정리**
- [18. Phase 4로 넘어가기 전에 — 글을 쓰다 발견한 22개의 부채](https://blog.rlarbdlf222.workers.dev/blog/peekcart-phase4-debt-checklist/)
- [19. "조건부 UPDATE 한 방"이면 분산 락이 필요 없을까](https://blog.rlarbdlf222.workers.dev/blog/peekcart-inventory-conditional-update-adr/)
- [부채 해결 회고: MSA로 넘어가기 전에 무엇을 고치고 무엇을 일부러 남겼나](https://blog.rlarbdlf222.workers.dev/blog/peekcart-phase4-debt-retrospective/)
- [쿠버네티스 학습 기록: YAML을 던지면 무슨 일이 일어나는가](https://blog.rlarbdlf222.workers.dev/blog/kubernetes-reconciliation-mental-model/)

---

## 15. 프로젝트 규모 상세

| 항목 | 수치 |
| --- | --- |
| 개발 기간 | 2026.03 \\~ 진행 중 |
| 커밋 | 785개 (main 기준) |
| 서비스 | 5개 (User · Product · Order · Payment · Notification) + Gateway |
| Gradle 모듈 | 10개 (서비스 5 · gateway · 공유 계약 4) |
| 메인 코드 (Java) | 25,645줄 (413파일) |
| 테스트 | 25,534줄 (169파일) — 최근 빌드 **1,006 테스트 0 실패** |
| Flyway 마이그레이션 | 34개 (서비스별 소유: order 10 · product 8 · payment 8 · notification 6 · user 2) |
| ADR (결정 기록) | 21건 |
| k8s 매니페스트 | 62개 (base/overlays, per-service) |
| CI 게이트 | lint 15종 · test 6-shard · e2e 잡 (계약 lint·smoke 스크립트 21개, 대부분 self-test 동반) |
| 부하 테스트 | nGrinder + k6, GKE 실측 (캐시 ×2.31, 동시 주문 오버셀링 0, HPA 1→3) |
| 크로스서비스 E2E | 시나리오 4종 + 음성 대조군 7종 |
| 블로그 연재 | PeekCart 학습 기록 20여 편 |
`;

export const peekcart: Project = {
  slug: 'peekcart',
  title: 'PeekCart',
  description:
    '대용량 트래픽을 고려한 이커머스 백엔드. 모놀리식으로 만든 뒤 5개 서비스로 분해한 프로젝트',
  projectType: 'Main',
  image: peekcartThumbnail,
  tags: ['Spring Boot', 'Kafka', 'Redis', 'MySQL', 'Kubernetes', 'MSA'],
  github: 'https://github.com/Kimgyuilli/PeakCart',
  demo: '',
  categories: ['Backend'],
  techStack: {
    backend: [
      'Java 17',
      'Spring Boot 3.5',
      'Spring Cloud Gateway',
      'Spring Security',
      'Spring Data JPA',
      'Redisson',
      'Spring Kafka',
      'ShedLock',
    ],
    database: ['MySQL 8 (DB-per-service)', 'Redis 7', 'Flyway'],
    deployment: [
      'Docker',
      'Kubernetes (Kustomize)',
      'GKE',
      'GitHub Actions',
      'Prometheus',
      'Grafana',
    ],
  },
  duration: '2026.03 ~ 진행 중',
  teamSize: '1명',
  role: '백엔드 개발 (설계 · 구현 · 인프라 · 부하 검증 전 과정)',
  markdownContent: peekcartMarkdown,
  markdownImages: peekcartImages,
};
