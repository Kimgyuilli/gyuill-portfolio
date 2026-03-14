import type { Project } from '@/types';
import giveYouEarImage from '@/assets/images/project/GiveYouEar.png';

export const giveYouEar: Project = {
  title: 'GiveYouEar (SpeekSee)',
  description:
    'AI 기반 자기주도형 발음 훈련 플랫폼. 맞춤형 스크립트 생성과 STT 분석을 통해 혼자서도 효과적인 스피킹 연습이 가능합니다.',
  projectType: 'Side',
  image: giveYouEarImage,
  tags: ['Spring Boot', 'Java', 'STT', 'AI'],
  github: 'https://github.com/Kimgyuilli/GiveYouEar-BE',
  demo: '#',
  categories: ['Backend', 'AI'],
  detailedDescription:
    '취준생과 대학생들의 스피치 불안을 해소하고 실질적인 훈련 성과를 제공하는 AI 발음 교정 플랫폼입니다. 사용자 레벨과 목표에 맞춘 스크립트를 AI가 자동 생성하고, STT 기술로 발음을 분석하여 시각적 피드백을 제공합니다. 성장 대시보드를 통해 학습 진행도를 한눈에 확인할 수 있습니다.',
  features: [
    'AI 기반 사용자 맞춤형 스크립트 생성',
    'STT 분석 및 발음 시각적 피드백',
    '성장 대시보드를 통한 진행도 시각화',
    '발음 기호 및 애니메이션 반복 학습 지원',
    '출석 체크 기능',
    '복습 노트 작성 시스템',
  ],
  techStack: {
    frontend: ['(팀원 담당)'],
    backend: ['Java', 'Spring Boot', 'Gradle'],
    database: ['PostgreSQL'],
    deployment: ['AWS'],
  },
  challenges: [
    'Spring Boot Websocket, STT API 통합 및 발음 분석 알고리즘 구현',
    '사용자 레벨별 맞춤 스크립트 생성 로직 설계',
    '시각적 피드백 데이터 처리 및 최적화',
  ],
  outcome: 'Groomthon univ 경인지부 9ITHON 최우수상(1등) 수상',
  duration: '2025.07 (해커톤)',
  teamSize: '6명',
  role: 'Backend Developer',
};
