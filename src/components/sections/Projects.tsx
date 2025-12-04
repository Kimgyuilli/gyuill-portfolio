import { ProjectCard } from '@/components/common/ProjectCard';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-slate-100">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            최근 진행한 주요 프로젝트들입니다. 각 프로젝트는 실제 문제를 해결하기 위해
            설계되었습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
