import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "PeekCart 학습 기록 0: 왜 모놀리스에서 MSA로 가는 흐름을 먼저 봐야 할까",
    summary: "PeekCart를 다시 학습하면서 가장 먼저 확인하고 싶은 것은 개별 기술이 아니라 프로젝트의 진행 순서다.\nRedis, Kafka, Kubernetes, MSA 같은 키워드가 많...",
    date: '2026.05.13',
    image: "https://blog.kakaocdn.net/dn/oCOC8/dJMcahxEEgm/DyLwJwBX2KkqlQz8A6sCKk/img.png",
    link: "https://imdeepskyblue.tistory.com/91",
    tags: ["회고"],
  },
  {
    title: "요즘 클로드코드에 대해",
    summary: "1. 요즘 Claude Code가 이상하다\n최근 Claude Code를 쓰면서 “어? 예전 같지 않은데?”라고 느낀 사람들이 꽤 많아진 것 같습니다. 단순한 체감이나 커뮤니티 불평...",
    date: '2026.05.03',
    image: "https://blog.kakaocdn.net/dn/FeqGM/dJMb99TL6uv/DjSreItLTTSkwCxoy1SNWk/img.jpg",
    link: "https://imdeepskyblue.tistory.com/90",
    tags: ["아티클/SOPT에서 쓴 아티클"],
  },
  {
    title: "성능테스트 정리",
    summary: "1. 부하 테스트란?\n부하 테스트(Load Test) 는\n시스템이 예상되는 트래픽을 안정적으로 처리할 수 있는지 검증하는 테스트이다.\n단순히 \"최대 몇 명까지 버틴다\"를 보는 것이...",
    date: '2026.05.03',
    image: "https://blog.kakaocdn.net/dn/ETiJl/dJMcafNgLBd/9p9ProV67KLBktZtDMEoC0/img.png",
    link: "https://imdeepskyblue.tistory.com/89",
    tags: ["아티클/SOPT에서 쓴 아티클"],
  }
];
