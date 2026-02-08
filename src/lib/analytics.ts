import ReactGA from 'react-ga4';
import { onCLS, onINP, onLCP, onFCP, onTTFB, type Metric } from 'web-vitals';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

// GA4 초기화
export function initGA() {
  if (!GA_MEASUREMENT_ID) {
    console.warn('GA Measurement ID가 설정되지 않았습니다.');
    return;
  }

  ReactGA.initialize(GA_MEASUREMENT_ID);
}

// 페이지뷰 전송
export function sendPageView(path: string) {
  if (!GA_MEASUREMENT_ID) return;

  ReactGA.send({
    hitType: 'pageview',
    page: path,
  });
}

// 커스텀 이벤트 전송
export function sendEvent(category: string, action: string, label?: string) {
  if (!GA_MEASUREMENT_ID) return;

  ReactGA.event({
    category,
    action,
    label,
  });
}

// Web Vitals 메트릭을 GA4로 전송
function sendToGA(metric: Metric) {
  if (!GA_MEASUREMENT_ID) return;

  ReactGA.event({
    category: 'Web Vitals',
    action: metric.name,
    label: metric.id,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    nonInteraction: true,
  });
}

// Web Vitals 측정 시작
export function measureWebVitals() {
  onCLS(sendToGA);  // Cumulative Layout Shift
  onINP(sendToGA);  // Interaction to Next Paint
  onLCP(sendToGA);  // Largest Contentful Paint
  onFCP(sendToGA);  // First Contentful Paint
  onTTFB(sendToGA); // Time to First Byte
}

// 한번에 초기화
export function initAnalytics() {
  initGA();
  measureWebVitals();
  sendPageView(window.location.pathname);
}
