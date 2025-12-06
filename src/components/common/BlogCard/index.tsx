import { memo } from 'react';
import { BlogPost } from '@/types';
import { Calendar, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../ImageWithFallback';
import styles from './styles.module.css';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = memo(function BlogCard({ post }: BlogCardProps) {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles['blog-card']}
      aria-label={`${post.title} (새 창에서 열기)`}
    >
      <div className={styles['image-container']}>
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className={styles.image}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles['meta-item']}>
            <Calendar size={14} aria-hidden="true" />
            <span>{post.date}</span>
          </span>
        </div>
        <h3 className={styles['title-wrapper']}>
          {post.title}
          <span className={styles['external-icon']}>
            <ExternalLink size={16} aria-hidden="true" />
          </span>
        </h3>
        <p className={styles.summary}>{post.summary}</p>
        {post.tags && post.tags.length > 0 && (
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
});
