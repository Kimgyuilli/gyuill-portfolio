import { View, Text, Link } from '@react-pdf/renderer';
import { headerContactWidths, pdfStyles } from '../styles';
import type { ContactInfoData, SocialLinkData } from '@/data/contact';

interface PdfHeaderProps {
  name: string;
  contactInfo: ContactInfoData[];
  socialLinks: SocialLinkData[];
}

const VISIBLE_LABELS = ['GitHub', 'Tech Blog'];

export function PdfHeader({ name, contactInfo, socialLinks }: PdfHeaderProps) {
  const visibleLinks = socialLinks.filter((link) => VISIBLE_LABELS.includes(link.label));
  const phone = contactInfo.find((item) => item.label === '전화번호');
  const email = contactInfo.find((item) => item.label === '이메일');
  const blog = visibleLinks.find((link) => link.label === 'Tech Blog');
  const github = visibleLinks.find((link) => link.label === 'GitHub');

  const items = [
    { label: 'Phone', value: phone?.value ?? '', href: phone?.href },
    { label: 'Email', value: email?.value ?? '', href: email?.href },
    {
      label: 'Tech Blog',
      value: blog?.href.replace(/^https?:\/\//, '') ?? '',
      href: blog?.href,
    },
    {
      label: 'GitHub',
      value: github?.href.replace(/^https?:\/\//, '') ?? '',
      href: github?.href,
    },
  ];

  return (
    <View style={pdfStyles.header}>
      <Text style={pdfStyles.headerGreeting}>안녕하세요.</Text>
      <Text style={pdfStyles.headerIntro}>
        Product Engineer <Text style={pdfStyles.headerIntroName}>{name}</Text>입니다.
      </Text>
      <View style={pdfStyles.headerContactGrid}>
        {items.map((item, index) => (
          <View key={item.label} style={[pdfStyles.headerContactBlock, headerContactWidths[index]]}>
            <Text style={pdfStyles.headerContactLabel}>{item.label}</Text>
            {item.href ? (
              <Link src={item.href} style={pdfStyles.headerContactValueLink}>
                {item.value}
              </Link>
            ) : (
              <Text style={pdfStyles.headerContactValue}>{item.value}</Text>
            )}
          </View>
        ))}
      </View>
    </View>
  );
}
