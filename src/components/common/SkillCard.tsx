import type { SkillCategory } from '@/types';

interface SkillCardProps {
  category: SkillCategory;
}

export function SkillCard({ category }: SkillCardProps) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-colors">
      <div className="text-emerald-400 mb-4">{category.icon}</div>
      <h3 className="mb-4 text-slate-100">{category.title}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
