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
import { heroData } from '@/data/hero';
import { socialLinksData } from '@/data/contact';
import type { ContactInfoData } from '@/data/contact';
import type { SkillCategoryData } from '@/data/skills';
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
    '성능과 정합성 문제를 직접 재현하고, 측정 결과를 바탕으로 설계를 개선하는 백엔드 개발자입니다. PeekCart에서 Redis 분산 락, DB 낙관적 락, Transactional Outbox, Kafka DLQ, GKE 부하 테스트를 직접 설계·검증하며 상품 조회 TPS 2.31배 개선, 1,000 VUser 동시 주문 오버셀링 0건을 확인했습니다.',
    '협업에서는 팀이 같은 우선순위로 움직이도록 요구사항, API 응답 형태, 일정, 배포 흐름을 조율하는 일을 중요하게 봅니다. Cherrish에서는 Server Lead로 제한된 Server 인원과 인프라 자원 안에서 핵심 기능을 관리했고, Spring AI/OpenAI를 제품 기능과 개발 프로세스 양쪽에 적용했습니다.',
  ],
};

const pdfProjects: PdfProject[] = [
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
      {
        title: '이벤트 유실과 중복 소비 방어',
        problem:
          '주문 생성 후 결제·알림 도메인에 이벤트를 전달해야 했지만, DB 커밋 성공 후 Kafka 발행 실패 시 상태 불일치가 발생할 수 있었습니다.',
        action:
          '비즈니스 데이터와 이벤트를 하나의 트랜잭션으로 저장하는 Transactional Outbox를 적용하고, processed_events 복합 UK 기반 멱등성과 DLQ를 구성했습니다.',
        result:
          '이벤트 발행 실패와 소비 실패를 분리해 대응할 수 있게 했고, Kafka의 at-least-once 전달에서 발생하는 중복 소비를 방어했습니다.',
      },
    ],
  },
  {
    title: 'Cherrish',
    description:
      '13명(TL·iOS·Android·Server·Design) 협업으로 개발한 AI 기반 뷰티 캘린더 앱. 문제 해결 방식과 협업 생산성을 주도적으로 개선한 프로젝트',
    period: '2025.12 - 2026.02',
    role: 'Server Lead',
    github: 'https://github.com/TEAM-Cherrish/Cherrish-Server',
    tags: ['Java 21', 'Spring Boot 3.5', 'QueryDSL', 'Spring AI', 'PostgreSQL', 'AWS', 'OIDC'],
    stack: [
      { label: 'Language', value: 'Java 21' },
      { label: 'Framework', value: 'Spring Boot 3.5, Spring Data JPA, QueryDSL' },
      { label: 'AI', value: 'Spring AI OpenAI' },
      { label: 'Database', value: 'PostgreSQL 17' },
      { label: 'Infra/CI', value: 'AWS EC2/RDS/ECR/SSM, Nginx, GitHub Actions OIDC' },
    ],
    cases: [
      {
        title: '문제 해결 방식 제안과 API 의사결정',
        problem:
          'iOS, Android, Design, Server가 함께 움직이면서 디자인 요구사항, 클라이언트 구현 난이도, 서버 데이터 구조가 자주 충돌했고, 단순 구현보다 어떤 방식으로 풀지 먼저 합의해야 했습니다.',
        action:
          'Server Lead로 요구사항을 기능 단위로 쪼개고, API 응답 형태와 필수/선택 정책을 구현 난이도와 사용자 경험 기준으로 비교해 해결안을 제안했습니다.',
        result:
          '13명 협업 환경에서 파트별 작업 기준을 명확히 했고, 서버 변경이 클라이언트 일정과 구현에 미치는 영향을 낮췄습니다.',
      },
      {
        title: 'AI 활용과 협업 생산성 개선',
        problem:
          'Server 2명이 짧은 기간 안에 시술 검색, 다운타임 계산, 캘린더 조회, AI 챌린지 생성, 배포까지 처리해야 했고, 반복 검토와 문서화 비용을 줄일 필요가 있었습니다.',
        action:
          'Spring AI/OpenAI를 제품 기능에 적용하고, CodeRabbit과 OpenAI를 PR 리뷰 보조, 변경 영향 정리, 문서 초안화에 활용했습니다. checkStyle, Jacoco, Docker 기반 실행 흐름도 정리했습니다.',
        result:
          '제한된 인원과 인프라 자원 안에서도 핵심 기능을 완성했고, 팀원이 같은 맥락에서 리뷰하고 작업할 수 있는 협업 흐름을 만들었습니다.',
      },
    ],
  },
];

const pdfSkills: SkillCategoryData[] = [
  {
    type: 'flat',
    title: 'Skills',
    skills: [
      'Java',
      'Spring Boot',
      'JPA',
      'MySQL',
      'Redis',
      'Kafka',
      'Docker',
      'Kubernetes',
      'AWS',
      'OpenAI',
    ],
  },
];

const pdfExperiences: Experience[] = [
  {
    company: 'IT 동아리 SOPT',
    position: 'Server YB / OB',
    period: '2025.09 - 현재',
    description: [
      'SOPT 해커톤 2회 참여, 웹 서비스 부문(37기)·앱 서비스 부문(38기) 대상 수상',
      '37기 시술 다운타임 관리 앱 Cherrish Server Lead',
      '38기 AI 비서를 통한 프로젝트 맥락 및 태스크 관리 서비스 Momens Server Lead',
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
    position: '참가자 / 교육팀 운영진',
    period: '2024.12 - 2025.08',
    description: [
      '풀스택 개발 과정 수료 및 팀 프로젝트 개발',
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
