import type { Project } from '@/types';
import piroRecruitImage from '@/assets/images/project/piro-recruit.png';

export const piroRecruit: Project = {
  title: 'Piro-Recruit',
  description:
    'IT 연합 동아리 피로그래밍의 리쿠르팅 관리 프로세스를 디지털 전환한 종합 관리 플랫폼',
  projectType: 'Main',
  image: piroRecruitImage,
  tags: ['Spring Boot', 'PostgreSQL', 'Docker', 'Spring Security', 'React'],
  github: 'https://github.com/Piro-recruit',
  demo: '#',
  categories: ['Frontend', 'Backend'],
  detailedDescription:
    'IT 연합 동아리 피로그래밍의 리쿠르팅 프로세스 전반을 디지털화한 관리 플랫폼입니다. 기존 Excel/Notion 기반 수작업 방식의 한계를 극복하고, 데이터 유실 방지, 업무 자동화, 사용자 경험 개선을 통해 체계적인 리쿠르팅 관리 시스템을 구축했습니다. OpenAI API를 활용한 지원서 요약, Admin Code Rotation 기반 권한 관리 등의 기능을 포함합니다.',
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
    '프로젝트 기획부터 디자인, 풀스택 개발, DevOps까지 전 과정 경험. 리쿠르팅 기록 체계화 및 데이터 유실 방지 시스템 구축, 기존 홈페이지와의 확장 가능한 연동 구현.',
  duration: '2025.03 - 2025.06',
  teamSize: '3명 (BE 2명, PM 1명)',
  role: 'PM 겸 풀스택 리드 개발자 (프로젝트 관리, UI/UX 설계, 백엔드/프론트엔드 개발, DevOps)',
};
