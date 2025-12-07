import { heroData } from '@/data/hero';
import sharedStyles from './styles.module.css';
import styles from './LeftColumn.module.css';

export function LeftColumn() {
  return (
    <div className={sharedStyles['left-column']}>
      {/* CAREER 타이틀 */}
      <div>
        <h1 className={styles['career-title']}>CAREER</h1>
      </div>

      {/* 프로필 사진 */}
      <div className={styles['profile-wrapper']}>
        <div className={styles['profile-image-box']}>
          {heroData.profileImage && heroData.profileImage.startsWith('http') ? (
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

      {/* 개인 정보 */}
      <div className={styles['info-section']}>
        <div>
          <h2 className={styles['section-header']}>개인 정보</h2>
          <div className={styles['info-grid']}>
            <div className={styles['info-item']}>
              <p className={styles['info-label']}>이름</p>
              <p className={styles['info-value-name']}>{heroData.name}</p>
            </div>
            <div className={styles['info-item']}>
              <p className={styles['info-label']}>이메일</p>
              <p className={styles['info-value-mono']}>{heroData.email}</p>
            </div>
            <div className={styles['info-item']}>
              <p className={styles['info-label']}>번호</p>
              <p className={styles['info-value-mono']}>{heroData.phone}</p>
            </div>
            <div className={styles['info-item']}>
              <p className={styles['info-label']}>주소</p>
              <p className={styles['info-value']}>{heroData.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
