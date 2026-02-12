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
  name: '김규일',
  profileImage: profileImage,
  email: 'rlarbdlf222@gmail.com',
  phone: '010-9028-1157',
  address: '경기도 화성시 향남읍',
  social: {
    github: 'https://github.com/Kimgyuilli',
    blog: 'https://imdeepskyblue.tistory.com/',
  },
  about: {
    paragraphs: [
      '안녕하세요, 어제보다 나은 오늘을 만들어가는 개발자 김규일입니다.',
      '1일 1커밋을 실천하며 기본기를 다지고 있으며, 프로젝트 기획부터 풀스택 개발까지의 경험을 통해 직무 간 유연한 소통 능력을 갖추고 있습니다.',
      'AI를 활용한 생산성 향상과 업무 자동화에도 큰 관심을 가지고 있으며, 최신 기술 트렌드를 꾸준히 학습하고 있습니다.',
      '혼자 빠르게 가는 것보다 함께 오래, 멀리 갈 수 있는 사람이고 싶습니다. 팀에 필요한 역할이라면 적극적으로 맡아 수행하며, 지속적인 학습과 성장을 통해 더 나은 개발자가 되기 위해 노력하고 있습니다.',
    ],
  },
  education: [
    {
      period: '2020.03 - 현재',
      school: '안양대학교 컴퓨터공학과 20학번 재학 [학점: 4.02/4.5]',
    },
  ],
};
