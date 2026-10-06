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

**G-Tool**은 Gmail·네이버 메일·Google Calendar·할 일·북마크를 한 화면에서 관리하는 개인 웹 도구다. 반복해서 확인하던 메일을 한곳에 모아 분류하려고 만들었다.

### 담당 범위와 주요 작업

기획·설계·구현·배포를 단독 수행함.

- **메일 통합 및 증분 동기화**: Gmail API와 네이버 IMAP의 메일을 공통 모델로 수집하고, 소스별 동기화 지점을 관리했다.
- **500 오류 대응 자동화**: 관련 코드를 모아 수정안을 만들고 PR을 생성하는 Error Bot을 붙였다.
- **인증 및 토큰 보호**: URL의 사용자 ID로 데이터를 선택하던 방식에 JWT 쿠키 인증을 적용하고 DB의 OAuth 토큰을 암호화했다.

### 프로젝트 배경

메일 분류를 자동화하기 위해 GenSpark의 AI 이메일 워크플로우를 사용하고 있었다.
하지만 프리티어 사용량이 금방 소진되었고 유료 결제를 하기보다는 직접 만들어보자는 생각으로 프로젝트를 시작했다.

처음에는 Gmail 분류만 구현하려 했다. 이후 네이버 메일과 캘린더·할일·북마크를 차례로 추가했다. 배포 후에는 500 에러를 수동으로 처리하던 과정을 줄이기 위해 Error Bot을 만들었다.


---

## 메일 통합과 자동 분류

Gmail과 네이버 메일을 각각 확인해야 하고, 수십 통의 메일 속에서 중요한 메일이 프로모션에 묻힌다.
분류는 수동이고, 서비스를 오가며 확인하는 것은 비효율적이다.

Gmail API와 네이버 IMAP으로 메일을 통합 수집하고, AI가 7개 카테고리(업무, 개인, 금융, 프로모션, 뉴스레터, 알림, 중요)로 자동 분류한다.
사용자는 하나의 통합 인박스에서 모든 메일을 확인하고, 드래그앤드롭으로 분류를 수정할 수 있다.

![메일 통합: As-Is / To-Be 비교]({{diagram1}})

**Gmail과 네이버 메일의 공통 모델**

