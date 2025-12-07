import { projects } from '@/data/projects';
import { skillCategories } from '@/data/skills';
import { SKILL_ICONS, getSkillIconUrl } from '@/constants/skillIcons';
import sharedStyles from './styles.module.css';
import styles from './RightColumn.module.css';

export function RightColumn() {
  const featuredProjects = projects.slice(0, 3);

  const handleProjectClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={sharedStyles['right-column']}>
      {/* 프로젝트 */}
      <div>
        <h2 className={sharedStyles['section-title']}>프로젝트</h2>
        <div className={sharedStyles['timeline-list']}>
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={styles['project-card']}
              onClick={handleProjectClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleProjectClick();
                }
              }}
            >
              <div className={styles['project-header']}>
                {project.image && (
                  <div className={styles['project-image']}>
                    <img src={project.image} alt={project.title} />
                  </div>
                )}
                <div className={styles['project-info']}>
                  <h3 className={styles['project-title']}>{project.title}</h3>
                  <p className={styles['project-date']}>
                    {new Date().getFullYear()}.{String(index + 1).padStart(2, '0')}
                  </p>
                </div>
              </div>
              <div className={styles['project-tags']}>
                {project.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className={`${styles.tag} ${styles['tag-emerald']}`}>
                    {tag}
                  </span>
                ))}
                <span className={`${styles.tag} ${styles['tag-blue']}`}>{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 스킬 */}
      <div>
        <h2 className={sharedStyles['section-title']}>Skills</h2>
        <div className={styles['skills-container']}>
          {skillCategories.map((category) => (
            <div key={category.title} className={styles['skill-category']}>
              <div className={styles['category-header']}>
                <div className={styles['category-icon']}>{SKILL_ICONS[category.title]}</div>
                <h3 className={styles['category-title']}>{category.title}</h3>
              </div>
              <div className={styles['skill-icons-grid']}>
                {category.skills.map((skill) => {
                  const iconUrl = getSkillIconUrl(skill);
                  return iconUrl ? (
                    <div key={skill} className={styles['skill-icon-wrapper']} title={skill}>
                      <img src={iconUrl} alt={skill} className={styles['skill-icon-img']} />
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
