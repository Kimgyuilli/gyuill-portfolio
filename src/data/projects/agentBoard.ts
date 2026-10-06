import type { Project } from '@/types';
import diagramArchitecture from '@/assets/images/project/agent-board/diagram_architecture.png';
import diagramAsIsToBe from '@/assets/images/project/agent-board/diagram-task-management.svg';
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

마크다운 파일로 태스크를 관리하면서 반복해서 파일을 읽고 동시 편집 충돌을 처리해야 했다. 이를 줄이기 위해 에이전트가 MCP 도구로 태스크를 직접 조회·할당·완료하고, 진행 상황은 VS Code 보드에서 확인하도록 만들었다.

### 담당 범위와 주요 작업

기획·설계·구현·배포를 단독 수행함.

- **MCP 태스크 관리 도구 설계**: 응답을 필요한 정보로 줄이고 여러 태스크 변경을 한 번의 트랜잭션으로 묶었다.
- **VS Code 보드 연동**: SQLite 변경을 감지해 보드에 반영하고, 감시 이벤트가 없을 때는 폴링으로 확인했다.
- **실제 작업에 적용**: 이 프로젝트의 태스크를 만든 도구로 관리하며 사용 흐름을 점검했다.

![전체 시스템 아키텍처]({{diagram_architecture}})

---

## MCP 기반 태스크 관리

AI 에이전트와 함께 개발할 때 PLAN.md와 PROGRESS.md로 태스크를 추적했다. 세 가지 문제가 있었다.

1. **반복 읽기**: 당시 작업 절차에서는 상태를 확인하거나 변경할 때 PLAN.md와 PROGRESS.md를 반복해서 읽었다. 이력이 쌓일수록 현재 작업과 무관한 내용까지 읽게 됐다.
2. **태스크 충돌**: 여러 에이전트가 동시에 같은 마크다운 파일을 편집하면 충돌이 발생한다.
3. **진행 상황 확인**: 에이전트가 어떤 작업을 하고 있는지 터미널 로그를 직접 확인해야 알 수 있다.

Phase 6에서 40개 태스크를 관리할 때는 계획과 진행 이력이 같은 파일에 누적되어, 필요한 태스크만 조회하는 방식을 검토했다.

MCP 프로토콜을 통해 AI 에이전트가 SQLite DB에서 태스크를 직접 관리하고, VS Code 칸반 보드로 실시간 시각화한다.

![As-Is / To-Be 비교]({{diagram_asIs_toBe}})

**MCP 도구 응답 크기 조정**

전체 이력 대신 요약과 현재 필요한 태스크만 반환하도록 MCP 응답을 줄였다.

| 도구 | 반환하거나 변경하는 내용 |
| --- | --- |
| sync | 프로젝트 요약 통계와 활성 태스크 |
| next | 실행 가능한 태스크 |
| claim | 선택한 태스크의 할당 상태 |
| complete | 완료 결과와 의존 조건이 해소된 태스크 |
| batch | 각 작업의 index·type·id |

배치 도구는 여러 변경을 한 트랜잭션으로 묶는다. Phase 1개와 Task 5개를 등록할 때 개별 요청 6회 대신 배치 요청 1회로 처리하도록 했다. 태스크 상태를 확인하고 바꿀 때마다 전체 마크다운 파일을 읽고 편집하던 절차를 도구 호출로 옮겼다.

**SQLite 변경 감지와 폴링**

MCP Server가 DB를 변경했을 때 Extension이 이를 감지하여 칸반 보드에 즉시 반영해야 한다. WebSocket 같은 추가 인프라 없이, DB의 WAL 파일을 직접 감시하는 방식을 선택했다.

