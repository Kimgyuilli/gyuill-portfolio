export const PROJECT_CATEGORIES = ['All', 'Frontend', 'Backend', 'Mobile', 'AI'] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];
