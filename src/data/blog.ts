import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "모듈러 모놀리스와 Spring Modulith 학습 기록",
    summary: "Spring Boot 기반 WAS에서 모듈러 모놀리스를 선택하는 이유와 Spring Modulith로 모듈 경계, public API/internal 규칙, 이벤트, 검증 테스트를...",
    date: '2026.06.22',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/modular-monolith-spring-modulith/image-01.webp",
    link: "https://blog.rlarbdlf222.workers.dev/blog/modular-monolith-spring-modulith/",
    tags: ["spring","spring-boot","architecture"],
  },
  {
    title: "Spring Boot 4 Java WAS 서버 학습 정리",
    summary: "Java 기반 Greenfield WAS 서버를 Spring Boot 4로 구축할 때 우선 확인할 starter 구성, MVC API 설계, HTTP Service Clients,...",
    date: '2026.06.22',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/spring-boot-4-java-was/image-01.webp",
    link: "https://blog.rlarbdlf222.workers.dev/blog/spring-boot-4-java-was/",
    tags: ["spring","spring-boot","java"],
  },
  {
    title: "부채 해결 회고: MSA로 넘어가기 전에 무엇을 고치고 무엇을 일부러 남겼나",
    summary: "Phase 4 MSA 전환을 앞두고 22개의 기술 부채를 트리아지하고, 즉시 고칠 항목과 의도적으로 남길 항목을 나눈 기준을 회고합니다.",
    date: '2026.06.09',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-phase4-debt-retrospective/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-phase4-debt-retrospective/",
    tags: ["peekcart","msa","technical-debt"],
  }
];
