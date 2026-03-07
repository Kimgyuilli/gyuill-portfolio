import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';
import styles from './MarkdownContent.module.css';

interface MarkdownContentProps {
  content: string;
  images?: Record<string, string>;
}

export function MarkdownContent({ content, images }: MarkdownContentProps) {
  const resolvedContent = useMemo(() => {
    if (!images) return content;
    return Object.entries(images).reduce(
      (text, [key, src]) => text.replaceAll(`{{${key}}}`, src),
      content,
    );
  }, [content, images]);

  const components: Components = useMemo(
    () => ({
      img: ({ src, alt }) => (
        <img src={src} alt={alt ?? ''} className={styles['markdown-image']} loading="lazy" />
      ),
      table: ({ children }) => <div className={styles['table-wrapper']}><table>{children}</table></div>,
      a: ({ href, children }) => (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    }),
    [],
  );

  return (
    <div className={styles.markdown}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {resolvedContent}
      </ReactMarkdown>
    </div>
  );
}
