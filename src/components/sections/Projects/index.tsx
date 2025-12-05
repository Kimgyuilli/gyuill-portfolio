import { useState } from 'react';
import { ProjectCard } from '@/components/common/ProjectCard';
import { FadeInSection } from '@/components/common/FadeInSection';
import { projects } from '@/data/projects';
import { PROJECT_CATEGORIES, type ProjectCategory } from '@/constants/projectCategories';
import styles from './styles.module.css';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className={styles['projects-section']}>
      <div className={styles.container}>
        <FadeInSection>
          <div className={styles.header}>
            <h2 className={styles.title}>Featured Projects</h2>
            <p className={styles.description}>
              최근 진행한 주요 프로젝트들입니다. 각 프로젝트는 실제 문제를 해결하기 위해
              설계되었습니다.
            </p>
          </div>

          <div className={styles['filter-buttons']}>
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`${styles['filter-button']} ${
                  selectedCategory === category
                    ? styles['filter-button-active']
                    : styles['filter-button-inactive']
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className={styles.grid}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
