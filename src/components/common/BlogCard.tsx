import { BlogPost } from '@/types';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles['blog-card']}
    >
      <div className={styles['image-container']}>
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles['meta-item']}>
            <Calendar size={14} />
            {post.date}
          </span>
          <span className={styles['meta-item']}>
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>
        <h3 className={styles['title-wrapper']}>
          {post.title}
          <span className={styles['external-icon']}>
            <ExternalLink size={16} />
          </span>
        </h3>
        <p className={styles.summary}>{post.summary}</p>
        {post.tags && post.tags.length > 0 && (
          <div className={styles.tags}>
            {post.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
