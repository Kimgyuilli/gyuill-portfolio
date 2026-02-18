import type { Project } from '@/types';
import cherrishImage from '@/assets/images/project/Cherrish.webp';
import cherrish1 from '@/assets/images/project/cherrish/1.webp';
import cherrish2 from '@/assets/images/project/cherrish/2.webp';
import cherrish3 from '@/assets/images/project/cherrish/3.webp';
import cherrish4 from '@/assets/images/project/cherrish/4.webp';
import cherrish5 from '@/assets/images/project/cherrish/5.webp';
import cherrish6 from '@/assets/images/project/cherrish/6.webp';
import cherrish7 from '@/assets/images/project/cherrish/7.webp';
import cherrish8 from '@/assets/images/project/cherrish/8.webp';
import cherrish9 from '@/assets/images/project/cherrish/9.webp';
import cherrish10 from '@/assets/images/project/cherrish/10.webp';
import cherrish11 from '@/assets/images/project/cherrish/11.webp';
import cherrish12 from '@/assets/images/project/cherrish/12.webp';
import cherrish13 from '@/assets/images/project/cherrish/13.webp';
import cherrish14 from '@/assets/images/project/cherrish/14.webp';
import cherrish15 from '@/assets/images/project/cherrish/15.webp';
import cherrish16 from '@/assets/images/project/cherrish/16.webp';
import cherrish17 from '@/assets/images/project/cherrish/17.webp';
import cherrish18 from '@/assets/images/project/cherrish/18.webp';
import cherrish19 from '@/assets/images/project/cherrish/19.webp';
import cherrish20 from '@/assets/images/project/cherrish/20.webp';
import cherrish21 from '@/assets/images/project/cherrish/21.webp';
import cherrish22 from '@/assets/images/project/cherrish/22.webp';
import cherrish23 from '@/assets/images/project/cherrish/23.webp';
import cherrish24 from '@/assets/images/project/cherrish/24.webp';
import cherrish25 from '@/assets/images/project/cherrish/25.webp';
import cherrish26 from '@/assets/images/project/cherrish/26.webp';
import cherrish27 from '@/assets/images/project/cherrish/27.webp';
import cherrish28 from '@/assets/images/project/cherrish/28.webp';
import cherrish29 from '@/assets/images/project/cherrish/29.webp';
import cherrish30 from '@/assets/images/project/cherrish/30.webp';
import cherrish31 from '@/assets/images/project/cherrish/31.webp';
import cherrish32 from '@/assets/images/project/cherrish/32.webp';
import cherrish33 from '@/assets/images/project/cherrish/33.webp';
import cherrish34 from '@/assets/images/project/cherrish/34.webp';
import cherrish35 from '@/assets/images/project/cherrish/35.webp';
import shamrockTalesImage from '@/assets/images/project/ShamrockTales.png';
import giveYouEarImage from '@/assets/images/project/GiveYouEar.png';
import piroRecruitImage from '@/assets/images/project/piro-recruit.png';
import geolEumGeolImage from '@/assets/images/project/Geol-eum-geol-i.png';

// Example media items for carousel testing
// To add more images or videos to a project, add them to the media array
// If media array is not provided, the project.image will be used as a single image

