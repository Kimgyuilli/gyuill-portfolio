import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "LangChain이 공개한 에이전트 하네스, Deep Agents 뜯어보기",
    summary: "왜 이 코드를 읽게 됐나\n요즘 AI 에이전트 하네스를 직접 만들어보려는 시도가 많다. 나도 그중 하나였다. 프롬프트 짜고, 도구 몇 개 붙이고, 루프 돌리면 되겠지 싶었는데 막상 ...",
    date: '2026.03.16',
    image: "https://blog.kakaocdn.net/dn/bc267L/dJMcah4LeiX/KCF9rTBf6BCaQJjIn26RO1/img.png",
    link: "https://imdeepskyblue.tistory.com/86",
    tags: ["개발 지식/Open Source","Agent","ai"],
  },
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
  }
];
