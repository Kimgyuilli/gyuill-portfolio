import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "PeekCart 학습 기록 2: 인증, 인가의 갈림길에서 무엇을 선택할 수 있을까",
    summary: "PeekCart의 인증과 인가 설계를 비밀번호 저장, JWT, 토큰 회수, 재발급 전략, 서비스 간 신뢰 관점에서 정리합니다.",
    date: '2026.05.23',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-authn-authz-choices/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-authn-authz-choices/",
    tags: ["peekcart","auth","security"],
  },
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
  }
];
