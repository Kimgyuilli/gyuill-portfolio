import { ImageWithFallback } from '@/components/common/ImageWithFallback';
import { FadeInSection } from '@/components/common/FadeInSection';

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 text-slate-100">About Me</h2>
            <p className="text-slate-300 mb-4">
              안녕하세요! 저는 열정적인 IT 개발자입니다. 새로운 기술을 배우고 혁신적인 솔루션을
              만드는 것을 좋아합니다.
            </p>
            <p className="text-slate-300 mb-4">
              웹 개발, 모바일 앱 개발, 그리고 시스템 아키텍처 설계에 전문성을 가지고 있으며, 사용자
              중심의 직관적인 제품을 만드는 데 집중하고 있습니다.
            </p>
            <p className="text-slate-300">
              팀워크를 중시하며, 지속적인 학습과 성장을 통해 더 나은 개발자가 되기 위해 노력하고
              있습니다.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-emerald-500/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzY0NzQzNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Developer Workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
          </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
