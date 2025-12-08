# 김규일 - IT Developer Portfolio

> 모던 React 기반의 개인 포트폴리오 웹사이트

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite)](https://vitejs.dev/)

## 📋 목차

- [소개](#-소개)
- [주요 기능](#-주요 기능)
- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [라이선스](#-라이선스)

## 🎯 소개

안녕하세요, 새로운 기술에 도전하고 꾸준히 성장하는 개발자 김규일입니다.

이 포트폴리오는 Figma 디자인을 기반으로 제작되었으며, 모던 웹 기술 스택을 활용하여 구현한 반응형 단일 페이지 애플리케이션(SPA)입니다.

**Figma 디자인**: [IT Developer Portfolio Template](https://www.figma.com/design/ZFMZQOJ7tg4hAfIjpbL2X7/IT-Developer-Portfolio-Template)

## ✨ 주요 기능

### 📱 반응형 디자인
- 모든 디바이스에서 최적화된 사용자 경험
- 모바일, 태블릿, 데스크톱 완벽 지원

### 🌓 다크/라이트 테마
- `next-themes`를 활용한 테마 전환
- 시스템 설정 자동 감지
- 부드러운 테마 전환 애니메이션

### 📧 실시간 연락 기능
- EmailJS 통합으로 서버 없이 이메일 전송
- 실시간 폼 유효성 검사
- 전송 상태 피드백 (로딩, 성공, 에러)

### 🎨 세련된 UI/UX
- Framer Motion을 활용한 부드러운 애니메이션
- Intersection Observer 기반 스크롤 애니메이션
- 커스텀 스크롤바 스타일링

### 🎯 섹션 구성
1. **Hero** - 프로필, 소개, 교육 정보
2. **Skills** - 기술 스택 카테고리별 정리
3. **Projects** - 주요 프로젝트 쇼케이스 (상세 모달 포함)
4. **Achievements** - 수상 및 성과
5. **Experience** - 경력 타임라인
6. **Blog** - 기술 블로그 포스트
7. **Contact** - 연락처 정보 및 문의 폼

### 🖼️ 이미지 최적화
- 이미지 로드 실패 시 자동 fallback UI
- Lazy loading 지원
- 최적화된 이미지 포맷 (PNG, JPEG)

## 🛠 기술 스택

### Core
- **React 18.3.1** - UI 라이브러리
- **TypeScript 5.9.3** - 타입 안정성
- **Vite 6.3.5** - 빌드 도구 (SWC 플러그인)

### Styling
- **CSS Modules** - 컴포넌트 스코프 스타일링
- **CSS Variables** - 테마 관리 및 일관된 디자인 시스템

### Animation & UI
- **Framer Motion 12.23.25** - 애니메이션
- **Lucide React 0.487.0** - 아이콘 (기능적 아이콘)
- **React Icons 5.5.0** - 브랜드 아이콘 (Simple Icons)

### Features
- **next-themes 0.4.6** - 테마 관리
- **EmailJS 4.4.1** - 이메일 전송
- **RSS Parser 3.13.0** - 블로그 RSS 피드 파싱

### Development Tools
- **ESLint** - 코드 품질 관리
- **Prettier** - 코드 포매팅
- **Typed CSS Modules** - CSS Modules 타입 생성

## 📁 프로젝트 구조

```
gyuill-portpolio/
├── src/
│   ├── assets/                 # 정적 리소스
│   │   └── images/
│   │       ├── profile/        # 프로필 이미지
│   │       ├── projects/       # 프로젝트 이미지
│   │       └── skills/         # 스킬 아이콘 이미지
│   │
│   ├── components/
│   │   ├── common/             # 재사용 가능한 공통 컴포넌트
│   │   │   ├── AchievementCard/
│   │   │   ├── BlogCard/
│   │   │   ├── ContactInfoItem/
│   │   │   ├── ExperienceItem/
│   │   │   ├── FadeInSection/  # 스크롤 애니메이션
│   │   │   ├── ImageWithFallback/ # 이미지 에러 처리
│   │   │   ├── ProjectCard/
│   │   │   ├── ProjectModal/
│   │   │   ├── SkillCard/
│   │   │   └── SocialLink/
│   │   │
│   │   ├── layout/             # 레이아웃 컴포넌트
│   │   │   └── Navigation/     # 네비게이션 바
│   │   │
│   │   └── sections/           # 페이지 섹션
│   │       ├── Hero/           # 프로필 섹션 (3단 레이아웃)
│   │       ├── Skills/
│   │       ├── Projects/
│   │       ├── Achievements/
│   │       ├── Experience/
│   │       ├── Blog/
│   │       └── Contact/        # 연락처 + EmailJS 폼
│   │
│   ├── constants/              # 상수 정의
│   │   ├── navigation.ts       # 네비게이션 메뉴 항목
│   │   ├── categories.ts       # 프로젝트 카테고리
│   │   ├── skillIcons.tsx      # 스킬 아이콘 매핑
│   │   └── contactIcons.tsx    # 연락처 아이콘 매핑
│   │
│   ├── contexts/               # React Context
│   │   └── ThemeContext.tsx    # 테마 Provider
│   │
│   ├── data/                   # 컨텐츠 데이터 (커스터마이징 대상)
│   │   ├── hero.ts             # 프로필, 소개, 교육
│   │   ├── skills.ts           # 기술 스택
│   │   ├── projects.ts         # 프로젝트 목록
│   │   ├── achievements.ts     # 수상 및 성과
│   │   ├── experiences.ts      # 경력 정보
│   │   ├── blog.ts             # 블로그 포스트
│   │   └── contact.ts          # 연락처 정보
│   │
│   ├── types/                  # TypeScript 타입 정의
│   │   └── index.ts
│   │
│   ├── utils/                  # 유틸리티 함수
│   │   ├── cn.ts               # 클래스네임 병합
│   │   └── iconMapper.ts       # 아이콘 매핑 헬퍼
│   │
│   ├── styles/                 # 글로벌 스타일
│   │   └── globals.css         # CSS 변수, 리셋, 유틸리티
│   │
│   ├── App.tsx                 # 메인 앱 컴포넌트
│   └── main.tsx                # 엔트리 포인트
│
├── build/                      # 빌드 출력 디렉토리
├── public/                     # 퍼블릭 리소스
├── .env.local                  # 환경 변수 (git 무시)
├── vite.config.ts              # Vite 설정
├── tsconfig.json               # TypeScript 설정
├── eslint.config.js            # ESLint 설정
└── package.json                # 프로젝트 메타데이터

```

### 성능 체크리스트

- ✅ 이미지 lazy loading 적용됨
- ✅ Code splitting (React.lazy 사용)
- ✅ CSS Modules로 CSS 최적화
- ✅ Framer Motion은 필요한 곳에만 사용
- ✅ 불필요한 re-render 방지 (memo, useMemo, useCallback)

## 📝 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)
- 모바일 브라우저

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

### 크레딧

- **디자인**: [Figma - IT Developer Portfolio Template](https://www.figma.com/design/ZFMZQOJ7tg4hAfIjpbL2X7/IT-Developer-Portfolio-Template)
- **아이콘**:
  - [Lucide Icons](https://lucide.dev/) (MIT License)
  - [Simple Icons](https://simpleicons.org/) (CC0 1.0 Universal)
- **일부 컴포넌트**: [shadcn/ui](https://ui.shadcn.com/) (MIT License)

## 📧 연락처

김규일 - [rlarbdlf222@gmail.com](mailto:rlarbdlf222@gmail.com)

- GitHub: [@Kimgyuilli](https://github.com/Kimgyuilli)
- Blog: [imdeepskyblue.tistory.com](https://imdeepskyblue.tistory.com/)

---
