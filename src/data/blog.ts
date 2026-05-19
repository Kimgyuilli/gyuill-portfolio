import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "내가 짠 코드인데 왜 동작하는지 설명을 못 했다",
    summary: "1. 들어가며\n지난 주말 솝트에서 진행하는 해커톤에 참여했다.\n결과로 대상을 타기는 했지만 개인적으로 아쉬웠던 부분이 있어 기록 및 학습을 하려고 한다.\n이번 해커톤에서 가장 부끄...",
    date: '2026.05.18',
    image: "https://blog.kakaocdn.net/dn/qxAUW/dJMcaarPvbG/nsHwdZOSV9zgzDv4Vbz941/img.png",
    link: "https://imdeepskyblue.tistory.com/92",
    tags: ["회고"],
  },
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
  }
];
