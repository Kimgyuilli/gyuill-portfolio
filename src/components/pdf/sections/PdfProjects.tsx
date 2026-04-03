import { View, Text } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';

interface PdfProject {
  title: string;
  description: string;
  period: string;
  role: string;
  tags: string[];
  highlights: string[];
}

interface PdfProjectsProps {
  projects: PdfProject[];
}

export type { PdfProject };

export function PdfProjects({ projects }: PdfProjectsProps) {
  return (
    <View style={pdfStyles.sectionRow}>
      <Text style={pdfStyles.sectionLabel}>프로젝트</Text>
      <View style={pdfStyles.sectionContent}>
        {projects.map((proj, i) => (
          <View key={i} style={pdfStyles.projectItem}>
            <View style={pdfStyles.projectHeader}>
              <Text style={pdfStyles.projectTitle}>
                {proj.title} | {proj.role}
              </Text>
              <Text style={pdfStyles.projectPeriod}>{proj.period}</Text>
            </View>
            <Text style={pdfStyles.projectDesc}>{proj.description}</Text>
            <View style={pdfStyles.projectTagRow}>
              {proj.tags.map((tag) => (
                <Text key={tag} style={pdfStyles.projectTag}>
                  {tag}
                </Text>
              ))}
            </View>
            {proj.highlights.map((h, j) => (
              <View key={j} style={pdfStyles.bulletItem}>
                <Text style={pdfStyles.bullet}>•</Text>
                <Text style={pdfStyles.bulletText}>{h}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}
