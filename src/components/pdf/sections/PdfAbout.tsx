import { View, Text } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import type { ResumeEducation } from '@/data/resume';

interface PdfEducationProps {
  education: ResumeEducation[];
  certificates?: string[];
}

export function PdfEducation({ education, certificates = [] }: PdfEducationProps) {
  return (
    <View style={pdfStyles.sectionRow}>
      <Text style={pdfStyles.sectionLabel}>학력 · 자격</Text>
      <View style={pdfStyles.sectionContent}>
        {education.map((edu) => (
          <View key={edu.school} style={pdfStyles.educationRow}>
            <Text style={pdfStyles.educationSchool}>{edu.school}</Text>
            <Text style={pdfStyles.educationPeriod}>{edu.period}</Text>
          </View>
        ))}
        {certificates.length > 0 && (
          <Text style={pdfStyles.certificateLine}>
            <Text style={pdfStyles.certificateLabel}>자격 </Text>
            {certificates.join(' · ')}
          </Text>
        )}
      </View>
    </View>
  );
}
