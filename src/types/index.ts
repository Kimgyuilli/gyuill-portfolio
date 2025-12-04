/// <reference types="react" />

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  category: 'All' | 'Web' | 'Mobile' | 'AI' | 'Backend';
}

export interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

export interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

export interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
  suffix?: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  icon: React.ReactNode;
  link?: string;
}

export interface BlogPost {
  title: string;
  summary: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
  tags?: string[];
}
