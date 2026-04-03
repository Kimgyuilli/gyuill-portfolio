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
import { contactInfoData, socialLinksData } from '@/data/contact';
import { experiences } from '@/data/experiences';
import { achievements } from '@/data/achievements';
import type { SkillCategoryData } from '@/data/skills';

const pdfProjects: PdfProject[] = [
  {
    title: 'Cherrish',
    description: '13명(TL·iOS·Android·Server·Design) 합숙 협업으로 개발한 AI 기반 뷰티 캘린더 앱',
    period: '2025.12 - 2026.02',
    role: 'Server Lead',
    tags: ['Spring Boot', 'QueryDSL', 'Spring AI', 'PostgreSQL', 'AWS'],
    highlights: [
      'Server Lead로서 기획 참여, 클라이언트·디자인 파트와의 일정 조율 및 API 설계 주도',
      'DDD 레이어드 아키텍처 적용으로 도메인별 책임 분리 및 확장성 확보',
      'Spring AI OpenAI 연동으로 사용자 맞춤형 챌린지 루틴 자동 생성',
      'GitHub Actions OIDC + AWS SSM 기반 무중단 배포 파이프라인 구축',
    ],
  },
  {
    title: 'Piro-Recruit',
    description: 'IT 연합 동아리 피로그래밍의 리쿠르팅 관리 프로세스를 디지털 전환한 종합 관리 플랫폼',
    period: '2025.03 - 2025.06',
    role: 'PM 겸 풀스택 리드',
    tags: ['Spring Boot', 'Spring Security', 'PostgreSQL', 'Docker', 'React'],
    highlights: [
      'Admin Code Rotation 기반 기수별 권한 관리 시스템 설계',
      'OpenAI API 통합으로 지원서 자동 분석 및 요약 기능 구현',
      'Blue-Green 배포 전략으로 무중단 배포 환경 구축',
      '프로젝트 기획부터 디자인, 풀스택 개발, DevOps까지 전 과정 주도',
    ],
  },
];

const pdfSkills: SkillCategoryData[] = [
  { type: 'flat', title: 'Backend', skills: ['Java', 'Spring Boot'] },
  { type: 'flat', title: 'Frontend', skills: ['React', 'TypeScript'] },
  { type: 'flat', title: 'Database', skills: ['PostgreSQL', 'MySQL', 'Redis'] },
  { type: 'flat', title: 'DevOps', skills: ['Docker', 'AWS', 'GitHub Actions'] },
  { type: 'flat', title: 'Tools', skills: ['Git', 'IntelliJ'] },
];

export function ResumePdf() {
  return (
    <Document title="김규일 - 이력서" author="김규일">
      <Page size="A4" style={pdfStyles.page}>
        <PdfHeader
          name={heroData.name}
          portfolioUrl={heroData.portfolioUrl}
          contactInfo={contactInfoData}
          socialLinks={socialLinksData}
        />
        <PdfIntroduce about={heroData.about} />
        <PdfEducation education={heroData.education} />
        <PdfExperience experiences={experiences} />
        <PdfAchievements achievements={achievements} />
        <PdfProjects projects={pdfProjects} />
        <PdfSkills categories={pdfSkills} />
      </Page>
    </Document>
  );
}
