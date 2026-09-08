import { View, Text } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';

interface PdfIntroduceProps {
  paragraphs: string[];
}

export function PdfIntroduce({ paragraphs }: PdfIntroduceProps) {
  return (
    <View style={pdfStyles.sectionRow}>
      <Text style={pdfStyles.sectionLabel}>소개</Text>
      <View style={pdfStyles.sectionContent}>
        {paragraphs.map((p, i) => (
          <Text key={i} style={pdfStyles.introText}>
            {p}
          </Text>
        ))}
      </View>
    </View>
  );
}
