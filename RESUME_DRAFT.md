# 김규일 이력서

> **base 이력서**입니다. 지원하는 회사의 JD에 맞춰 케이스를 바꿔 끼워 쓰는 것을 전제로 합니다.
>
> - 대상: **서버 개발 신입 / 인턴 지원** · 분량 **4장 이내** (현재 3장)
> - 원칙: 이력서는 **문제 · 판단 · 결과**까지만. 좁혀 간 과정은 블로그·포트폴리오 링크가 받는다.
> - `판단`에는 **기각한 선택지**를 함께 적는다. 이 한 줄이 "만들었다"와 "판단했다"를 가른다.
>
> **고치는 곳**: 이 파일은 사람이 읽는 판본이고, PDF가 실제로 읽는 데이터는
> `src/data/resume.ts` 입니다. 내용을 바꿀 때는 **두 곳을 함께** 고쳐 주세요.
> 케이스를 빼려면 `cases` 배열에서 원소를 지우면 되고, 레이아웃은 개수에 의존하지 않습니다.
> 분량이 바뀌었으면 실제 페이지 수를 확인하세요.

---

## 1. Header

**김규일** · Backend Developer

- 010-9028-1157 · rlarbdlf222@gmail.com
- GitHub: https://github.com/Kimgyuilli
- Blog: https://blog.rlarbdlf222.workers.dev/
- Portfolio: https://blog.rlarbdlf222.workers.dev/portfolio/

---

## 2. Introduction

측정하지 않은 개선은 믿지 않습니다. PeekCart에서 캐시로 상품 조회 TPS를 2.31배 올리면서 목표 3배에 미달한 원인이 CPU라는 것까지 짚었고, 1,000 VUser 동시 주문에서 오버셀링을 실제로 막은 것이 설계한 분산 락이 아니라 낙관적 락이라는 사실을 부하 테스트로 찾아냈습니다.

팀에서는 규칙을 문서로 남기기보다 도구가 대신 지키게 만듭니다. Momens에서 서버 리드로 운영 중인 레거시 서버를 멈추지 않고 옮기면서, 모듈 경계 위반은 리뷰가 아니라 빌드가 잡게 하고 배포 순서는 사람의 기억이 아니라 티켓의 완료 조건으로 만들었습니다.

선택한 것뿐 아니라 **기각한 것도** 남깁니다. 두 프로젝트의 결정 근거를 ADR과 블로그 학습 기록 29편으로 정리했고, 아래 각 항목의 링크가 그 기록입니다.

---

## 3. Skills

- **Backend**: Java, Spring Boot, Spring Security, Spring Data JPA, Spring Modulith
- **Data & Messaging**: MySQL, PostgreSQL, Redis(Redisson), Kafka, Flyway
- **Infra & CI**: Docker, Kubernetes(GKE), AWS, GitHub Actions, Kustomize
- **Observability & Load Test**: Prometheus, Grafana, Micrometer, k6, nGrinder

---

## 4. Experience

**SOPT makers** · 공식 홈페이지팀 BE · 2026.08 – 현재

