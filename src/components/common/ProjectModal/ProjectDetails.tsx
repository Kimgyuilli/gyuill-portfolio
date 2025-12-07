import type { Project } from '@/types';
import styles from './ModalSections.module.css';

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <>
      {/* 상세 설명 */}
      {project.detailedDescription && (
        <div className={styles.section}>
          <h3 className={styles['section-title']}>프로젝트 개요</h3>
          <p className={styles.description}>{project.detailedDescription}</p>
        </div>
      )}

      {/* 주요 기능 */}
      {project.features && project.features.length > 0 && (
        <div className={styles.section}>
          <h3 className={styles['section-title']}>주요 기능</h3>
          <ul className={styles.list}>
            {project.features.map((feature) => (
              <li key={feature} className={styles['list-item']}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 기술적 과제 */}
      {project.challenges && project.challenges.length > 0 && (
        <div className={styles.section}>
          <h3 className={styles['section-title']}>기술적 과제 및 해결</h3>
          <ul className={styles.list}>
            {project.challenges.map((challenge) => (
              <li key={challenge} className={styles['list-item']}>
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 성과 */}
      {project.outcome && (
        <div className={styles.section}>
          <h3 className={styles['section-title']}>성과</h3>
          <p className={styles.description}>{project.outcome}</p>
        </div>
      )}
    </>
  );
}
