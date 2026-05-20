import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "Spring Boot에서 MDC 로깅 필터는 어떻게 동작할까?",
    summary: "운영 환경에서 장애를 분석할 때 가장 먼저 보는 것은 보통 로그다.\n그런데 트래픽이 많은 서버에서는 여러 사용자의 요청 로그가 뒤섞여 출력된다.\n회원 조회 시작\n예약 생성 시작\n회...",
    date: '2026.05.19',
    image: "https://blog.kakaocdn.net/dn/3GC7R/dJMcagS7qkT/JMk1KGeKj5vZnQCXyFGko1/img.png",
    link: "https://imdeepskyblue.tistory.com/93",
    tags: ["개발 지식/Spring"],
  },
  {
    title: "내가 짠 코드인데 왜 동작하는지 설명을 못 했다",
    summary: "1. 들어가며\n지난 주말 솝트에서 진행하는 해커톤에 참여했다.\n결과로 대상을 타기는 했지만 개인적으로 아쉬웠던 부분이 있어 기록 및 학습을 하려고 한다.\n이번 해커톤에서 가장 부끄...",
    date: '2026.05.18',
    image: "https://blog.kakaocdn.net/dn/qxAUW/dJMcaarPvbG/nsHwdZOSV9zgzDv4Vbz941/img.png",
    link: "https://imdeepskyblue.tistory.com/92",
    tags: ["회고"],
  },
  {
    title: "PeekCart 학습 기록 0: 왜 모놀리스에서 MSA로 가는 흐름을 먼저 봐야 할까",
    summary: "PeekCart를 다시 학습하면서 가장 먼저 확인하고 싶은 것은 개별 기술이 아니라 프로젝트의 진행 순서다.\nRedis, Kafka, Kubernetes, MSA 같은 키워드가 많...",
    date: '2026.05.13',
    image: "https://blog.kakaocdn.net/dn/oCOC8/dJMcahxEEgm/DyLwJwBX2KkqlQz8A6sCKk/img.png",
    link: "https://imdeepskyblue.tistory.com/91",
    tags: ["회고"],
  }
];
