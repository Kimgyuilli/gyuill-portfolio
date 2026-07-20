import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "MySQL vs PostgreSQL: MVCC부터 인덱스와 운영까지",
    summary: "MySQL(InnoDB)과 PostgreSQL의 차이를 MVCC, VACUUM과 undo log, 격리 수준, 인덱스, 복제, 운영 관점에서 비교합니다.",
    date: '2026.07.19',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/mysql-vs-postgresql/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/mysql-vs-postgresql/",
    tags: ["mysql","postgresql","database"],
  },
  {
    title: "서버는 멀쩡한데 왜 503이 났을까",
    summary: "GKE Autopilot의 노드 축소 중 Ready Pod가 0개가 되며 발생한 간헐적 503을 추적하고, replica·PDB·topology spread로 요청 경로를 지킨 과...",
    date: '2026.07.18',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/gke-autopilot-transient-503/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/gke-autopilot-transient-503/",
    tags: ["kubernetes","gke","gke-autopilot"],
  },
  {
    title: "아웃박스로 EDA를 시작하며 마주한 네 가지 질문",
    summary: "Transactional Outbox를 도입하며 payload, event_type 네이밍, 하위호환성, 버저닝 전략을 어떻게 정했는지 정리합니다.",
    date: '2026.07.08',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/outbox-eda-four-questions/thumbnail.svg",
    link: "https://blog.rlarbdlf222.workers.dev/blog/outbox-eda-four-questions/",
    tags: ["outbox","eda","event-driven"],
  }
];