Gmail은 REST API (pageToken 페이지네이션), 네이버는 IMAP 프로토콜 (UID 기반)이다.
공통 \`Mail\` 모델에 \`source\` 필드를 두어 출처를 구분하면서, 동일한 Classification 테이블로 분류 결과를 저장했다.
동기화 상태는 \`SyncState\` 테이블에서 사용자별·소스별로 관리하여 증분 동기화를 구현했다.

\`\`\`python
# Mail 모델: source로 출처 구분, 나머지 스키마는 동일
class Mail(Base):
    source = Column(String, nullable=False)      # "gmail" | "naver"
    external_id = Column(String, nullable=False)  # Gmail message ID 또는 Naver UID
    # ... 공통 필드: subject, from_name, body_text, body_html, ...

# SyncState: 소스별 증분 동기화 지점 추적
class SyncState(Base):
    source = Column(String)            # "gmail" | "naver"
    next_page_token = Column(String)   # Gmail용
    last_uid = Column(Integer)         # Naver IMAP용
\`\`\`

**AI 분류 비용과 속도**

메일 수십 통을 분류할 때 처리 시간과 요청량을 줄이기 위해 병렬 처리와 입력 길이 제한을 적용했다.

| 항목 | 변경 전 | 변경 후 |
| --- | --- | --- |
| 처리 방식 | 한 건씩 순차 처리 | 메일 15건씩 묶어 최대 3묶음 병렬 처리 |
| 입력 길이 | 본문 500자 전송 | 본문을 300자로 제한 |
| 응답 형식 | 수동 JSON 파싱 | Structured Outputs로 JSON 스키마 지정 |
| 진행 상태 | 완료까지 로딩 스피너 표시 | SSE로 진행률 전송 |

- 15개씩 청크로 나누고 \`asyncio.gather\` + \`Semaphore(3)\`으로 병렬 처리
- 본문을 300자로 잘라 입력 길이를 제한
- OpenAI Structured Outputs로 JSON 응답 스키마 지정
- **SSE(Server-Sent Events) 스트리밍**으로 진행률을 실시간 전송

![메일 분류 파이프라인]({{diagram2}})

**사용자 수정 이력 반영**

AI가 틀리게 분류한 메일을 사용자가 드래그로 수정하면, 그 피드백이 다음 분류에 반영된다.

- \`Classification.user_feedback\`에 수정된 카테고리를 기록
- 동일 발신자에 대한 수정이 2회 이상이면 **발신자 규칙** 자동 생성 → AI 호출 없이 즉시 분류
- 최근 피드백 10건을 few-shot 예시로 프롬프트에 주입

사용자 수정 이력을 발신자 규칙과 다음 분류의 프롬프트에 반영했다. 발신자 규칙에 해당하는 메일은 AI 호출 없이 처리한다.

---

## 500 오류 감지와 수정안 생성

배포 후 500 에러가 발생하면, 에러를 인지하는 것부터 로그 확인 → 원인 분석 → 코드 수정 → PR → 배포까지 모두 수동이다. 에러를 모르고 넘어가는 경우도 있다.

에러 발생 즉시 Error Bot이 자동으로: Discord 알림 → 소스 코드 분석 → AI 수정안 생성 → GitHub PR 생성.

![Error Bot 파이프라인]({{diagram3}})

**AI가 파일 전체를 재작성하는 문제**

초기 설정에서는 부분 수정 지시를 줘도 파일 전체를 교체하는 응답이 나왔다. 이후 모델과 응답 스키마를 바꾸고 불필요한 변경을 거르는 검사를 추가했다.

- **모델 교체**: gpt-4o-mini → gpt-4o
- **스키마 전환**: 파일 전체 교체 → \`{original, modified}\` 쌍의 diff 기반 스키마
- **안전장치 추가**:
  - 삭제 라인 > 추가 라인 × 3 → 거부 (과도한 삭제)
  - 삭제 라인 > 원본 × 50% → 거부 (벌크 삭제)
  - \`original == modified\` → 자동 제거 (no-op)

**같은 에러로 PR이 반복 생성되는 문제**

5분 동안 같은 API 엔드포인트에서 동일한 에러가 10번 발생하면 PR이 10개 생성된다.

- SHA256(\`errorType + errorMessage + stackTrace[:200]\`) 해시로 중복 검사
- 30분 TTL → 같은 에러는 한 번만 처리

**에러 컨텍스트가 부족한 문제**

스택트레이스에 나온 파일만으로는 원인 파악이 어려운 경우가 많다.
수정안을 만들 때 관련 모듈의 코드도 참고할 수 있도록 import를 따라 파일을 수집했다.

- 에러 파일의 \`import\` 구문을 파싱하여 관련 파일을 N-depth까지 재귀 수집
- 에러 파일(수정 대상)과 컨텍스트 파일(참고용)을 구분하여 AI 프롬프트에 제공

---

## 사용자 인증과 토큰 보호

초기에는 요청의 \`user_id\`로 사용자 데이터를 선택했고, 요청자의 신원은 검증하지 않았다. 메일·일정 기능이 늘면서 개인정보를 다루는 범위가 넓어졌고, URL의 사용자 ID를 바꾸면 다른 사용자의 데이터에 접근할 수 있었다.

JWT 쿠키 기반 인증을 적용하고 DB에 저장하는 OAuth 토큰을 암호화했다.

![인증 플로우: As-Is / To-Be]({{diagram4}})

### 인증과 토큰 저장 방식의 변경

| 항목 | Before | After |
| --- | --- | --- |
| 요청 사용자 확인 | URL의 사용자 ID 사용 (신원 검증 없음) | JWT 쿠키 검증 (httpOnly, Secure, SameSite) |
| 토큰 저장 | DB에 평문 저장 | Fernet AES128 암호화 저장 |
| 수정 범위 | - | 프론트엔드 10개 훅, ~35곳 API 호출 일괄 수정 |
| 보안 헤더 | 없음 | HSTS, X-Frame-Options, CSP 등 5종 |

**프론트엔드 전면 수정**

10개 훅, ~35곳의 API 호출에서 \`?user_id=\${userId}\` 파라미터를 제거해야 했다.
\`credentials: "include"\` 한 줄로 모든 fetch에 쿠키를 자동 전송하도록 설계하여, 각 훅에서 인증 관련 코드를 완전히 제거했다.

**전역 인증 상태 관리**

기존에는 \`localStorage\`와 URL 파라미터에서 userId를 읽었다.
\`useSyncExternalStore\` 패턴으로 모듈 레벨에 인증 상태를 저장하는 외부 스토어를 구현했다. Redux/Zustand 같은 라이브러리 없이도 SSR 안전한 전역 상태를 구현할 수 있었다.

**DB 토큰 보호**

DB 유출 시에도 OAuth 토큰이 노출되지 않도록 Fernet 대칭 암호화(AES128-CBC + HMAC)를 적용했다.
\`SECRET_KEY\` → SHA256 해시 → base64 인코딩 → Fernet 키 유도.
토큰의 저장, 읽기, 갱신 모든 지점에서 암복호화가 동작한다.

---

## 시스템 구성

![전체 시스템 아키텍처]({{diagram5}})

---

## 추가 설계 결정

### 작업별 AI 모델 선택

| 용도 | 모델 | 이유 |
| --- | --- | --- |
| 메일 분류 | gpt-4o-mini | 7개 카테고리 단순 선택 → 비용 효율 우선 |
| 에러 분석 | gpt-4o | 파일 전체 교체 응답에 대응하며 diff 스키마와 함께 적용 |

### 화면 상태 관리

Redux/Zustand를 사용하지 않았다.
인증만 \`useSyncExternalStore\`로 전역 관리하고, 메일/캘린더/할일/북마크는 각각 독립된 \`Context + Hook\` 조합으로 관리한다.

| Feature | 상태 관리 패턴 |
| --- | --- |
| 인증 | useSyncExternalStore (모듈 레벨 외부 스토어) |
| 메일 | 커스텀 훅 (useMessages, useMailActions 등) |
| 할일 | TodoContext + useTodo + useSubtasks |
| 북마크 | BookmarkContext + useBookmarks |
| 캘린더 | 커스텀 훅 (useCalendar) |

### 메일 소스별 증분 동기화

매번 전체 메일을 가져오지 않고 새로운 메일만 동기화한다.

- **Gmail**: API가 반환하는 \`pageToken\`을 DB에 저장
- **네이버**: 마지막으로 동기화한 \`UID\` 이후의 메일만 가져오기
- **배경 동기화**: APScheduler로 15분 주기 자동 실행

| 지표 | 전체 동기화 | 증분 동기화 |
| --- | --- | --- |
| Gmail 동기화 시간 (메일 500건 기준) | ~18초 | ~2초 (신규 메일만) |
| API 호출 횟수 | 매번 10+ 페이지 | 평균 1~2 페이지 |

`;

export const gTool: Project = {
  slug: 'g-tool',
  title: 'G-Tool',
  description: 'Gmail·네이버 메일·캘린더·할일·북마크를 한 화면에서 관리하는 개인 웹 도구',
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
  categories: ['Frontend', 'Backend', 'AI'],
  techStack: {
    frontend: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', '@dnd-kit'],
    backend: ['Python 3.12', 'FastAPI', 'SQLAlchemy (async)', 'SQLite'],
    deployment: ['Oracle Cloud ARM', 'Docker Compose', 'Caddy', 'GitHub Actions CI/CD'],
  },
  duration: '2026.02.26 ~ 2026.04.17',
  teamSize: '1명',
  role: '풀스택 개발자 (기획, 설계, 구현, 배포)',
  markdownContent: gToolMarkdown,
  markdownImages: gToolImages,
};
