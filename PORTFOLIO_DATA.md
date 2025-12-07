# 포트폴리오 데이터 입력 템플릿

이 문서를 작성한 후, 각 섹션의 데이터를 해당 파일에 반영하면 됩니다.

---

## 1. 기본 프로필 정보 (hero.ts)

### 기본 정보
```
이름: 김규일
프로필 이미지 경로: /images/profile/profile.jpeg
이메일: rlarbdlf222@gmail.com
전화번호: 010-9028-1157
주소: 경기도 화성시 향남읍
GitHub URL: https://github.com/Kimgyuilli
블로그 URL: https://imdeepskyblue.tistory.com/
```

### 자기소개 (3개 문단)
```
문단 1:
안녕하세요, 새로운 기술에 도전하고 꾸준히 성장하는 개발자 김규일입니다.

문단 2:
매일 1일 1커밋을 실천하며 기본기를 다지고 있으며, 기획 행사 참여와 풀스택 프로젝트 경험을 통해 직무 간 유연한 소통 능력도 갖추고 있습니다.

문단 3:
항상 더 나은 결과를 위해 고민하고, 사용자와 팀 모두에게 도움이 되는 개발을 추구합니다. 팀워크를 중시하며, 지속적인 학습과 성장을 통해 더 나은 개발자가 되기 위해 노력하고 있습니다.
```

### 학력
```
학력 1:
- 기간: 2020.03 - 현재
- 학교: 안양대학교 컴퓨터공학과 20학번 재학

```

---

## 2. 기술 스택 (skills.ts)

### Frontend
```
React, TypeScript, vite
```

### Backend
```
Django, Python, Java, Spring Boot
```

### Database
```
PostgreSQL, MySQL, Redis
```

### DevOps
```
Docker, AWS, GCP, NCP, CI/CD, Kubernetes, GitHub Actions
```

### Tools
```
Git, VS Code, IntelliJ, Figma, Slack, Notion, Postman
```

---

## 4. 프로젝트 (projects.ts) - 최신순

### 프로젝트 1: Shamrock Tales
```
제목: Shamrock Tales
간단한 설명: 육아 일기를 아일랜드 설화 스타일로 변환해주는 AI 기반 웹 서비스. 간단한 한 줄 기록이 감성적인 가족 이야기로 재탄생합니다.
이미지 URL: /images/project/ShamrockTales.png
태그: Spring Boot, Spring AI, MySQL, OpenAI
GitHub 링크: https://github.com/SOPT-all/37-SOPKATHON-SERVER-WEB3
데모 링크: #
카테고리: Web

상세 설명:
아일랜드 전통 이야기꾼 'Seanchaí'에서 영감을 받아, 바쁜 일상 속 짧은 육아 순간을 의미 있는 가족 스토리로 변환하는 서비스입니다. 사용자가 입력한 육아 일기를 AI가 분석하여 아일랜드 민담 스타일의 서사로 재구성합니다.

주요 기능:
1. 클로버 UI 대시보드로 세 가지 주제 카테고리 시각화
2. 간단한 한 줄 일기 작성 시스템
3. OpenAI 기반 아일랜드 설화 스타일 변환
4. FAITH(용기), HOPE(소망), LOVE(사랑) 주제 분류
5. 원본 일기와 AI 생성 이야기 아카이브
6. 커서 기반 페이지네이션 및 필터링

기술 스택:
- Frontend: (팀원 담당)
- Backend: Java 17, Spring Boot 3.3.5, Spring Data JPA, Spring AI
- Database: MySQL 8.0+
- Deployment: AWS

기술적 도전 과제:
1. OpenAI API와 Spring AI 통합으로 안정적인 스토리 생성
2. 감정 키워드 기반 분류 알고리즘 설계
3. 짧은 해커톤 기간 내 기획 방향성 정의 및 MVP 구현

성과:
SOPT 37기 해커톤 웹 서비스 부문 대상 수상

기간: 2025.11 (해커톤)
팀 규모: 2명 (Server)
역할: Server Lead Developer
```

