import type { Project } from '@/types';
import shamrockTalesImage from '@/assets/images/project/ShamrockTales.png';

export const shamrockTales: Project = {
  slug: 'shamrock-tales',
  title: 'Shamrock Tales',
  description: '짧은 육아 일기를 아일랜드 설화 형식의 이야기로 바꿔 주는 웹 서비스',
  projectType: 'Side',
  image: shamrockTalesImage,
  tags: ['Spring Boot', 'Spring AI', 'MySQL', 'OpenAI'],
  github: 'https://github.com/SOPT-all/37-SOPKATHON-SERVER-WEB3',
  demo: '#',
  categories: ['Backend', 'AI'],
  detailedDescription:
    "아일랜드 전통 이야기꾼 'Seanchaí'에서 착안한 해커톤 프로젝트다. 사용자가 짧은 육아 일기를 입력하면 AI가 아일랜드 민담 형식의 이야기로 바꿔 준다.",
  features: [
    '클로버 UI 대시보드로 세 가지 주제 카테고리 시각화',
    '간단한 한 줄 일기 작성 시스템',
    'OpenAI 기반 아일랜드 설화 스타일 변환',
    'FAITH(용기), HOPE(소망), LOVE(사랑) 주제 분류',
    '원본 일기와 AI 생성 이야기 아카이브',
    '커서 기반 페이지네이션 및 필터링',
  ],
  techStack: {
    frontend: ['(팀원 담당)'],
    backend: ['Java 17', 'Spring Boot 3.3.5', 'Spring Data JPA', 'Spring AI'],
    database: ['MySQL 8.0+'],
    deployment: ['AWS'],
  },
  challenges: [
    'OpenAI API와 Spring AI를 연결해 일기를 이야기로 변환',
    '감정 키워드 기반 분류 알고리즘 설계',
    '짧은 해커톤 기간 내 기획 방향성 정의 및 MVP 구현',
  ],
  outcome: 'SOPT 37기 해커톤 웹 서비스 부문 대상 수상',
  duration: '2025.11 (해커톤)',
  teamSize: '2명 (Server)',
  role: 'Server Lead Developer',
};
