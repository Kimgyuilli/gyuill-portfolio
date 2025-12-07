import { heroData } from '@/data/hero';
import { experiences } from '@/data/experiences';
import sharedStyles from './styles.module.css';
import styles from './CenterColumn.module.css';

export function CenterColumn() {
  const careerExperiences = experiences.filter((exp) => exp.type === 'career');
  const activityExperiences = experiences.filter((exp) => exp.type === 'activity');

  return (
    <div className={sharedStyles['center-column']}>
      {/* About Me */}
      <div className={styles['about-section']}>
        <h2 className={sharedStyles['section-title']}>About Me</h2>
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
        <h2 className={sharedStyles['section-title']}>학력과 교육이력</h2>
        <div className={sharedStyles['timeline-list']}>
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
      {careerExperiences.length > 0 && (
        <div>
          <h2 className={sharedStyles['section-title']}>경력</h2>
          <div className={sharedStyles['timeline-list']}>
            {careerExperiences.map((exp, index) => (
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
      )}

      {/* 활동 */}
      <div>
        <h2 className={sharedStyles['section-title']}>활동</h2>
        <div className={sharedStyles['timeline-list']}>
          {activityExperiences.map((exp, index) => (
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
  );
}
