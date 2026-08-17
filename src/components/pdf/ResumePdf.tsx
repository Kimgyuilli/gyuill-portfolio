import { Document, Page } from '@react-pdf/renderer';
import './fonts';
import { pdfStyles } from './styles';
import { PdfHeader } from './sections/PdfHeader';
import { PdfIntroduce } from './sections/PdfIntroduce';
import { PdfEducation } from './sections/PdfAbout';
import { PdfSkills } from './sections/PdfSkills';
import { PdfExperience } from './sections/PdfExperience';
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
    '기능을 구현하는 데서 멈추지 않고 배포와 운영, 그 뒤의 측정까지 하나의 일을 끝까지 책임지는 프로덕트 엔지니어입니다. PeekCart에서 이커머스 백엔드를 혼자 만들며 설계부터 쿠버네티스 구성과 부하 테스트까지 직접 했습니다. 캐시로 상품 조회 TPS를 2.31배 올리면서 다음 병목이 CPU라는 것까지 짚었고, 1,000 VUser 동시 주문에서는 오버셀링을 실제로 막은 것이 설계한 분산 락이 아니라 낙관적 락이라는 사실을 찾아냈습니다.',
    '팀에서는 규칙을 문서로 남기기보다 도구와 프로세스가 대신 지키게 만드는 편입니다. Momens에서 서버 리드로 운영 중인 레거시 서버를 멈추지 않고 옮기면서, 배포 순서를 사람의 기억이 아니라 티켓의 완료 조건으로 만들었습니다. 부하를 걸어 병목을 좁히고 판단 근거를 남기는 방식으로 일해 왔고, 다루는 값이 곧 고객의 돈인 환경에서 이 기준을 팀이 쓰는 스택에 맞춰 이어 가고 싶습니다.',
  ],
};

