import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "PeekCart 학습 기록 13: \"내 머신에선 되는데\"를 닫는다 - CI와 Docker 이미지 빌드",
    summary: "PeekCart의 GitHub Actions CI, Testcontainers 통합 테스트, 멀티스테이지 Docker 이미지 빌드, GHCR 발행 흐름과 검증 공백을 정리합니다.",
    date: '2026.06.02',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-ci-docker-image-build/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-ci-docker-image-build/",
    tags: ["peekcart","ci","github-actions"],
  },
  {
    title: "PeekCart 학습 기록 12: Pod이 셋이면 스케줄러도 셋이 돈다 - ShedLock",
    summary: "여러 Pod에서 중복 실행되는 Spring 스케줄러를 ShedLock과 MySQL 락 레코드로 조율하는 원리, 설정, SQL, 한계를 정리합니다.",
    date: '2026.06.02',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-shedlock-multi-pod-scheduler/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-shedlock-multi-pod-scheduler/",
    tags: ["peekcart","shedlock","scheduler"],
  },
  {
    title: "PeekCart 학습 기록 11: 같은 이벤트가 두 번 왔다 - Consumer 멱등성과 DLQ",
    summary: "Kafka의 at-least-once 전달에서 생기는 중복을 Consumer 멱등성으로 흡수하고, 재시도해도 처리할 수 없는 메시지를 DLQ로 격리하는 흐름을 정리합니다.",
    date: '2026.06.01',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-consumer-idempotency-dlq/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-consumer-idempotency-dlq/",
    tags: ["peekcart","kafka","idempotency"],
  }
];
