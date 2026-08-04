import { Document, Page } from '@react-pdf/renderer';
import './fonts';
import { pdfStyles } from './styles';
import { PdfHeader } from './sections/PdfHeader';
import { PdfIntroduce } from './sections/PdfIntroduce';
import { PdfEducation } from './sections/PdfAbout';
import { PdfSkills } from './sections/PdfSkills';
import { PdfExperience } from './sections/PdfExperience';
import { PdfAchievements } from './sections/PdfAchievements';
import { PdfProjects } from './sections/PdfProjects';
import type { PdfProject } from './sections/PdfProjects';
import type { PdfSkillCategory } from './sections/PdfSkills';
import { heroData } from '@/data/hero';
import { socialLinksData } from '@/data/contact';
import type { ContactInfoData } from '@/data/contact';
import type { AboutInfo } from '@/data/hero';
import type { Experience } from '@/types';

const pdfContactInfo: ContactInfoData[] = [
  {
    label: '전화번호',
    value: '010-9028-1157',
    href: 'tel:01090281157',
  },
  {
    label: '이메일',
    value: 'rlarbdlf222@gmail.com',
    href: 'mailto:rlarbdlf222@gmail.com',
  },
];

const pdfIntroduce: AboutInfo = {
  paragraphs: [
    '백엔드와 인프라를 기반으로 제품 문제를 끝까지 해결하는 프로덕트 엔지니어입니다. PeekCart에서 Redis 분산 락, DB 낙관적 락, Transactional Outbox, Kafka DLQ, GKE 부하 테스트를 직접 설계·검증하며 상품 조회 TPS 2.31배 개선, 1,000 VUser 동시 주문 오버셀링 0건을 확인했습니다.',
    '규칙은 문서가 아니라 빌드와 계약으로 지켜진다고 생각합니다. Momens에서는 Server Lead로 모듈 경계를 Spring Modulith 검증에 태워 위반이 빌드 실패가 되게 했고, 서버 혼자 정할 수 없는 결정은 결정 요청서와 ADR 15건으로 확정해 12명 규모 협업에서 팀 사이의 책임 경계를 설계했습니다.',
  ],
};

const pdfProjects: PdfProject[] = [
  {
    title: 'Momens',
    description:
      '흩어진 업무 맥락을 연결하는 AI 운영 도구의 백엔드. 모듈러 모놀리스로 레거시 Go 서버를 대체하며 팀 간 책임 경계를 설계한 프로젝트',
    period: '2026.06 - 진행 중',
    role: 'Server Lead · 모듈 경계 설계 / 크로스팀 계약 / dev 인프라 (서버 2명, 전체 12명)',
    github: 'https://github.com/Momens-Works/momens-server',
    tags: [
      'Java 21',
      'Spring Boot 4',
      'Spring Modulith',
      'PostgreSQL',
      'Kubernetes',
      'GKE',
      'Testcontainers',
    ],
    stack: [
      { label: 'Language', value: 'Java 21' },
      {
        label: 'Framework',
        value: 'Spring Boot 4, Spring Modulith, Spring Security, Spring Data JPA',
      },
      { label: 'Database', value: 'PostgreSQL, Flyway, Testcontainers' },
      { label: 'Build', value: 'Gradle 멀티모듈 (서브프로젝트 13개)' },
      { label: 'Infra/CI', value: 'Docker, Kubernetes(dev GKE), GitHub Actions, OpenTelemetry' },
    ],
    cases: [
      {
        title: '모듈 경계를 빌드가 강제하게 만들기',
        problem:
          '모듈러 모놀리스의 경계는 합의만으로 지켜지지 않습니다. 다른 모듈의 내부 클래스를 import 하는 순간 경계가 사라지는데, 그것을 막는 수단이 리뷰어의 기억력뿐이었습니다.',
        action:
          '각 모듈을 Gradle 서브프로젝트 13개로 물리 분리해 클래스패스에 없으면 참조 자체가 불가능하게 하고, 그 위에 Spring Modulith의 ApplicationModules.verify()를 얹어 internal 패키지 참조와 순환 의존을 빌드 실패로 만들었습니다.',
        result:
          'signal 모듈의 순환 의존을 실제로 빌드가 잡아내 공개 계약은 root, 구현체는 nested package-private으로 재배치했습니다. 모듈이 각자 Flyway 마이그레이션을 소유해 단독 Testcontainers 통합 테스트가 가능하게 설계했습니다.',
      },
      {
        title: '팀 사이의 경계: 결정이 안 난 채로 전진하기',
        problem:
          '레거시 서버·worker·retrieval·인프라와 웹/앱 클라이언트가 모두 다른 담당자 소관이라 서버가 단독으로 정할 수 없는 결정이 계속 나왔습니다. 답을 기다리면 일정이 멈추고, 그냥 정하면 나중에 뒤집혔습니다.',
        action:
          '서버 단독으로 정할 수 없으면서 구현에 실제 영향을 주는 항목만 5개로 추린 결정 요청서를 만들어, 회의에서 논의가 아니라 판정이 일어나게 했습니다. 답을 받기 어려운 항목은 리스크로 등록해 비용 기준으로 즉시 반영과 행동 제약을 갈랐습니다.',
        result:
          '이벤트 envelope과 근거 참조 방식 등 크로스팀 계약을 ADR 15건으로 확정했습니다. gRPC는 쓰지 않으면서 proto만 공통 계약으로 채택해, Go와 Java가 같은 정의를 보고 코드를 생성하는 이득만 취했습니다.',
      },
    ],
  },
  {
    title: 'PeekCart',
    description:
      '대용량 트래픽을 고려한 이커머스 백엔드. 성능·정합성·이벤트 안정성·운영 검증을 직접 설계하고 측정한 프로젝트',
    period: '2026.03 - 진행 중',
    role: '1인 개발 · Backend / Infra / Load Test',
    github: 'https://github.com/Kimgyuilli/PeekCart',
    tags: [
      'Java 17',
      'Spring Boot 3.5',
      'MySQL',
      'Redis',
      'Kafka',
      'Kubernetes',
      'GKE',
      'Prometheus',
    ],
    stack: [
      { label: 'Language', value: 'Java 17' },
      { label: 'Framework', value: 'Spring Boot 3.5, Spring Security, Spring Data JPA' },
      { label: 'Database', value: 'MySQL 8, Redis 7, Flyway' },
      { label: 'Messaging', value: 'Kafka, Transactional Outbox, DLQ' },
      { label: 'Infra/Monitoring', value: 'Docker, Kubernetes, GKE, Prometheus, Grafana, k6' },
    ],
    cases: [
      {
        title: '동시 주문 재고 정합성 검증',
        problem:
          '재고가 한정된 상품에 주문 요청이 몰릴 때 재고 확인과 차감 사이의 경쟁 조건으로 오버셀링이 발생할 수 있었습니다.',
        action:
          'Redis 분산 락으로 상품 단위 요청을 직렬화하고, Redis 장애 시 DB 낙관적 락이 최후 방어선이 되도록 락 관리와 주문 트랜잭션 책임을 분리했습니다.',
        result:
          'k6 기반 1,000 VUser 동시 주문 테스트에서 오버셀링 0건을 검증했고, Redis 경합 실패와 장애 상황을 다른 실패 모드로 분리했습니다.',
      },
      {
        title: '상품 조회 성능 개선과 측정 기반 검증',
        problem:
          '읽기 빈도가 높은 상품 조회 API는 트래픽 증가 시 DB 부하가 커질 수 있었고, 캐시 효과를 수치로 검증할 필요가 있었습니다.',
        action:
          '상품 정보에 Redis Cache-Aside를 적용하고, 재고처럼 강한 정합성이 필요한 데이터는 캐싱 대상에서 제외했습니다. GKE 환경에서 nGrinder로 전후를 분리 측정했습니다.',
        result:
          '상품 조회 TPS 265.0 -> 612.7(2.31배), 평균 응답 시간 188ms -> 82ms(56.5% 단축)를 확인했습니다.',
      },
    ],
  },
];

