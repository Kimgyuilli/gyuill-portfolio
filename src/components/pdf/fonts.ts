import { Font } from '@react-pdf/renderer';

const SPOQA_BASE =
  'https://cdn.jsdelivr.net/gh/niceplugin/Spoqa-Han-Sans-Neo@1.0.0/Spoqa Han Sans Neo';

Font.register({
  family: 'Spoqa Han Sans Neo',
  fonts: [
    { src: `${SPOQA_BASE}/SpoqaHanSansNeo-Regular.ttf`, fontWeight: 400 },
    { src: `${SPOQA_BASE}/SpoqaHanSansNeo-Medium.ttf`, fontWeight: 500 },
    { src: `${SPOQA_BASE}/SpoqaHanSansNeo-Bold.ttf`, fontWeight: 700 },
  ],
});

// 한글 하이픈 비활성화
Font.registerHyphenationCallback((word) => [word]);
