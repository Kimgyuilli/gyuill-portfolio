import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "PeekCart 학습 기록 22: 토큰 검증을 관문 하나로 옮기려면 무엇부터 바꿔야 할까",
    summary: "다섯 서비스의 JWT 검증을 게이트웨이로 옮기려니, 배포 순서에 따라 정상 요청을 막거나 위조 헤더를 믿을 수 있었습니다. 키와 토큰 모델을 먼저 바꾸고, 되돌릴 수 있는 순서로 ...",
    date: '2026.10.03',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-gateway-token-verification/thumbnail.jpg",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-gateway-token-verification/",
    tags: ["spring-cloud-gateway","jwt","rs256"],
  },
  {
    title: "PeekCart 학습 기록 21: 공유 DB는 어떻게 나눌 수 있을까요?",
    summary: "PeekCart의 공유 MySQL을 서비스별 스키마로 나누며 교차 외래 키의 대체 수단, 스키마 소유권, 멱등성 기록의 보존 기간을 결정한 과정입니다.",
    date: '2026.10.02',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-db-per-service-schema/thumbnail.jpg",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-db-per-service-schema/",
    tags: ["mysql","flyway","microservices"],
  },
  {
    title: "CPU는 무엇을 실행할까? 프로세스에서 가상 스레드와 cgroup까지",
    summary: "프로세스와 OS 스레드의 차이에서 출발해 Java VT의 carrier, syscall, cgroup CPU quota와 Linux 스케줄링 큐가 어떻게 이어지는지 살펴봅니다.",
    date: '2026.10.02',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/process-os-threads-virtual-threads-cgroup-cpu/thumbnail.jpg",
    link: "https://blog.rlarbdlf222.workers.dev/blog/process-os-threads-virtual-threads-cgroup-cpu/",
    tags: ["프로세스","OS 스레드","가상 스레드"],
  }
];
