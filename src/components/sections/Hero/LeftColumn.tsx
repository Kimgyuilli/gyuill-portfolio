import { heroData } from '@/data/hero';
import { contactInfoData } from '@/data/contact';
import sharedStyles from './styles.module.css';
import styles from './LeftColumn.module.css';

function formatLastUpdated(dateStr: string) {
  const updated = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  updated.setHours(0, 0, 0, 0);
  const diffDays = Math.floor((today.getTime() - updated.getTime()) / (1000 * 60 * 60 * 24));
  const formatted = dateStr.replace(/-/g, '. ');
  return { formatted, diffDays };
}

export function LeftColumn() {
  const { formatted, diffDays } = formatLastUpdated(heroData.lastUpdated);

  return (
    <div className={sharedStyles['left-column']}>
      {/* CAREER 타이틀 */}
      <div>
        <h1 className={styles['career-title']}>CAREER</h1>
      </div>

      {/* 프로필 사진 */}
      <div className={styles['profile-wrapper']}>
        <div className={styles['profile-image-box']}>
          {heroData.profileImage ? (
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

      {/* Profile */}
      <div className={styles['info-section']}>
        <div>
          <h2 className={styles['section-header']}>Profile</h2>
          <div className={styles['info-grid']}>
            <div className={styles['info-item']}>
              <p className={styles['info-label']}>이름</p>
              <p className={styles['info-value-name']}>{heroData.name}</p>
            </div>
            <div className={styles['info-item']}>
              <p className={styles['info-label']}>이메일</p>
              <p className={styles['info-value']}>
                {contactInfoData.find((item) => item.label === '이메일')?.value}
              </p>
            </div>
            <div className={styles['info-item']}>
              <p className={styles['info-label']}>번호</p>
              <p className={styles['info-value']}>
                {contactInfoData.find((item) => item.label === '전화번호')?.value}
              </p>
            </div>
            <div className={styles['info-item']}>
              <p className={styles['info-label']}>주소</p>
              <p className={styles['info-value']}>
                {contactInfoData.find((item) => item.label === '위치')?.value}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Updated */}
      <div className={styles['updated-section']}>
        <p className={styles['updated-label']}>Latest Updated</p>
        <p className={styles['updated-date']}>
          {formatted} (D+{diffDays})
        </p>
      </div>
    </div>
  );
}
