import { Award, Trophy, FileCheck, GitBranch } from 'lucide-react';
import { AchievementCard } from '@/components/common/AchievementCard';
import { FadeInSection } from '@/components/common/FadeInSection';
import { achievements } from '@/data/achievements';

const iconMap: Record<string, React.ReactNode> = {
  'AWS Certified Solutions Architect': <Award className="w-6 h-6" />,
  '해커톤 대상': <Trophy className="w-6 h-6" />,
  정보처리기사: <FileCheck className="w-6 h-6" />,
  'Open Source Contributor': <GitBranch className="w-6 h-6" />,
};

export function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="mb-4 text-slate-100">Achievements & Certifications</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              전문성을 인정받은 자격증과 수상 경력입니다.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                achievement={{
                  ...achievement,
                  icon: iconMap[achievement.title] || <Award className="w-6 h-6" />,
                }}
              />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
