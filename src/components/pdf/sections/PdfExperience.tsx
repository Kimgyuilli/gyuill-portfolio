import { View, Text } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import type { Experience } from '@/types';

interface PdfExperienceProps {
  experiences: Experience[];
}

export function PdfExperience({ experiences }: PdfExperienceProps) {
  return (
    <View style={pdfStyles.sectionRow}>
      <Text style={pdfStyles.sectionLabel}>경력</Text>
      <View style={pdfStyles.sectionContent}>
        {experiences.map((exp, i) => (
          <View key={i} style={pdfStyles.experienceItem}>
            <View style={pdfStyles.experienceHeader}>
              <Text style={pdfStyles.experienceCompany}>
                {exp.company} | {exp.position}
              </Text>
              <Text style={pdfStyles.experiencePeriod}>{exp.period}</Text>
            </View>
            {exp.description.map((desc, j) => (
              <View key={j} style={pdfStyles.bulletItem}>
                <Text style={pdfStyles.bullet}>•</Text>
                <Text style={pdfStyles.bulletText}>{desc}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}
