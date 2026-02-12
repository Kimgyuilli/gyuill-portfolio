import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ExperienceItem } from '@/components/common/ExperienceItem';
import { FadeInSection } from '@/components/common/FadeInSection';
import { experiences } from '@/data/experiences';
import styles from './styles.module.css';

export function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="experience" className={styles['experience-section']}>
      <div className={styles.container}>
        <FadeInSection>
          <div className={styles.header}>
            <h2 className={styles.title}>Experience</h2>
            <p className={styles.description}>다양한 프로젝트와 팀에서 쌓아온 경험입니다.</p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className={styles['timeline-wrapper']}>
            <div
              className={`${styles.timeline} ${isExpanded ? styles.expanded : styles.collapsed}`}
            >
              {experiences.map((exp) => (
                <ExperienceItem key={`${exp.company}-${exp.period}`} experience={exp} />
              ))}
            </div>
          </div>

          <div className={styles['toggle-container']}>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={styles['toggle-button']}
              aria-label={isExpanded ? '접기' : '더보기'}
            >
              {isExpanded ? (
                <>
                  <ChevronUp className={styles.icon} />
                  <span>접기</span>
                </>
              ) : (
                <>
                  <ChevronDown className={styles.icon} />
                  <span>더보기</span>
                </>
              )}
            </button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
