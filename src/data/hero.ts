export interface Education {
  period: string;
  school: string;
  major: string;
  details?: string;
}

export interface AboutInfo {
  paragraphs: string[];
}

export interface HeroData {
  name: string;
  profileImage: string;
  email: string;
  phone: string;
  address: string;
  social: {
    github: string;
    blog: string;
  };
  about: AboutInfo;
  education: Education[];
}

export const heroData: HeroData = {
  name: '홍길동',
  profileImage: '/images/profile.jpg',
  email: 'your.email@example.com',
  phone: '010-1234-5678',
  address: '서울특별시 마포구',
  social: {
    github: 'https://github.com/yourusername',
    blog: 'https://yourblog.com',
  },
  about: {
    paragraphs: [
      '안녕하세요! 저는 열정적인 IT 개발자입니다. 새로운 기술을 배우고 혁신적인 솔루션을 만드는 것을 좋아합니다.',
      '웹 개발, 모바일 앱 개발, 그리고 시스템 아키텍처 설계에 전문성을 가지고 있으며, 사용자 중심의 직관적인 제품을 만드는 데 집중하고 있습니다.',
      '팀워크를 중시하며, 지속적인 학습과 성장을 통해 더 나은 개발자가 되기 위해 노력하고 있습니다.',
    ],
  },
  education: [
    {
      period: '2019.03 - 2024.02',
      school: '홍익대학교 컴퓨터공학과 19학번 졸업',
      major: '컴퓨터공학',
    },
    {
      period: '2020.12 - 2022.05',
      school: '42 서울 3기',
      major: 'Software Engineering',
    },
  ],
};
