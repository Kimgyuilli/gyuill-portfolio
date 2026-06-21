import { View, Text, Link } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';

interface PdfProject {
  title: string;
  description: string;
  period: string;
  role: string;
  github?: string;
  tags: string[];
  stack?: {
    label: string;
    value: string;
  }[];
  cases: {
    title: string;
    problem: string;
    action: string;
    result: string;
  }[];
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
            <View style={pdfStyles.projectAside}>
              <Text style={pdfStyles.projectPeriod}>{proj.period}</Text>
              <Text style={pdfStyles.projectTitle}>{proj.title}</Text>
              <Text style={pdfStyles.projectDesc}>{proj.description}</Text>
              {proj.github && (
                <View style={pdfStyles.projectGithubRow}>
                  <Text style={pdfStyles.projectGithubLabel}>Github: </Text>
                  <Link src={proj.github} style={pdfStyles.projectGithub}>
                    {proj.github.replace('https://github.com/', '')}
                  </Link>
                </View>
              )}
              <Text style={pdfStyles.projectStackTitle}>기술 스택</Text>
              {proj.stack ? (
                proj.stack.map((item) => (
                  <Text key={item.label} style={pdfStyles.projectStackLine}>
                    <Text style={pdfStyles.projectStackLabel}>{item.label}: </Text>
                    {item.value}
                  </Text>
                ))
              ) : (
                <Text style={pdfStyles.projectStackLine}>{proj.tags.join(', ')}</Text>
              )}
            </View>
            <View style={pdfStyles.projectBody}>
              <Text style={pdfStyles.projectBodyLead}>{proj.role}</Text>
              {proj.cases.map((item, j) => (
                <View key={j} style={pdfStyles.projectCase}>
                  <Text style={pdfStyles.projectCaseTitle}>
                    {j + 1}. {item.title}
                  </Text>
                  <Text style={pdfStyles.projectCaseLine}>
                    <Text style={pdfStyles.projectCaseLabel}>Problem: </Text>
                    {item.problem}
                  </Text>
                  <Text style={pdfStyles.projectCaseLine}>
                    <Text style={pdfStyles.projectCaseLabel}>Action: </Text>
                    {item.action}
                  </Text>
                  <Text style={pdfStyles.projectCaseLine}>
                    <Text style={pdfStyles.projectCaseLabel}>Result: </Text>
                    {item.result}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