- 공식 홈페이지와 인증 · 리쿠르팅 로직 유지보수
- 인수인계 문서가 없던 상태에서 레포와 흩어진 자료를 수집해 BE 문서를 재정리하고, 팀원 전달 후 내용 크로스체크 진행
- Slack 무료 플랜의 3개월 보존 한계로 수동 아카이빙하던 대화를 Notion으로 옮기는 자동화 구현. 전체 모임에서 아젠다를 공유하고 운영진에 인계 — [sopt-makers/slack-notion-archive](https://github.com/sopt-makers/slack-notion-archive)

**IT 동아리 SOPT** · Server YB / OB · 2025.09 – 2026.07

- 38기 Momens · 37기 Cherrish **Server Lead**
- Redis 스터디장, 성능 테스트 스터디 참여 / 두 기수 동안 정보 공유 아티클 39편 작성
- 해커톤 2회 참여, 대상 수상 (37기 웹 서비스 · 38기 iOS 서비스)

**IT 동아리 피로그래밍** · 참가자 → 교육팀 운영진 · 2024.12 – 2025.08

- 교육 커리큘럼 설계, 과제 출제 및 채점 기준 수립, 코드 리뷰, Git 세션 강의
- 리쿠르팅 플랫폼 Piro-Recruit PM 겸 풀스택 리드 개발

**Groomthon Univ** · AYU 서버파트 미르미 · 2025.02 – 2025.09

- Spring Boot 스터디 진행 및 기술 공유 / 해커톤 2회 참여 (9ITHON 최우수상)

**AYU DB LAB** · 학부 연구생 · 2024.03 – 2026.02

- 노인 돌봄을 위한 AI 비서 서비스 논문 및 프로젝트 연구

---

## 5. Projects

### PeekCart — 대용량 트래픽을 가정한 이커머스 백엔드

- **기간**: 2026.03 ~ 진행 중 · **인원**: 1인 (설계 · 구현 · 인프라 · 부하 검증 전 과정)
- **스택**: Java 17, Spring Boot 3.5, MySQL 8, Redis 7, Kafka, Docker, Kubernetes(GKE), Prometheus, Grafana, k6, nGrinder
- **GitHub**: https://github.com/Kimgyuilli/PeekCart
- 모든 기술 도입을 `문제 → 대안 비교 → 선택 근거 → 한계`로 기록하고 ADR 9건으로 남겼습니다. 리뷰어가 없는 1인 개발이라 AI 리뷰 응답을 JSON Schema로 고정해 심각도 기준으로 통과·차단이 판정되게 만들었습니다.

**1. 캐시로 조회 TPS 2.31배 — 그리고 다음 병목이 CPU라는 것까지**

- **문제**: 상품 조회는 읽기가 가장 많은 API라 트래픽이 늘면 DB가 먼저 막힐 자리였습니다. "캐시를 넣으면 빨라진다"는 가정을 수치로 확인해야 했습니다.
- **판단**: Redis Cache-Aside를 적용하되 **재고는 대상에서 제외**했습니다. 주문마다 바뀌는 강한 정합성 대상이라 캐시에 두면 무효화 타이밍에 오버셀링 위험이 생깁니다. 캐시 스위치를 설정으로 분리해 GKE에서 OFF와 ON을 같은 조건으로 측정했습니다.
- **결과**: 50 VUser 5분 기준 **TPS 265 → 613(×2.31)**, 평균 응답 188ms → 82ms. 목표 3배에 미달한 원인을 **캐시 ON에서도 Pod CPU 175%**로 특정해 다음 검증 대상을 CPU로 넘겼습니다. 부하를 키우자 HPA가 replica를 1→3으로 늘렸지만 **새 Pod가 트래픽을 받기까지 65초**가 걸렸고, 자동 확장이 도는 것과 반응 공백은 별개라는 것을 수치로 확인했습니다.
- 🔗 [캐시 효과를 어떻게 증명할까](https://blog.rlarbdlf222.workers.dev/blog/peekcart-cache-effect-measurement/) · [1,000명이 소수 상품을 동시에 주문하면](https://blog.rlarbdlf222.workers.dev/blog/peekcart-order-concurrency-hpa/)

**2. 1,000 VUser 동시 주문 — 오버셀링 0건, 막은 건 설계한 분산 락이 아니었다**

- **문제**: 재고 확인과 차감 사이의 틈에서 여러 트랜잭션이 같은 재고를 읽으면 오버셀링이 납니다. `SELECT FOR UPDATE`로 막을 수는 있지만 락 경합과 커넥션 점유를 주문 경로에 집중시키고 싶지 않았습니다.
- **판단**: Redis 분산 락으로 직렬화하고 경합 시 대기 없이 409를 반환하되, **Redis 장애 시에는 락 없이 진행하고 DB 낙관적 락(`@Version`)이 최후 방어선**이 되게 했습니다. 두 락은 중복이 아니라 서로 다른 실패 모드를 막습니다. 그리고 "통과했다"로 끝내지 않고 **무엇이 실제로 막았는지** SQL로 역추적했습니다.
- **결과**: 재고 100개 상품 10개에 1,000 VUser를 몰아 **오버셀링 0건 · 정합성 OK**. 다만 실제 방어선은 낙관적 락이었습니다 — 주문 서비스의 클래스 단위 `@Transactional`에 재고 차감이 합류해 **락 해제가 커밋보다 먼저** 일어나 직렬화 효과가 사라져 있었습니다. 단위 테스트는 통과하는 경로였고 부하 테스트가 잡아냈습니다. 처리량은 실패율 35.9%로 합격선(<10%)에 미달해, 병목을 DB 커넥션 풀과 Pod readiness 두 갈래로 좁혀 후속 과제로 분리했습니다.
- 🔗 [오버셀링을 두 겹으로 막기](https://blog.rlarbdlf222.workers.dev/blog/peekcart-inventory-lock-defense/) · ["조건부 UPDATE 한 방"이면 분산 락이 필요 없을까](https://blog.rlarbdlf222.workers.dev/blog/peekcart-inventory-conditional-update-adr/)

**3. DB는 커밋됐는데 이벤트가 사라진다면 — Outbox · 멱등성 · DLQ**

- **문제**: 주문 생성 후 결제·알림 도메인에 이벤트를 전달해야 하는데, DB 커밋에 성공하고 Kafka 발행이 실패하면 이벤트가 영구 유실됩니다. 반대로 Kafka는 at-least-once라 같은 이벤트가 두 번 오기도 합니다.
- **판단**: 비즈니스 데이터와 이벤트를 **하나의 트랜잭션**으로 Outbox에 저장했습니다. 발행 방식은 Debezium CDC가 지연이 짧지만 Kafka Connect 클러스터를 추가로 운영해야 해서 **폴링을 택하되 교체 가능한 구조**로 분리했습니다. 멱등성은 `processed_events` 복합 UK를 **처리 전에 선점 INSERT**하는 방식으로 두되, 그 INSERT를 비즈니스 로직과 같은 트랜잭션에 넣어 처리 실패 시 함께 롤백되게 했습니다.
- **결과**: "선점만 되고 처리는 실패해 영영 건너뛰는" 구멍이 없는 구조가 됐습니다. 발행 실패(Outbox `FAILED` + Slack)와 소비 실패(3회 재시도 후 DLQ)는 원인도 대응도 다르므로 같은 메커니즘으로 뭉뚱그리지 않고 분리했습니다.
- 🔗 [Kafka와 Transactional Outbox](https://blog.rlarbdlf222.workers.dev/blog/peekcart-transactional-outbox/) · [Consumer 멱등성과 DLQ](https://blog.rlarbdlf222.workers.dev/blog/peekcart-consumer-idempotency-dlq/)

---

### Momens — AI 업무 맥락 관리 도구의 백엔드 (SOPT 38기 앱잼)

- **기간**: 2026.06 ~ 진행 중 · **역할**: 서버 리드 (서버 2명 / 전체 12명)
- **스택**: Java 21, Spring Boot 4, Spring Modulith, PostgreSQL, Flyway, Testcontainers, Docker, Kubernetes(GKE), GitHub Actions
- **GitHub**: https://github.com/Momens-Works/momens-server · **서비스**: https://momens.works
- 운영 중인 Go 서버(HTTP 매핑 76개)를 멈추지 않고 Java 모듈러 모놀리스로 대체하는 중이며, 결정 근거를 ADR 22건으로 남겼습니다.

**1. 스키마 소유권이 없는 상태에서 운영 중인 레거시 옮기기**

- **문제**: 레거시는 프로덕션만 1.4만 줄, HTTP 매핑 76개였습니다. 신규 서버는 레거시와 **같은 PostgreSQL을 공유**하는데 스키마 소유권이 레거시에 있어, 운영에서는 마이그레이션을 돌리지 못하고 검증만 했습니다. 순서가 뒤집히면 서버가 아예 기동하지 않았습니다.
- **판단**: 전부 옮긴 뒤 한 번에 바꾸는 **빅뱅 컷오버는 기각**했습니다. 완성 전까지 운영 가치가 0이고 리스크가 전환 시점 하나에 몰립니다. 대신 이미 떠 있는 ingress를 라우팅 지점으로 삼아 경로 단위로 넘겼고, 무엇을 함께 옮길지는 파일이 아니라 **레거시에서 한 트랜잭션에 묶여 있던 단위**로 잘랐습니다. 옮긴 것이 같은지는 눈이 아니라, 두 서버를 같은 픽스처로 나란히 띄워 **응답과 DB 기록을 대조하는 하네스**로 판정하게 했습니다.
- **결과**: dev 배포에서 마이그레이션 순서가 어긋나 파드가 CrashLoopBackOff에 빠진 뒤, 배포 순서를 사람의 기억이 아니라 **티켓의 완료 조건**으로 정의했습니다. 이후 제약을 드러내는 데서 멈추지 않고 **스키마 소유권 자체를 신규 서버로 이전**해(ADR), 운영과 같은 형상의 DB로 리허설한 뒤 마이그레이션 이력 42건을 무중단으로 적용했습니다.
- 🔗 [레거시 API를 한 번에 갈아엎으려다 멈춘 이유](https://blog.rlarbdlf222.workers.dev/blog/legacy-api-strangler-fig-migration/)

**2. 모듈 경계를 리뷰가 아니라 빌드가 지키게**

- **문제**: 모듈러 모놀리스는 "잘 나누자"는 합의로 시작해 천천히 무너집니다. 패키지를 나눠도 다른 모듈의 내부를 import 하는 순간 경계는 사라지고, 그걸 막는 건 리뷰어의 기억력뿐입니다.
- **판단**: 경계를 **물리적으로** 만들었습니다. 각 모듈을 Gradle 서브프로젝트로 분리해 클래스패스에 없으면 참조 자체가 불가능하게 하고, Spring Modulith 검증으로 internal 참조와 순환 의존을 **빌드 실패**로 만들었습니다. 모듈이 두꺼워졌을 때 기술 레이어로 나누는 안은 기각했습니다 — 원인이 레이어 부재가 아니라 **변경 이유가 다른 도메인이 섞인 것**이라, 레이어로 나누면 각 레이어 안에서 다시 섞이기 때문입니다.
- **결과**: 서브프로젝트 16개 위에서 경계 위반이 CI에 잡힙니다. 실제로 하위 모듈을 분리하다 순환 의존에 걸려 "공개 계약은 root, 구현체는 nested"로 재작업했는데, **규칙을 어겼을 때 빌드가 알려준 사례**입니다. 모듈을 추가하면 Dockerfile도 고쳐야 한다는 암묵 규약 때문에 CI가 깨진 뒤에는, 서브프로젝트 목록과 Dockerfile을 양방향 비교하는 검사를 만들어 그 규약도 검증 대상으로 만들었습니다.
- 🔗 [모듈러 모놀리스와 Spring Modulith 학습 기록](https://blog.rlarbdlf222.workers.dev/blog/modular-monolith-spring-modulith/)

**3. 답이 안 오는 결정 앞에서 멈추지 않기**

- **문제**: 서버 구현에 영향을 주는데 **서버가 단독으로 정할 수 없는** 결정이 계속 나왔습니다. 웹 세션 토큰 수명은 FE 리드의 결정이 필요했고 바로 답을 받기 어려웠습니다. 기다리면 앱잼 일정이 멈추고, 그냥 정해 버리면 나중에 뒤집힙니다.
- **판단**: 기다리지 않기로 하고, 그 선택으로 생기는 **리스크 7개를 레지스터에 등록한 뒤 비용 기준으로 등급을 매겼습니다.** 나열이 아니라 분류입니다. 지금 seam만 열어 두면 되는 값싼 것은 즉시 반영하고, 비싼 것은 구현이 아니라 **약속의 범위를 좁히는** 쪽으로 대응했습니다.
- **결과**: 비대칭 세션 보안 리스크에는 "세션 폐기에 의존하는 기능을 계약으로 약속하지 않는다"는 행동 제약을 부과하고, 이중 운영 컷오버는 사전 합의 대상으로 명시했습니다. 덕분에 모바일을 먼저 완성하면서도 웹이 나중에 붙을 자리를 비워 둘 수 있었습니다. 확정된 결정은 ADR로 남기고 상세 설계 문서 상단에 "최신 결정은 ADR을 참조"라는 배너를 달아, 오래된 문서가 사실처럼 읽히지 않게 했습니다.
- 🔗 [포트폴리오: 팀 사이의 경계 — 결정이 안 난 채로 전진하기](https://blog.rlarbdlf222.workers.dev/portfolio/projects/momens-server/)

---

## 6. Education & Certificates

**안양대학교 컴퓨터공학과** · 2020.03 – 현재 (졸업 유예) · 학점 4.02 / 4.5

SQLD (2024.08) · TOEIC Speaking IH (2026.08)
