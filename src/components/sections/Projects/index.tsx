import { useState, useMemo } from 'react';
import { ProjectCard } from '@/components/common/ProjectCard';
import { ProjectModal } from '@/components/common/ProjectModal';
import { FadeInSection } from '@/components/common/FadeInSection';
import { projects } from '@/data/projects';
import {
  PROJECT_CATEGORIES,
  PROJECT_TYPES,
  PROJECT_TYPE_LABELS,
  type ProjectCategory,
  type ProjectType,
} from '@/constants/projectCategories';
import type { Project } from '@/types';
import styles from './styles.module.css';

export function Projects() {
  const [selectedType, setSelectedType] = useState<ProjectType>('Main');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const typeFilteredProjects = useMemo(
    () =>
      selectedType === 'All'
        ? projects
        : projects.filter((project) => project.projectType === selectedType),
    [selectedType],
  );

  const availableCategories = useMemo(() => {
    const categories = new Set<string>();
    typeFilteredProjects.forEach((project) => {
      project.categories.forEach((cat) => categories.add(cat));
    });
    return PROJECT_CATEGORIES.filter((cat) => cat === 'All' || categories.has(cat));
  }, [typeFilteredProjects]);

  const filteredProjects = useMemo(
    () =>
      selectedCategory === 'All'
        ? typeFilteredProjects
        : typeFilteredProjects.filter((project) =>
            project.categories.includes(selectedCategory),
          ),
    [typeFilteredProjects, selectedCategory],
  );

  const typeCount = (type: ProjectType) =>
    type === 'All'
      ? projects.length
      : projects.filter((p) => p.projectType === type).length;

  const handleTypeChange = (type: ProjectType) => {
    setSelectedType(type);
    setSelectedCategory('All');
  };

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

          <div className={styles['type-tabs']}>
            {PROJECT_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => handleTypeChange(type)}
                className={`${styles['type-tab']} ${
                  selectedType === type
                    ? styles['type-tab-active']
                    : styles['type-tab-inactive']
                }`}
              >
                {PROJECT_TYPE_LABELS[type]}
                <span className={styles['tab-count']}>{typeCount(type)}</span>
              </button>
            ))}
          </div>

          <div className={styles['filter-buttons']}>
            {availableCategories.map((category) => (
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
          {filteredProjects.length > 0 ? (
            <div className={styles.grid}>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          ) : (
            <div className={styles['empty-state']}>
              <p>해당 조건에 맞는 프로젝트가 없습니다.</p>
            </div>
          )}
        </FadeInSection>
      </div>

      {/* 모달 */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