const pdfProjects: PdfProject[] = [
  {
    title: 'PeekCart',
    description:
      '트래픽이 몰리는 상황을 가정하고 만든 이커머스 백엔드. 캐싱과 이벤트 처리를 다듬고 쿠버네티스에 올려 부하를 걸어 확인하는 데까지 혼자 진행',
    period: '2026.03 - 진행 중',
    role: '1인 개발 · 백엔드 / 인프라 / 부하 테스트',
    github: 'https://github.com/Kimgyuilli/PeekCart',
    tags: ['Java 17', 'Spring Boot 3.5', 'MySQL', 'Redis', 'Kafka', 'Kubernetes', 'GKE'],
    stack: [
      { label: 'Backend', value: 'Java 17, Spring Boot 3.5, Spring Security, Spring Data JPA' },
      { label: 'Data', value: 'MySQL 8, Redis 7, Redisson, Kafka, Outbox, DLQ, Flyway' },
      {
        label: 'Infra',
        value: 'Docker, Kubernetes, GKE, Prometheus, Grafana, k6, nGrinder',
      },
    ],
    cases: [
      {
        title: '캐시로 얻은 2.31배와 그다음 병목',
        problem:
          '상품 조회는 읽기가 가장 많은 API라 트래픽이 늘면 DB 부하가 먼저 커질 자리였습니다. 캐시 효과와 그다음에 무엇이 막는지는 재 봐야 알 수 있었습니다.',
        action:
          'Redis Cache-Aside를 적용하되 재고처럼 정합성이 중요한 데이터는 제외했고, 캐시 스위치를 설정으로 분리해 GKE에서 OFF와 ON을 같은 조건으로 측정했습니다. 이어서 1,000 VUser를 Pod 하나에 태워 자동 확장 반응까지 확인했습니다.',
        result:
          '50 VUser 5분 기준 TPS 265에서 613으로 2.31배, 평균 테스트 시간 188ms에서 82ms로 줄었습니다. 목표로 잡은 3배에 못 미친 원인은 캐시가 켜진 상태에서도 Pod CPU가 175%까지 오르는 데 있었고, 다음 병목을 CPU로 특정해 검증을 이어갔습니다. 부하를 키우자 HPA가 replica를 1개에서 3개로 늘렸는데, 새 Pod가 트래픽을 받기까지 65초가 걸렸고 그동안 기존 Pod 하나가 요청을 떠안아 로그인 실패가 몰렸습니다. 자동 확장이 동작하는 것과 반응 공백은 별개라는 것을 수치로 확인했습니다.',
      },
      {
        title: '동시 주문 정합성과 이중 방어 검증',
        problem:
          '재고를 확인하는 시점과 차감하는 시점 사이에 다른 요청이 끼어들면, 재고보다 많은 주문이 통과할 수 있었습니다.',
        action:
          'Redis 분산 락으로 요청을 줄 세우고 DB 낙관적 락을 최후 방어선으로 두는 이중 방어를 설계했습니다. 재고 100개짜리 상품 10개에 1,000 VUser를 몰아 경합을 최대로 만든 뒤, 재고 감소분과 실제 판매량이 일치하는지 SQL로 검증했습니다.',
        result:
          '두 번의 측정 모두 오버셀링 0건과 정합성 OK가 나왔고, 무엇이 그것을 막았는지 따라가 보니 분산 락이 아니라 낙관적 락이었습니다. 주문 서비스의 클래스 단위 트랜잭션에 재고 차감이 합류해 락 해제가 커밋보다 먼저 일어나면서 직렬화 효과가 사라져 있었고, @Version 충돌이 최후 방어선으로 작동한 것입니다. 단위 테스트는 통과하는데 실제 주문 경로의 락 순서는 다르다는 것을 부하 테스트로 잡아내, 락 순서를 후속 과제로 분리했습니다.',
      },
      {
        title: '리뷰어가 없는 1인 개발에 리뷰 루프 만들기',
        problem:
          '혼자 만드는 프로젝트라 diff를 봐 줄 사람이 없었고, AI에 맡겨도 부를 때마다 형식이 달라 무엇을 고쳤고 무엇을 넘겼는지 추적되지 않았습니다.',
        action:
          '작업을 계획과 구현, 배포 단계로 끊고 진행 상태를 원자적으로 기록해 중단되더라도 그 지점부터 잇게 했습니다. 리뷰 응답은 JSON Schema로 고정해 심각도와 분류, 파일과 라인, 지적과 수정 제안이 모두 있어야 통과하게 했습니다.',
        result:
          '응답이 정해진 형식으로 오니 심각도를 기준으로 통과와 차단을 기계가 판정할 수 있게 됐습니다. 높은 등급의 지적이 없으면 자동으로 통과하고, 있으면 각 지적을 반영할지 범위 밖 부채로 돌릴지 남긴 뒤에 다음 단계로 넘어갑니다.',
      },
    ],
  },
  {
    title: 'Momens',
    description:
      '흩어진 업무 맥락을 연결하는 AI 운영 도구의 백엔드. 운영 중인 레거시 Go 서버를 멈추지 않고 모듈러 모놀리스로 옮기는 중',
    period: '2026.06 - 진행 중',
    role: '서버 리드 · 레거시 이관 / 크로스팀 계약 / dev 인프라 (서버 2명, 전체 12명)',
    github: 'https://github.com/Momens-Works/momens-server',
    tags: ['Java 21', 'Spring Boot 4', 'Spring Modulith', 'PostgreSQL', 'Kubernetes', 'GKE'],
    stack: [
      {
        label: 'Backend',
        value: 'Java 21, Spring Boot 4, Spring Modulith, Spring Security, Spring Data JPA',
      },
      { label: 'Data', value: 'PostgreSQL, Flyway, Testcontainers' },
      { label: 'Infra/CI', value: 'Docker, Kubernetes(dev GKE), GitHub Actions' },
    ],
    cases: [
      {
        title: '스키마 소유권이 없는 상태에서 레거시 옮기기',
        problem:
          '레거시는 프로덕션만 1.4만 줄에 HTTP 매핑이 76개였습니다. 새 서버는 레거시와 같은 PostgreSQL을 쓰는데 스키마 소유권이 레거시에 있어, 운영에서는 마이그레이션을 돌리지 못하고 검증만 했습니다. 순서가 뒤집히면 서버가 뜨지 않았습니다.',
        action:
          '전부 옮긴 뒤 한 번에 바꾸는 방식은 위험이 전환 시점 하나에 몰려 접었습니다. 대신 이미 떠 있는 ingress를 라우팅 지점으로 삼아 경로 단위로 넘겼고, 무엇을 먼저 옮길지는 레거시에서 한 트랜잭션에 묶여 있던 단위로 잘랐습니다.',
        result:
          'dev 배포에서 마이그레이션 순서가 어긋나 파드가 CrashLoopBackOff에 빠진 뒤로, 레거시 반영이 먼저이고 서버 배포가 나중이라는 순서를 사람의 기억 대신 티켓의 완료 조건으로 정의해뒀습니다.',
      },
    ],
  },
];

const pdfSkills: PdfSkillCategory[] = [
  {
    title: 'Backend',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Spring Modulith'],
  },
  {
    title: 'Data & Messaging',
    skills: ['MySQL', 'PostgreSQL', 'Redis', 'Kafka', 'Flyway'],
  },
  {
    title: 'Infra & CI',
    skills: ['Docker', 'Kubernetes', 'GKE', 'AWS', 'GitHub Actions'],
  },
  {
    title: 'Observability & Load Test',
    skills: ['Prometheus', 'Grafana', 'Micrometer', 'k6', 'nGrinder'],
  },
];

const pdfExperiences: Experience[] = [
  {
    company: 'IT 동아리 SOPT',
    position: 'Server YB / OB',
    period: '2025.09 - 2026.07',
    description: [
      '38기 Momens · 37기 Cherrish Server Lead',
      'Redis 스터디장 및 성능테스트 스터디 참여, 두 기수 동안 정보 공유 아티클 39개 작성',
    ],
    type: 'activity',
  },
  {
    company: 'IT 동아리 피로그래밍',
    position: '참가자 / 피로니어 / 교육팀 운영진',
    period: '2024.12 - 2025.08',
    description: ['리쿠르팅 플랫폼 PM 겸 풀스택 리드 개발, 교육 커리큘럼 설계 및 Git 세션 강의'],
    type: 'activity',
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
        <PdfEducation education={heroData.education} />
        <PdfSkills categories={pdfSkills} />
        <PdfProjects projects={pdfProjects} />
        <PdfExperience experiences={pdfExperiences} />
      </Page>
    </Document>
  );
}
