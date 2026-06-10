import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "부채 해결 회고: MSA로 넘어가기 전에 무엇을 고치고 무엇을 일부러 남겼나",
    summary: "Phase 4 MSA 전환을 앞두고 22개의 기술 부채를 트리아지하고, 즉시 고칠 항목과 의도적으로 남길 항목을 나눈 기준을 회고합니다.",
    date: '2026.06.09',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-phase4-debt-retrospective/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-phase4-debt-retrospective/",
    tags: ["peekcart","msa","technical-debt"],
  },
  {
    title: "쿠버네티스 학습 기록: YAML을 던지면 무슨 일이 일어나는가",
    summary: "쿠버네티스의 선언형 API, reconciliation loop, Deployment·ReplicaSet·Pod·Service가 함께 동작하는 방식을 정리합니다.",
    date: '2026.06.07',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/kubernetes-reconciliation-mental-model/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/kubernetes-reconciliation-mental-model/",
    tags: ["kubernetes","reconciliation","deployment"],
  },
  {
    title: "PeekCart 학습 기록 19: \"조건부 UPDATE 한 방\"이면 분산 락이 필요 없을까",
    summary: "단일 행 재고 차감에서 조건부 UPDATE, Redis 분산 락, JPA 낙관적 락의 적정 구간을 비교하고 PeekCart에 남길 ADR 판단 기준을 정리합니다.",
    date: '2026.06.06',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-inventory-conditional-update-adr/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-inventory-conditional-update-adr/",
    tags: ["peekcart","inventory","concurrency"],
  }
];