### 프로젝트 2: GiveYouEar (SpeekSee)
```
제목: GiveYouEar (SpeekSee)
간단한 설명: AI 기반 자기주도형 발음 훈련 플랫폼. 맞춤형 스크립트 생성과 STT 분석을 통해 혼자서도 효과적인 스피킹 연습이 가능합니다.
이미지 URL: /images/project/GiveYouEar.png
태그: Spring Boot, Java, STT, AI
GitHub 링크: https://github.com/Kimgyuilli/GiveYouEar-BE
데모 링크: #
카테고리: Web

상세 설명:
취준생과 대학생들의 스피치 불안을 해소하고 실질적인 훈련 성과를 제공하는 AI 발음 교정 플랫폼입니다. 사용자 레벨과 목표에 맞춘 스크립트를 AI가 자동 생성하고, STT 기술로 발음을 분석하여 시각적 피드백을 제공합니다. 성장 대시보드를 통해 학습 진행도를 한눈에 확인할 수 있습니다.

주요 기능:
1. AI 기반 사용자 맞춤형 스크립트 생성
2. STT 분석 및 발음 시각적 피드백
3. 성장 대시보드를 통한 진행도 시각화
4. 발음 기호 및 애니메이션 반복 학습 지원
5. 출석 체크 기능
6. 복습 노트 작성 시스템

기술 스택:
- Frontend: (팀원 담당)
- Backend: Java, Spring Boot, Gradle
- Database: PostgreSQL
- Infrastructure: AWS

기술적 도전 과제:
1. Spring Boot Websocket, STT API 통합 및 발음 분석 알고리즘 구현
2. 사용자 레벨별 맞춤 스크립트 생성 로직 설계
3. 시각적 피드백 데이터 처리 및 최적화

성과:
Groomthon univ 경인지부 9ITHON 최우수상(1등) 수상

기간: 2025.07 (해커톤)
팀 규모: 6
역할: Backend Developer
```

### 프로젝트 3: Piro-Recruit
```
제목: Piro-Recruit
간단한 설명: IT 연합 동아리 피로그래밍의 리쿠르팅 관리 프로세스를 디지털 전환한 종합 관리 플랫폼
이미지 URL: /images/project/piro-recruit.png
태그: Spring Boot, PostgreSQL, Docker, Spring Security, React
GitHub 링크: https://github.com/Piro-recruit
데모 링크: #
카테고리: Web

상세 설명:
IT 연합 동아리 피로그래밍의 리쿠르팅 프로세스 전반을 디지털화한 관리 플랫폼입니다. 기존 Excel/Notion 기반 수작업 방식의 한계를 극복하고, 데이터 유실 방지, 업무 자동화, 사용자 경험 개선을 통해 체계적인 리쿠르팅 관리 시스템을 구축했습니다. OpenAI API를 활용한 지원서 요약, Admin Code Rotation 기반 권한 관리 등의 기능을 포함합니다.

주요 기능:
1. 리쿠르팅 생애주기 관리 (지원서 접수 → 평가 → 면접 → 최종 선발)
2. AI 지원서 분석 (OpenAI API 연동으로 요약 및 평가 점수 자동 생성)
3. 권한 기반 관리 (Admin Code Rotation을 통한 기수별 권한 분리)
4. 이메일 자동화 (합격자 대상 일괄 메일 전송 시스템)
5. 면접 관리 (2차 대면 면접 타임테이블 생성 및 평가)
6. Google Forms 연동 및 통계 대시보드
7. 지원서 접수 비동기 처리 로직 최적화

기술 스택:
- Frontend: React
- Backend: Java, Spring Boot, Spring Security, Spring Data JPA
- Database: PostgreSQL
- Infrastructure: GCP, Jenkins, Terraform, Docker
- Deployment: Blue-Green 배포, Netlify

기술적 도전 과제:
1. Admin Code Rotation 기반 기수별 권한 관리 시스템 설계
2. OpenAI API 통합 및 지원서 자동 분석 로직 구현
3. Blue-Green 배포 전략으로 무중단 배포 환경 구축
4. Google Forms 데이터 연동 및 실시간 동기화

성과:
프로젝트 기획부터 디자인, 풀스택 개발, DevOps까지 전 과정 경험. 리쿠르팅 기록 체계화 및 데이터 유실 방지 시스템 구축, 기존 홈페이지와의 확장 가능한 연동 구현.

기간: 2025.03 - 2025.06
팀 규모: 3명 (BE 2명, PM 1명)
역할: PM 겸 풀스택 리드 개발자 (프로젝트 관리, UI/UX 설계, 백엔드/프론트엔드 개발, DevOps)
```

