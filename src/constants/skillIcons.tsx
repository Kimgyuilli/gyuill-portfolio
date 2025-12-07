import { Code2, Database, Globe, Layout, Server, Smartphone } from 'lucide-react';

export const SKILL_ICONS = {
  Frontend: <Code2 />,
  Backend: <Server />,
  Database: <Database />,
  Mobile: <Smartphone />,
  DevOps: <Globe />,
  Tools: <Layout />,
} as const;

// Simple Icons CDN slug 매핑
export const SKILL_ICON_SLUGS: Record<string, string> = {
  // Frontend
  React: 'react',
  TypeScript: 'typescript',
  Vite: 'vite',
  // Backend
  Django: 'django',
  Python: 'python',
  Java: 'coffeescript', // openjdk는 없음, coffeescript 또는 java 사용
  'Spring Boot': 'spring',
  // Database
  PostgreSQL: 'postgresql',
  MySQL: 'mysql',
  Redis: 'redis',
  // DevOps
  Docker: 'docker',
  AWS: 'amazonwebservices',
  GCP: 'googlecloud',
  NCP: 'ncloud', // naver → ncloud
  'CI/CD': 'githubactions',
  Kubernetes: 'kubernetes',
  'GitHub Actions': 'githubactions',
  // Tools
  Git: 'git',
  'VS Code': 'visualstudiocode',
  IntelliJ: 'intellijidea',
  Figma: 'figma',
  Slack: 'slack',
  Notion: 'notion',
  Postman: 'postman',
  claude: 'anthropic',
  gemini: 'googlegemini',
  perplexity: 'perplexity',
};

// CDN 아이콘 URL 생성
export const getSkillIconUrl = (skill: string): string => {
  const slug = SKILL_ICON_SLUGS[skill];
  if (!slug) return '';
  // 다크모드에서도 브랜드 컬러 유지 (가독성 향상)
  return `https://cdn.simpleicons.org/${slug}`;
};

export type SkillIconKey = keyof typeof SKILL_ICONS;
