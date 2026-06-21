# 김규일 이력서 초안

## Header

김규일  
Backend Developer

- Email: rlarbdlf222@gmail.com
- GitHub: https://github.com/Kimgyuilli
- Blog: https://blog.rlarbdlf222.workers.dev/
- Portfolio: https://blog.rlarbdlf222.workers.dev/portfolio/

---

## Introduction

성능과 정합성 문제를 직접 재현하고, 측정 결과를 바탕으로 설계를 개선하는 백엔드 개발자입니다. 단순히 기능을 구현하는 데서 멈추지 않고, 왜 문제가 발생했는지와 어떤 선택지가 있었는지를 집요하게 추적하며 기록합니다.

PeekCart에서는 대용량 이커머스 상황을 가정해 Redis 분산 락, DB 낙관적 락, Transactional Outbox, Kafka DLQ, GKE 부하 테스트까지 직접 설계하고 검증했습니다. 상품 조회 TPS 2.31배 개선, 1,000 VUser 동시 주문 오버셀링 0건, HPA 1->3 자동 확장처럼 수치로 확인 가능한 결과를 남겼습니다.

협업에서는 팀이 같은 속도로 움직이기 위한 API 설계, 컨벤션, 일정 조율, 배포 흐름을 중요하게 봅니다. Cherrish에서는 Server Lead로서 클라이언트·디자인 파트와 요구사항을 맞추고, 백엔드 구조와 CI/CD 파이프라인을 주도했습니다.

AI를 제품 기능과 개발 프로세스 양쪽에 적용하는 데 관심이 많습니다. Spring AI/OpenAI 기반 기능을 구현했고, 반복 작업 자동화와 코드 리뷰 흐름에도 AI 도구를 활용해 개발 생산성을 높이고 있습니다.

---

## Projects

### PeekCart - 대용량 트래픽을 고려한 이커머스 백엔드

- Period: 2026.03 ~ 진행 중
- Role: 백엔드 개발, 설계, 인프라, 부하 검증 전 과정
- Team: 1인
- Tech: Java 17, Spring Boot 3.5, Spring Security, JPA, MySQL 8, Redis 7, Redisson, Kafka, Flyway, Docker, Kubernetes, GKE, GitHub Actions, Prometheus, Grafana, k6, nGrinder
- GitHub: https://github.com/Kimgyuilli/PeekCart

#### 1. 동시 주문 재고 정합성 검증

Problem: 재고가 한정된 상품에 주문 요청이 동시에 몰릴 때, 재고 확인과 차감 사이의 경쟁 조건으로 오버셀링이 발생할 수 있었습니다.

Action: Redis 분산 락으로 주문 요청을 상품 단위로 직렬화하고, Redis 장애 상황에서는 DB 낙관적 락이 최후 방어선이 되도록 설계했습니다. 락 범위가 트랜잭션 커밋 이전에 풀리지 않도록 락 관리 책임과 주문 트랜잭션 책임을 분리했습니다.

Result: k6 기반 1,000 VUser 동시 주문 테스트에서 오버셀링 0건을 검증했습니다. Redis 경합 실패와 Redis 장애 상황을 분리해 각각 다른 실패 모드로 다뤘고, 설계 근거와 한계를 ADR 및 블로그로 정리했습니다.

#### 2. 상품 조회 성능 개선과 측정 기반 검증

Problem: 상품 조회 API는 읽기 빈도가 높아 트래픽 증가 시 DB 부하가 커질 수 있었고, "캐시를 넣으면 빨라진다"는 가정을 수치로 검증할 필요가 있었습니다.

Action: 상품 정보에 Redis Cache-Aside 전략을 적용하고, 재고처럼 강한 정합성이 필요한 데이터는 캐싱 대상에서 제외했습니다. GKE 환경에서 nGrinder로 캐시 적용 전후를 분리 측정했습니다.

Result: 상품 조회 TPS를 265.0에서 612.7로 2.31배 개선했고, 평균 응답 시간을 188ms에서 82ms로 56.5% 단축했습니다. 목표였던 3배에는 미달했지만, CPU 병목을 확인해 다음 HPA 검증 시나리오의 근거로 활용했습니다.

