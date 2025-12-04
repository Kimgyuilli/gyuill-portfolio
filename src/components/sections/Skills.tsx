import { Code2, Database, Globe, Layout, Server, Smartphone } from 'lucide-react';
import { SkillCard } from '@/components/common/SkillCard';
import { skillCategories } from '@/data/skills';

const iconMap = {
  Frontend: <Code2 className="w-8 h-8" />,
  Backend: <Server className="w-8 h-8" />,
  Database: <Database className="w-8 h-8" />,
  Mobile: <Smartphone className="w-8 h-8" />,
  DevOps: <Globe className="w-8 h-8" />,
  Tools: <Layout className="w-8 h-8" />,
} as const;

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-slate-100">Skills & Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            다양한 기술 스택과 도구를 활용하여 효율적이고 확장 가능한 솔루션을 개발합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              category={{
                ...category,
                icon: iconMap[category.title as keyof typeof iconMap],
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
