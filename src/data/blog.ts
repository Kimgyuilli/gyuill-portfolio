import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "OSTEP에서 JVM으로: 실행 주체와 상태를 구분하기",
    summary: "Java 실행에서 OS와 HotSpot의 역할을 구분하고, OS의 preemption만으로 GC를 수행할 수 없는 이유를 Safepoint와 OopMap으로 연결합니다.",
    date: '2026.10.05',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/ostep-jvm-execution-safepoint/thumbnail.jpg",
    link: "https://blog.rlarbdlf222.workers.dev/blog/ostep-jvm-execution-safepoint/",
    tags: ["OSTEP","JVM","HotSpot"],
  },
  {
    title: "CS 스터디: 트랜잭션, 격리 수준, 락",
    summary: "트랜잭션·격리 수준·락의 기본 개념을 정리하고, 트랜잭션 경계와 재시도, 중복 처리, 동시성 테스트까지 확장해 살펴봅니다.",
    date: '2026.10.04',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/cs-database-transactions-isolation-locks/thumbnail.jpg",
    link: "https://blog.rlarbdlf222.workers.dev/blog/cs-database-transactions-isolation-locks/",
    tags: ["CS","데이터베이스","트랜잭션"],
  },
  {
    title: "커널은 CPU에 요청을 보내는 존재일까?",
    summary: "OSTEP 6장을 읽으며 커널과 CPU의 관계, 첫 실행의 트랩 복귀, 문맥 교환의 두 번의 상태 저장과 스택 전환을 이해한 과정을 정리합니다.",
    date: '2026.10.03',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/ostep-limited-direct-execution/thumbnail.jpg",
    link: "https://blog.rlarbdlf222.workers.dev/blog/ostep-limited-direct-execution/",
    tags: ["OSTEP","운영체제","CPU"],
  }
];
