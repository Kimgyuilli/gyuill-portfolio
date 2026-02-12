import type { SkillIconKey } from '@/constants/skillIcons';

export interface SkillLevelData {
  level: 'primary' | 'experienced' | 'learning';
  label: string;
  skills: string[];
}

export interface FlatSkillCategoryData {
  type: 'flat';
  title: SkillIconKey;
  skills: string[];
}

export interface LeveledSkillCategoryData {
  type: 'leveled';
  title: SkillIconKey;
  levels: SkillLevelData[];
}

export type SkillCategoryData = FlatSkillCategoryData | LeveledSkillCategoryData;

/** leveled 카테고리에서 모든 스킬을 flat 배열로 반환 */
export function getAllSkills(category: SkillCategoryData): string[] {
  if (category.type === 'flat') {
    return category.skills;
  }
  return category.levels.flatMap((l) => l.skills);
}

export const skillCategories: SkillCategoryData[] = [
  {
    type: 'leveled',
    title: 'Frontend',
    levels: [
      { level: 'primary', label: '주력', skills: ['React', 'TypeScript'] },
      { level: 'experienced', label: '사용경험', skills: ['Vite'] },
      { level: 'learning', label: '공부중', skills: [] },
    ],
  },
  {
    type: 'leveled',
    title: 'Backend',
    levels: [
      { level: 'primary', label: '주력', skills: ['Django', 'Python'] },
      { level: 'experienced', label: '사용경험', skills: ['Java', 'Spring Boot'] },
      { level: 'learning', label: '공부중', skills: [] },
    ],
  },
  {
    type: 'flat',
    title: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    type: 'flat',
    title: 'DevOps',
    skills: ['Docker', 'AWS', 'GCP', 'NCP', 'GitHub Actions', 'Vercel'],
  },
  {
    type: 'flat',
    title: 'Tools',
    skills: [
      'Git',
      'VS Code',
      'IntelliJ',
      'Figma',
      'Slack',
      'Notion',
      'Postman',
      'Claude',
      'Gemini',
      'Perplexity',
    ],
  },
];
