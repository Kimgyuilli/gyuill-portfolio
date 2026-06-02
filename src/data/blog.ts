import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "PeekCart 학습 기록 11: 같은 이벤트가 두 번 왔다 - Consumer 멱등성과 DLQ",
    summary: "Kafka의 at-least-once 전달에서 생기는 중복을 Consumer 멱등성으로 흡수하고, 재시도해도 처리할 수 없는 메시지를 DLQ로 격리하는 흐름을 정리합니다.",
    date: '2026.06.01',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-consumer-idempotency-dlq/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-consumer-idempotency-dlq/",
    tags: ["peekcart","kafka","idempotency"],
  },
  {
    title: "PeekCart 학습 기록 10: DB는 커밋됐는데 이벤트가 사라진다면 - Kafka와 Transactional Outbox",
    summary: "Kafka 발행과 DB 저장 사이의 dual-write 문제를 Transactional Outbox로 줄이고, polling, at-least-once, Debezium CDC의 ...",
    date: '2026.05.31',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-transactional-outbox/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-transactional-outbox/",
    tags: ["peekcart","kafka","outbox"],
  },
  {
    title: "PeekCart 학습 기록 9: 오버셀링을 두 겹으로 막기 - 분산 락과 낙관적 락",
    summary: "Redis 분산 락과 JPA 낙관적 락을 함께 사용해 재고 오버셀링을 막는 이유, 트랜잭션 경계의 한계와 테스트 범위를 정리합니다.",
    date: '2026.05.31',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-inventory-lock-defense/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-inventory-lock-defense/",
    tags: ["peekcart","inventory","concurrency"],
  }
];
