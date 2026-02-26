import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "Spring AI + pgvector RAG 검색 품질 개선기: 쿼리 리라이팅부터 Re-ranking까지",
    summary: "들어가며\n이전 글에서 MessageChatMemoryAdvisor를 적용해 멀티 턴 대화까지 구현했다. \n그런데 실제로 다양한 질문을 던져보니, 검색 자체가 잘 안 되는 문제가 있...",
    date: '2026.02.25',
    image: "https://blog.kakaocdn.net/dn/YkTDs/dJMcaaRVc0G/Qj6m7FIhZ64KxjFYEsN3z0/img.png",
    link: "https://imdeepskyblue.tistory.com/85",
    tags: ["개발 지식/Spring","OpenAI","pgvector"],
  },
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
  }
];
