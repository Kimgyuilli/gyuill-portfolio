import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "PeekCart 학습 기록 19: \"조건부 UPDATE 한 방\"이면 분산 락이 필요 없을까",
    summary: "단일 행 재고 차감에서 조건부 UPDATE, Redis 분산 락, JPA 낙관적 락의 적정 구간을 비교하고 PeekCart에 남길 ADR 판단 기준을 정리합니다.",
    date: '2026.06.06',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-inventory-conditional-update-adr/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-inventory-conditional-update-adr/",
    tags: ["peekcart","inventory","concurrency"],
  },
  {
    title: "PeekCart 학습 기록 18: Phase 4로 넘어가기 전에 - 글을 쓰다 발견한 22개의 부채",
    summary: "Phase 4 MSA 진입 전에 글쓰기 과정에서 드러난 22개의 기술 부채를 보안, 관측성, 발행 경로, 동시성, CI와 배포 관점에서 정리합니다.",
    date: '2026.06.05',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-phase4-debt-checklist/thumbnail.svg",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-phase4-debt-checklist/",
    tags: ["peekcart","msa","technical-debt"],
  },
  {
    title: "PeekCart 학습 기록 17: 1,000명이 소수 상품을 동시에 주문하면",
    summary: "1,000 VUser 동시 주문 부하에서 오버셀링 0건, HPA 1→3 scale-out, Kafka Lag 회복, throughput 미달을 함께 검증한 세션 C 기록입니다.",
    date: '2026.06.05',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-order-concurrency-hpa/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-order-concurrency-hpa/",
    tags: ["peekcart","k6","kubernetes"],
  }
];
