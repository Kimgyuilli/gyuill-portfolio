import { View, Text, Image } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import type { HeroData } from '@/data/hero';
import type { SocialLinkData } from '@/data/contact';

interface PdfHeaderProps {
  hero: HeroData;
  socialLinks: SocialLinkData[];
  profileImageBase64: string | null;
}

export function PdfHeader({ hero, socialLinks, profileImageBase64 }: PdfHeaderProps) {
  return (
    <View style={pdfStyles.headerRow}>
      {profileImageBase64 && (
        <Image style={pdfStyles.profileImage} src={profileImageBase64} />
      )}
      <View style={pdfStyles.headerInfo}>
        <Text style={pdfStyles.name}>{hero.name}</Text>
        <Text style={pdfStyles.contactLine}>
          {hero.email} | {hero.phone}
        </Text>
        <Text style={pdfStyles.contactLine}>{hero.address}</Text>
        {socialLinks.map((link) => (
          <Text key={link.label} style={pdfStyles.socialLink}>
            {link.label}: {link.href}
          </Text>
        ))}
      </View>
    </View>
  );
}
