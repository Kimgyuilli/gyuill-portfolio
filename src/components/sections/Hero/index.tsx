import { ExternalLink, Github, FileText } from 'lucide-react';
import { heroData } from '@/data/hero';
import { experiences } from '@/data/experiences';
import { projects } from '@/data/projects';
import { skillCategories } from '@/data/skills';
import styles from './styles.module.css';

type SkillLevel = 'primary' | 'secondary' | 'tertiary';

export function Hero() {
  // 프로젝트는 최대 3개만 표시
  const featuredProjects = projects.slice(0, 3);

  // 스킬을 플랫 배열로 변환 (카테고리별로 그룹핑)
  const allSkills = skillCategories.flatMap((category) =>
    category.skills.map((skill) => ({
      name: skill,
      category: category.title,
    }))
  );

  // 스킬 레벨 분류 (임시로 카테고리 기반)
  const getSkillLevel = (category: string): SkillLevel => {
    if (category === 'Frontend' || category === 'Mobile') return 'primary';
    if (category === 'Backend' || category === 'Database') return 'secondary';
    return 'tertiary';
  };

  return (
    <section id="home" className={styles['hero-section']}>
      <div className={styles['hero-container']}>
        {/* 3단 칼럼 레이아웃 */}
        <div className={styles['hero-grid']}>
          {/* ==================== 왼쪽 칼럼 ==================== */}
          <div className={styles['left-column']}>
            {/* CAREER 타이틀 */}
            <div>
              <h1 className={styles['career-title']}>CAREER</h1>
            </div>

            {/* 프로필 사진 */}
            <div className={styles['profile-wrapper']}>
              <div className={styles['profile-image-box']}>
                {heroData.profileImage && heroData.profileImage.startsWith('http') ? (
                  <img
                    src={heroData.profileImage}
                    alt={heroData.name}
                    className={styles['profile-image']}
                  />
                ) : (
                  <div className={styles['profile-emoji']}>👤</div>
                )}
              </div>
            </div>

            {/* 개인 정보 */}
            <div className={styles['info-section']}>
              <div>
                <h2 className={styles['section-header']}>개인 정보</h2>
                <div className={styles['info-grid']}>
                  <div className={styles['info-item']}>
                    <p className={styles['info-label']}>이름</p>
                    <p className={styles['info-value-name']}>{heroData.name}</p>
                  </div>
                  <div className={styles['info-item']}>
                    <p className={styles['info-label']}>이메일</p>
                    <p className={styles['info-value-mono']}>{heroData.email}</p>
                  </div>
                  <div className={styles['info-item']}>
                    <p className={styles['info-label']}>번호</p>
                    <p className={styles['info-value-mono']}>{heroData.phone}</p>
                  </div>
                  <div className={styles['info-item']}>
                    <p className={styles['info-label']}>주소</p>
                    <p className={styles['info-value']}>{heroData.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== 중앙 칼럼 ==================== */}
          <div className={styles['center-column']}>
            {/* About Me (최상단) */}
            <div className={styles['about-section']}>
              <h2 className={styles['section-title']}>About Me</h2>
              <div className={styles['about-paragraphs']}>
                {heroData.about.paragraphs.map((paragraph, index) => (
                  <p key={index} className={styles['about-paragraph']}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* 학력과 교육이력 */}
            <div>
              <h2 className={styles['section-title']}>학력과 교육이력</h2>
              <div className={styles['timeline-list']}>
                {heroData.education.map((edu, index) => (
                  <div key={index} className={styles['timeline-item']}>
                    <div className={styles['timeline-date']}>{edu.period}</div>
                    <div className={styles['timeline-content']}>
                      <p className={styles['timeline-text']}>{edu.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 경력 */}
            <div>
              <h2 className={styles['section-title']}>경력</h2>
              <div className={styles['timeline-list']}>
                {experiences
                  .filter((exp) => exp.type === 'career')
                  .map((exp, index) => (
                    <div key={index} className={styles['timeline-item']}>
                      <div className={styles['timeline-date']}>{exp.period}</div>
                      <div className={styles['timeline-content']}>
                        <p className={styles['timeline-title']}>{exp.position}</p>
                        <p className={styles['timeline-subtitle']}>{exp.company}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* 활동 */}
            <div>
              <h2 className={styles['section-title']}>활동</h2>
              <div className={styles['timeline-list']}>
                {experiences
                  .filter((exp) => exp.type === 'activity')
                  .map((exp, index) => (
                    <div key={index} className={styles['timeline-item']}>
                      <div className={styles['timeline-date']}>{exp.period}</div>
                      <div className={styles['timeline-content']}>
                        <p className={styles['timeline-text']}>{exp.company}</p>
                        <p className={styles['timeline-subtitle']}>{exp.position}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* ==================== 오른쪽 칼럼 ==================== */}
          <div className={styles['right-column']}>
            {/* 프로젝트 */}
            <div>
              <h2 className={styles['section-title']}>프로젝트</h2>
              <div className={styles['timeline-list']}>
                {featuredProjects.map((project, index) => (
                  <div key={index} className={styles['project-card']}>
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
                      {project.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className={`${styles.tag} ${styles['tag-emerald']}`}>
                          {tag}
                        </span>
                      ))}
                      <span className={`${styles.tag} ${styles['tag-blue']}`}>
                        {project.category}
                      </span>
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
                    <div key={index} className={skillClass}>
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
                  <div
                    className={`${styles['legend-box']} ${styles['legend-box-secondary']}`}
                  ></div>
                  <span className={styles['legend-text']}>실전 경험</span>
                </div>
                <div className={styles['legend-item']}>
                  <div className={`${styles['legend-box']} ${styles['legend-box-tertiary']}`}></div>
                  <span className={styles['legend-text']}>기타</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
