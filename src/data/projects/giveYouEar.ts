import type { Project } from '@/types';
import giveYouEarImage from '@/assets/images/project/GiveYouEar.png';

export const giveYouEar: Project = {
  slug: 'give-you-ear',
  title: 'GiveYouEar (SpeekSee)',
  description: '맞춤형 스크립트 생성과 STT 분석으로 발음 연습을 돕는 서비스',
  projectType: 'Side',
  image: giveYouEarImage,
  tags: ['Spring Boot', 'Java', 'STT', 'AI'],
  github: 'https://github.com/Kimgyuilli/GiveYouEar-BE',
  demo: '#',
  categories: ['Backend', 'AI'],
  detailedDescription:
    '사용자의 수준과 목표에 맞춰 연습용 스크립트를 만들고, STT 분석 결과를 화면에 보여주는 발음 연습 서비스다. 출석 기록과 복습 노트, 진행도 대시보드도 제공한다.',
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
  role: '백엔드 개발자',
};
