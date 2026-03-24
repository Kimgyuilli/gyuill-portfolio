import { View, Text, Image } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import type { ContactInfoData, SocialLinkData } from '@/data/contact';

interface PdfHeaderProps {
  name: string;
  portfolioUrl: string;
  contactInfo: ContactInfoData[];
  socialLinks: SocialLinkData[];
  profileImageUrl: string;
}

export function PdfHeader({
  name,
  portfolioUrl,
  contactInfo,
  socialLinks,
  profileImageUrl,
}: PdfHeaderProps) {
  return (
    <View style={pdfStyles.header}>
      <View style={pdfStyles.headerRow}>
        {/* 좌: 사진 + 이름 */}
        <View style={pdfStyles.headerLeft}>
          {profileImageUrl && (
            <Image style={pdfStyles.profileImage} src={profileImageUrl} />
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
