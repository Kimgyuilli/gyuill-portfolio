import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "학습 기록: gRPC와 Protocol Buffers, 그리고 그 너머",
    summary: "proto 계약 저장소를 읽으며 gRPC와 Protocol Buffers의 층위를 구분하고, 코드 생성, 이진 인코딩, 스트리밍 모드, 스키마 진화, 대안 기술까지 정리한다.",
    date: '2026.07.06',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/grpc-protobuf-contract-repository/thumbnail.svg",
    link: "https://blog.rlarbdlf222.workers.dev/blog/grpc-protobuf-contract-repository/",
    tags: ["grpc","protobuf","msa"],
  },
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
  }
];
