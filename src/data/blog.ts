import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "Spring AI가 제공하는 주요 기능 정리",
    summary: "들어가며\nSpring AI는 Java/Spring 생태계에서 AI 애플리케이션을 구축하기 위한 프레임워크다. LLM 호출, 문서 임베딩, 벡터 검색, 대화 이력 관리 등 AI 앱에...",
    date: '2026.02.22',
    image: "https://blog.kakaocdn.net/dn/bhOJE9/dJMcafySKwp/28Z23NHQ6eVyElxKewFkUk/img.png",
    link: "https://imdeepskyblue.tistory.com/84",
    tags: ["개발 지식/Spring","springai"],
  },
  {
    title: "Spring AI로 멀티 턴 대화(Conversation Memory) 구현하기",
    summary: "들어가며\n이 프로젝트는 Spring AI를 학습하기 위한 프로젝트다. 고객센터 같은 상황에서 문서 기반으로 질문에 답변하면서, 동시에 이전 대화 맥락도 이어갈 수 있는 챗봇을 만드...",
    date: '2026.02.22',
    image: "https://blog.kakaocdn.net/dn/dKbcCF/dJMcaaYB5w9/3HR3650gwJHxTurfDjuDK0/img.png",
    link: "https://imdeepskyblue.tistory.com/83",
    tags: ["개발 지식/Spring","RAG","springai"],
  },
  {
    title: "500 에러가 터지면 AI가 알아서 PR을 만들어주는 봇 만들어보기",
    summary: "Spring Boot 프로젝트를 운영하다 보면 500 에러가 터진다. 로그 보고, 원인 파악하고, 코드 고치고, PR 올리고. 매번 같은 루틴이다.\n\"에러 나면 AI가 코드 보고 ...",
    date: '2026.02.18',
    image: "https://blog.kakaocdn.net/dn/bhpigT/dJMcabpFlpD/y82HKc9jrXAGPgyKsJwKC1/img.png",
    link: "https://imdeepskyblue.tistory.com/82",
    tags: ["회고","FastAPI","Spring"],
  }
];
