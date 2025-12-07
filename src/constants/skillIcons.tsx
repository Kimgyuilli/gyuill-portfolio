import { Code2, Database, Globe, Layout, Server, Smartphone } from 'lucide-react';

export const SKILL_ICONS = {
  Frontend: <Code2 />,
  Backend: <Server />,
  Database: <Database />,
  Mobile: <Smartphone />,
  DevOps: <Globe />,
  Tools: <Layout />,
} as const;

// Vite의 `import.meta.glob`을 사용하여 src/assets/images/skills 내의 모든 이미지 모듈을 가져옵니다.
// `{ eager: true, as: 'url' }` 옵션을 통해 모듈을 즉시 URL로 가져옵니다.
const localImageModules = import.meta.glob('../assets/images/skills/*.png', {
  eager: true,
  import: 'default',
});

// 파일 경로에서 파일 이름만 추출하여 '파일이름: URL' 형태의 맵을 생성합니다.
// 예: '../assets/images/skills/java.png' -> 'java.png'
const localImageUrls: Record<string, string> = Object.fromEntries(
  Object.entries(localImageModules).map(([path, url]) => [path.split('/').pop() ?? '', url as string])
);

// 로컬 이미지를 사용하는 스킬들과 해당 파일 이름을 매핑합니다.
const LOCAL_SKILL_FILES: Record<string, string> = {
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
  Claude: 'anthropic',
  Gemini: 'googlegemini',
  Perplexity: 'perplexity',
};

// 아이콘 URL 생성 (로컬 이미지 우선, 없으면 CDN 사용)
export const getSkillIconUrl = (skill: string): string => {
  const localImageFile = LOCAL_SKILL_FILES[skill];
  if (localImageFile) {
    const imageUrl = localImageUrls[localImageFile];
    if (imageUrl) return imageUrl;
  }

  // CDN 아이콘 사용
  const slug = SKILL_ICON_SLUGS[skill];
  if (!slug) return '';
  return `https://cdn.simpleicons.org/${slug}`;
};

export type SkillIconKey = keyof typeof SKILL_ICONS;
