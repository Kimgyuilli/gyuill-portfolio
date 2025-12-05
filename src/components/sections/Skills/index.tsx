import { SkillCard } from '@/components/common/SkillCard';
import { FadeInSection } from '@/components/common/FadeInSection';
import { skillCategories } from '@/data/skills';
import { SKILL_ICONS } from '@/constants/skillIcons';
import styles from './styles.module.css';

export function Skills() {
  return (
    <section id="skills" className={styles['skills-section']}>
      <div className={styles.container}>
        <FadeInSection>
          <div className={styles.header}>
            <h2 className={styles.title}>Skills & Expertise</h2>
            <p className={styles.description}>
              다양한 기술 스택과 도구를 활용하여 효율적이고 확장 가능한 솔루션을 개발합니다.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className={styles.grid}>
            {skillCategories.map((category) => (
              <SkillCard
                key={category.title}
                category={{
                  ...category,
                  icon: SKILL_ICONS[category.title],
                }}
              />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
