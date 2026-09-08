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
            {exp.description.map((item, j) => {
              const bullet = typeof item === 'string' ? { text: item, link: undefined } : item;
              return (
                <View key={j} style={pdfStyles.bulletItem}>
                  <Text style={pdfStyles.bullet}>•</Text>
                  <Text style={pdfStyles.bulletText}>
                    {bullet.text}
                    {bullet.link && (
                      <>
                        <Text style={pdfStyles.projectCaseLinkSep}> · </Text>
                        <Link src={bullet.link.url} style={pdfStyles.projectCaseLink}>
                          {bullet.link.label}
                        </Link>
                      </>
                    )}
                  </Text>
                </View>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
}