#### 3. 이벤트 유실과 중복 소비 방어

Problem: 주문 생성 이후 결제·알림 도메인에 이벤트를 전달해야 했지만, DB 커밋 성공 후 Kafka 발행이 실패하면 도메인 간 상태가 어긋날 수 있었습니다.

Action: 비즈니스 데이터와 이벤트를 하나의 트랜잭션으로 저장하는 Transactional Outbox를 적용했습니다. Consumer에는 `processed_events` 복합 유니크 키 기반 멱등성 처리를 두고, 재시도 후에도 실패하는 이벤트는 DLQ와 Slack 알림으로 격리했습니다.

Result: 이벤트 발행 실패와 소비 실패를 분리해 대응할 수 있는 구조를 만들었습니다. Kafka의 at-least-once 전달 특성에서 발생할 수 있는 중복 소비를 비즈니스 트랜잭션 안에서 방어하도록 설계했습니다.

#### 4. 운영 환경 검증과 관측성 구축

Problem: 로컬에서 동작하는 백엔드와 실제 부하 환경에서 안정적으로 동작하는 백엔드는 다르다고 판단했습니다.

Action: GKE에 애플리케이션, MySQL, Redis, Kafka, Prometheus, Grafana를 구성하고 k6/nGrinder로 캐시, 동시 주문, HPA, Kafka Lag 시나리오를 나눠 검증했습니다.

Result: HPA가 CPU saturation 상황에서 Pod를 1개에서 3개로 자동 확장하는 것을 확인했고, Kafka Consumer Lag이 peak 이후 steady-state 0으로 복귀하는 것을 관측했습니다. 측정 결과와 설계 부채를 블로그 연재로 정리하며 다음 MSA 전환 단계의 판단 근거를 남겼습니다.

---

### Cherrish - AI 기반 뷰티 캘린더 앱

- Period: 2025.12 - 2026.02
- Role: Server Lead
- Team: 13명 협업, Server 2명
- Tech: Java 21, Spring Boot 3.5.9, Spring Data JPA, QueryDSL 5.1.0, Spring AI OpenAI 1.1.2, PostgreSQL 17, AWS VPC, EC2, RDS, ECR, SSM, Docker, Nginx, GitHub Actions OIDC
- GitHub: https://github.com/TEAM-Cherrish/Cherrish-Server

#### 1. 타 파트 요구사항 조율과 API 의사결정

Problem: iOS, Android, Design, Server가 함께 움직이는 프로젝트에서 각 파트가 보는 우선순위가 달랐습니다. 디자인 요구사항, 클라이언트 구현 난이도, 서버 데이터 구조가 충돌할 때마다 API 변경과 일정 지연으로 이어질 수 있었습니다.

Action: Server Lead로서 기능 단위로 요구사항을 쪼개고, 클라이언트·디자인 파트와 API 응답 형태, 필수/선택 정책, 일정 우선순위를 조율했습니다. 구현 난이도와 사용자 경험 사이에서 바로 확정하기 어려운 부분은 서버에서 감당할 수 있는 범위와 클라이언트에서 처리하는 편이 나은 범위를 나눠 의사결정했습니다.

Result: 13명 규모의 합숙 협업 환경에서 파트 간 요구사항 충돌을 줄이고, 서버 변경 사항이 클라이언트 작업에 미치는 영향을 낮췄습니다. API 명세와 일정 기준을 맞추며 팀이 같은 우선순위로 움직일 수 있도록 조율했습니다.

#### 2. 제한된 서버 자원과 개발 리소스 관리

Problem: Server 파트는 2명이었고, 짧은 기간 안에 시술 검색, 다운타임 계산, 캘린더 조회, AI 챌린지 생성, 배포까지 모두 처리해야 했습니다. 모든 기능을 같은 깊이로 구현하면 일정과 서버 리소스가 쉽게 부족해질 수 있었습니다.

