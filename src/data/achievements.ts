import { Achievement } from '@/types';

export const achievements: Omit<Achievement, 'icon'>[] = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024.03',
    description: 'AWS 클라우드 아키텍처 설계 및 구현 전문 자격증',
    link: '#',
  },
  {
    title: '해커톤 대상',
    issuer: '테크 해커톤 2023',
    date: '2023.11',
    description: '혁신적인 AI 기반 솔루션 개발로 1등 수상',
  },
  {
    title: '정보처리기사',
    issuer: '한국산업인력공단',
    date: '2022.06',
    description: '소프트웨어 개발 및 정보시스템 구축 전문 자격증',
  },
  {
    title: 'Open Source Contributor',
    issuer: 'GitHub',
    date: '2023.01',
    description: '주요 오픈소스 프로젝트에 50+ 기여',
    link: 'https://github.com',
  },
];
