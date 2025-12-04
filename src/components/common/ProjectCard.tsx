import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all hover:-translate-y-1">
      <div className="aspect-video overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-slate-100">{project.title}</h3>
        <p className="text-slate-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="px-2 py-1 bg-slate-800 text-slate-300 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <Github size={18} />
            <span>Code</span>
          </a>
          <a
            href={project.demo}
            className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ExternalLink size={18} />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
