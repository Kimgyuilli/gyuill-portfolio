import { View, Text, Link } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import type { ResumeExperience } from '@/data/resume';

interface PdfExperienceProps {
  experiences: ResumeExperience[];
}

export function PdfExperience({ experiences }: PdfExperienceProps) {
  return (
    <View style={pdfStyles.sectionRow}>
      <Text style={pdfStyles.sectionLabel}>활동</Text>
      <View style={pdfStyles.sectionContent}>
        {experiences.map((exp, i) => (
          <View key={i} style={pdfStyles.experienceItem} wrap={false}>
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
            {exp.links && exp.links.length > 0 && (
              <Text style={pdfStyles.experienceLinkRow}>
                {exp.links.map((link, k) => (
                  <Text key={link.url}>
                    {k > 0 && <Text style={pdfStyles.projectCaseLinkSep}> · </Text>}
                    <Link src={link.url} style={pdfStyles.projectCaseLink}>
                      {link.label}
                    </Link>
                  </Text>
                ))}
              </Text>
            )}
          </View>
        ))}
      </View>
    </View>
  );
}
