import { ExperienceItem } from '@/components/common/ExperienceItem';
import { FadeInSection } from '@/components/common/FadeInSection';
import { experiences } from '@/data/experiences';
import styles from './Experience.module.css';

export function Experience() {
  return (
    <section id="experience" className={styles['experience-section']}>
      <div className={styles.container}>
        <FadeInSection>
          <div className={styles.header}>
            <h2 className={styles.title}>Work Experience</h2>
            <p className={styles.description}>다양한 프로젝트와 팀에서 쌓아온 실무 경험입니다.</p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} experience={exp} />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
