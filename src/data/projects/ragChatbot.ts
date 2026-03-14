import type { Project } from '@/types';

export const ragChatbot: Project = {
  title: 'RAG 챗봇',
  description:
    '문서를 업로드하면 청크 분할 및 벡터 임베딩 후 저장하고, 사용자 질문 시 관련 문서를 하이브리드 검색하여 LLM이 답변하는 RAG(Retrieval-Augmented Generation) 챗봇',
  projectType: 'Learning',
  image: 'https://img.youtube.com/vi/6pHZYR6I-iE/maxresdefault.jpg',
  media: [
    {
      type: 'video',
      src: 'https://youtu.be/6pHZYR6I-iE',
      poster: 'https://img.youtube.com/vi/6pHZYR6I-iE/maxresdefault.jpg',
    },
  ],
  tags: ['Spring Boot', 'Spring AI', 'PostgreSQL', 'pgvector', 'Docker'],
  github: 'https://github.com/Kimgyuilli/rag-template',
  demo: '#',
  categories: ['Backend', 'AI'],
  detailedDescription:
    '문서를 업로드하면 청크 분할 및 벡터 임베딩 후 저장하고, 사용자 질문 시 관련 문서를 하이브리드 검색하여 LLM이 답변하는 RAG(Retrieval-Augmented Generation) 챗봇입니다. Spring AI Advisor 체인을 활용한 쿼리 리라이팅, pgvector 유사도 검색과 tsvector 키워드 검색을 RRF로 병합하는 하이브리드 검색, LLM 리랭킹 파이프라인을 구현했습니다.',
  features: [
    '문서 업로드 시 청크 분할 및 벡터 임베딩 자동 처리',
    'pgvector 유사도 검색 + tsvector 키워드 검색 하이브리드 검색',
    'RRF(Reciprocal Rank Fusion) 기반 검색 결과 병합',
    'Spring AI Advisor 체인을 활용한 쿼리 리라이팅',
    'LLM 리랭킹을 통한 검색 정확도 향상',
    'SSE(Server-Sent Events) 기반 실시간 스트리밍 응답',
  ],
  techStack: {
    backend: [
      'Java 21',
      'Spring Boot 3.5',
      'Spring AI 1.1',
      'Spring Data JPA',
      'Apache PDFBox 3.0',
      'OpenAI API (gpt-4o-mini)',
      'text-embedding-3-small',
    ],
    database: ['PostgreSQL 16', 'pgvector (HNSW, cosine)', 'tsvector'],
    frontend: ['Vanilla HTML/CSS/JS', 'SSE (Server-Sent Events)'],
    deployment: ['Docker', 'Docker Compose'],
  },
  challenges: [
    'Spring AI Advisor 체인을 활용한 쿼리 리라이팅 → 하이브리드 검색 → LLM 리랭킹 파이프라인 설계',
    'pgvector 유사도 검색 + tsvector 키워드 검색을 RRF(Reciprocal Rank Fusion)로 병합하는 하이브리드 검색 구현',
    '마크다운 구조 기반 문서 청크 분할 및 벡터 임베딩 파이프라인 구현',
  ],
  outcome:
    'RAG 파이프라인 설계 및 하이브리드 검색 구현 경험, Spring AI 기반 LLM 통합 아키텍처 학습',
  duration: '2026.02',
  teamSize: '1명',
  role: '풀스택 개발자',
};
