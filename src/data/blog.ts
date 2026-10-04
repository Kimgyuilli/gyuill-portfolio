import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
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
  },
  {
    title: "PeekCart 학습 기록 22: 토큰 검증을 관문 하나로 옮기려면 무엇부터 바꿔야 할까",
    summary: "다섯 서비스의 JWT 검증을 게이트웨이로 옮기려니, 배포 순서에 따라 정상 요청을 막거나 위조 헤더를 믿을 수 있었습니다. 키와 토큰 모델을 먼저 바꾸고, 되돌릴 수 있는 순서로 ...",
    date: '2026.10.03',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-gateway-token-verification/thumbnail.jpg",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-gateway-token-verification/",
    tags: ["spring-cloud-gateway","jwt","rs256"],
  }
];
