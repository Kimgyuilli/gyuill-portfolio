import type { Project } from '@/types';
import styles from './ModalSections.module.css';

interface TechStackSectionProps {
  techStack: Project['techStack'];
}

const TECH_CATEGORIES = [
  { key: 'frontend' as const, title: 'Frontend' },
  { key: 'backend' as const, title: 'Backend' },
  { key: 'database' as const, title: 'Database' },
  { key: 'deployment' as const, title: 'Deployment' },
] as const;

export function TechStackSection({ techStack }: TechStackSectionProps) {
  if (!techStack) return null;

  return (
    <div className={styles.section}>
      <h3 className={styles['section-title']}>기술 스택</h3>
      <div className={styles['tech-stack']}>
        {TECH_CATEGORIES.map(({ key, title }) => {
          const techs = techStack[key];
          if (!techs || techs.length === 0) return null;

          return (
            <div key={key} className={styles['tech-category']}>
              <h4 className={styles['tech-title']}>{title}</h4>
              <div className={styles['tech-tags']}>
                {techs.map((tech) => (
                  <span key={tech} className={styles['tech-tag']}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
