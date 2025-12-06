import { BlogCard } from '@/components/common/BlogCard';
import { FadeInSection } from '@/components/common/FadeInSection';
import { blogPosts } from '@/data/blog';
import styles from './styles.module.css';

export function Blog() {
  return (
    <section id="blog" className={styles['blog-section']}>
      <div className={styles.container}>
        <FadeInSection>
          <div className={styles.header}>
            <h2 className={styles.title}>Blog & Writing</h2>
            <p className={styles.description}>
              기술 블로그에 작성한 글들입니다. 배우고 경험한 것들을 공유합니다.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className={styles.grid}>
            {blogPosts.map((post) => (
              <BlogCard key={post.link} post={post} />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