### 프로젝트 4: 걸음걸이
```
제목: 걸음걸이 (Geol-eum-geol-i)
간단한 설명: 멈추지 않을 당신의 걸음을 위한 맞춤형 서비스. 일일 걸음 추적부터 커뮤니티 참여까지, 걷기 문화를 함께 만들어가는 웹 플랫폼입니다.
이미지 URL: /images/project/Geol-eum-geol-i.png
태그: Django, Python, JavaScript, HTML, CSS, MySQL
GitHub 링크: https://github.com/pirogramming/geol-eum-geol-i
데모 링크: X
카테고리: Web

상세 설명:
걸음걸이는 걷기 활동을 체계적으로 추적하고 관리할 수 있는 웹 애플리케이션입니다. 피로그래밍 동아리에서 한 달간 주 3회 대면 회의를 통해 스타트업처럼 100% 몰입하며 개발한 프로젝트입니다. 실시간 걸음 추적, 월별 통계 시각화, 커뮤니티 랭킹 시스템, 장소 추천 기능 등을 통해 사용자들이 건강한 걷기 습관을 형성하도록 돕습니다. 디스코드, 피그마, 노션, 깃을 활용한 협업 경험을 쌓았으며, 특히 사용자 관리 시 데이터베이스 설계와 보안 방식에 대해 깊이 고민했습니다.

주요 기능:
1. 실시간 걸음 추적 (거리, 칼로리, 속도 지표 제공)
2. 월별 통계를 시각적으로 표시하는 캘린더 뷰
3. "함께 걷기" 포럼으로 러닝 메이트 찾기
4. "이달의 걷기왕" 랭킹 시스템 (월간 상위 5명 표시)
5. 추천 걷기 코스 및 키워드/지도 기반 코스 검색
6. 소셜 로그인 (네이버, 구글) 및 프로필 커스터마이징

기술 스택:
- Frontend: HTML5, CSS3, JavaScript
- Backend: Python 3.12.8, Django 4.2.19, Django REST Framework 3.15.2
- Database: MySQL 8.0.41
- Deployment: Ubuntu 20.04.6, geoleum.kr

기술적 도전 과제:
1. 사용자 데이터베이스 설계 및 보안 강화 (소셜 로그인 통합)
2. 실시간 걸음 추적 데이터 처리 및 월별 통계 시각화
3. 커뮤니티 랭킹 시스템 및 사용자 상호작용 기능 구현
4. 피그마, 노션, 깃을 활용한 팀 협업 프로세스 최적화

성과:
실제 도메인 배포 (geoleum.kr), 한 달간 스타트업 방식 몰입형 개발로 팀 협업 역량 강화, 사용자 관리 및 보안 설계 경험 축적

기간: 2025.01 - 2025.02
팀 규모: 5명 (풀스택)
역할: 풀스택 개발자 (사용자 관리, 데이터베이스 설계, 보안)
```

---

## 5. 자격증 및 성취 (achievements.ts) - 최신순

### 자격증/성취 1
```
제목: AYU 컴퓨터공학과 캡스톤 경진대회 최우수상
발급 기관: Anyang Univ
취득/수상 날짜: 2024.12
설명: AI 기반 탈모 진단 안드로이드 앱 개발로 최우수상(2등) 수상
링크 (선택): https://github.com/Kimgyuilli/InHair
```

### 자격증/성취 2
```
제목: SOPT 37기 해커톤 웹 서비스 대상
발급 기관: SOPT
취득/수상 날짜: 2024.11.23
설명: 육아일기를 아일랜드 설화로 만들어주는 서비스 개발로 대상 수상
링크 (선택): https://github.com/SOPT-all/37-SOPKATHON-SERVER-WEB3
```

