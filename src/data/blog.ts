import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
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
  },
  {
    title: "PeekCart 학습 기록 5: 결제 승인이 실패하면 누가 주문을 취소하는가",
    summary: "PeekCart의 Payment 생성, Toss 결제 승인 실패 처리, Outbox 이벤트, 웹훅 멱등성, Order 상태 연결을 정리합니다.",
    date: '2026.05.28',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-payment-failure-flow/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-payment-failure-flow/",
    tags: ["peekcart","payment","toss-payments"],
  }
];
