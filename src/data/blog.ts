import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
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
  },
  {
    title: "PeekCart 학습 기록 18: Phase 4로 넘어가기 전에 - 글을 쓰다 발견한 22개의 부채",
    summary: "Phase 4 MSA 진입 전에 글쓰기 과정에서 드러난 22개의 기술 부채를 보안, 관측성, 발행 경로, 동시성, CI와 배포 관점에서 정리합니다.",
    date: '2026.06.05',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-phase4-debt-checklist/thumbnail.svg",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-phase4-debt-checklist/",
    tags: ["peekcart","msa","technical-debt"],
  }
];
