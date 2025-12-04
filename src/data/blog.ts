import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: 'React 18의 새로운 기능들과 실전 적용기',
    summary:
      'React 18에서 도입된 Concurrent Rendering, Automatic Batching 등의 기능을 실제 프로젝트에 적용하며 얻은 인사이트를 공유합니다.',
    date: '2024.02.15',
    readTime: '8분',
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    link: '#',
    tags: ['React', 'JavaScript', 'Frontend'],
  },
  {
    title: 'TypeScript 타입 시스템 깊게 이해하기',
    summary:
      'TypeScript의 고급 타입 기능인 Conditional Types, Mapped Types, Template Literal Types를 활용한 타입 안전성 강화 방법을 소개합니다.',
    date: '2024.01.28',
    readTime: '12분',
    image:
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    link: '#',
    tags: ['TypeScript', 'JavaScript'],
  },
  {
    title: 'Next.js App Router 마이그레이션 가이드',
    summary:
      'Next.js 13 Pages Router에서 App Router로 마이그레이션하면서 겪은 문제들과 해결 방법, 그리고 성능 개선 결과를 정리했습니다.',
    date: '2024.01.10',
    readTime: '10분',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    link: '#',
    tags: ['Next.js', 'React', 'Frontend'],
  },
];
