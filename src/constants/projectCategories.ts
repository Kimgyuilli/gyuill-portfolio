export const PROJECT_CATEGORIES = ['All', 'Frontend', 'Backend', 'Mobile', 'AI'] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export const PROJECT_TYPES = ['All', 'Main', 'Side', 'Learning'] as const;
export type ProjectType = (typeof PROJECT_TYPES)[number];

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  All: '전체',
  Main: '메인 프로젝트',
  Side: '사이드 프로젝트',
  Learning: '학습용 프로젝트',
};
