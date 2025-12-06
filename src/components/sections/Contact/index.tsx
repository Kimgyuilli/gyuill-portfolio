import { Send } from 'lucide-react';
import { useState, useMemo } from 'react';
import { ContactInfoItem } from '@/components/common/ContactInfoItem';
import { SocialLink } from '@/components/common/SocialLink';
import { FadeInSection } from '@/components/common/FadeInSection';
import { contactInfoData, socialLinksData } from '@/data/contact';
import { CONTACT_ICONS, SOCIAL_ICONS } from '@/constants/contactIcons';
import { mapWithIcons } from '@/utils/iconMapper';
import styles from './styles.module.css';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactInfo = useMemo(
    () => mapWithIcons(contactInfoData, (info) => info.label, CONTACT_ICONS),
    []
  );

  const socialLinks = useMemo(
    () => mapWithIcons(socialLinksData, (link) => link.label, SOCIAL_ICONS),
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('메시지가 전송되었습니다!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className={styles['contact-section']}>
      <div className={styles.container}>
        <FadeInSection>
          <div className={styles.header}>
            <h2 className={styles.title}>Get In Touch</h2>
            <p className={styles.description}>
              프로젝트 문의나 협업 제안이 있으시다면 언제든지 연락해주세요.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className={styles['content-grid']}>
            {/* Contact Info */}
            <div className={styles['contact-info-section']}>
              <h3 className={styles['section-title']}>연락처 정보</h3>

              <div className={styles['contact-list']}>
                {contactInfo.map((info) => (
                  <ContactInfoItem key={info.label} info={info} />
                ))}
              </div>

              <div>
                <h4 className={styles['social-title']}>소셜 미디어</h4>
                <div className={styles['social-links']}>
                  {socialLinks.map((link) => (
                    <SocialLink key={link.label} link={link} />
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles['form-section']}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles['form-group']}>
                  <label htmlFor="name" className={styles.label}>
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="홍길동"
                  />
                </div>

                <div className={styles['form-group']}>
                  <label htmlFor="email" className={styles.label}>
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className={styles['form-group']}>
                  <label htmlFor="message" className={styles.label}>
                    메시지
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={styles.textarea}
                    placeholder="메시지를 입력하세요..."
                  />
                </div>

                <button type="submit" className={styles['submit-button']}>
                  <Send size={18} />
                  <span>메시지 보내기</span>
                </button>
              </form>
            </div>
          </div>
        </FadeInSection>

        {/* Footer */}
        <div className={styles.footer}>
          <p>© 2025 IT Developer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
