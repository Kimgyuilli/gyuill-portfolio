import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "CS 스터디 4주차: 동기화, 교착 상태와 메모리 관리",
    summary: "Race Condition과 임계 구역부터 Mutex, Semaphore, Deadlock, Paging, 가상 메모리와 페이지 교체까지 정리합니다.",
    date: '2026.08.31',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/cs-os-synchronization-memory/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/cs-os-synchronization-memory/",
    tags: ["CS","운영체제","동기화"],
  },
  {
    title: "CS 스터디 3주차: 프로세스, 스레드와 컨텍스트 스위칭",
    summary: "프로그램·프로세스·스레드의 차이부터 상태 전이, 동시성과 병렬성, 컨텍스트 스위칭의 실제 비용까지 정리합니다.",
    date: '2026.08.27',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/cs-os-basics/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/cs-os-basics/",
    tags: ["CS","운영체제","프로세스"],
  },
  {
    title: "CS 스터디 2주차: 핵심 알고리즘 지도",
    summary: "정렬과 탐색부터 그래프, DP, 그리디, 최단 경로, MST, 문자열 매칭까지 문제 유형별 핵심 알고리즘을 정리합니다.",
    date: '2026.08.20',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/cs-algorithms/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/cs-algorithms/",
    tags: ["CS","알고리즘","그래프"],
  }
];
