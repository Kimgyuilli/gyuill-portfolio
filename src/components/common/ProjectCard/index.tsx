import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../ImageWithFallback';
import type { Project } from '@/types';
import styles from './styles.module.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles['project-card']}>
      <div className={styles['image-container']}>
        <ImageWithFallback src={project.image} alt={project.title} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          <a href={project.github} className={styles.link}>
            <Github size={18} />
            <span>Code</span>
          </a>
          <a href={project.demo} className={styles.link}>
            <ExternalLink size={18} />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