export const projects: Project[] = [
  {
    title: 'Cherrish',
    description:
      '미용 시술 일정과 다운타임을 관리하고, AI 기반 챌린지 루틴을 추천하는 뷰티 캘린더 앱',
    projectType: 'Main',
    image: cherrishImage,
    media: [
      { type: 'video', src: 'https://youtu.be/vPlPQkr4N3s', poster: cherrish1 },
      { type: 'image', src: cherrish1, alt: 'Cherrish 표지' },
      { type: 'image', src: cherrish2, alt: 'Cherrish 장표 2' },
      { type: 'image', src: cherrish3, alt: 'Cherrish 장표 3' },
      { type: 'image', src: cherrish4, alt: 'Cherrish 장표 4' },
      { type: 'image', src: cherrish5, alt: 'Cherrish 장표 5' },
      { type: 'image', src: cherrish6, alt: 'Cherrish 장표 6' },
      { type: 'image', src: cherrish7, alt: 'Cherrish 장표 7' },
      { type: 'image', src: cherrish8, alt: 'Cherrish 장표 8' },
      { type: 'image', src: cherrish9, alt: 'Cherrish 장표 9' },
      { type: 'image', src: cherrish10, alt: 'Cherrish 장표 10' },
      { type: 'image', src: cherrish11, alt: 'Cherrish 장표 11' },
      { type: 'image', src: cherrish12, alt: 'Cherrish 장표 12' },
      { type: 'image', src: cherrish13, alt: 'Cherrish 장표 13' },
      { type: 'image', src: cherrish14, alt: 'Cherrish 장표 14' },
      { type: 'image', src: cherrish15, alt: 'Cherrish 장표 15' },
      { type: 'image', src: cherrish16, alt: 'Cherrish 장표 16' },
      { type: 'image', src: cherrish17, alt: 'Cherrish 장표 17' },
      { type: 'image', src: cherrish18, alt: 'Cherrish 장표 18' },
      { type: 'image', src: cherrish19, alt: 'Cherrish 장표 19' },
      { type: 'image', src: cherrish20, alt: 'Cherrish 장표 20' },
      { type: 'image', src: cherrish21, alt: 'Cherrish 장표 21' },
      { type: 'image', src: cherrish22, alt: 'Cherrish 장표 22' },
      { type: 'image', src: cherrish23, alt: 'Cherrish 장표 23' },
      { type: 'image', src: cherrish24, alt: 'Cherrish 장표 24' },
      { type: 'image', src: cherrish25, alt: 'Cherrish 장표 25' },
      { type: 'image', src: cherrish26, alt: 'Cherrish 장표 26' },
      { type: 'image', src: cherrish27, alt: 'Cherrish 장표 27' },
      { type: 'image', src: cherrish28, alt: 'Cherrish 장표 28' },
      { type: 'image', src: cherrish29, alt: 'Cherrish 장표 29' },
      { type: 'image', src: cherrish30, alt: 'Cherrish 장표 30' },
      { type: 'image', src: cherrish31, alt: 'Cherrish 장표 31' },
      { type: 'image', src: cherrish32, alt: 'Cherrish 장표 32' },
      { type: 'image', src: cherrish33, alt: 'Cherrish 장표 33' },
      { type: 'image', src: cherrish34, alt: 'Cherrish 장표 34' },
      { type: 'image', src: cherrish35, alt: 'Cherrish 장표 35' },
    ],
    tags: ['Spring Boot', 'Spring AI', 'PostgreSQL', 'QueryDSL', 'AWS'],
    github: 'https://github.com/TEAM-Cherrish/Cherrish-Server',
    demo: '#',
    categories: ['Backend', 'AI'],
    detailedDescription:
      '개인의 추구미에 맞는 뷰티 관리 방향을 정리하고, 시술 후 다운타임과 일정 중복을 방지하는 뷰티 캘린더 앱입니다. 피부 고민 키워드 기반 시술 검색, 민감기/주의기/회복기로 구분된 다운타임 시각화, AI 기반 7일 챌린지 루틴 추천, 체리 레벨 게이미피케이션 등의 기능을 제공합니다. DDD 레이어드 아키텍처를 적용하여 도메인별 책임을 명확히 분리하고 확장성 있는 구조를 설계했습니다.',
    features: [
      '피부 고민 키워드 기반 시술 검색 및 추천',
      '사용자 맞춤 다운타임 설정 (민감기/주의기/회복기 자동 분할)',
      'D-day 카운트다운 및 다운타임 진행 상태 시각화',
      'Spring AI 기반 7일 챌린지 루틴 자동 생성',
      '체리 레벨(1~4) 게이미피케이션 시스템',
      '월간/일간 캘린더 뷰 및 시술 일정 관리',
      '메인 대시보드 (챌린지 현황, 다운타임 진행 중 시술, 다가오는 일정)',
    ],
    techStack: {
      frontend: ['(팀원 담당)'],
      backend: [
        'Java 21',
        'Spring Boot 3.5.9',
        'Spring Data JPA',
        'QueryDSL 5.1.0',
        'Spring AI OpenAI 1.1.2',
      ],
      database: ['PostgreSQL 17'],
      deployment: [
        'AWS (VPC, EC2, RDS, ECR, SSM)',
        'Docker (Jib)',
        'Nginx',
        'GitHub Actions OIDC CI/CD',
      ],
    },
    challenges: [
      '초기 컨벤션 수립 및 checkStyle, codeRabbit, jacoco, docker를 활용한 협업 규격 설계',
      'Spring AI OpenAI 연동으로 사용자 맞춤형 챌린지 루틴 및 챌린지명 자동 생성',
      'QueryDSL을 활용한 복잡한 캘린더/다운타임 조회 쿼리 최적화',
      'GitHub Actions OIDC + AWS SSM 기반 무중단 배포 파이프라인 구축',
      '다운타임 3단계 분할 로직 설계 (일수를 3으로 나눠 민감기/주의기/회복기 자동 계산)',
      'Server 500 오류 발생 시 디스코드 알림 전송 기능 구현',
    ],
    outcome:
      'DDD 아키텍처 기반 확장 가능한 백엔드 설계, OIDC 인증 기반 보안적인 CI/CD 파이프라인 구축, AI 통합 서비스 개발 경험',
    duration: '2025.12 - 현재',
    teamSize: '2명 (Server)',
    role: 'Server Lead Developer',
  },
  {
    title: '500 Error Auto-Fix Bot',
    description:
      'Spring Boot 애플리케이션에서 500 에러 발생 시, AI가 자동으로 원인을 분석하고 수정 코드를 작성하여 GitHub PR을 생성하는 자동화 봇',
    projectType: 'Learning',
    image: 'https://img.youtube.com/vi/4gHUAharic4/maxresdefault.jpg',
    media: [
      {
        type: 'video',
        src: 'https://youtu.be/4gHUAharic4',
        poster: 'https://img.youtube.com/vi/4gHUAharic4/maxresdefault.jpg',
      },
    ],
    tags: ['FastAPI', 'OpenAI', 'GitHub API', 'Docker', 'Python'],
    github: 'https://github.com/Kimgyuilli/500-pr-bot',
    demo: '#',
    categories: ['Backend', 'AI'],
    detailedDescription:
      'Spring Boot 애플리케이션에서 500 에러가 발생하면 자동으로 감지하여, AI가 스택 트레이스를 분석하고 관련 소스 코드를 N-depth import 추적으로 수집한 뒤 수정 코드를 생성하여 GitHub PR까지 자동으로 생성하는 파이프라인입니다. 실시간 SSE 대시보드로 파이프라인 진행 상황을 모니터링할 수 있으며, 디스코드 알림과 30분 중복 필터링, 테스트 러너 등 프로덕션 수준의 기능을 갖추고 있습니다. 구현 과정에 대한 자세한 내용은 블로그(https://imdeepskyblue.tistory.com/82)에서 확인할 수 있습니다.',
    features: [
      'Spring Boot 500 에러 자동 감지 및 웹훅 수신',
      'AI 기반 스택 트레이스 분석 및 수정 코드 자동 생성',
      'N-depth import 추적으로 관련 소스 코드 컨텍스트 수집',
      'GitHub PR 자동 생성 (브랜치 생성 → 커밋 → PR + Unified Diff)',
      'SSE 기반 실시간 파이프라인 모니터링 대시보드',
      '디스코드 웹훅 알림 (에러 발생/PR 생성/실패)',
      '30분 TTL 중복 에러 필터링',
      'pytest 테스트 러너 및 실시간 스트리밍 결과 확인',
    ],
    techStack: {
      backend: [
        'Python 3.12',
        'FastAPI',
        'OpenAI API (gpt-4o-mini)',
        'PyGithub',
        'Pydantic Settings',
      ],
      deployment: ['Docker', 'Docker Compose'],
    },
    challenges: [
      'Protocol 기반 AI Provider 추상화로 확장 가능한 AI 모델 교체 구조 설계',
      'N-depth import 추적 알고리즘으로 정확한 에러 컨텍스트 수집',
      'AI 응답 JSON 파싱 실패 시 자동 재시도 및 검증 로직 구현',
      'SSE(Server-Sent Events)를 활용한 실시간 파이프라인 이벤트 스트리밍',
      'Tenacity를 활용한 외부 API 호출 재시도 및 에러 핸들링',
    ],
    outcome:
      '에러 감지부터 PR 생성까지 10단계 파이프라인 완전 자동화, 65개 이상의 단위 테스트로 안정성 확보',
    duration: '2026.02 - 2026.02',
    teamSize: '1명',
    role: '풀스택 개발자',
  },
  {
    title: 'Shamrock Tales',
    description:
      '육아 일기를 아일랜드 설화 스타일로 변환해주는 AI 기반 웹 서비스. 간단한 한 줄 기록이 감성적인 가족 이야기로 재탄생합니다.',
    projectType: 'Side',
    image: shamrockTalesImage,
    // Example: Add media array for carousel (uncomment to test)
    // media: [
    //   { type: 'image', src: shamrockTalesImage, alt: 'Shamrock Tales Main' },
    //   { type: 'video', src: '/videos/shamrock-demo.mp4', poster: shamrockTalesImage },
    //   { type: 'image', src: '/images/shamrock-2.png', alt: 'Shamrock Tales Feature' },
    // ] as MediaItem[],
    tags: ['Spring Boot', 'Spring AI', 'MySQL', 'OpenAI'],
    github: 'https://github.com/SOPT-all/37-SOPKATHON-SERVER-WEB3',
    demo: '#',
    categories: ['Backend', 'AI'],
    detailedDescription:
      "아일랜드 전통 이야기꾼 'Seanchaí'에서 영감을 받아, 바쁜 일상 속 짧은 육아 순간을 의미 있는 가족 스토리로 변환하는 서비스입니다. 사용자가 입력한 육아 일기를 AI가 분석하여 아일랜드 민담 스타일의 서사로 재구성합니다.",
    features: [
      '클로버 UI 대시보드로 세 가지 주제 카테고리 시각화',
      '간단한 한 줄 일기 작성 시스템',
      'OpenAI 기반 아일랜드 설화 스타일 변환',
      'FAITH(용기), HOPE(소망), LOVE(사랑) 주제 분류',
      '원본 일기와 AI 생성 이야기 아카이브',
      '커서 기반 페이지네이션 및 필터링',
    ],
    techStack: {
      frontend: ['(팀원 담당)'],
      backend: ['Java 17', 'Spring Boot 3.3.5', 'Spring Data JPA', 'Spring AI'],
      database: ['MySQL 8.0+'],
      deployment: ['AWS'],
    },
    challenges: [
      'OpenAI API와 Spring AI 통합으로 안정적인 스토리 생성',
      '감정 키워드 기반 분류 알고리즘 설계',
      '짧은 해커톤 기간 내 기획 방향성 정의 및 MVP 구현',
    ],
    outcome: 'SOPT 37기 해커톤 웹 서비스 부문 대상 수상',
    duration: '2025.11 (해커톤)',
    teamSize: '2명 (Server)',
    role: 'Server Lead Developer',
  },
  {
    title: 'GiveYouEar (SpeekSee)',
    description:
      'AI 기반 자기주도형 발음 훈련 플랫폼. 맞춤형 스크립트 생성과 STT 분석을 통해 혼자서도 효과적인 스피킹 연습이 가능합니다.',
    projectType: 'Side',
    image: giveYouEarImage,
    tags: ['Spring Boot', 'Java', 'STT', 'AI'],
    github: 'https://github.com/Kimgyuilli/GiveYouEar-BE',
    demo: '#',
    categories: ['Backend', 'AI'],
    detailedDescription:
      '취준생과 대학생들의 스피치 불안을 해소하고 실질적인 훈련 성과를 제공하는 AI 발음 교정 플랫폼입니다. 사용자 레벨과 목표에 맞춘 스크립트를 AI가 자동 생성하고, STT 기술로 발음을 분석하여 시각적 피드백을 제공합니다. 성장 대시보드를 통해 학습 진행도를 한눈에 확인할 수 있습니다.',
    features: [
      'AI 기반 사용자 맞춤형 스크립트 생성',
      'STT 분석 및 발음 시각적 피드백',
      '성장 대시보드를 통한 진행도 시각화',
      '발음 기호 및 애니메이션 반복 학습 지원',
      '출석 체크 기능',
      '복습 노트 작성 시스템',
    ],
    techStack: {
      frontend: ['(팀원 담당)'],
      backend: ['Java', 'Spring Boot', 'Gradle'],
      database: ['PostgreSQL'],
      deployment: ['AWS'],
    },
    challenges: [
      'Spring Boot Websocket, STT API 통합 및 발음 분석 알고리즘 구현',
      '사용자 레벨별 맞춤 스크립트 생성 로직 설계',
      '시각적 피드백 데이터 처리 및 최적화',
    ],
    outcome: 'Groomthon univ 경인지부 9ITHON 최우수상(1등) 수상',
    duration: '2025.07 (해커톤)',
    teamSize: '6명',
    role: 'Backend Developer',
  },
  {
    title: 'Piro-Recruit',
    description:
      'IT 연합 동아리 피로그래밍의 리쿠르팅 관리 프로세스를 디지털 전환한 종합 관리 플랫폼',
    projectType: 'Main',
    image: piroRecruitImage,
    tags: ['Spring Boot', 'PostgreSQL', 'Docker', 'Spring Security', 'React'],
    github: 'https://github.com/Piro-recruit',
    demo: '#',
    categories: ['Frontend', 'Backend'],
    detailedDescription:
      'IT 연합 동아리 피로그래밍의 리쿠르팅 프로세스 전반을 디지털화한 관리 플랫폼입니다. 기존 Excel/Notion 기반 수작업 방식의 한계를 극복하고, 데이터 유실 방지, 업무 자동화, 사용자 경험 개선을 통해 체계적인 리쿠르팅 관리 시스템을 구축했습니다. OpenAI API를 활용한 지원서 요약, Admin Code Rotation 기반 권한 관리 등의 기능을 포함합니다.',
    features: [
      '리쿠르팅 생애주기 관리 (지원서 접수 → 평가 → 면접 → 최종 선발)',
      'AI 지원서 분석 (OpenAI API 연동으로 요약 및 평가 점수 자동 생성)',
      '권한 기반 관리 (Admin Code Rotation을 통한 기수별 권한 분리)',
      '이메일 자동화 (합격자 대상 일괄 메일 전송 시스템)',
      '면접 관리 (2차 대면 면접 타임테이블 생성 및 평가)',
      'Google Forms 연동 및 통계 대시보드',
      '지원서 접수 비동기 처리 로직 최적화',
    ],
    techStack: {
      frontend: ['React'],
      backend: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA'],
      database: ['PostgreSQL'],
      deployment: ['GCP', 'Jenkins', 'Terraform', 'Docker', 'Blue-Green 배포', 'Netlify'],
    },
    challenges: [
      'Admin Code Rotation 기반 기수별 권한 관리 시스템 설계',
      'OpenAI API 통합 및 지원서 자동 분석 로직 구현',
      'Blue-Green 배포 전략으로 무중단 배포 환경 구축',
      'Google Forms 데이터 연동 및 실시간 동기화',
    ],
    outcome:
      '프로젝트 기획부터 디자인, 풀스택 개발, DevOps까지 전 과정 경험. 리쿠르팅 기록 체계화 및 데이터 유실 방지 시스템 구축, 기존 홈페이지와의 확장 가능한 연동 구현.',
    duration: '2025.03 - 2025.06',
    teamSize: '3명 (BE 2명, PM 1명)',
    role: 'PM 겸 풀스택 리드 개발자 (프로젝트 관리, UI/UX 설계, 백엔드/프론트엔드 개발, DevOps)',
  },
  {
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
  },
];
