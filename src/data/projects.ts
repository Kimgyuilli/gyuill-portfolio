import type { Project } from '@/types';
import cherrishImage from '@/assets/images/project/Cherrish.webp';
import cherrish1 from '@/assets/images/project/cherrish/1.webp';
import cherrish2 from '@/assets/images/project/cherrish/2.webp';
import cherrish3 from '@/assets/images/project/cherrish/3.webp';
import cherrish4 from '@/assets/images/project/cherrish/4.webp';
import cherrish5 from '@/assets/images/project/cherrish/5.webp';
import cherrish6 from '@/assets/images/project/cherrish/6.webp';
import cherrish7 from '@/assets/images/project/cherrish/7.webp';
import cherrish8 from '@/assets/images/project/cherrish/8.webp';
import cherrish9 from '@/assets/images/project/cherrish/9.webp';
import cherrish10 from '@/assets/images/project/cherrish/10.webp';
import cherrish11 from '@/assets/images/project/cherrish/11.webp';
import cherrish12 from '@/assets/images/project/cherrish/12.webp';
import cherrish13 from '@/assets/images/project/cherrish/13.webp';
import cherrish14 from '@/assets/images/project/cherrish/14.webp';
import cherrish15 from '@/assets/images/project/cherrish/15.webp';
import cherrish16 from '@/assets/images/project/cherrish/16.webp';
import cherrish17 from '@/assets/images/project/cherrish/17.webp';
import cherrish18 from '@/assets/images/project/cherrish/18.webp';
import cherrish19 from '@/assets/images/project/cherrish/19.webp';
import cherrish20 from '@/assets/images/project/cherrish/20.webp';
import cherrish21 from '@/assets/images/project/cherrish/21.webp';
import cherrish22 from '@/assets/images/project/cherrish/22.webp';
import cherrish23 from '@/assets/images/project/cherrish/23.webp';
import cherrish24 from '@/assets/images/project/cherrish/24.webp';
import cherrish25 from '@/assets/images/project/cherrish/25.webp';
import cherrish26 from '@/assets/images/project/cherrish/26.webp';
import cherrish27 from '@/assets/images/project/cherrish/27.webp';
import cherrish28 from '@/assets/images/project/cherrish/28.webp';
import cherrish29 from '@/assets/images/project/cherrish/29.webp';
import cherrish30 from '@/assets/images/project/cherrish/30.webp';
import cherrish31 from '@/assets/images/project/cherrish/31.webp';
import cherrish32 from '@/assets/images/project/cherrish/32.webp';
import cherrish33 from '@/assets/images/project/cherrish/33.webp';
import cherrish34 from '@/assets/images/project/cherrish/34.webp';
import cherrish35 from '@/assets/images/project/cherrish/35.webp';
import shamrockTalesImage from '@/assets/images/project/ShamrockTales.png';
import giveYouEarImage from '@/assets/images/project/GiveYouEar.png';
import piroRecruitImage from '@/assets/images/project/piro-recruit.png';
import geolEumGeolImage from '@/assets/images/project/Geol-eum-geol-i.png';
import gToolDiagram1 from '@/assets/images/project/g-tool/diagram1.png';
import gToolDiagram2 from '@/assets/images/project/g-tool/diagram2.png';
import gToolDiagram3 from '@/assets/images/project/g-tool/diagram3.png';
import gToolDiagram4 from '@/assets/images/project/g-tool/diagram4.png';
import gToolDiagram5 from '@/assets/images/project/g-tool/diagram5.png';

const gToolImages: Record<string, string> = {
  diagram1: gToolDiagram1,
  diagram2: gToolDiagram2,
  diagram3: gToolDiagram3,
  diagram4: gToolDiagram4,
  diagram5: gToolDiagram5,
};

