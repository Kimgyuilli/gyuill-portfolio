import { View, Text } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import type { AboutInfo } from '@/data/hero';

interface PdfIntroduceProps {
  about: AboutInfo;
}

export function PdfIntroduce({ about }: PdfIntroduceProps) {
  return (
    <View style={pdfStyles.sectionRow}>
      <Text style={pdfStyles.sectionLabel}>Introduce</Text>
      <View style={pdfStyles.sectionContent}>
        {about.paragraphs.map((p, i) => (
          <View key={i} style={pdfStyles.introItem}>
            <Text style={pdfStyles.introBullet}>•</Text>
            <Text style={pdfStyles.introText}>{p}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