### 자격증/성취 3
```
제목: SQLD
발급 기관: 국가 공인
취득/수상 날짜: 2024.08
설명: 데이터베이스 SQL 국가공인 자격증
링크 (선택): #
```

### 자격증/성취 4
```
제목: Groomthon univ 경인지부 9ITHON 최우수상
발급 기관: Groomthon univ 경인지부
취득/수상 날짜: 2024.07.13
설명: AI 기반 자기주도형 발음 훈련 서비스 개발로 최우수상(1등) 수상
링크 (선택): https://github.com/Kimgyuilli/GiveYouEar-BE
```

---

## 6. 경력 및 활동 (experiences.ts) - 최신순 (진행중 우선)

### 경력/활동 1
```
회사/조직명: IT 동아리 SOPT
직책/역할: SERVER YB
기간: 2024.09 - 현재
타입: activity

담당 업무:
- 서버 파트 합동 세미나 참여 및 과제 수행
- 해커톤 참여 및 웹 서비스 부문 대상 수상
- Spring Boot 기반 서버 개발 역량 강화
```

### 경력/활동 2
```
회사/조직명: AYU DB LAB
직책/역할: 학부 연구생
기간: 2024.03 - 현재
타입: activity

담당 업무:
- 데이터베이스 관련 연구 활동 참여
- 학술 논문 및 프로젝트 연구 진행
```

### 경력/활동 3
```
회사/조직명: Groomthon univ
직책/역할: AYU 서버파트 미르미
기간: 2024.02 - 2024.09
타입: activity

담당 업무:
- 해커톤 2회 참여 (9ITHON 최우수상 수상)
- SpringBoot 스터디 진행 및 기술 공유
```

### 경력/활동 4
```
회사/조직명: IT 동아리 피로그래밍
직책/역할: 교육팀 운영진
기간: 2024.03 - 2024.08
타입: activity

담당 업무:
- 교육 커리큘럼 설계 및 과제 출제
- 과제 채점 기준 수립 및 코드리뷰 진행
- 강의자 섭외 및 조율
- Git 세션 강의 진행
- 리쿠르팅 전반 참여
```

### 경력/활동 5
```
회사/조직명: IT 동아리 피로그래밍 피로니어
직책/역할: 서버 개발 팀 참가자
기간: 2024.03 - 2024.05
타입: activity

담당 업무:
- SpringBoot 과정 수료
- 리쿠르팅 플랫폼 프로젝트 PM 및 풀스택 리드 개발자
- 백엔드 API 설계 및 구현
```

### 경력/활동 6
```
회사/조직명: IT 동아리 피로그래밍
직책/역할: 참가자
기간: 2023.12 - 2024.02
타입: activity

담당 업무:
- 풀스택 개발 과정 수료
- 러닝 코스 추천 웹 서비스 팀 프로젝트 개발
```

---

## 7. 블로그 포스트 (blog.ts)

```
✅ 자동으로 Tistory에서 불러옵니다 (수정 불필요)
```

---

## 8. 연락처 정보 (contact.ts)

### 연락처
```
이메일: rlarbdlf222@gmail.com
전화번호: +82 10-9028-1157
위치: 경기도, 대한민국
```

### 소셜 링크
```
GitHub: https://github.com/Kimgyuilli
LinkedIn: https://www.linkedin.com/in/kimgyuill222/
Tech Blog: https://imdeepskyblue.tistory.com
```

---

## 작성 후 다음 단계

이 문서를 모두 작성하신 후, 저에게 보내주시면:
1. 각 섹션의 데이터를 해당 `.ts` 파일에 자동으로 반영해드립니다
2. 이미지 파일이 필요한 경우 안내해드립니다
3. 데이터 형식 검증 및 오류 확인을 도와드립니다

**참고사항:**
- 이미지 URL은 Unsplash 같은 무료 이미지 사이트 또는 로컬 이미지 경로를 사용하세요
- 로컬 이미지는 `public/images/` 폴더에 저장 후 `/images/파일명.jpg` 형식으로 참조하세요
- 링크가 없는 경우 `#`로 표시하거나 비워두세요
- 날짜 형식: `YYYY.MM.DD` 또는 `YYYY.MM - YYYY.MM`
