import { View, Text, Link } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import type { ContactInfoData, SocialLinkData } from '@/data/contact';

interface PdfHeaderProps {
  name: string;
  portfolioUrl: string;
  contactInfo: ContactInfoData[];
  socialLinks: SocialLinkData[];
}

const HIDDEN_LABELS = ['LinkedIn'];

export function PdfHeader({
  name,
  portfolioUrl,
  contactInfo,
  socialLinks,
}: PdfHeaderProps) {
  const visibleLinks = socialLinks.filter(
    (link) => !HIDDEN_LABELS.includes(link.label),
  );

  return (
    <View style={pdfStyles.header}>
      <View style={pdfStyles.headerRow}>
        {/* 좌: 이름 + 링크 */}
        <View style={pdfStyles.headerLeft}>
          <Text style={pdfStyles.headerName}>{name}</Text>
          <View style={pdfStyles.headerLinkRow}>
            <Link src={portfolioUrl} style={pdfStyles.headerLink}>
              Portfolio
            </Link>
            {visibleLinks.map((link) => (
              <Link key={link.label} src={link.href} style={pdfStyles.headerLink}>
                {link.label}
              </Link>
            ))}
          </View>
        </View>
        {/* 우: 연락처 세로 */}
        <View style={pdfStyles.headerRight}>
          {contactInfo.map((item) => (
            <Text key={item.label} style={pdfStyles.headerContactItem}>
              {item.value}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}
