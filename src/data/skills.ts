import type { SkillIconKey } from '@/constants/skillIcons';

export interface SkillCategoryData {
  title: SkillIconKey;
  skills: string[];
}

export const skillCategories: SkillCategoryData[] = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Vite'],
  },
  {
    title: 'Backend',
    skills: ['Django', 'Python', 'Java', 'Spring Boot'],
  },
  {
    title: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    title: 'DevOps',
    skills: ['Docker', 'AWS', 'GCP', 'NCP', 'GitHub Actions', 'Vercel'],
  },
  {
    title: 'Tools',
    skills: [
      'Git',
      'VS Code',
      'IntelliJ',
      'Figma',
      'Slack',
      'Notion',
      'Postman',
      'claude',
      'gemini',
      'perplexity',
    ],
  },
];