Action: 기능별 우선순위를 나누고, 사용자 플로우에 직접 영향을 주는 캘린더·다운타임·챌린지 흐름을 먼저 안정화했습니다. 초기 컨벤션, 브랜치 전략, checkStyle, CodeRabbit, Jacoco, Docker 기반 실행 흐름을 정리해 리뷰와 검증 비용을 줄였습니다. AWS에서는 VPC, EC2, RDS, ECR, SSM 등 필요한 자원만 구성하고 GitHub Actions OIDC 기반 배포로 운영 부담을 낮췄습니다.

Result: 제한된 Server 인원과 인프라 자원 안에서 핵심 기능을 우선 완성하고, 팀원이 같은 방식으로 개발·리뷰·배포할 수 있는 흐름을 만들었습니다. 장기 AWS Key 없이 배포 가능한 구조로 보안 부담도 줄였습니다.

#### 3. DDD 레이어드 아키텍처 기반 도메인 분리

Problem: 뷰티 시술, 다운타임, 챌린지, 캘린더, 사용자 레벨처럼 도메인이 섞이면 기능 확장 시 서비스 로직이 쉽게 비대해질 수 있었습니다.

Action: 도메인별 책임을 분리한 DDD 레이어드 아키텍처를 적용했습니다. 시술 일정, 다운타임 단계, 챌린지 루틴, 대시보드 조회의 책임을 분리하고, 복잡한 캘린더/다운타임 조회에는 QueryDSL을 활용했습니다.

Result: 기능별 변경 범위를 줄이고, 월간/일간 캘린더와 다운타임 진행 상태를 안정적으로 조회할 수 있는 구조를 만들었습니다.

#### 4. Spring AI 기반 사용자 맞춤 루틴 생성

Problem: 사용자의 추구미와 시술 상태에 따라 뷰티 관리 루틴이 달라져야 했고, 정적인 추천 규칙만으로는 개인화 경험을 만들기 어려웠습니다.

Action: Spring AI OpenAI를 연동해 사용자 맞춤형 7일 챌린지 루틴과 챌린지명을 자동 생성했습니다. AI 응답을 서비스 흐름 안에서 사용할 수 있도록 입력 조건과 저장 구조를 정리했습니다.

Result: AI를 단순 부가 기능이 아니라 사용자의 관리 경험을 개인화하는 핵심 기능으로 연결했습니다.

---

## Skills

- Backend: Java 17/21, Spring Boot, Spring Security, Spring Data JPA, QueryDSL, Spring AI
- Database: MySQL, PostgreSQL, Redis, Flyway
- Messaging: Kafka, Transactional Outbox, DLQ
- Infra: Docker, Kubernetes, GKE, AWS, GitHub Actions, Nginx
- Observability: Prometheus, Grafana, Micrometer, k6, nGrinder
- AI: OpenAI API, Spring AI, Claude, Codex

---

## Experience

### IT 동아리 SOPT

- Server YB: 2025.09 - 2026.01
- Server OB: 2026.02 ~
- Spring Boot 기반 서버 개발 세미나 및 과제 수행
- 2기수 간 정보 공유 아티클 28개 작성
- 37기 시술 다운타임 관리 앱 Cherrish Server Lead
- 38기 AI 비서를 통한 프로젝트 맥락 및 태스크 관리 서비스 Momense Server Lead
- SOPT 해커톤 2회 참여, 웹 서비스 부문(37기)·앱 서비스 부문(38기) 대상 수상

### IT 동아리 피로그래밍

- 참가자: 2024.12 - 2025.02
- 교육팀 운영진: 2025.03 - 2025.08
- 풀스택 개발 과정 수료 및 팀 프로젝트 개발
- 교육 커리큘럼 설계, 과제 출제, 코드 리뷰, Git 세션 강의 진행
- 리쿠르팅 플랫폼 Piro-Recruit PM 겸 풀스택 리드 개발

### Groomthon Univ

- AYU 서버파트 미르미: 2025.02 - 2025.09
- Spring Boot 스터디 진행 및 기술 공유
- 해커톤 2회 참여 및 최우수상 수상

### AYU DB LAB

- 학부 연구생: 2024.03 - 2026.02
- 교내 스터디 참가
- 학술 논문 및 프로젝트 연구 진행

---

## Education

안양대학교 컴퓨터공학과  
2020.03 - 현재  
학점: 4.02 / 4.5

---

## Certificates

- SQLD, 2024.08
