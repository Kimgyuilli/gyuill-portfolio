import type { ContactInfo } from '@/types';
import styles from './ContactInfoItem.module.css';

interface ContactInfoItemProps {
  info: ContactInfo;
}

export function ContactInfoItem({ info }: ContactInfoItemProps) {
  return (
    <div className={styles['contact-info-item']}>
      <div className={styles['icon-wrapper']}>{info.icon}</div>
      <div className={styles.info}>
        <p className={styles.label}>{info.label}</p>
        {info.href ? (
          <a href={info.href} className={styles['value-link']}>
            {info.value}
          </a>
        ) : (
          <p className={styles.value}>{info.value}</p>
        )}
      </div>
    </div>
  );
}
