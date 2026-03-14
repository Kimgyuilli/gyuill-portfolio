import type { Project } from '@/types';
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

export const gTool: Project = {
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
  duration: '2026.02.26 ~ 현재',
  teamSize: '1명',
  role: '풀스택 개발자 (기획, 설계, 구현, 배포)',
  markdownContent: gToolMarkdown,
  markdownImages: gToolImages,
};
