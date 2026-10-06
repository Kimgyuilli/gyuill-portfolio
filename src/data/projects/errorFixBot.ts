import type { Project } from '@/types';

export const errorFixBot: Project = {
  slug: 'error-fix-bot',
  title: '500 Error Auto-Fix Bot',
  description: 'Spring Boot의 500 에러를 분석해 AI 수정안 PR을 만드는 봇',
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
    'Spring Boot 애플리케이션에서 500 에러가 발생하면 스택 트레이스와 관련 소스 코드를 모아 AI 수정안을 만들고 GitHub PR을 생성하는 봇이다. SSE 대시보드로 진행 상황을 보여주고, 디스코드 알림·30분 중복 필터링·테스트 실행 기능을 붙였다. 구현 과정은 블로그(https://imdeepskyblue.tistory.com/82)에 정리했다.',
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
    'AI 모델을 교체할 수 있도록 Protocol로 호출 인터페이스 분리',
    'import를 따라 관련 소스 파일을 수집해 에러 분석에 제공',
    'AI 응답 JSON 파싱 실패 시 자동 재시도 및 검증 로직 구현',
    'SSE(Server-Sent Events)를 활용한 실시간 파이프라인 이벤트 스트리밍',
    'Tenacity를 활용한 외부 API 호출 재시도 및 에러 핸들링',
  ],
  outcome: '에러 감지부터 PR 생성까지의 절차를 자동화하고 단위 테스트로 주요 경로를 확인했다.',
  duration: '2026.02',
  teamSize: '1명',
  role: '풀스택 개발자',
};
