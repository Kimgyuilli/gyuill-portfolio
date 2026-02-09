import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "포트폴리오 사이트 미디어 최적화하기",
    summary: "들어가며\n포트폴리오 사이트에 프로젝트 캐러셀 기능을 추가하면서 이미지 35장과 시연 영상 1개를 넣었습니다.\n무작정 이미지와 영상을 넣은 결과 총 209MB의 미디어 파일과 함께 ...",
    date: '2026.02.08',
    image: "https://blog.kakaocdn.net/dn/bHfkDd/dJMcagRXgud/VqIt6JDPkPKzrYiCgs8O71/img.png",
    link: "https://imdeepskyblue.tistory.com/74",
    tags: ["개발 지식/React","Portfolio","react"],
  },
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
  }
];
