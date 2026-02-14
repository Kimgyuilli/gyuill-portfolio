import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "포트폴리오 웹사이트에서 이력서 PDF 자동 생성하기",
    summary: "포트폴리오 통합 관리의 필요성\n취업을 준비하는 개발자로서 관리해야 할 것들이 많다. GitHub, 블로그, 이력서, 포트폴리오... 각각 따로 관리하다 보면 내용이 서로 달라지기 ...",
    date: '2026.02.13',
    image: "https://blog.kakaocdn.net/dn/c26mtB/dJMb996ovhp/QntHMcWQ1gwjTgc2g47Td0/img.png",
    link: "https://imdeepskyblue.tistory.com/75",
    tags: ["개발 지식/React","react","이력서"],
  },
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
  }
];
