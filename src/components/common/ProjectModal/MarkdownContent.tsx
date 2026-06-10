import { isValidElement, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkCjkFriendly from 'remark-cjk-friendly';
import type { Components } from 'react-markdown';
import { Mermaid } from './Mermaid';
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
      code: ({ className, children }) => {
        if (className?.includes('language-mermaid')) {
          return <Mermaid code={String(children).trim()} />;
        }
        return <code className={className}>{children}</code>;
      },
      pre: ({ children }) => {
        const child = Array.isArray(children) ? children[0] : children;
        // mermaid 블록은 pre 래퍼 없이 렌더 (div-in-pre 무효 마크업 방지)
        if (isValidElement(child) && child.type === Mermaid) {
          return <>{children}</>;
        }
        return <pre>{children}</pre>;
      },
    }),
    [],
  );

  return (
    <div className={styles.markdown}>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkCjkFriendly]} components={components}>
        {resolvedContent}
      </ReactMarkdown>
    </div>
  );
}
