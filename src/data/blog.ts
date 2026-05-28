import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "PeekCart 학습 기록 5: 결제 승인이 실패하면 누가 주문을 취소하는가",
    summary: "PeekCart의 Payment 생성, Toss 결제 승인 실패 처리, Outbox 이벤트, 웹훅 멱등성, Order 상태 연결을 정리합니다.",
    date: '2026.05.28',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-payment-failure-flow/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-payment-failure-flow/",
    tags: ["peekcart","payment","toss-payments"],
  },
  {
    title: "PeekCart 학습 기록 4: 주문 생성 트랜잭션 안에서는 어떤 일이 일어나는가",
    summary: "PeekCart의 장바구니부터 주문 생성, 가격 스냅샷, 주문 상태 전이, 취소와 보상 트랜잭션 흐름을 정리합니다.",
    date: '2026.05.27',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-order-transaction-flow/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-order-transaction-flow/",
    tags: ["peekcart","order","transaction"],
  },
  {
    title: "PeekCart 학습 기록 3: 상품과 재고는 왜 따로 관리해야 할까",
    summary: "PeekCart의 Product와 Inventory 분리를 재고 동시성, 낙관적 락, Redis 분산 락, 캐싱 전략 관점에서 정리합니다.",
    date: '2026.05.27',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-product-inventory-concurrency/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-product-inventory-concurrency/",
    tags: ["peekcart","inventory","concurrency"],
  }
];
