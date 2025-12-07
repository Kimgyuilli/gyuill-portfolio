export interface ContactInfoData {
  label: string;
  value: string;
  href?: string;
}

export interface SocialLinkData {
  href: string;
  label: string;
}

export const contactInfoData: ContactInfoData[] = [
  {
    label: '이메일',
    value: 'rlarbdlf222@gmail.com',
    href: 'mailto:rlarbdlf222@gmail.com',
  },
  {
    label: '전화번호',
    value: '+82 10-9028-1157',
    href: 'tel:+821090281157',
  },
  {
    label: '위치',
    value: '경기도, 대한민국',
  },
];

export const socialLinksData: SocialLinkData[] = [
  {
    href: 'https://github.com/Kimgyuilli',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/kimgyuill222/',
    label: 'LinkedIn',
  },
  {
    href: 'https://imdeepskyblue.tistory.com',
    label: 'Tech Blog',
  },
];
