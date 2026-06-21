import { View, Text } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import type { AboutInfo } from '@/data/hero';

interface PdfIntroduceProps {
  about: AboutInfo;
}

export function PdfIntroduce({ about }: PdfIntroduceProps) {
  return (
    <View style={pdfStyles.sectionRow}>
      <Text style={pdfStyles.sectionLabel}>소개</Text>
      <View style={pdfStyles.sectionContent}>
        {about.paragraphs.map((p, i) => (
          <Text key={i} style={pdfStyles.introText}>
            {p}
          </Text>
        ))}
      </View>
    </View>
  );
}
