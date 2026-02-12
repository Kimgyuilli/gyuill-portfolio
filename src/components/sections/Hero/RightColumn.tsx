import { projects } from '@/data/projects';
import { skillCategories, getAllSkills } from '@/data/skills';
import { SKILL_ICONS, getSkillIconUrl } from '@/constants/skillIcons';
import { ImageWithFallback } from '@/components/common/ImageWithFallback';
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
        <h2 className={sharedStyles['section-title']}>Projects</h2>
        <div className={sharedStyles['timeline-list']}>
          {featuredProjects.map((project) => (
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
                    <ImageWithFallback src={project.image} alt={project.title} />
                  </div>
                )}
                <div className={styles['project-info']}>
                  <h3 className={styles['project-title']}>{project.title}</h3>
                  <p className={styles['project-date']}>{project.duration}</p>
                </div>
              </div>
              <div className={styles['project-tags']}>
                {project.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className={`${styles.tag} ${styles['tag-emerald']}`}>
                    {tag}
                  </span>
                ))}
                {project.categories.map((category) => (
                  <span key={category} className={`${styles.tag} ${styles['tag-blue']}`}>
                    {category}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 스킬 */}
      <div>
        <h2 className={sharedStyles['section-title']}>Skills</h2>
        <div className={styles['skills-container']}>
          {skillCategories.map((category) => {
            const Icon = SKILL_ICONS[category.title];
            return (
              <div key={category.title} className={styles['skill-category']}>
                <div className={styles['category-header']}>
                  <div className={styles['category-icon']}>
                    <Icon size={20} />
                  </div>
                  <h3 className={styles['category-title']}>{category.title}</h3>
                </div>
                <div className={styles['skill-icons-grid']}>
                  {getAllSkills(category).map((skill) => {
                    const iconUrl = getSkillIconUrl(skill);
                    return iconUrl ? (
                      <div key={skill} className={styles['skill-icon-wrapper']} title={skill}>
                        <ImageWithFallback
                          src={iconUrl}
                          alt={skill}
                          className={styles['skill-icon-img']}
                        />
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
