import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "CS 스터디 7주차: 정규화, 조인, 인덱스",
    summary: "고객 이름의 중복에서 시작해 테이블과 키, 트랜잭션, 조인, 인덱스가 각각 해결하는 문제를 살펴봅니다.",
    date: '2026.09.30',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/cs-database-normalization-joins-indexes/thumbnail.jpg",
    link: "https://blog.rlarbdlf222.workers.dev/blog/cs-database-normalization-joins-indexes/",
    tags: ["CS","데이터베이스","정규화"],
  },
  {
    title: "6주차 웹, 네트워크",
    summary: "인터넷과 웹, IP 주소와 포트, 소켓, HTTP·HTTPS, 쿠키와 세션의 핵심 개념을 정리합니다.",
    date: '2026.09.22',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/cs-web-network/content/image-01.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/cs-web-network/",
    tags: ["CS","네트워크","웹"],
  },
  {
    title: "네트워크 기초: OSI 7계층부터 TCP·UDP까지",
    summary: "OSI 7계층과 TCP/IP 모델의 관계부터 캡슐화, TCP 연결·신뢰성·흐름 제어, UDP의 특징과 선택 기준까지 네트워크 통신의 핵심을 정리합니다.",
    date: '2026.09.10',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/network-basics-osi-tcp-udp/image-01.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/network-basics-osi-tcp-udp/",
    tags: ["network","osi","tcp-ip"],
  }
];
