import { View, Text, Link } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import type { ResumeContact } from '@/data/resume';

interface PdfHeaderProps {
  name: string;
  role: string;
  contacts: ResumeContact[];
}

export function PdfHeader({ name, role, contacts }: PdfHeaderProps) {
  return (
    <View style={pdfStyles.header}>
      <Text style={pdfStyles.headerGreeting}>안녕하세요.</Text>
      <Text style={pdfStyles.headerIntro}>
        {role} <Text style={pdfStyles.headerIntroName}>{name}</Text>입니다.
      </Text>
      <View style={pdfStyles.headerContactGrid}>
        {contacts.map((item) => (
          <View
            key={item.label}
            style={[
              pdfStyles.headerContactBlock,
              { width: contacts.length <= 4 ? '25%' : '33.33%' },
            ]}
          >
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
