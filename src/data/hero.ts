import profileImage from '@/assets/images/profile/profile.jpeg';

export interface Education {
  period: string;
  school: string;
}

export interface AboutInfo {
  paragraphs: string[];
}

export interface HeroData {
  name: string;
  profileImage: string;
  portfolioUrl: string;
  social: {
    github: string;
    blog: string;
  };
  about: AboutInfo;
  education: Education[];
  lastUpdated: string;
}

export const heroData: HeroData = {
  name: '김규일',
  profileImage: profileImage,
  portfolioUrl: 'https://kimgyuilli.github.io/gyuill-portfolio',
  social: {
    github: 'https://github.com/Kimgyuilli',
    blog: 'https://imdeepskyblue.tistory.com/',
  },
  about: {
    paragraphs: [
      '학습한 내용을 기술 블로그에 기록하고, 세미나와 스터디를 통해 팀원들과 지식을 나누며 함께 성장하는 환경을 만들어갑니다.',
      '단순히 기능을 구현하는 것에 그치지 않고, 왜 이 기술을 선택했는지 근거를 갖고 개발합니다.',
      '프로젝트 기획부터 배포까지 경험하며, 직무 간 맥락을 이해하고 주도적으로 소통합니다.',
      'AI 도구를 활용해 반복 작업을 자동화하고, 핵심 로직 개발에 집중하여 생산성을 높입니다.',
    ],
  },
  education: [
    {
      period: '2020.03 - 현재',
      school: '안양대학교 컴퓨터공학과 20학번 재학 [학점: 4.02/4.5]',
    },
  ],
  lastUpdated: '2026-03-15',
};
