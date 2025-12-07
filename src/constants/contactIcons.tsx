import { Mail, Phone, MapPin, Github, Linkedin, BookOpen } from 'lucide-react';

export const CONTACT_ICONS = {
  이메일: <Mail size={20} />,
  전화번호: <Phone size={20} />,
  위치: <MapPin size={20} />,
} as const;

export const SOCIAL_ICONS = {
  GitHub: <Github size={20} />,
  LinkedIn: <Linkedin size={20} />,
  'Tech Blog': <BookOpen size={20} />,
} as const;

export type ContactIconKey = keyof typeof CONTACT_ICONS;
export type SocialIconKey = keyof typeof SOCIAL_ICONS;
