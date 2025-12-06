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
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    label: '전화번호',
    value: '+82 10-1234-5678',
    href: 'tel:+821012345678',
  },
  {
    label: '위치',
    value: '서울, 대한민국',
  },
];

export const socialLinksData: SocialLinkData[] = [
  {
    href: '#',
    label: 'GitHub',
  },
  {
    href: '#',
    label: 'LinkedIn',
  },
];
