import type { Project } from '@/types';
import piroRecruitImage from '@/assets/images/project/piro-recruit.png';

export const piroRecruit: Project = {
  slug: 'piro-recruit',
  title: 'Piro-Recruit',
  description: '피로그래밍의 지원서 접수부터 평가·면접·선발까지 관리하는 플랫폼',
  projectType: 'Side',
  image: piroRecruitImage,
  tags: ['Spring Boot', 'PostgreSQL', 'Docker', 'Spring Security', 'React'],
  github: 'https://github.com/Piro-recruit',
  demo: '#',
  categories: ['Frontend', 'Backend'],
  detailedDescription:
    '엑셀과 노션에 나뉘어 있던 피로그래밍의 지원서 접수·평가·면접 과정을 한곳에서 관리하도록 만든 플랫폼이다. OpenAI API를 이용한 지원서 요약과 기수별 관리자 권한 관리 기능을 구현했다.',
  features: [
    '리쿠르팅 생애주기 관리 (지원서 접수 → 평가 → 면접 → 최종 선발)',
    'AI 지원서 분석 (OpenAI API 연동으로 요약 및 평가 점수 자동 생성)',
    '권한 기반 관리 (Admin Code Rotation을 통한 기수별 권한 분리)',
    '이메일 자동화 (합격자 대상 일괄 메일 전송 시스템)',
    '면접 관리 (2차 대면 면접 타임테이블 생성 및 평가)',
    'Google Forms 연동 및 통계 대시보드',
    '지원서 접수 비동기 처리 로직 최적화',
  ],
  techStack: {
    frontend: ['React'],
    backend: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA'],
    database: ['PostgreSQL'],
    deployment: ['GCP', 'Jenkins', 'Terraform', 'Docker', 'Blue-Green 배포', 'Netlify'],
  },
  challenges: [
    'Admin Code Rotation 기반 기수별 권한 관리 시스템 설계',
    'OpenAI API 통합 및 지원서 자동 분석 로직 구현',
    'Blue-Green 배포 전략으로 무중단 배포 환경 구축',
    'Google Forms 데이터 연동 및 실시간 동기화',
  ],
  outcome:
    '지원서 접수부터 최종 선발까지의 기록을 한곳에서 관리하도록 만들고 기존 홈페이지와 연동했다. 기획·디자인·개발·배포를 맡았다.',
  duration: '2025.06 - 2025.08',
  teamSize: '3명 (BE 2명, PM 1명)',
  role: 'PM 겸 풀스택 리드 개발자 (프로젝트 관리, UI/UX 설계, 백엔드/프론트엔드 개발, DevOps)',
};
