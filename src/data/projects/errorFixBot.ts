import type { Project } from '@/types';

export const errorFixBot: Project = {
  title: '500 Error Auto-Fix Bot',
  description:
    'Spring Boot 애플리케이션에서 500 에러 발생 시, AI가 자동으로 원인을 분석하고 수정 코드를 작성하여 GitHub PR을 생성하는 자동화 봇',
  projectType: 'Learning',
  image: 'https://img.youtube.com/vi/4gHUAharic4/maxresdefault.jpg',
  media: [
    {
      type: 'video',
      src: 'https://youtu.be/4gHUAharic4',
      poster: 'https://img.youtube.com/vi/4gHUAharic4/maxresdefault.jpg',
    },
  ],
  tags: ['FastAPI', 'OpenAI', 'GitHub API', 'Docker', 'Python'],
  github: 'https://github.com/Kimgyuilli/500-pr-bot',
  demo: '#',
  categories: ['Backend', 'AI'],
  detailedDescription:
    'Spring Boot 애플리케이션에서 500 에러가 발생하면 자동으로 감지하여, AI가 스택 트레이스를 분석하고 관련 소스 코드를 N-depth import 추적으로 수집한 뒤 수정 코드를 생성하여 GitHub PR까지 자동으로 생성하는 파이프라인입니다. 실시간 SSE 대시보드로 파이프라인 진행 상황을 모니터링할 수 있으며, 디스코드 알림과 30분 중복 필터링, 테스트 러너 등 프로덕션 수준의 기능을 갖추고 있습니다. 구현 과정에 대한 자세한 내용은 블로그(https://imdeepskyblue.tistory.com/82)에서 확인할 수 있습니다.',
  features: [
    'Spring Boot 500 에러 자동 감지 및 웹훅 수신',
    'AI 기반 스택 트레이스 분석 및 수정 코드 자동 생성',
    'N-depth import 추적으로 관련 소스 코드 컨텍스트 수집',
    'GitHub PR 자동 생성 (브랜치 생성 → 커밋 → PR + Unified Diff)',
    'SSE 기반 실시간 파이프라인 모니터링 대시보드',
    '디스코드 웹훅 알림 (에러 발생/PR 생성/실패)',
    '30분 TTL 중복 에러 필터링',
    'pytest 테스트 러너 및 실시간 스트리밍 결과 확인',
  ],
  techStack: {
    backend: [
      'Python 3.12',
      'FastAPI',
      'OpenAI API (gpt-4o-mini)',
      'PyGithub',
      'Pydantic Settings',
    ],
    deployment: ['Docker', 'Docker Compose'],
  },
  challenges: [
    'Protocol 기반 AI Provider 추상화로 확장 가능한 AI 모델 교체 구조 설계',
    'N-depth import 추적 알고리즘으로 정확한 에러 컨텍스트 수집',
    'AI 응답 JSON 파싱 실패 시 자동 재시도 및 검증 로직 구현',
    'SSE(Server-Sent Events)를 활용한 실시간 파이프라인 이벤트 스트리밍',
    'Tenacity를 활용한 외부 API 호출 재시도 및 에러 핸들링',
  ],
  outcome:
    '에러 감지부터 PR 생성까지 10단계 파이프라인 완전 자동화, 65개 이상의 단위 테스트로 안정성 확보',
  duration: '2026.02',
  teamSize: '1명',
  role: '풀스택 개발자',
};
