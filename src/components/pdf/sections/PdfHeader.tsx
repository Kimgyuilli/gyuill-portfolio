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
    <View style={pdfStyles.header}>
      <View style={pdfStyles.headerRow}>
        {/* 좌: 사진 + 이름 */}
        <View style={pdfStyles.headerLeft}>
          {profileImageBase64 && (
            <Image style={pdfStyles.profileImage} src={profileImageBase64} />
          )}
          <Text style={pdfStyles.name}>{hero.name}</Text>
        </View>
        {/* 우: 연락처 + 소셜 */}
        <View style={pdfStyles.headerInfo}>
          <Text style={pdfStyles.contactLine}>{hero.email}</Text>
          <Text style={pdfStyles.contactLine}>{hero.phone}</Text>
          <Text style={pdfStyles.contactLine}>{hero.address}</Text>
          <Text style={pdfStyles.socialLink}>
            Portfolio: https://kimgyuilli.github.io/gyuill-portfolio
          </Text>
          {socialLinks.map((link) => (
            <Text key={link.label} style={pdfStyles.socialLink}>
              {link.label}: {link.href}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}
