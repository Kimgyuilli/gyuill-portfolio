import { useEffect, useState } from 'react';
import mermaid from 'mermaid';
import { useTheme } from '@/contexts/ThemeContext';
import styles from './MarkdownContent.module.css';

interface MermaidProps {
  code: string;
}

export function Mermaid({ code }: MermaidProps) {
  const { theme } = useTheme();
  const [svg, setSvg] = useState('');

  useEffect(() => {
    let cancelled = false;
    // 고유 id — StrictMode(dev)의 effect 이중 실행 시 같은 id 동시 렌더 충돌 방지
    const id = `mermaid-${Math.random().toString(36).slice(2, 11)}`;

    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'strict',
      theme: theme === 'dark' ? 'dark' : 'default',
    });

    mermaid
      .render(id, code)
      .then(({ svg }) => {
        if (!cancelled) setSvg(svg);
      })
      .catch((err) => {
        if (!cancelled) {
          console.error('Mermaid render failed:', err);
          setSvg('');
        }
      });

    return () => {
      cancelled = true;
    };
  }, [code, theme]);

  if (!svg) {
    return <pre className={styles['mermaid-fallback']}>{code}</pre>;
  }

  return (
    <div
      className={styles.mermaid}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
