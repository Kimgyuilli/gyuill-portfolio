import { useState } from 'react';
import { ProjectCard } from '@/components/common/ProjectCard';
import { FadeInSection } from '@/components/common/FadeInSection';
import { projects } from '@/data/projects';
import type { Project } from '@/types';

const categories = ['All', 'Web', 'Mobile', 'AI', 'Backend'] as const;

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Project['category']>('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="mb-4 text-slate-100">Featured Projects</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              최근 진행한 주요 프로젝트들입니다. 각 프로젝트는 실제 문제를 해결하기 위해
              설계되었습니다.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
