import type { Project } from '@/types';
import geolEumGeolImage from '@/assets/images/project/Geol-eum-geol-i.png';

export const geolEumGeolI: Project = {
  title: '걸음걸이 (Geol-eum-geol-i)',
  description:
    '멈추지 않을 당신의 걸음을 위한 맞춤형 서비스. 일일 걸음 추적부터 커뮤니티 참여까지, 걷기 문화를 함께 만들어가는 웹 플랫폼입니다.',
  projectType: 'Side',
  image: geolEumGeolImage,
  tags: ['Django', 'Python', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
  github: 'https://github.com/pirogramming/geol-eum-geol-i',
  demo: '#',
  categories: ['Frontend', 'Backend'],
  detailedDescription:
    '걸음걸이는 걷기 활동을 체계적으로 추적하고 관리할 수 있는 웹 애플리케이션입니다. 피로그래밍 동아리에서 한 달간 주 3회 대면 회의를 통해 스타트업처럼 100% 몰입하며 개발한 프로젝트입니다. 실시간 걸음 추적, 월별 통계 시각화, 커뮤니티 랭킹 시스템, 장소 추천 기능 등을 통해 사용자들이 건강한 걷기 습관을 형성하도록 돕습니다. 디스코드, 피그마, 노션, 깃을 활용한 협업 경험을 쌓았으며, 특히 사용자 관리 시 데이터베이스 설계와 보안 방식에 대해 깊이 고민했습니다.',
  features: [
    '실시간 걸음 추적 (거리, 칼로리, 속도 지표 제공)',
    '월별 통계를 시각적으로 표시하는 캘린더 뷰',
    '"함께 걷기" 포럼으로 러닝 메이트 찾기',
    '"이달의 걷기왕" 랭킹 시스템 (월간 상위 5명 표시)',
    '추천 걷기 코스 및 키워드/지도 기반 코스 검색',
    '소셜 로그인 (네이버, 구글) 및 프로필 커스터마이징',
  ],
  techStack: {
    frontend: ['HTML5', 'CSS3', 'JavaScript'],
    backend: ['Python 3.12.8', 'Django 4.2.19', 'Django REST Framework 3.15.2'],
    database: ['MySQL 8.0.41'],
    deployment: ['AWS'],
  },
  challenges: [
    '사용자 데이터베이스 설계 및 보안 강화 (소셜 로그인 통합)',
    '실시간 걸음 추적 데이터 처리 및 월별 통계 시각화',
    '커뮤니티 랭킹 시스템 및 사용자 상호작용 기능 구현',
    '피그마, 노션, 깃을 활용한 팀 협업 프로세스 최적화',
  ],
  outcome:
    '실제 도메인 배포 (geoleum.kr), 한 달간 스타트업 방식 몰입형 개발로 팀 협업 역량 강화, 사용자 관리 및 보안 설계 경험 축적',
  duration: '2025.01 - 2025.02',
  teamSize: '5명 (풀스택)',
  role: '풀스택 개발자 (사용자 관리, 데이터베이스 설계, 보안)',
};
