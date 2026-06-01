import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
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
  },
  {
    title: "PeekCart 학습 기록 8: 상품 조회를 캐시 뒤로 옮기기",
    summary: "PeekCart의 상품 목록과 상세 조회를 Redis Cache Aside로 옮기며 재고 제외, self-invocation 회피, 목록 캐시 무효화, CachedPage 래퍼를 ...",
    date: '2026.05.29',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-product-cache-aside/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-product-cache-aside/",
    tags: ["peekcart","redis","cache"],
  }
];
