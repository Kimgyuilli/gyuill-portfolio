import { View, Text } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import type { Education } from '@/data/hero';

interface PdfEducationProps {
  education: Education[];
}

export function PdfEducation({ education }: PdfEducationProps) {
  return (
    <View style={pdfStyles.sectionRow}>
      <Text style={pdfStyles.sectionLabel}>학력</Text>
      <View style={pdfStyles.sectionContent}>
        {education.map((edu, i) => (
          <View key={i} style={pdfStyles.educationRow}>
            <Text style={pdfStyles.educationSchool}>{edu.school}</Text>
            <Text style={pdfStyles.educationPeriod}>{edu.period}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