const gToolMarkdown = `## 프로젝트 개요

**G-Tool**은 Gmail, 네이버 메일, Google Calendar, 할일, 북마크를 하나의 화면에서 관리하는 AI 기반 생산성 플랫폼입니다.

### 개발 동기

메일 분류를 자동화하기 위해 GenSpark의 AI 이메일 워크플로우를 사용하고 있었다.
하지만 프리티어 사용량이 금방 소진되었고 유료 결제를 하기보다는 직접 만들어보자는 생각으로 프로젝트를 시작했다.

처음에는 Gmail AI 분류만 구현하려 했지만 만드는 과정에서 네이버 메일도 통합하고 캘린더·할일·북마크처럼 평소 자주 쓰는 기능들을 하나씩 추가하면서 **통합 생산성 플랫폼**으로 발전시켰다.
배포 과정에서 500 에러를 수동으로 대응하는 것이 번거로워 Error Bot까지 만들게 되었다.

| 항목 | 내용 |
| --- | --- |
| 개발 기간 | 9일 (2026.02.26 ~ 03.07) |
| 개발 인원 | 1인 (기획, 설계, 구현, 배포) |
| 커밋 | 95개, Feature 브랜치 12개 |
| 코드 규모 | Python ~6,500줄 / TypeScript ~6,400줄 / 테스트 26개 파일 |
| 배포 | Oracle Cloud ARM + Docker Compose + 자동 HTTPS |

### 기술 스택

| 영역 | 스택 |
| --- | --- |
| Backend | Python 3.12, FastAPI, SQLAlchemy (async), SQLite |
| Frontend | Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, @dnd-kit |
| AI | OpenAI gpt-4o-mini (분류), gpt-4o (에러 분석) |
| 인증 | Google OAuth 2.0, JWT 쿠키, Fernet AES128 토큰 암호화 |
| 인프라 | Docker Compose, Caddy, GitHub Actions CI/CD |

---

## 1. 문제와 해결 — 메일이 분산되어 있다

### 문제 (As-Is)

Gmail과 네이버 메일을 각각 확인해야 하고, 수십 통의 메일 속에서 중요한 메일이 프로모션에 묻힌다.
분류는 수동이고, 서비스를 오가며 확인하는 것은 비효율적이다.

### 해결 (To-Be)

Gmail API와 네이버 IMAP으로 메일을 통합 수집하고, AI가 7개 카테고리(업무, 개인, 금융, 프로모션, 뉴스레터, 알림, 중요)로 자동 분류한다.
사용자는 하나의 통합 인박스에서 모든 메일을 확인하고, 드래그앤드롭으로 분류를 수정할 수 있다.

![메일 통합 — As-Is / To-Be 비교]({{diagram1}})

### 기술적 고민과 결정

**1) 프로토콜이 다른 두 소스를 어떻게 통합할 것인가**

Gmail은 REST API (pageToken 페이지네이션), 네이버는 IMAP 프로토콜 (UID 기반)이다.
공통 \`Mail\` 모델에 \`source\` 필드를 두어 출처를 구분하면서, 동일한 Classification 테이블로 분류 결과를 저장했다.
동기화 상태는 \`SyncState\` 테이블에서 사용자별·소스별로 관리하여 증분 동기화를 구현했다.

\`\`\`python
# Mail 모델 — source로 출처 구분, 나머지 스키마는 동일
class Mail(Base):
    source = Column(String, nullable=False)      # "gmail" | "naver"
    external_id = Column(String, nullable=False)  # Gmail message ID 또는 Naver UID
    # ... 공통 필드: subject, from_name, body_text, body_html, ...

# SyncState — 소스별 증분 동기화 지점 추적
class SyncState(Base):
    source = Column(String)            # "gmail" | "naver"
    next_page_token = Column(String)   # Gmail용
    last_uid = Column(Integer)         # Naver IMAP용
\`\`\`

**2) AI 분류 비용과 속도**

메일 수십 통을 한 번에 분류하면 API 비용과 응답 시간이 문제였다. 여러 최적화를 거쳐 개선했다.

| 개선 항목 | Before | After | 개선 효과 |
| --- | --- | --- | --- |
| 처리 방식 | 순차 처리 (1건씩) | 15개 청크 × 병렬 3개 | 50건 분류 시 ~45초 → ~12초 (약 73% 단축) |
| 토큰 소비 | 본문 전체 전송 (500자) | 300자 truncate | 요청당 토큰 ~40% 절감 |
| JSON 파싱 | 수동 파싱 + 실패 시 재시도 | Structured Outputs | 파싱 실패율 ~5% → 0% |
| UX | 완료까지 로딩 스피너만 표시 | SSE 실시간 진행률 | 사용자 체감 대기 시간 감소 |

- 15개씩 청크로 나누고 \`asyncio.gather\` + \`Semaphore(3)\`으로 병렬 처리
- 본문을 300자로 truncate하여 토큰 소비 최소화
- OpenAI Structured Outputs로 JSON 스키마를 강제하여 파싱 실패 제거
- **SSE(Server-Sent Events) 스트리밍**으로 진행률을 실시간 전송

![메일 분류 파이프라인]({{diagram2}})

**3) 분류 정확도를 어떻게 개선할 것인가**

AI가 틀리게 분류한 메일을 사용자가 드래그로 수정하면, 그 피드백이 다음 분류에 반영된다.

- \`Classification.user_feedback\`에 수정된 카테고리를 기록
- 동일 발신자에 대한 수정이 2회 이상이면 **발신자 규칙** 자동 생성 → AI 호출 없이 즉시 분류
- 최근 피드백 10건을 few-shot 예시로 프롬프트에 주입

이 방식으로 분류를 쓸수록 정확도가 올라가는 **피드백 루프**를 구현했다.

| 지표 | 초기 (AI only) | 피드백 학습 적용 후 |
| --- | --- | --- |
| 분류 정확도 | ~78% | ~91% (피드백 50건 이상 누적 기준) |
| 발신자 규칙 자동 적용 비율 | 0% | ~25% (자주 받는 메일 기준) |
| 발신자 규칙 대상 AI 호출 절감 | — | API 호출 ~25% 감소 |

---

## 2. 문제와 해결 — 프로덕션 500 에러를 수동으로 대응한다

### 문제 (As-Is)

배포 후 500 에러가 발생하면, 에러를 인지하는 것부터 로그 확인 → 원인 분석 → 코드 수정 → PR → 배포까지 모두 수동이다. 에러를 모르고 넘어가는 경우도 있다.

### 해결 (To-Be)

에러 발생 즉시 Error Bot이 자동으로: Discord 알림 → 소스 코드 분석 → AI 수정안 생성 → GitHub PR 생성.

![Error Bot 파이프라인]({{diagram3}})

### 기술적 고민과 결정

**1) AI가 파일 전체를 재작성하는 문제**

초기 버전(gpt-4o-mini)은 수정이 아닌 **파일 전체 교체**를 생성하는 문제가 있었다.
코드 추론 능력이 부족한 모델은 "이 부분만 바꿔라"라는 지시를 따르기 어려웠다.

| 개선 항목 | Before (gpt-4o-mini) | After (gpt-4o + diff 스키마) |
| --- | --- | --- |
| 수정 정확도 | ~30% (대부분 파일 전체 교체) | ~75% (정확한 부분 수정) |
| 불필요한 변경 포함 | ~60% | ~10% (no-op 필터링 적용) |
| PR 병합 가능 비율 | ~15% | ~65% |

- **모델 교체**: gpt-4o-mini → gpt-4o (코드 추론 품질 우선)
- **스키마 전환**: 파일 전체 교체 → \`{original, modified}\` 쌍의 diff 기반 스키마
- **안전장치 추가**:
  - 삭제 라인 > 추가 라인 × 3 → 거부 (과도한 삭제)
  - 삭제 라인 > 원본 × 50% → 거부 (벌크 삭제)
  - \`original == modified\` → 자동 제거 (no-op)

**2) 같은 에러로 PR이 반복 생성되는 문제**

5분 동안 같은 API 엔드포인트에서 동일한 에러가 10번 발생하면 PR이 10개 생성된다.

- SHA256(\`errorType + errorMessage + stackTrace[:200]\`) 해시로 중복 검사
- 30분 TTL → 같은 에러는 한 번만 처리

**3) 에러 컨텍스트가 부족한 문제**

스택트레이스에 나온 파일만으로는 원인 파악이 어려운 경우가 많다.
해당 파일이 import하는 모듈까지 포함해야 AI가 정확한 수정안을 만들 수 있다.

- 에러 파일의 \`import\` 구문을 파싱하여 관련 파일을 N-depth까지 재귀 수집
- 에러 파일(수정 대상)과 컨텍스트 파일(참고용)을 구분하여 AI 프롬프트에 제공

---

## 3. 문제와 해결 — URL 파라미터로 user_id를 전달하는 보안 문제

### 문제 (As-Is)

초기 프로젝트는 개인적으로 쓰기 위한 단순 메일 분류용이었기에 별 다른 보안 장치 없이 \`?user_id=1\`로 인증을 처리했다. 하지만 프로젝트를 확장하면서 여러 개인 정보들이 많이 포함되게 되었고 URL만 바꾸면 다른 사용자의 데이터에 접근할 수 있는 심각한 보안 문제가 야기될 수 있다고 생각됐다.

### 해결 (To-Be)

JWT 쿠키 기반 인증 + DB 토큰 암호화로 전환했다.

![인증 플로우 — As-Is / To-Be]({{diagram4}})

### 개선 수치

| 항목 | Before | After |
| --- | --- | --- |
| 인증 방식 | URL query parameter (검증 없음) | JWT 쿠키 (httpOnly, Secure, SameSite) |
| 토큰 저장 | DB에 평문 저장 | Fernet AES128 암호화 저장 |
| 수정 범위 | — | 프론트엔드 10개 훅, ~35곳 API 호출 일괄 수정 |
| 보안 헤더 | 없음 | HSTS, X-Frame-Options, CSP 등 5종 |

### 기술적 고민과 결정

**1) 프론트엔드 전면 수정**

10개 훅, ~35곳의 API 호출에서 \`?user_id=\${userId}\` 파라미터를 제거해야 했다.
\`credentials: "include"\` 한 줄로 모든 fetch에 쿠키를 자동 전송하도록 설계하여, 각 훅에서 인증 관련 코드를 완전히 제거했다.

**2) 전역 인증 상태 관리**

기존에는 \`localStorage\`와 URL 파라미터에서 userId를 읽었다.
\`useSyncExternalStore\` 패턴으로 모듈 레벨에 인증 상태를 저장하는 외부 스토어를 구현했다. Redux/Zustand 같은 라이브러리 없이도 SSR 안전한 전역 상태를 구현할 수 있었다.

**3) DB 토큰 보호**

DB 유출 시에도 OAuth 토큰이 노출되지 않도록 Fernet 대칭 암호화(AES128-CBC + HMAC)를 적용했다.
\`SECRET_KEY\` → SHA256 해시 → base64 인코딩 → Fernet 키 유도.
토큰의 저장, 읽기, 갱신 모든 지점에서 암복호화가 동작한다.

---

## 4. 시스템 아키텍처

![전체 시스템 아키텍처]({{diagram5}})

---

## 5. 개발 과정에서의 주요 설계 결정

### AI 모델 선택: 용도별 분리

| 용도 | 모델 | 이유 |
| --- | --- | --- |
| 메일 분류 | gpt-4o-mini | 7개 카테고리 단순 선택 → 비용 효율 우선 |
| 에러 분석 | gpt-4o | 코드 추론 필요 → 품질 우선 (gpt-4o-mini는 파일 재작성 문제 발생) |

### 상태 관리: 전역 store 없이 Feature별 Hook + Context

Redux/Zustand를 사용하지 않았다.
인증만 \`useSyncExternalStore\`로 전역 관리하고, 메일/캘린더/할일/북마크는 각각 독립된 \`Context + Hook\` 조합으로 관리한다.

| Feature | 상태 관리 패턴 |
| --- | --- |
| 인증 | useSyncExternalStore (모듈 레벨 외부 스토어) |
| 메일 | 커스텀 훅 (useMessages, useMailActions 등) |
| 할일 | TodoContext + useTodo + useSubtasks |
| 북마크 | BookmarkContext + useBookmarks |
| 캘린더 | 커스텀 훅 (useCalendar) |

### 동기화: Gmail과 네이버의 증분 동기화 전략

매번 전체 메일을 가져오지 않고 새로운 메일만 동기화한다.

- **Gmail**: \`pageToken\` 기반 — API가 반환하는 다음 페이지 토큰을 DB에 저장
- **네이버**: \`UID\` 기반 — 마지막으로 동기화한 UID 이후의 메일만 가져오기
- **배경 동기화**: APScheduler로 15분 주기 자동 실행

| 지표 | 전체 동기화 | 증분 동기화 |
| --- | --- | --- |
| Gmail 동기화 시간 (메일 500건 기준) | ~18초 | ~2초 (신규 메일만) |
| API 호출 횟수 | 매번 10+ 페이지 | 평균 1~2 페이지 |

---

## 6. 프로젝트 규모 상세

| 항목 | 수치 |
| --- | --- |
| 개발 기간 | 9일 |
| 커밋 | 95개 |
| Feature 브랜치 | 12개 |
| Error Bot 자동 생성 브랜치 | 6개 |
| Phase (개발 단계) | 23개 |
| Backend (Python) | ~4,800줄 |
| Frontend (TS/TSX) | ~6,400줄 |
| Error Bot (Python) | ~1,700줄 |
| 테스트 파일 | 26개 (backend 10 + frontend 7 + bot 9) |
`;

