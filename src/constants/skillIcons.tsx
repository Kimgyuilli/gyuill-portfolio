import { Code2, Database, Globe, Layout, Server, Smartphone } from 'lucide-react';

export const SKILL_ICONS = {
  Frontend: <Code2 />,
  Backend: <Server />,
  Database: <Database />,
  Mobile: <Smartphone />,
  DevOps: <Globe />,
  Tools: <Layout />,
} as const;

export type SkillIconKey = keyof typeof SKILL_ICONS;
