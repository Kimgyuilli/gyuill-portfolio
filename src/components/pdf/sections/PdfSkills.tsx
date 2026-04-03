import { View, Text } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import { getAllSkills } from '@/data/skills';
import type { SkillCategoryData } from '@/data/skills';

interface PdfSkillsProps {
  categories: SkillCategoryData[];
}

export function PdfSkills({ categories }: PdfSkillsProps) {
  return (
    <View style={pdfStyles.sectionRow}>
      <Text style={pdfStyles.sectionLabel}>스킬</Text>
      <View style={pdfStyles.sectionContent}>
        {categories.map((cat) => (
          <Text key={cat.title} style={pdfStyles.skillLine}>
            <Text style={pdfStyles.skillCategory}>{cat.title}: </Text>
            {getAllSkills(cat).join(', ')}
          </Text>
        ))}
      </View>
    </View>
  );
}
