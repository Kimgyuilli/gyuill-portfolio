import { View, Text } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import { SectionTitle } from '../primitives/SectionTitle';
import type { Experience } from '@/types';

interface PdfExperienceProps {
  experiences: Experience[];
}

export function PdfExperience({ experiences }: PdfExperienceProps) {
  return (
    <View>
      <SectionTitle>EXPERIENCE</SectionTitle>
      {experiences.map((exp, i) => (
        <View key={i} style={pdfStyles.experienceItem}>
          <View style={pdfStyles.experienceHeader}>
            <Text style={pdfStyles.experienceCompany}>{exp.company}</Text>
            <Text style={pdfStyles.experiencePeriod}>{exp.period}</Text>
          </View>
          <Text style={pdfStyles.experiencePosition}>{exp.position}</Text>
          {exp.description.map((desc, j) => (
            <View key={j} style={pdfStyles.bulletItem}>
              <Text style={pdfStyles.bullet}>•</Text>
              <Text style={pdfStyles.bulletText}>{desc}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
