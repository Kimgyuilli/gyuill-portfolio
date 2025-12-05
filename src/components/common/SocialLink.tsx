import type { SocialLink as SocialLinkType } from '@/types';
import styles from './SocialLink.module.css';

interface SocialLinkProps {
  link: SocialLinkType;
}

export function SocialLink({ link }: SocialLinkProps) {
  return (
    <a
      href={link.href}
      className={styles['social-link']}
      aria-label={link.label}
    >
      {link.icon}
    </a>
  );
}
