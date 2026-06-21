import { View, Text } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';

export interface PdfSkillCategory {
  title: string;
  skills: string[];
}

interface PdfSkillsProps {
  categories: PdfSkillCategory[];
}

export function PdfSkills({ categories }: PdfSkillsProps) {
  return (
    <View style={pdfStyles.sectionRow}>
      <Text style={pdfStyles.sectionLabel}>스킬</Text>
      <View style={pdfStyles.sectionContent}>
        {categories.map((cat) => (
          <View key={cat.title} style={pdfStyles.skillRow}>
            <Text style={pdfStyles.skillCategory}>{cat.title}</Text>
            <Text style={pdfStyles.skillLine}>{cat.skills.join(', ')}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
