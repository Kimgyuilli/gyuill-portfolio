import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "Claude &times; Codex 하네스 구축기",
    summary: "들어가며\n최근 작업하면서 가장 크게 느낀 문제는 “AI를 쓰고 있는데도 작업 흐름이 오히려 더 산만해질 수 있다”는 점이었다.\n단순히 AI가 코드를 잘 짜느냐의 문제가 아니었다. ...",
    date: '2026.04.21',
    image: "https://blog.kakaocdn.net/dn/bHYG8R/dJMcacCQ3z4/aBDBJE34NU5SHRWwqDYrNK/img.png",
    link: "https://imdeepskyblue.tistory.com/87",
    tags: ["개발 지식"],
  },
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
  }
];
