import type { Project } from '@/types';
import diagramArchitecture from '@/assets/images/project/agent-board/diagram_architecture.png';
import diagramAsIsToBe from '@/assets/images/project/agent-board/diagram_asIs_toBe.png';
import diagramOrchestrator from '@/assets/images/project/agent-board/diagram_orchestrator.png';
import diagramProcess from '@/assets/images/project/agent-board/diagram_process.png';
import diagramRealtime from '@/assets/images/project/agent-board/diagram_realtime.png';

const agentBoardImages: Record<string, string> = {
  diagram_architecture: diagramArchitecture,
  diagram_asIs_toBe: diagramAsIsToBe,
  diagram_orchestrator: diagramOrchestrator,
  diagram_process: diagramProcess,
  diagram_realtime: diagramRealtime,
};

const agentBoardMarkdown = `## 프로젝트 개요

**Agent Board**는 AI 에이전트의 개발 태스크를 관리하고 활동을 실시간 모니터링하는 VS Code 확장이다.

### 개발 동기

Claude Code로 개발하면서, AI 에이전트가 무슨 작업을 하고 있는지 파악하기 어렵고, 여러 에이전트가 동시에 작업할 때 태스크 충돌이나 중복이 빈번하게 발생했다.

터미널 로그를 일일이 확인하거나, 마크다운 파일(PLAN.md, PROGRESS.md)로 진행 상황을 추적하는 것은 한계가 명확했다. 파일이 커질수록 AI 에이전트가 매번 전체 내용을 읽어야 하므로 토큰 소비도 급증했다.

이 불편함을 해결하기 위해 직접 VS Code 확장을 만들기로 결정했다. MCP(Model Context Protocol)를 활용하면 AI 에이전트가 도구를 직접 호출할 수 있다는 점에 착안하여, 에이전트가 칸반 보드의 태스크를 자율적으로 claim → 작업 → complete 하는 시스템을 설계했다. 그리고 이 프로젝트 자체를 Agent Board로 관리하면서 개발했다 — 도구를 만드는 과정에서 도구를 사용하는, 독푸드(dogfooding) 방식으로 개발과 검증을 동시에 진행했다.

| 항목 | 내용 |
| --- | --- |
| 개발 기간 | 9일 (2026.03.06 ~ 03.14) |
| 개발 인원 | 1인 (기획, 설계, 구현, 배포) |
| 커밋 | 130개 (feat 55, fix 38, docs 23, test 5, refactor 3) |
| 코드 규모 | TypeScript ~4,900줄 / 테스트 ~2,900줄 (22개 파일, 163+ 케이스) |
| 개발 관리 | 17개 Phase, 78개 태스크 (전체 완료) |
| 패키징 | VSIX 3.61MB |

### 기술 스택

| 영역 | 스택 |
| --- | --- |
| Extension | TypeScript 5.x (strict), VS Code Extension API, esbuild |
| MCP Server | @modelcontextprotocol/sdk, better-sqlite3, SQLite (WAL) |
| Webview | React, Vite, Tailwind CSS, @dnd-kit |
| 모노레포 | pnpm workspace (shared / extension / mcp-server / webview) |
| 테스트 | Vitest 163개 (단위/통합) + @vscode/test-electron E2E 4개 |

![전체 시스템 아키텍처]({{diagram_architecture}})

---

## 1. 문제와 해결 — 마크다운 태스크 관리의 토큰 폭발

### 문제 (As-Is)

AI 에이전트와 함께 개발할 때 PLAN.md와 PROGRESS.md로 태스크를 추적했다. 세 가지 문제가 있었다.

1. **토큰 폭발** — 에이전트가 상태를 확인하거나 변경할 때마다 파일 전체를 읽어야 한다. 프로젝트가 진행될수록 파일이 커지고, 매번 소비되는 토큰도 선형 증가한다.
2. **태스크 충돌** — 여러 에이전트가 동시에 같은 마크다운 파일을 편집하면 충돌이 발생한다.
3. **진행 상황 불투명** — 에이전트가 어떤 작업을 하고 있는지 터미널 로그를 직접 확인해야 알 수 있다.

실제로 Phase 6(40개 태스크) 시점에서 PLAN.md는 ~5,200자(~1,800 토큰), PROGRESS.md는 ~24,600자(~8,200 토큰)까지 커져 있었다.

### 해결 (To-Be)

MCP 프로토콜을 통해 AI 에이전트가 SQLite DB에서 태스크를 직접 관리하고, VS Code 칸반 보드로 실시간 시각화한다.

![As-Is / To-Be 비교]({{diagram_asIs_toBe}})

### 기술적 고민과 결정

**1) MCP 도구 응답의 토큰 효율 설계**

AI 에이전트가 MCP 도구를 호출할 때마다 응답이 컨텍스트 윈도우를 소비한다. 에이전트가 한 세션에서 수십 회 도구를 호출하므로, 응답 크기가 곧 비용과 직결된다. 모든 MCP 도구 응답을 최소 정보만 포함하도록 설계했다.

| 도구 | 일반적 구현 | Agent Board | 절감 |
| --- | --- | --- | --- |
| sync | 전체 Phase + Task 목록 (~2,500 토큰) | 요약 통계 + 활성 태스크만 (~400 토큰) | ~84% |
| complete | 완료 태스크 + 전체 목록 갱신 (~1,800 토큰) | 완료 결과 + unblock된 태스크만 (~250 토큰) | ~86% |
| batch | 각 작업별 상세 결과 (~3,000 토큰) | \`{ index, type, id }\` 배열만 (~150 토큰) | ~95% |

\`batch\` 도구는 여러 작업을 단일 트랜잭션으로 묶어 호출 횟수 자체를 줄인다. Phase 1개 + Task 5개 등록 시 개별 6회 호출(~3,600 토큰) 대신 batch 1회(~350 토큰)로 처리한다.

**2) 마크다운 vs MCP — 에이전트 1회 작업 사이클 비교**

에이전트가 "현황 파악 → 태스크 선택 → 할당 → 작업 → 완료 기록"을 수행하는 한 사이클:

| 단계 | 마크다운 방식 | MCP 도구 방식 |
| --- | --- | --- |
| 현황 파악 | Read PLAN.md + PROGRESS.md (~10,000 토큰) | \`sync\` (~400 토큰) |
| 태스크 선택 | PLAN.md 재로드 + 수동 탐색 (~1,800 토큰) | \`next\` (~200 토큰) |
| 태스크 할당 | Edit PLAN.md (~1,800 토큰) | \`claim\` (~100 토큰) |
| 작업 완료 | Edit PLAN.md + PROGRESS.md (~10,000 토큰) | \`complete\` (~150 토큰) |
| **합계** | **~23,600 토큰** | **~850 토큰** |

**1회 사이클당 약 96% 절감.** 그리고 이 차이는 프로젝트가 커질수록 벌어진다.

| 프로젝트 규모 | 마크다운 1사이클 | MCP 1사이클 | 절감률 |
| --- | --- | --- | --- |
| Phase 6 (40개 태스크) | ~23,600 토큰 | ~850 토큰 | 96% |
| Phase 12 (60개 태스크) | ~38,000 토큰 | ~850 토큰 | 98% |
| Phase 17 (78개 태스크) | ~48,000 토큰 | ~850 토큰 | 98% |

MCP 방식은 프로젝트가 아무리 커져도 응답 크기가 일정하다. \`sync\`는 요약 통계만, \`next\`는 실행 가능한 태스크만, \`complete\`는 결과만 반환하기 때문이다. 반면 마크다운은 전체 이력이 누적되어 파일을 읽을 때마다 토큰이 선형 증가한다.

78개 태스크 전체를 MCP로 관리함으로써, 프로젝트 전체에서 약 **150만~200만 토큰**을 절약한 것으로 추정된다.

**3) 실시간 변경 감지 — Hybrid Change Detection**

MCP Server가 DB를 변경했을 때 Extension이 이를 감지하여 칸반 보드에 즉시 반영해야 한다. WebSocket 같은 추가 인프라 없이, DB의 WAL 파일을 직접 감시하는 방식을 선택했다.

WAL 파일(\`board.db-wal\`)을 \`chokidar\`로 감시하되, 500ms 디바운스로 과도한 이벤트를 억제한다. 30초 이상 이벤트가 없으면 5초 간격 폴링으로 폴백하는 Hybrid 패턴을 적용했다.

| 지표 | 단순 폴링 방식 | WAL 감시 (Hybrid) |
| --- | --- | --- |
| DB 변경 → UI 갱신 | 평균 2.5초 | ~500ms |
| 유휴 시 불필요 쿼리 | 720회/시간 | 0회 (이벤트 기반) |
| 폴백 안전성 | 항상 동작 | 30초 idle 시 폴링 자동 전환 |

![실시간 모니터링 파이프라인]({{diagram_realtime}})

---

## 2. 문제와 해결 — Electron과 Node.js의 네이티브 모듈 충돌

### 문제 (As-Is)

better-sqlite3는 C++ 네이티브 모듈이다. VS Code Extension은 Electron(ABI 140)에서, 테스트와 MCP Server는 시스템 Node.js(ABI 127)에서 실행된다. 동일한 바이너리를 공유할 수 없어서, 테스트와 Extension 실행 사이에 매번 \`electron-rebuild\` ↔ \`pnpm install --force\`를 전환해야 했다.

### 해결 (To-Be)

Extension에서 better-sqlite3를 직접 import하지 않고, Board Server를 별도 child_process로 분리하여 시스템 Node.js에서 실행하도록 아키텍처를 변경했다.

![프로세스 분리 아키텍처]({{diagram_process}})

### 기술적 고민과 결정

**1) IPC 프로토콜 선택**

VS Code의 Language Server Protocol이 JSON-RPC over stdio를 사용하는 것에서 착안하여 동일한 패턴을 적용했다. Newline-Delimited JSON으로 메시지를 구분하고, \`id\` 기반 요청-응답 매칭으로 동시 요청을 처리한다. 추가 의존성 없이 구현할 수 있다.

**2) 프로세스 생명주기 관리**

ProcessManager가 Board Server의 spawn/kill/restart를 관리한다. 비정상 종료 시 exponential backoff(1초→2초→4초)로 자동 재시작하며, 최대 3회 초과 시 사용자에게 알림을 표시한다. Windows에서 SIGTERM이 동작하지 않는 문제는 \`stdin.end()\`로 graceful shutdown을 구현하여 해결했다.

**개선 결과**

| 지표 | Before | After | 개선 효과 |
| --- | --- | --- | --- |
| 테스트↔Extension 전환 | 매번 rebuild (~30초) | 전환 없음 | 개발 루프 30초 단축 |
| Extension 번들 크기 | ~2.1MB (네이티브 모듈) | 30KB (순수 JS) | ~99% 감소 |
| RPC 라운드트립 | — | ~3ms | UI 무영향 |
| 프로세스 복구 | 수동 재시작 | 자동 backoff | 무중단 운영 |

**3) 드래그앤드롭 — 낙관적 업데이트와 롤백**

칸반 보드에서 태스크를 드래그할 때, 서버 응답을 기다리면 체감 지연(~50ms)이 발생한다. 스냅샷 기반 낙관적 업데이트를 적용하여 드래그 즉시 UI를 반영하고, RPC 실패 시에만 스냅샷으로 롤백하도록 구현했다.

---

## 3. AI와 함께 개발하기 — 멀티 에이전트 오케스트레이션

이 프로젝트의 특징은 **Agent Board를 Agent Board로 관리하면서 개발했다**는 점이다.

### 오케스트레이터 패턴

메인 세션은 직접 코드를 작성하지 않고, 계획과 위임에 집중하는 **오케스트레이터** 역할을 수행한다. 5개의 전문화된 서브에이전트를 정의하여 역할별로 작업을 위임했다.

![오케스트레이터 멀티 에이전트 패턴]({{diagram_orchestrator}})

| 에이전트 | 역할 | 병렬 가능 |
| --- | --- | --- |
| **planner** | 복잡한 기능의 태스크 분해 분석 | 단독 |
| **backend-dev** | Extension + MCP Server 구현 | frontend-dev와 병렬 |
| **frontend-dev** | Webview UI 구현 | backend-dev와 병렬 |
| **researcher** | 기술 조사, references/ 저장 | 다른 에이전트와 병렬 |
| **reviewer** | 코드 리뷰 (읽기 전용) | 단독 |

### 자동화된 품질 게이트

에이전트가 코드를 작성한 후 자동으로 품질을 검증하는 훅(Hook) 시스템을 세팅했다.

| 훅 | 트리거 | 실행 내용 |
| --- | --- | --- |
| **TeammateIdle** | 서브에이전트가 유휴 상태 | \`pnpm lint\` + \`pnpm test\` |
| **TaskCompleted** | 태스크 완료 마킹 | \`pnpm lint\` + \`pnpm test\` + \`tsc --noEmit\` |

| 지표 | 훅 없이 | 품질 게이트 적용 후 |
| --- | --- | --- |
| 에이전트 코드의 린트 에러 | 태스크당 평균 ~3건 (수동 발견) | 0건 (자동 차단) |
| 타입 에러 잔존 | 다른 패키지 빌드 시 발견 | 태스크 완료 시점에 즉시 검출 |
| 테스트 회귀 | PR 단계에서 발견 | 163개 자동 검증 |

Phase 6 완료 후에는 reviewer 에이전트에게 전체 코드베이스 리뷰를 요청하여, 2차에 걸쳐 52건(Critical 15 + Warning 37)의 이슈를 식별하고 수정했다. 서비스 파일 분리(455줄→3파일), CSP unsafe-inline 제거, React.memo 적용, 접근성(ARIA) 완비 등을 포함한다.

### 워크플로우 스킬 시스템

반복되는 작업 패턴을 11개 **스킬(Skill)**로 정의하여 명령어 한 줄로 실행할 수 있도록 했다.

\`\`\`
/start  → sync + next + claim + context (상황 파악 + 태스크 시작)
/plan   → 기능 분석 → 태스크 분해 → MCP DB 일괄 등록
/done   → MCP complete + git commit + push
/review → 최근 변경 코드 리뷰
/test   → 패키지별 테스트 실행 + 결과 요약
\`\`\`

### 오케스트레이션 효율

| 지표 | 마크다운 기반 (Phase 0~6) | MCP 오케스트레이션 (Phase 7~17) |
| --- | --- | --- |
| 태스크 등록 | ~5분 (마크다운 테이블 편집) | ~30초 (\`/plan\` → batch 자동 등록) |
| 상태 확인 | 파일 열어서 확인 | \`/sync\` 한 줄 (~2초) |
| 충돌 발생률 | ~15% (동시 편집 시) | 0% (DB 트랜잭션 기반) |
| 병렬 위임 | 불가 (파일 충돌) | backend-dev + frontend-dev 동시 작업 |
`;

