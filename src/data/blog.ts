import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "레거시 API를 한 번에 갈아엎으려다 멈춘 이유",
    summary: "Go/Gin 레거시 API를 Spring Boot로 이관하려다 빅뱅 컷오버 대신 path-based Strangler Fig 방식으로 방향을 바꾼 과정을 회고합니다.",
    date: '2026.07.05',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/legacy-api-strangler-fig-migration/thumbnail.svg",
    link: "https://blog.rlarbdlf222.workers.dev/blog/legacy-api-strangler-fig-migration/",
    tags: ["migration","architecture","strangler-fig"],
  },
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
  }
];
