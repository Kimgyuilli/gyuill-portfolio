import { View, Text, Image } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import type { ContactInfoData, SocialLinkData } from '@/data/contact';

interface PdfHeaderProps {
  name: string;
  portfolioUrl: string;
  contactInfo: ContactInfoData[];
  socialLinks: SocialLinkData[];
  profileImageBase64: string | null;
}

export function PdfHeader({
  name,
  portfolioUrl,
  contactInfo,
  socialLinks,
  profileImageBase64,
}: PdfHeaderProps) {
  return (
    <View style={pdfStyles.header}>
      <View style={pdfStyles.headerRow}>
        {/* 좌: 사진 + 이름 */}
        <View style={pdfStyles.headerLeft}>
          {profileImageBase64 && (
            <Image style={pdfStyles.profileImage} src={profileImageBase64} />
          )}
          <Text style={pdfStyles.name}>{name}</Text>
        </View>
        {/* 우: 연락처 + 소셜 */}
        <View style={pdfStyles.headerInfo}>
          {contactInfo.map((item) => (
            <Text key={item.label} style={pdfStyles.contactLine}>
              {item.value}
            </Text>
          ))}
          <Text style={pdfStyles.socialLink}>
            Portfolio: {portfolioUrl}
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