export const agentBoard: Project = {
  title: 'Agent Board',
  description:
    'AI 에이전트의 개발 태스크를 관리하고 활동을 실시간 모니터링하는 VS Code 확장',
  projectType: 'Side',
  image: 'https://img.youtube.com/vi/ZdqJfOa5zkU/sddefault.jpg',
  media: [
    {
      type: 'video',
      src: 'https://youtu.be/ZdqJfOa5zkU',
      poster: 'https://img.youtube.com/vi/ZdqJfOa5zkU/sddefault.jpg',
    },
  ],
  tags: ['VS Code Extension', 'MCP', 'TypeScript', 'React', 'SQLite'],
  github: '',
  demo: '',
  categories: ['Frontend', 'Backend', 'AI'],
  techStack: {
    frontend: ['React', 'Vite', 'Tailwind CSS', '@dnd-kit'],
    backend: [
      'TypeScript 5.x',
      'VS Code Extension API',
      '@modelcontextprotocol/sdk',
      'better-sqlite3',
      'SQLite (WAL)',
    ],
    deployment: ['VS Code Marketplace', 'VSIX 3.61MB'],
  },
  duration: '2026.02 ~ 03',
  teamSize: '1명',
  role: '풀스택 개발자 (기획, 설계, 구현, 배포)',
  markdownContent: agentBoardMarkdown,
  markdownImages: agentBoardImages,
};
