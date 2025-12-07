import { Code2, Database, Globe, Layout, Server, Smartphone } from 'lucide-react';

export const SKILL_ICONS = {
  Frontend: <Code2 />,
  Backend: <Server />,
  Database: <Database />,
  Mobile: <Smartphone />,
  DevOps: <Globe />,
  Tools: <Layout />,
} as const;

// 로컬 이미지를 사용하는 스킬들 (CDN에서 깨지는 경우)
const LOCAL_SKILL_IMAGES: Record<string, string> = {
  Java: 'java.png',
  AWS: 'aws.png',
  'VS Code': 'vscode.png',
  Slack: 'slack.png',
  Vercel: 'vercel.png',
};

// Simple Icons CDN slug 매핑
export const SKILL_ICON_SLUGS: Record<string, string> = {
  // Frontend
  React: 'react',
  TypeScript: 'typescript',
  Vite: 'vite',
  // Backend
  Django: 'django',
  Python: 'python',
  Java: 'java',
  'Spring Boot': 'spring',
  // Database
  PostgreSQL: 'postgresql',
  MySQL: 'mysql',
  Redis: 'redis',
  // DevOps
  Docker: 'docker',
  AWS: 'amazonaws',
  GCP: 'googlecloud',
  NCP: 'naver',
  Kubernetes: 'kubernetes',
  'GitHub Actions': 'githubactions',
  Vercel: 'vercel',
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

// 아이콘 URL 생성 (로컬 이미지 우선, 없으면 CDN 사용)
export const getSkillIconUrl = (skill: string): string => {
  // 로컬 이미지가 있는 경우 로컬 경로 반환
  const localImage = LOCAL_SKILL_IMAGES[skill];
  if (localImage) {
    return `/images/skills/${localImage}`;
  }

  // CDN 아이콘 사용
  const slug = SKILL_ICON_SLUGS[skill];
  if (!slug) return '';
  return `https://cdn.simpleicons.org/${slug}`;
};

export type SkillIconKey = keyof typeof SKILL_ICONS;
