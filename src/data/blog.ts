import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "PeekCart 학습 기록 8: 상품 조회를 캐시 뒤로 옮기기",
    summary: "PeekCart의 상품 목록과 상세 조회를 Redis Cache Aside로 옮기며 재고 제외, self-invocation 회피, 목록 캐시 무효화, CachedPage 래퍼를 ...",
    date: '2026.05.29',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-product-cache-aside/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-product-cache-aside/",
    tags: ["peekcart","redis","cache"],
  },
  {
    title: "PeekCart 학습 기록 7: 15분 후에 돌아와서 주문을 취소하는 일",
    summary: "PeekCart의 결제 타임아웃 스케줄러, REQUIRES_NEW 건별 트랜잭션, 상태 경합 격리, ShedLock 도입 이유를 정리합니다.",
    date: '2026.05.28',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-order-timeout-scheduler/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-order-timeout-scheduler/",
    tags: ["peekcart","order","scheduler"],
  },
  {
    title: "PeekCart 학습 기록 6: 알림 발송이 실패해도 주문은 살아남아야 한다",
    summary: "PeekCart Notification 도메인의 Kafka Consumer 전환, SlackPort 위치, 멱등성, Slack Webhook 실패 격리, Phase 4 MSA 분리...",
    date: '2026.05.28',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-notification-failure-isolation/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-notification-failure-isolation/",
    tags: ["peekcart","notification","slack"],
  }
];
