import { ExperienceItem } from '@/components/common/ExperienceItem';
import { FadeInSection } from '@/components/common/FadeInSection';
import { experiences } from '@/data/experiences';

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="mb-4 text-slate-100">Work Experience</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              다양한 프로젝트와 팀에서 쌓아온 실무 경험입니다.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} experience={exp} />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
