import { useMemo } from 'react';
import { ContactInfoItem } from '@/components/common/ContactInfoItem';
import { SocialLink } from '@/components/common/SocialLink';
import { FadeInSection } from '@/components/common/FadeInSection';
import { ContactForm } from './ContactForm';
import { contactInfoData, socialLinksData } from '@/data/contact';
import { CONTACT_ICONS, SOCIAL_ICONS } from '@/constants/contactIcons';
import { mapWithIcons } from '@/utils/iconMapper';
import styles from './styles.module.css';

export function Contact() {
  const contactInfo = useMemo(
    () =>
      mapWithIcons(contactInfoData, (info) => info.label, CONTACT_ICONS).map((item) => ({
        ...item,
        icon: <item.icon size={20} />,
      })),
    []
  );

  const socialLinks = useMemo(
    () =>
      mapWithIcons(socialLinksData, (link) => link.label, SOCIAL_ICONS).map((item) => ({
        ...item,
        icon: <item.icon size={20} />,
      })),
    []
  );

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
            <div>
              <h3 className={styles['section-title']}>Contact Info</h3>

              <div className={styles['contact-list']}>
                {contactInfo.map((info) => (
                  <ContactInfoItem key={info.label} info={info} />
                ))}
              </div>

              <div>
                <h4 className={styles['social-title']}>Social Media</h4>
                <div className={styles['social-links']}>
                  {socialLinks.map((link) => (
                    <SocialLink key={link.label} link={link} />
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </FadeInSection>

        {/* Footer */}
        <div className={styles.footer}>
          <p>© 2025 IT Developer Portfolio. All rights reserved.</p>
          <a
            href="https://github.com/Kimgyuilli/gyuill-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['footer-link']}
          >
            View Source on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
