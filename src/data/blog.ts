import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "500 에러가 터지면 AI가 알아서 PR을 만들어주는 봇 만들어보기",
    summary: "Spring Boot 프로젝트를 운영하다 보면 500 에러가 터진다. 로그 보고, 원인 파악하고, 코드 고치고, PR 올리고. 매번 같은 루틴이다.\n\"에러 나면 AI가 코드 보고 ...",
    date: '2026.02.18',
    image: "https://blog.kakaocdn.net/dn/bhpigT/dJMcabpFlpD/y82HKc9jrXAGPgyKsJwKC1/img.png",
    link: "https://imdeepskyblue.tistory.com/82",
    tags: ["회고","FastAPI","Spring"],
  },
  {
    title: "Java Stream API 정리 (알고리즘 문제 풀이용)",
    summary: "알고리즘 문제를 풀 때 자주 사용하는 Java Stream API의 주요 메서드를 정리했습니다.\nStream이란? 컬렉션, 배열 등의 데이터를 함수형 프로그래밍 방식으로 처리할 수...",
    date: '2026.02.15',
    image: "https://blog.kakaocdn.net/dn/bCFyxo/dJMcah4qWNE/xlXko2SrkK1gpcwUCNMQlK/img.jpg",
    link: "https://imdeepskyblue.tistory.com/81",
    tags: ["개발 지식/JAVA","java","StreamAPI"],
  },
  {
    title: "Java Math 클래스와 기타 유틸리티 정리 (알고리즘 문제 풀이용)",
    summary: "알고리즘 문제를 풀 때 자주 사용하는 Java Math 클래스와 기타 유틸리티의 주요 메서드를 정리했습니다.\n1. Math 클래스\njava.lang.Math 클래스는 수학 연산을 ...",
    date: '2026.02.15',
    image: "https://blog.kakaocdn.net/dn/d1mz7o/dJMcajgO4Yl/GU1RKHNJpM5MM0BBaVkRf0/img.png",
    link: "https://imdeepskyblue.tistory.com/80",
    tags: ["개발 지식/JAVA","java","알고리즘"],
  }
];
