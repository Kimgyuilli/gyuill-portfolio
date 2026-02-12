import { View, Text } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import { SectionTitle } from '../primitives/SectionTitle';
import type { AboutInfo, Education } from '@/data/hero';

interface PdfAboutProps {
  about: AboutInfo;
  education: Education[];
}

export function PdfAbout({ about, education }: PdfAboutProps) {
  return (
    <View>
      <SectionTitle>ABOUT ME</SectionTitle>
      {about.paragraphs.map((p, i) => (
        <Text key={i} style={pdfStyles.paragraph}>
          {p}
        </Text>
      ))}

      <SectionTitle>EDUCATION</SectionTitle>
      {education.map((edu, i) => (
        <View key={i} style={pdfStyles.educationRow}>
          <Text style={pdfStyles.educationSchool}>{edu.school}</Text>
          <Text style={pdfStyles.educationPeriod}>{edu.period}</Text>
        </View>
      ))}
    </View>
  );
}
