import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "CPU는 무엇을 실행할까? 프로세스에서 가상 스레드와 cgroup까지",
    summary: "프로세스와 OS 스레드의 차이에서 출발해 Java VT의 carrier, syscall, cgroup CPU quota와 Linux 스케줄링 큐가 어떻게 이어지는지 살펴봅니다.",
    date: '2026.10.02',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/process-os-threads-virtual-threads-cgroup-cpu/thumbnail.jpg",
    link: "https://blog.rlarbdlf222.workers.dev/blog/process-os-threads-virtual-threads-cgroup-cpu/",
    tags: ["프로세스","OS 스레드","가상 스레드"],
  },
  {
    title: "모놀리스를 어떻게 나눌 수 있을까",
    summary: "도메인별 패키지로 나뉜 Spring 모놀리스를 다섯 서비스로 떼어내며, 빈 호출과 트랜잭션 결합 때문에 분리 순서를 바꾼 과정을 살펴봅니다.",
    date: '2026.10.01',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-monolith-peel-order/thumbnail.jpg",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-monolith-peel-order/",
    tags: ["spring-boot","gradle","microservices"],
  },
  {
    title: "CS 스터디 7주차: 정규화, 조인, 인덱스",
    summary: "고객 이름의 중복에서 시작해 테이블과 키, 트랜잭션, 조인, 인덱스가 각각 해결하는 문제를 살펴봅니다.",
    date: '2026.09.30',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/cs-database-normalization-joins-indexes/thumbnail.jpg",
    link: "https://blog.rlarbdlf222.workers.dev/blog/cs-database-normalization-joins-indexes/",
    tags: ["CS","데이터베이스","정규화"],
  }
];
