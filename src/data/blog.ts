import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "AWS 인프라를 어떻게 구축할 수 있을까",
    summary: "주요 의사결정 및 Trade-off 분석\n1. 컨테이너 이미지 빌드: Dockerfile vs Jib vs bootBuildImage\n선택: Jib 3.5.2\nSpring Boot...",
    date: '2026.01.16',
    image: "https://blog.kakaocdn.net/dn/zYMlN/dJMcabJJBm0/aPJ7GcGvn9IRbUlBrRi0aK/img.png",
    link: "https://imdeepskyblue.tistory.com/73",
    tags: ["개발 지식/aws","aws","springboot"],
  },
  {
    title: "개발자에게 필요한 문서는 무엇이 있을까",
    summary: "개발 시작 전, 어떤 문서가 필요할까?\n개발자가 협업을 하기 위해서 문서화는 꼭 해야 하는 작업입니다.\n협업을 하기 위해서 어떤 문서가 필요할까요? 과연 모든 경우의 수를 담은 매...",
    date: '2025.12.17',
    image: "https://blog.kakaocdn.net/dn/deGCdN/dJMcadN3wDF/yxN9uxKKLK8zke4e9Z0i20/img.png",
    link: "https://imdeepskyblue.tistory.com/72",
    tags: ["아티클/SOPT에서 쓴 아티클","개발","개발자"],
  },
  {
    title: "나만의 개발자 포트폴리오 웹사이트 제작기",
    summary: "프로젝트 시작 배경\n올해가 다 지나가고 있는 와중 학교에서의 마지막 시험을 끝내게 되었다. 물론 졸업 논문도 써야 하지만 다음 일정 전에 시간이 남아서 전부터 하고 싶었던 나만의 ...",
    date: '2025.12.09',
    image: "https://blog.kakaocdn.net/dn/5csj1/dJMcab3MIqv/vS1LrzTXws8rjS16ecXyEK/img.png",
    link: "https://imdeepskyblue.tistory.com/71",
    tags: ["회고","개발","웹사이트"],
  }
];