const pdfSkills: PdfSkillCategory[] = [
  {
    title: 'Backend',
    skills: ['Java', 'Spring Boot', 'Spring Modulith', 'JPA', 'QueryDSL'],
  },
  {
    title: 'Data & Messaging',
    skills: ['MySQL', 'PostgreSQL', 'Redis', 'Kafka'],
  },
  {
    title: 'Infra',
    skills: ['Docker', 'Kubernetes', 'GKE', 'AWS'],
  },
  {
    title: 'AI & Collaboration',
    skills: ['OpenAI', 'Spring AI', 'Claude', 'Notion', 'Slack'],
  },
];

const pdfExperiences: Experience[] = [
  {
    company: 'IT 동아리 SOPT',
    position: 'Server YB / OB',
    period: '2025.09 - 2026.07',
    description: [
      'SOPT 해커톤 2회 참여, 웹 서비스 부문(37기)·iOS 서비스 부문(38기) 대상 수상',
      '38기 AI 비서를 통한 프로젝트 맥락 및 태스크 관리 서비스 Momens Server Lead',
      '37기 시술 다운타임 관리 앱 Cherrish Server Lead',
      '서버 파트 합동 세미나 참여, Redis 스터디장 및 성능테스트 스터디 참여',
      '두 기수 동안 정보 공유 아티클 39개 작성',
    ],
    type: 'activity',
  },
  {
    company: 'Groomthon Univ',
    position: 'AYU 서버파트 미르미',
    period: '2025.02 - 2025.09',
    description: [
      'Spring Boot 스터디 진행 및 기술 공유',
      '경인지부 해커톤 9ITHON 최우수상(1등) 수상',
    ],
    type: 'activity',
  },
  {
    company: 'IT 동아리 피로그래밍',
    position: '참가자 / 피로니어 / 교육팀 운영진',
    period: '2024.12 - 2025.08',
    description: [
      '풀스택 개발 과정 수료 및 팀 프로젝트 개발',
      '리쿠르팅 플랫폼 프로젝트 PM 및 풀스택 리드 개발',
      '교육 커리큘럼 설계, 과제 출제, 코드 리뷰, Git 세션 강의 진행',
    ],
    type: 'activity',
  },
  {
    company: 'AYU DB LAB',
    position: '학부 연구생',
    period: '2024.03 - 2026.02',
    description: ['교내 스터디 참가', '노인 돌봄을 위한 AI 비서 서비스 논문 및 프로젝트 연구 진행'],
    type: 'activity',
  },
];

const pdfCertificates = [
  {
    title: 'SQLD',
    issuer: '국가 공인',
    date: '2024.08',
    description: '데이터베이스 SQL 국가공인 자격증',
  },
];

export function ResumePdf() {
  return (
    <Document title="김규일 - 이력서" author="김규일">
      <Page size="A4" style={pdfStyles.page}>
        <PdfHeader
          name={heroData.name}
          contactInfo={pdfContactInfo}
          socialLinks={socialLinksData}
        />
        <PdfIntroduce about={pdfIntroduce} />
        <PdfSkills categories={pdfSkills} />
        <PdfProjects projects={pdfProjects} />
        <PdfExperience experiences={pdfExperiences} />
        <PdfEducation education={heroData.education} />
        <PdfAchievements achievements={pdfCertificates} />
      </Page>
    </Document>
  );
}
