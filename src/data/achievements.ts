export interface AchievementData {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  link?: string;
}

export const achievements: AchievementData[] = [
  {
    title: 'AYU 컴퓨터공학과 캡스톤 경진대회 최우수상',
    issuer: 'Anyang Univ',
    date: '2024.12',
    description: 'AI 기반 탈모 진단 안드로이드 앱 개발로 최우수상(2등) 수상',
    link: 'https://github.com/Kimgyuilli/InHair',
  },
  {
    title: 'SOPT 37기 해커톤 웹 서비스 대상',
    issuer: 'SOPT',
    date: '2024.11.23',
    description: '육아일기를 아일랜드 설화로 만들어주는 서비스 개발로 대상 수상',
    link: 'https://github.com/SOPT-all/37-SOPKATHON-SERVER-WEB3',
  },
  {
    title: 'SQLD',
    issuer: '국가 공인',
    date: '2024.08',
    description: '데이터베이스 SQL 국가공인 자격증',
  },
  {
    title: 'Groomthon univ 경인지부 9ITHON 최우수상',
    issuer: 'Groomthon univ 경인지부',
    date: '2024.07.13',
    description: 'AI 기반 자기주도형 발음 훈련 서비스 개발로 최우수상(1등) 수상',
    link: 'https://github.com/Kimgyuilli/GiveYouEar-BE',
  },
];
