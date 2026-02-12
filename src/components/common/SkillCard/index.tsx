import type { SkillCategory, LeveledSkillCategory } from '@/types';
import styles from './styles.module.css';

interface SkillCardProps {
  category: SkillCategory;
}

function LeveledContent({ category }: { category: LeveledSkillCategory }) {
  return (
    <div className={styles['levels-container']}>
      {category.levels.map(
        (group) =>
          group.skills.length > 0 && (
            <div key={group.level} className={`${styles['level-group']} ${styles[`level-group-${group.level}`]}`}>
              <span className={`${styles['level-label']} ${styles[`level-${group.level}`]}`}>
                {group.label}
              </span>
              <div className={styles['skills-list']}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`${styles['skill-tag']} ${styles[`skill-tag-${group.level}`]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
}

export function SkillCard({ category }: SkillCardProps) {
  return (
    <div className={styles['skill-card']}>
      <div className={styles.icon}>{category.icon}</div>
      <h3 className={styles.title}>{category.title}</h3>
      {category.type === 'leveled' ? (
        <LeveledContent category={category} />
      ) : (
        <div className={styles['skills-list']}>
          {category.skills.map((skill) => (
            <span key={skill} className={styles['skill-tag']}>
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
