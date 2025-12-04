import { BlogCard } from '@/components/common/BlogCard';
import { FadeInSection } from '@/components/common/FadeInSection';
import { blogPosts } from '@/data/blog';

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="mb-4 text-slate-100">Blog & Writing</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              기술 블로그에 작성한 글들입니다. 배우고 경험한 것들을 공유합니다.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