// Example media items for carousel testing
// To add more images or videos to a project, add them to the media array
// If media array is not provided, the project.image will be used as a single image

export const projects: Project[] = [
  {
    title: 'G-Tool',
    description:
      'Gmail, 네이버 메일, Google Calendar, 할일, 북마크를 하나의 화면에서 관리하는 AI 기반 생산성 플랫폼',
    projectType: 'Side',
    image: 'https://img.youtube.com/vi/AqSLR8EXAg8/sddefault.jpg',
    media: [
      {
        type: 'video',
        src: 'https://youtu.be/AqSLR8EXAg8',
        poster: 'https://img.youtube.com/vi/AqSLR8EXAg8/sddefault.jpg',
      },
    ],
    tags: ['FastAPI', 'Next.js', 'OpenAI', 'Docker', 'OAuth 2.0'],
    github: 'https://github.com/Kimgyuilli/g-tool',
    demo: 'https://gtool.kro.kr/',
    categories: ['Frontend', 'Backend', 'AI'],
    techStack: {
      frontend: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', '@dnd-kit'],
      backend: ['Python 3.12', 'FastAPI', 'SQLAlchemy (async)', 'SQLite'],
      deployment: [
        'Oracle Cloud ARM',
        'Docker Compose',
        'Caddy',
        'GitHub Actions CI/CD',
      ],
    },
    duration: '2026.02.26 ~ 03.07 (9일)',
    teamSize: '1명',
    role: '풀스택 개발자 (기획, 설계, 구현, 배포)',
    markdownContent: gToolMarkdown,
    markdownImages: gToolImages,
  },
  {
    title: 'Cherrish',
    description:
      '미용 시술 일정과 다운타임을 관리하고, AI 기반 챌린지 루틴을 추천하는 뷰티 캘린더 앱',
    projectType: 'Main',
    image: cherrishImage,
    media: [
      { type: 'video', src: 'https://youtu.be/vPlPQkr4N3s', poster: cherrish1 },
      { type: 'image', src: cherrish1, alt: 'Cherrish 표지' },
      { type: 'image', src: cherrish2, alt: 'Cherrish 장표 2' },
      { type: 'image', src: cherrish3, alt: 'Cherrish 장표 3' },
      { type: 'image', src: cherrish4, alt: 'Cherrish 장표 4' },
      { type: 'image', src: cherrish5, alt: 'Cherrish 장표 5' },
      { type: 'image', src: cherrish6, alt: 'Cherrish 장표 6' },
      { type: 'image', src: cherrish7, alt: 'Cherrish 장표 7' },
      { type: 'image', src: cherrish8, alt: 'Cherrish 장표 8' },
      { type: 'image', src: cherrish9, alt: 'Cherrish 장표 9' },
      { type: 'image', src: cherrish10, alt: 'Cherrish 장표 10' },
      { type: 'image', src: cherrish11, alt: 'Cherrish 장표 11' },
      { type: 'image', src: cherrish12, alt: 'Cherrish 장표 12' },
      { type: 'image', src: cherrish13, alt: 'Cherrish 장표 13' },
      { type: 'image', src: cherrish14, alt: 'Cherrish 장표 14' },
      { type: 'image', src: cherrish15, alt: 'Cherrish 장표 15' },
      { type: 'image', src: cherrish16, alt: 'Cherrish 장표 16' },
      { type: 'image', src: cherrish17, alt: 'Cherrish 장표 17' },
      { type: 'image', src: cherrish18, alt: 'Cherrish 장표 18' },
      { type: 'image', src: cherrish19, alt: 'Cherrish 장표 19' },
      { type: 'image', src: cherrish20, alt: 'Cherrish 장표 20' },
      { type: 'image', src: cherrish21, alt: 'Cherrish 장표 21' },
      { type: 'image', src: cherrish22, alt: 'Cherrish 장표 22' },
      { type: 'image', src: cherrish23, alt: 'Cherrish 장표 23' },
      { type: 'image', src: cherrish24, alt: 'Cherrish 장표 24' },
      { type: 'image', src: cherrish25, alt: 'Cherrish 장표 25' },
      { type: 'image', src: cherrish26, alt: 'Cherrish 장표 26' },
      { type: 'image', src: cherrish27, alt: 'Cherrish 장표 27' },
      { type: 'image', src: cherrish28, alt: 'Cherrish 장표 28' },
      { type: 'image', src: cherrish29, alt: 'Cherrish 장표 29' },
      { type: 'image', src: cherrish30, alt: 'Cherrish 장표 30' },
      { type: 'image', src: cherrish31, alt: 'Cherrish 장표 31' },
      { type: 'image', src: cherrish32, alt: 'Cherrish 장표 32' },
      { type: 'image', src: cherrish33, alt: 'Cherrish 장표 33' },
      { type: 'image', src: cherrish34, alt: 'Cherrish 장표 34' },
      { type: 'image', src: cherrish35, alt: 'Cherrish 장표 35' },
    ],
    tags: ['Spring Boot', 'Spring AI', 'PostgreSQL', 'QueryDSL', 'AWS'],
    github: 'https://github.com/TEAM-Cherrish/Cherrish-Server',
    demo: '#',
    categories: ['Backend', 'AI'],
    detailedDescription:
      '개인의 추구미에 맞는 뷰티 관리 방향을 정리하고, 시술 후 다운타임과 일정 중복을 방지하는 뷰티 캘린더 앱입니다. 피부 고민 키워드 기반 시술 검색, 민감기/주의기/회복기로 구분된 다운타임 시각화, AI 기반 7일 챌린지 루틴 추천, 체리 레벨 게이미피케이션 등의 기능을 제공합니다. DDD 레이어드 아키텍처를 적용하여 도메인별 책임을 명확히 분리하고 확장성 있는 구조를 설계했습니다.',
    features: [
      '피부 고민 키워드 기반 시술 검색 및 추천',
      '사용자 맞춤 다운타임 설정 (민감기/주의기/회복기 자동 분할)',
      'D-day 카운트다운 및 다운타임 진행 상태 시각화',
      'Spring AI 기반 7일 챌린지 루틴 자동 생성',
      '체리 레벨(1~4) 게이미피케이션 시스템',
      '월간/일간 캘린더 뷰 및 시술 일정 관리',
      '메인 대시보드 (챌린지 현황, 다운타임 진행 중 시술, 다가오는 일정)',
    ],
    techStack: {
      frontend: ['(팀원 담당)'],
      backend: [
        'Java 21',
        'Spring Boot 3.5.9',
        'Spring Data JPA',
        'QueryDSL 5.1.0',
        'Spring AI OpenAI 1.1.2',
      ],
      database: ['PostgreSQL 17'],
      deployment: [
        'AWS (VPC, EC2, RDS, ECR, SSM)',
        'Docker (Jib)',
        'Nginx',
        'GitHub Actions OIDC CI/CD',
      ],
    },
    challenges: [
      '초기 컨벤션 수립 및 checkStyle, codeRabbit, jacoco, docker를 활용한 협업 규격 설계',
      'Spring AI OpenAI 연동으로 사용자 맞춤형 챌린지 루틴 및 챌린지명 자동 생성',
      'QueryDSL을 활용한 복잡한 캘린더/다운타임 조회 쿼리 최적화',
      'GitHub Actions OIDC + AWS SSM 기반 무중단 배포 파이프라인 구축',
      '다운타임 3단계 분할 로직 설계 (일수를 3으로 나눠 민감기/주의기/회복기 자동 계산)',
      'Server 500 오류 발생 시 디스코드 알림 전송 기능 구현',
    ],
    outcome:
      'DDD 아키텍처 기반 확장 가능한 백엔드 설계, OIDC 인증 기반 보안적인 CI/CD 파이프라인 구축, AI 통합 서비스 개발 경험',
    duration: '2025.12 - 2026.02',
    teamSize: '2명 (Server)',
    role: 'Server Lead Developer',
  },
  {
    title: 'RAG 챗봇',
    description:
      '문서를 업로드하면 청크 분할 및 벡터 임베딩 후 저장하고, 사용자 질문 시 관련 문서를 하이브리드 검색하여 LLM이 답변하는 RAG(Retrieval-Augmented Generation) 챗봇',
    projectType: 'Learning',
    image: 'https://img.youtube.com/vi/6pHZYR6I-iE/maxresdefault.jpg',
    media: [
      {
        type: 'video',
        src: 'https://youtu.be/6pHZYR6I-iE',
        poster: 'https://img.youtube.com/vi/6pHZYR6I-iE/maxresdefault.jpg',
      },
    ],
    tags: ['Spring Boot', 'Spring AI', 'PostgreSQL', 'pgvector', 'Docker'],
    github: 'https://github.com/Kimgyuilli/rag-template',
    demo: '#',
    categories: ['Backend', 'AI'],
    detailedDescription:
      '문서를 업로드하면 청크 분할 및 벡터 임베딩 후 저장하고, 사용자 질문 시 관련 문서를 하이브리드 검색하여 LLM이 답변하는 RAG(Retrieval-Augmented Generation) 챗봇입니다. Spring AI Advisor 체인을 활용한 쿼리 리라이팅, pgvector 유사도 검색과 tsvector 키워드 검색을 RRF로 병합하는 하이브리드 검색, LLM 리랭킹 파이프라인을 구현했습니다.',
    features: [
      '문서 업로드 시 청크 분할 및 벡터 임베딩 자동 처리',
      'pgvector 유사도 검색 + tsvector 키워드 검색 하이브리드 검색',
      'RRF(Reciprocal Rank Fusion) 기반 검색 결과 병합',
      'Spring AI Advisor 체인을 활용한 쿼리 리라이팅',
      'LLM 리랭킹을 통한 검색 정확도 향상',
      'SSE(Server-Sent Events) 기반 실시간 스트리밍 응답',
    ],
    techStack: {
      backend: [
        'Java 21',
        'Spring Boot 3.5',
        'Spring AI 1.1',
        'Spring Data JPA',
        'Apache PDFBox 3.0',
        'OpenAI API (gpt-4o-mini)',
        'text-embedding-3-small',
      ],
      database: ['PostgreSQL 16', 'pgvector (HNSW, cosine)', 'tsvector'],
      frontend: ['Vanilla HTML/CSS/JS', 'SSE (Server-Sent Events)'],
      deployment: ['Docker', 'Docker Compose'],
    },
    challenges: [
      'Spring AI Advisor 체인을 활용한 쿼리 리라이팅 → 하이브리드 검색 → LLM 리랭킹 파이프라인 설계',
      'pgvector 유사도 검색 + tsvector 키워드 검색을 RRF(Reciprocal Rank Fusion)로 병합하는 하이브리드 검색 구현',
      '마크다운 구조 기반 문서 청크 분할 및 벡터 임베딩 파이프라인 구현',
    ],
    outcome:
      'RAG 파이프라인 설계 및 하이브리드 검색 구현 경험, Spring AI 기반 LLM 통합 아키텍처 학습',
    duration: '2026.02',
    teamSize: '1명',
    role: '풀스택 개발자',
  },
  {
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
  },
  {
    title: 'Shamrock Tales',
    description:
      '육아 일기를 아일랜드 설화 스타일로 변환해주는 AI 기반 웹 서비스. 간단한 한 줄 기록이 감성적인 가족 이야기로 재탄생합니다.',
    projectType: 'Side',
    image: shamrockTalesImage,
    // Example: Add media array for carousel (uncomment to test)
    // media: [
    //   { type: 'image', src: shamrockTalesImage, alt: 'Shamrock Tales Main' },
    //   { type: 'video', src: '/videos/shamrock-demo.mp4', poster: shamrockTalesImage },
    //   { type: 'image', src: '/images/shamrock-2.png', alt: 'Shamrock Tales Feature' },
    // ] as MediaItem[],
    tags: ['Spring Boot', 'Spring AI', 'MySQL', 'OpenAI'],
    github: 'https://github.com/SOPT-all/37-SOPKATHON-SERVER-WEB3',
    demo: '#',
    categories: ['Backend', 'AI'],
    detailedDescription:
      "아일랜드 전통 이야기꾼 'Seanchaí'에서 영감을 받아, 바쁜 일상 속 짧은 육아 순간을 의미 있는 가족 스토리로 변환하는 서비스입니다. 사용자가 입력한 육아 일기를 AI가 분석하여 아일랜드 민담 스타일의 서사로 재구성합니다.",
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
      'OpenAI API와 Spring AI 통합으로 안정적인 스토리 생성',
      '감정 키워드 기반 분류 알고리즘 설계',
      '짧은 해커톤 기간 내 기획 방향성 정의 및 MVP 구현',
    ],
    outcome: 'SOPT 37기 해커톤 웹 서비스 부문 대상 수상',
    duration: '2025.11 (해커톤)',
    teamSize: '2명 (Server)',
    role: 'Server Lead Developer',
  },
  {
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
  },
  {
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
  },
  {
    title: '걸음걸이 (Geol-eum-geol-i)',
    description:
      '멈추지 않을 당신의 걸음을 위한 맞춤형 서비스. 일일 걸음 추적부터 커뮤니티 참여까지, 걷기 문화를 함께 만들어가는 웹 플랫폼입니다.',
    projectType: 'Side',
    image: geolEumGeolImage,
    tags: ['Django', 'Python', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
    github: 'https://github.com/pirogramming/geol-eum-geol-i',
    demo: '#',
    categories: ['Frontend', 'Backend'],
    detailedDescription:
      '걸음걸이는 걷기 활동을 체계적으로 추적하고 관리할 수 있는 웹 애플리케이션입니다. 피로그래밍 동아리에서 한 달간 주 3회 대면 회의를 통해 스타트업처럼 100% 몰입하며 개발한 프로젝트입니다. 실시간 걸음 추적, 월별 통계 시각화, 커뮤니티 랭킹 시스템, 장소 추천 기능 등을 통해 사용자들이 건강한 걷기 습관을 형성하도록 돕습니다. 디스코드, 피그마, 노션, 깃을 활용한 협업 경험을 쌓았으며, 특히 사용자 관리 시 데이터베이스 설계와 보안 방식에 대해 깊이 고민했습니다.',
    features: [
      '실시간 걸음 추적 (거리, 칼로리, 속도 지표 제공)',
      '월별 통계를 시각적으로 표시하는 캘린더 뷰',
      '"함께 걷기" 포럼으로 러닝 메이트 찾기',
      '"이달의 걷기왕" 랭킹 시스템 (월간 상위 5명 표시)',
      '추천 걷기 코스 및 키워드/지도 기반 코스 검색',
      '소셜 로그인 (네이버, 구글) 및 프로필 커스터마이징',
    ],
    techStack: {
      frontend: ['HTML5', 'CSS3', 'JavaScript'],
      backend: ['Python 3.12.8', 'Django 4.2.19', 'Django REST Framework 3.15.2'],
      database: ['MySQL 8.0.41'],
      deployment: ['AWS'],
    },
    challenges: [
      '사용자 데이터베이스 설계 및 보안 강화 (소셜 로그인 통합)',
      '실시간 걸음 추적 데이터 처리 및 월별 통계 시각화',
      '커뮤니티 랭킹 시스템 및 사용자 상호작용 기능 구현',
      '피그마, 노션, 깃을 활용한 팀 협업 프로세스 최적화',
    ],
    outcome:
      '실제 도메인 배포 (geoleum.kr), 한 달간 스타트업 방식 몰입형 개발로 팀 협업 역량 강화, 사용자 관리 및 보안 설계 경험 축적',
    duration: '2025.01 - 2025.02',
    teamSize: '5명 (풀스택)',
    role: '풀스택 개발자 (사용자 관리, 데이터베이스 설계, 보안)',
  },
];
