export const PROJECT_CATEGORIES = ['All', 'Frontend', 'Backend', 'Mobile', 'AI'] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export const PROJECT_TYPES = ['All', 'Main', 'Side', 'Learning'] as const;
export type ProjectType = (typeof PROJECT_TYPES)[number];

/** 프로젝트 목록 필터. 상세 페이지를 다녀와도 유지되도록 상위에서 보관한다. */
export interface ProjectFilter {
  type: ProjectType;
  category: ProjectCategory;
}

export const DEFAULT_PROJECT_FILTER: ProjectFilter = { type: 'Main', category: 'All' };

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  All: '전체',
  Main: '메인 프로젝트',
  Side: '사이드 프로젝트',
  Learning: '학습용 프로젝트',
};
