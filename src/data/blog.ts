import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "네트워크 기초: OSI 7계층부터 TCP·UDP까지",
    summary: "OSI 7계층과 TCP/IP 모델의 관계부터 캡슐화, TCP 연결·신뢰성·흐름 제어, UDP의 특징과 선택 기준까지 네트워크 통신의 핵심을 정리합니다.",
    date: '2026.09.10',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/network-basics-osi-tcp-udp/image-01.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/network-basics-osi-tcp-udp/",
    tags: ["network","osi","tcp-ip"],
  },
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
  }
];
