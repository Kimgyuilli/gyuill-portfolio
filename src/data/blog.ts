import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "아웃박스로 EDA를 시작하며 마주한 네 가지 질문",
    summary: "Transactional Outbox를 도입하며 payload, event_type 네이밍, 하위호환성, 버저닝 전략을 어떻게 정했는지 정리합니다.",
    date: '2026.07.08',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/outbox-eda-four-questions/thumbnail.svg",
    link: "https://blog.rlarbdlf222.workers.dev/blog/outbox-eda-four-questions/",
    tags: ["outbox","eda","event-driven"],
  },
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
  }
];
