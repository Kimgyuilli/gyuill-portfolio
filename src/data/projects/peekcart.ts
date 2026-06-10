import type { Project } from '@/types';
import peekcartThumbnail from '@/assets/images/project/peekcart/thumbnail.svg';

const peekcartMarkdown = `## 프로젝트 개요

**PeekCart**는 대용량 트래픽 환경을 가정한 이커머스 백엔드 플랫폼이다. 단순 CRUD를 넘어 **성능·정합성·안정성·운영**을 모두 검증 대상으로 삼았고, 모놀리식에서 MSA로 단계적으로 진화하는 과정을 의도적으로 설계했다.

핵심은 "무엇을 만들었는가"가 아니라 **"왜 그 방식으로 만들었는가"**다. 모든 기술 도입을 \`문제 → 대안 비교 → 선택 근거 → 한계\`의 형태로 기록하고, 주요 결정은 ADR(Architecture Decision Record)로 남겼다.

| 항목 | 내용 |
| --- | --- |
| 개발 기간 | 2026.03 ~ 진행 중 |
| 개발 인원 | 1인 (설계 · 구현 · 인프라 · 부하 검증 전 과정) |
| 코드 규모 | Java ~6,500줄 / 테스트 62파일 |
| 진행 단계 | Phase 1~3 완료, Phase 4(MSA 분리) 준비 중 |

### 기술 스택

| 영역 | 스택 |
| --- | --- |
| Language / Framework | Java 17, Spring Boot 3.5 |
| Data | MySQL 8, Redis 7 (Redisson), Flyway |
| Messaging | Apache Kafka (Transactional Outbox, DLQ) |
| Infra | Docker, Kubernetes (Kustomize), GKE, GitHub Actions |
| Observability | Prometheus, Grafana, Micrometer, kube-prometheus-stack |
| Load Test | nGrinder, k6 |

## 아키텍처 — 4-Layered + DDD

도메인별로 Presentation / Application / Domain / Infrastructure 4개 레이어를 분리하고, 의존 방향을 단방향(Presentation → Application → Domain ← Infrastructure)으로 강제했다. 비즈니스 로직은 Service가 아닌 **Entity / Domain Service에 응집**시켰다.

JPA는 실용적으로 절충했다. 도메인 엔티티에 \`@Entity\` 등 매핑 어노테이션은 허용하되, 비즈니스 로직이 \`EntityManager\` 같은 JPA API에 직접 의존하지 않도록 막아 도메인 순수성과 생산성을 동시에 확보했다.

\`\`\`mermaid
flowchart TB
    Client(["Client / API"]) --> P
    subgraph App["PeekCart Monolith"]
      direction TB
      P["Presentation — Controller · DTO"]
      A["Application — UseCase · 트랜잭션 경계"]
      D["Domain — Entity · VO · Domain Service · Repository(interface)"]
      I["Infrastructure — RepositoryImpl · Kafka · Redis · MySQL · Toss"]
      P --> A --> D
      I -. implements .-> D
    end
\`\`\`

## 모놀리식에서 MSA로 — 4단계 진화

처음부터 MSA로 가지 않았다. 분산 시스템의 복잡도는 **그것이 필요한 문제를 먼저 겪은 뒤** 도입해야 설명할 수 있다고 봤다.

\`\`\`mermaid
flowchart LR
    P1["Phase 1 · 모놀리식<br/>5개 도메인<br/>JWT · Toss 결제"]
    P2["Phase 2 · 성능/정합성<br/>Redis 캐싱 · 분산 락<br/>Kafka + Outbox · DLQ"]
    P3["Phase 3 · 인프라/관측성<br/>K8s · Grafana<br/>부하 테스트 · HPA"]
    P4["Phase 4 · MSA 분리<br/>멀티모듈 · 서비스별 DB<br/>Gateway · Saga"]
    P1 --> P2 --> P3 --> P4
\`\`\`

## 핵심 설계 결정

### 재고 동시성 — 이중 방어

주문 폭주 시 오버셀링을 막기 위해 **Redis 분산 락(Redisson)으로 동시 요청을 직렬화**하고, Redis 장애·만료에 대비해 **DB 낙관적 락(\`@Version\`)을 최후 방어선**으로 뒀다. 핵심은 *락 범위가 트랜잭션 범위를 감싸야 한다*는 점 — 트랜잭션 커밋 이후에 락을 해제하도록 락 관리와 트랜잭션 로직을 분리했다.

### 이벤트 유실 방지 — Transactional Outbox

"DB 저장은 성공했는데 Kafka 발행이 실패"하는 이벤트 유실을 막기 위해, 비즈니스 데이터와 이벤트를 **하나의 트랜잭션으로 Outbox 테이블에 저장**하고 폴링 스케줄러가 발행한다. Debezium CDC도 검토했으나, 추가 인프라 없이 구현 가능한 폴링 방식을 포트폴리오 범위에 맞는 트레이드오프로 선택했다.

### 중복 소비 방어 — 멱등성 + DLQ

Kafka의 at-least-once 특성상 같은 이벤트가 중복 소비될 수 있다. \`processed_events\` 테이블의 \`(event_id, consumer_group)\` 복합 UK로 중복을 선점 차단하고, 처리 실패 메시지는 3회 재시도(1s·5s·30s) 후 **DLQ로 격리 + Slack 알림**으로 운영 가시성을 확보했다.

\`\`\`mermaid
flowchart TB
    O["Order Service — 주문 저장 + Outbox 저장 (단일 트랜잭션)"] --> OB[("outbox_events")]
    OB -->|"Polling / 실패 시 retry"| K(["Kafka"])
    OB -. "초과 시 FAILED" .-> SL["Slack 알림"]
    K -->|"at-least-once"| C["Consumer — processed_events UK로 중복 차단"]
    C -->|"3회 재시도 실패"| DLQ[("DLQ")]
    DLQ --> SL
\`\`\`

### 그 외

- **결제 타임아웃 스케줄러**: 15분 초과 미결제 주문을 자동 취소 + 재고 복구. 단일 인스턴스 시점에 **ShedLock을 선제 도입**해 다중 Pod 전환 비용을 미리 제거했다.
- **JWT 인증**: Refresh Token은 DB에 영속, 로그아웃 블랙리스트는 Redis에 분리. Token Rotation의 race condition은 Grace Period로 보완했다.

## 부하 테스트 — 수치로 증명

GKE(e2-standard-4) 환경에서 nGrinder·k6로 실측했다.

| 시나리오 | 결과 |
| --- | --- |
| **Redis 캐싱 (상품 조회)** | TPS **265 → 612.7 (×2.31)**, 평균 응답 188ms → 82ms (−56.5%), 에러 0 |
| **1,000 VUser 동시 주문** | **오버셀링 0건**, 재고 정합성 OK |
| **HPA 자동 확장** | 부하 급증 시 Pod **1 → 3 자동 scale-out** (신규 Pod 65초 내 Ready) |
| **Kafka Consumer Lag** | steady-state **0 유지**, peak 후 신속 복귀 |

목표였던 캐싱 3배에는 미달(×2.31)했지만, **수치를 그대로 기록하고 CPU 병목이라는 원인까지 분석**하는 쪽을 택했다. 측정 결과를 미화하지 않는 것이 이 프로젝트의 원칙이다.`;

export const peekcart: Project = {
  title: 'PeekCart',
  description:
    '대용량 트래픽을 고려해 모놀리식에서 MSA로 단계적으로 진화시킨 이커머스 백엔드 플랫폼',
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
};
