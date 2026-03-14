import { ExperienceItem } from '@/components/common/ExperienceItem';
import { FadeInSection } from '@/components/common/FadeInSection';
import { ExpandableSection } from '@/components/common/ExpandableSection';
import { experiences } from '@/data/experiences';
import styles from './styles.module.css';

export function Experience() {
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
            <ExpandableSection collapsedMaxHeight="600px">
              {experiences.map((exp) => (
                <ExperienceItem key={`${exp.company}-${exp.period}`} experience={exp} />
              ))}
            </ExpandableSection>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
