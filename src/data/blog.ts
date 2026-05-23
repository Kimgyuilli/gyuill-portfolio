import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "블로그를 이곳으로 옮겼습니다",
    summary: "Tistory에 쓰던 글을 이 사이트로 옮기면서, 글 작성 환경과 분류 체계를 함께 정리했습니다.",
    date: '2026.05.22',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/og-default.svg",
    link: "https://blog.rlarbdlf222.workers.dev/blog/blog-moved/",
    tags: ["migration","tistory","blog"],
  },
  {
    title: "PeekCart 학습 기록 1: 4-Layered + DDD 구조를 어떻게 읽어야 할까",
    summary: "PeekCart의 단일 Spring Boot 모놀리스 구조를 4-Layered Architecture, DDD, Hexagonal, Clean Architecture와 비교하며 읽...",
    date: '2026.05.22',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-layered-ddd/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-layered-ddd/",
    tags: ["peekcart","architecture","ddd"],
  },
  {
    title: "Codex x LLM Wiki 구축기",
    summary: "최근에 내 개인 LLM Wiki를 구축했다. 흩어진 자료와 경험을 모아두고 나중에 다시 쓸 수 있게 해주는 기록 시스템을 만든 과정을 정리합니다.",
    date: '2026.05.21',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/codex-x-llm-wiki/image-01.webp",
    link: "https://blog.rlarbdlf222.workers.dev/blog/codex-x-llm-wiki/",
    tags: ["codex","llm","wiki"],
  }
];
