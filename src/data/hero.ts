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
  profileImage: '/images/profile/profile.jpeg',
  email: 'rlarbdlf222@gmail.com',
  phone: '010-9028-1157',
  address: '경기도 화성시 향남읍',
  social: {
    github: 'https://github.com/Kimgyuilli',
    blog: 'https://imdeepskyblue.tistory.com/',
  },
  about: {
    paragraphs: [
      '안녕하세요, 새로운 기술에 도전하고 꾸준히 성장하는 개발자 김규일입니다.',
      '매일 1일 1커밋을 실천하며 기본기를 다지고 있으며, 기획 행사 참여와 풀스택 프로젝트 경험을 통해 직무 간 유연한 소통 능력도 갖추고 있습니다.',
      '항상 더 나은 결과를 위해 고민하고, 사용자와 팀 모두에게 도움이 되는 개발을 추구합니다. 팀워크를 중시하며, 지속적인 학습과 성장을 통해 더 나은 개발자가 되기 위해 노력하고 있습니다.',
    ],
  },
  education: [
    {
      period: '2020.03 - 현재',
      school: '안양대학교 컴퓨터공학과 20학번 재학',
    },
  ],
};
