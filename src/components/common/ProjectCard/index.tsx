import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../ImageWithFallback';
import type { Project } from '@/types';
import styles from './styles.module.css';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const handleCardClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation(); // 카드 클릭 이벤트가 발생하지 않도록 방지
  };

  return (
    <div className={styles['project-card']} onClick={handleCardClick}>
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
          <a href={project.github} className={styles.link} onClick={handleLinkClick}>
            <Github size={18} />
            <span>Code</span>
          </a>
          {project.demo && project.demo !== '#' && (
            <a href={project.demo} className={styles.link} onClick={handleLinkClick}>
              <ExternalLink size={18} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
