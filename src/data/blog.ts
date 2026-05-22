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
    title: "Codex x LLM Wiki 구축기",
    summary: "최근에 내 개인 LLM Wiki를 구축했다. 흩어진 자료와 경험을 모아두고 나중에 다시 쓸 수 있게 해주는 기록 시스템을 만든 과정을 정리합니다.",
    date: '2026.05.21',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/codex-x-llm-wiki/image-01.webp",
    link: "https://blog.rlarbdlf222.workers.dev/blog/codex-x-llm-wiki/",
    tags: ["codex","llm","wiki"],
  },
  {
    title: "Spring Boot에서 MDC 로깅 필터는 어떻게 동작할까?",
    summary: "트래픽이 많은 Spring Boot 서버에서 요청별 로그를 추적하기 위해 MDC와 Servlet Filter가 어떻게 연결되는지 정리합니다.",
    date: '2026.05.19',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/spring-boot-mdc/image-01.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/spring-boot-mdc/",
    tags: ["spring","spring-boot","mdc"],
  }
];
