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
      { level: 'primary', label: '주력', skills: ['React', 'TypeScript', 'Vite'] },
      { level: 'experienced', label: '사용경험', skills: [] },
      { level: 'learning', label: '공부중', skills: [] },
    ],
  },
  {
    type: 'leveled',
    title: 'Backend',
    levels: [
      { level: 'primary', label: '주력', skills: ['Java', 'Spring Boot', 'JPA', 'QueryDSL'] },
      { level: 'experienced', label: '사용경험', skills: [] },
      { level: 'learning', label: '공부중', skills: ['Kafka'] },
    ],
  },
  {
    type: 'flat',
    title: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    type: 'leveled',
    title: 'DevOps',
    levels: [
      { level: 'primary', label: '주력', skills: ['Docker', 'AWS', 'GitHub Actions'] },
      { level: 'experienced', label: '사용경험', skills: ['GCP', 'NCP', 'Vercel'] },
      { level: 'learning', label: '공부중', skills: ['Kubernetes', 'GKE'] },
    ],
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
      'Linear',
      'Postman',
      'Claude',
      'Codex',
      'Gemini',
      'Perplexity',
    ],
  },
];
