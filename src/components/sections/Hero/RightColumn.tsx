import { ExternalLink, Github, FileText } from 'lucide-react';
import { heroData } from '@/data/hero';
import { projects } from '@/data/projects';
import { skillCategories } from '@/data/skills';
import styles from './styles.module.css';

type SkillLevel = 'primary' | 'secondary' | 'tertiary';

export function RightColumn() {
  const featuredProjects = projects.slice(0, 3);

  // 스킬 데이터 변환 로직
  const allSkills = skillCategories.flatMap((category) =>
    category.skills.map((skill) => ({
      name: skill,
      category: category.title,
    }))
  );

  const getSkillLevel = (category: string): SkillLevel => {
    if (category === 'Frontend' || category === 'Mobile') return 'primary';
    if (category === 'Backend' || category === 'Database') return 'secondary';
    return 'tertiary';
  };

  const handleProjectClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles['right-column']}>
      {/* 프로젝트 */}
      <div>
        <h2 className={styles['section-title']}>프로젝트</h2>
        <div className={styles['timeline-list']}>
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

      {/* 깃허브의 블로그 */}
      <div>
        <h2 className={styles['section-title']}>깃허브의 블로그</h2>
        <div className={styles['link-list']}>
          <a
            href={heroData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles['link-item']}
          >
            <div className={styles['link-icon']}>
              <Github size={20} />
            </div>
            <div className={styles['link-content']}>
              <p className={styles['link-label']}>깃허브</p>
              <p className={styles['link-url']}>{heroData.social.github}</p>
            </div>
            <ExternalLink className={styles['link-external']} />
          </a>
          <a
            href={heroData.social.blog}
            target="_blank"
            rel="noopener noreferrer"
            className={styles['link-item']}
          >
            <div className={styles['link-icon']}>
              <FileText size={20} />
            </div>
            <div className={styles['link-content']}>
              <p className={styles['link-label']}>테크 블로그</p>
              <p className={styles['link-url']}>{heroData.social.blog}</p>
            </div>
            <ExternalLink className={styles['link-external']} />
          </a>
        </div>
      </div>

      {/* 스킬 */}
      <div>
        <h2 className={styles['section-title']}>스킬</h2>
        <div className={styles['skills-grid']}>
          {allSkills.slice(0, 9).map((skill, index) => {
            const level = getSkillLevel(skill.category);
            const skillClass = `${styles['skill-box']} ${styles[`skill-${level}`]}`;

            return (
              <div key={`${skill.name}-${index}`} className={skillClass}>
                <span className={styles['skill-name']}>{skill.name}</span>
              </div>
            );
          })}
        </div>

        {/* 스킬 레벨 범례 */}
        <div className={styles['skills-legend']}>
          <div className={styles['legend-item']}>
            <div className={`${styles['legend-box']} ${styles['legend-box-primary']}`}></div>
            <span className={styles['legend-text']}>주요 언어</span>
          </div>
          <div className={styles['legend-item']}>
            <div className={`${styles['legend-box']} ${styles['legend-box-secondary']}`}></div>
            <span className={styles['legend-text']}>실전 경험</span>
          </div>
          <div className={styles['legend-item']}>
            <div className={`${styles['legend-box']} ${styles['legend-box-tertiary']}`}></div>
            <span className={styles['legend-text']}>기타</span>
          </div>
        </div>
      </div>
    </div>
  );
}
