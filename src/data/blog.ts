import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "블로그를 옮겼습니다",
    summary: "안녕하세요.\n그동안 이 티스토리 블로그에 글을 써왔는데, 이번에 새 도메인으로 블로그를 옮겼습니다.\n새 블로그 주소\n  https://blog.rlarbdlf222.workers....",
    date: '2026.05.21',
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    link: "https://imdeepskyblue.tistory.com/95",
  },
  {
    title: "Codex x LLM Wiki 구축기",
    summary: "들어가며\n최근에 내 개인 LLM Wiki를 구축했다.\n처음부터 \"LLM Wiki를 만들어야겠다\"는 거창한 목표가 있었던 것은 아니다. 나는 계속 기록을 하고 싶었고 그 기록을 다시...",
    date: '2026.05.21',
    image: "https://blog.kakaocdn.net/dn/NravR/dJMcadB0Edr/PIAC4xtnR8gdPkubHBzj01/img.webp",
    link: "https://imdeepskyblue.tistory.com/94",
    tags: ["회고"],
  },
  {
    title: "Spring Boot에서 MDC 로깅 필터는 어떻게 동작할까?",
    summary: "운영 환경에서 장애를 분석할 때 가장 먼저 보는 것은 보통 로그다.\n그런데 트래픽이 많은 서버에서는 여러 사용자의 요청 로그가 뒤섞여 출력된다.\n회원 조회 시작\n예약 생성 시작\n회...",
    date: '2026.05.19',
    image: "https://blog.kakaocdn.net/dn/3GC7R/dJMcagS7qkT/JMk1KGeKj5vZnQCXyFGko1/img.png",
    link: "https://imdeepskyblue.tistory.com/93",
    tags: ["개발 지식/Spring"],
  }
];
