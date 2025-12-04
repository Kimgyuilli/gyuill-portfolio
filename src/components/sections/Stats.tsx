import { GitCommit, Folder, Code2, Calendar } from 'lucide-react';
import { StatCard } from '@/components/common/StatCard';
import { FadeInSection } from '@/components/common/FadeInSection';
import { stats } from '@/data/stats';

const iconMap = {
  'GitHub Commits': <GitCommit className="w-8 h-8" />,
  Projects: <Folder className="w-8 h-8" />,
  Technologies: <Code2 className="w-8 h-8" />,
  'Years Experience': <Calendar className="w-8 h-8" />,
} as const;

export function Stats() {
  return (
    <section id="stats" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                stat={{
                  ...stat,
                  icon: iconMap[stat.label as keyof typeof iconMap],
                }}
              />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
