import { useMemo } from 'react';
import { AchievementCard } from '@/components/common/AchievementCard';
import { FadeInSection } from '@/components/common/FadeInSection';
import { achievements } from '@/data/achievements';
import { ACHIEVEMENT_ICONS, DEFAULT_ACHIEVEMENT_ICON } from '@/constants/achievementIcons';
import { mapWithIcons } from '@/utils/iconMapper';
import styles from './styles.module.css';

export function Achievements() {
  const achievementsWithIcons = useMemo(
    () => mapWithIcons(achievements, (ach) => ach.title, ACHIEVEMENT_ICONS, DEFAULT_ACHIEVEMENT_ICON),
    []
  );

  return (
    <section id="achievements" className={styles['achievements-section']}>
      <div className={styles.container}>
        <FadeInSection>
          <div className={styles.header}>
            <h2 className={styles.title}>Achievements & Certifications</h2>
            <p className={styles.description}>전문성을 인정받은 자격증과 수상 경력입니다.</p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className={styles.grid}>
            {achievementsWithIcons.map((achievement) => (
              <AchievementCard key={achievement.title} achievement={achievement} />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