WAL 파일(\`board.db-wal\`)을 \`chokidar\`로 감시하되, 500ms 디바운스로 과도한 이벤트를 억제한다. 30초 이상 이벤트가 없으면 5초 간격 폴링으로 폴백하는 Hybrid 패턴을 적용했다.

| 조건 | 확인 방식 |
| --- | --- |
| WAL 변경 이벤트 수신 | 500ms 디바운스 후 변경 내용 조회 |
| 30초 이상 이벤트가 없음 | 5초 간격 폴링으로 확인 |

![실시간 모니터링 파이프라인]({{diagram_realtime}})

---

## 네이티브 모듈 호환성

better-sqlite3는 C++ 네이티브 모듈이다. VS Code Extension은 Electron(ABI 140)에서, 테스트와 MCP Server는 시스템 Node.js(ABI 127)에서 실행된다. 동일한 바이너리를 공유할 수 없어서, 테스트와 Extension 실행 사이에 매번 \`electron-rebuild\` ↔ \`pnpm install --force\`를 전환해야 했다.

Extension에서 better-sqlite3를 직접 import하지 않고, Board Server를 별도 child_process로 분리하여 시스템 Node.js에서 실행하도록 아키텍처를 변경했다.

![프로세스 분리 아키텍처]({{diagram_process}})

**IPC 프로토콜 선택**

VS Code의 Language Server Protocol이 JSON-RPC over stdio를 사용하는 것에서 착안하여 동일한 패턴을 적용했다. Newline-Delimited JSON으로 메시지를 구분하고, \`id\` 기반 요청-응답 매칭으로 동시 요청을 처리한다. 추가 의존성 없이 구현할 수 있다.

**프로세스 생명주기 관리**

ProcessManager가 Board Server의 spawn/kill/restart를 관리한다. 비정상 종료 시 exponential backoff(1초→2초→4초)로 자동 재시작하며, 최대 3회 초과 시 사용자에게 알림을 표시한다. Windows에서 SIGTERM이 동작하지 않는 문제는 \`stdin.end()\`로 graceful shutdown을 구현하여 해결했다.

**개선 결과**

| 지표 | Before | After | 개선 효과 |
| --- | --- | --- | --- |
| 테스트↔Extension 전환 | 매번 rebuild (~30초) | 전환 없음 | 개발 루프 30초 단축 |
| Extension 번들 크기 | ~2.1MB (네이티브 모듈) | 30KB (순수 JS) | ~99% 감소 |
| RPC 라운드트립 | - | ~3ms | UI 무영향 |
| 프로세스 복구 | 수동 재시작 | 간격을 늘리며 자동 재시도 | 비정상 종료 시 자동 재시작 |

**드래그앤드롭 상태 변경**

칸반 보드에서 태스크를 드래그할 때, 서버 응답을 기다리면 체감 지연(~50ms)이 발생한다. 스냅샷 기반 낙관적 업데이트를 적용하여 드래그 즉시 UI를 반영하고, RPC 실패 시에만 스냅샷으로 롤백하도록 구현했다.

---

## 여러 에이전트의 작업 조율

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

프로젝트 후반에는 reviewer 에이전트에게 코드베이스 리뷰를 요청해 두 차례에 걸쳐 발견한 이슈를 수정했다. 서비스 파일 분리, CSP unsafe-inline 제거, React.memo 적용, 접근성(ARIA) 보완 등이 포함됐다.

### 워크플로우 스킬 시스템

반복되는 작업 패턴을 11개 **스킬(Skill)**로 정의하여 명령어 한 줄로 실행할 수 있도록 했다.

\`\`\`
/start  → sync + next + claim + context (상황 파악 + 태스크 시작)
/plan   → 기능 분석 → 태스크 분해 → MCP DB 일괄 등록
/done   → MCP complete + git commit + push
/review → 최근 변경 코드 리뷰
/test   → 패키지별 테스트 실행 + 결과 요약
\`\`\`

### 작업 흐름 비교

| 지표 | 마크다운 기반 (Phase 0~6) | MCP 오케스트레이션 (Phase 7~17) |
| --- | --- | --- |
| 태스크 등록 | ~5분 (마크다운 테이블 편집) | ~30초 (\`/plan\` → batch 자동 등록) |
| 상태 확인 | 파일 열어서 확인 | \`/sync\` 한 줄 (~2초) |
| 태스크 변경 | 공유 마크다운 파일 편집 | DB 트랜잭션으로 태스크 변경 |
| 병렬 위임 | 같은 파일의 편집 충돌 조율 필요 | backend-dev와 frontend-dev가 MCP로 태스크 관리 |
`;

export const agentBoard: Project = {
  slug: 'agent-board',
  title: 'Agent Board',
  description: '여러 AI 에이전트의 태스크와 진행 상황을 VS Code에서 관리하는 확장',
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
    deployment: ['VS Code Marketplace'],
  },
  duration: '2026.02 ~ 03',
  teamSize: '1명',
  role: '풀스택 개발자 (기획, 설계, 구현, 배포)',
  markdownContent: agentBoardMarkdown,
  markdownImages: agentBoardImages,
};
