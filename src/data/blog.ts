import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    title: "PeekCart 학습 기록 16: 캐시 효과를 어떻게 증명할까",
    summary: "Redis Cache Aside 도입 효과를 GKE 부하 테스트에서 캐시 ON/OFF 단일 변수 실험으로 검증하고, 목표 x3에 못 미친 x2.31 결과를 baseline으로 남긴...",
    date: '2026.06.04',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-cache-effect-measurement/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-cache-effect-measurement/",
    tags: ["peekcart","redis","cache"],
  },
  {
    title: "PeekCart 학습 기록 15: 메트릭은 수집됐는데 그래프가 비어 있다",
    summary: "Actuator에서 Prometheus, Grafana 알림까지 이어지는 관측성 경로를 따라가며 YAML 설정 배치 원칙과 SSOT 기반 관측성 계약을 정리합니다.",
    date: '2026.06.04',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-observability-contract/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-observability-contract/",
    tags: ["spring-boot","prometheus","grafana"],
  },
  {
    title: "PeekCart 학습 기록 14: 같은 매니페스트로 두 환경을 배포한다 - Kustomize base/overlays와 minikube → GKE",
    summary: "Kustomize base/overlays로 minikube와 GKE 환경 차이를 patch로 분리하고, monitoring 스택을 base에서 떼어낸 배포 구조와 한계를 정리합니...",
    date: '2026.06.03',
    image: "https://blog.rlarbdlf222.workers.dev/images/blog/peekcart-kustomize-base-overlays-gke/thumbnail.png",
    link: "https://blog.rlarbdlf222.workers.dev/blog/peekcart-kustomize-base-overlays-gke/",
    tags: ["peekcart","kubernetes","kustomize"],
  }
];
