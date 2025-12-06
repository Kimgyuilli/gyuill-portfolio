import { Briefcase, Calendar } from 'lucide-react';
import type { Experience } from '@/types';
import styles from './styles.module.css';

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className={styles['experience-item']}>
      <div className={styles['timeline-dot']}></div>

      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles['title-group']}>
            <h3 className={styles.position}>{experience.position}</h3>
            <div className={styles.company}>
              <Briefcase size={16} />
              <span>{experience.company}</span>
            </div>
          </div>
          <div className={styles.period}>
            <Calendar size={16} />
            <span>{experience.period}</span>
          </div>
        </div>

        <ul className={styles['description-list']}>
          {experience.description.map((item) => (
            <li key={item} className={styles['description-item']}>
              <span className={styles.bullet}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
