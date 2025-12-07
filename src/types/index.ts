/// <reference types="react" />

import type { ProjectCategory } from '@/constants/projectCategories';

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
  categories: Exclude<ProjectCategory, 'All'>[];
  detailedDescription?: string;
  features?: string[];
  techStack?: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    deployment?: string[];
  };
  challenges?: string[];
  outcome?: string;
  duration?: string;
  teamSize?: string;
  role?: string;
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
  type: 'career' | 'activity';
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
  image: string;
  link: string;
  tags?: string[];
}
