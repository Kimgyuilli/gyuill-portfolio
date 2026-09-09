import { View, Text, Link } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import type { ResumeProject } from '@/data/resume';

interface PdfProjectsProps {
  projects: ResumeProject[];
  /**
   * true 로 두면 프로젝트 하나가 한 페이지를 통째로 차지한다. 프로젝트 페이지는 깔끔해지지만
   * 앞 페이지 하단이 비므로 기본값은 false(이어서 흐름)다. 케이스를 늘려 프로젝트 하나가
   * 한 페이지에 가까워지면 그때 켜는 편이 낫다.
   */
  pageBreak?: boolean;
}

export function PdfProjects({ projects, pageBreak = false }: PdfProjectsProps) {
  return (
    <View style={pdfStyles.sectionRow} break={pageBreak}>
      <Text style={pdfStyles.sectionLabel}>프로젝트</Text>
      <View style={pdfStyles.sectionContent}>
        {projects.map((proj, i) => (
          <View key={proj.title} style={pdfStyles.projectItem} break={pageBreak && i > 0}>
            <View style={pdfStyles.projectAside}>
              <Text style={pdfStyles.projectPeriod}>{proj.period}</Text>
              <Text style={pdfStyles.projectTitle}>{proj.title}</Text>
              <Text style={pdfStyles.projectDesc}>{proj.description}</Text>
              {proj.github && (
                <View style={pdfStyles.projectGithubRow}>
                  <Text style={pdfStyles.projectGithubLabel}>GitHub: </Text>
                  <Link src={proj.github} style={pdfStyles.projectGithub}>
                    {proj.github.replace('https://github.com/', '')}
                  </Link>
                </View>
              )}
              {proj.demo && (
                <View style={pdfStyles.projectGithubRow}>
                  <Text style={pdfStyles.projectGithubLabel}>Service: </Text>
                  <Link src={proj.demo} style={pdfStyles.projectGithub}>
                    {proj.demo.replace(/^https?:\/\//, '')}
                  </Link>
                </View>
              )}
              <Text style={pdfStyles.projectStackTitle}>기술 스택</Text>
              {proj.stack.map((item) => (
                <Text key={item.label} style={pdfStyles.projectStackLine}>
                  <Text style={pdfStyles.projectStackLabel}>{item.label}: </Text>
                  {item.value}
                </Text>
              ))}
            </View>
            <View style={pdfStyles.projectBody}>
              <Text style={pdfStyles.projectBodyLead}>{proj.role}</Text>
              {proj.note && (
                <Text
                  style={
                    proj.portfolio
                      ? [pdfStyles.projectNote, pdfStyles.projectNoteTight]
                      : pdfStyles.projectNote
                  }
                >
                  {proj.note}
                </Text>
              )}
              {/* aside(31%) 는 전체 URL 을 한 줄에 담지 못한다. 하이픈 콜백이 꺼져 있어
                  줄바꿈 없이 칼럼을 침범하므로 폭이 넓은 body 쪽에 둔다. */}
              {proj.portfolio && (
                <View style={pdfStyles.projectPortfolioRow}>
                  <Text style={pdfStyles.projectGithubLabel}>상세 기록: </Text>
                  <Link src={proj.portfolio} style={pdfStyles.projectGithub}>
                    {proj.portfolio.replace(/^https?:\/\//, '')}
                  </Link>
                </View>
              )}
              {proj.cases.map((item, j) => (
                <View key={item.title} style={pdfStyles.projectCase} wrap={false}>
                  <Text style={pdfStyles.projectCaseTitle}>
                    {j + 1}. {item.title}
                  </Text>
                  {(
                    [
                      ['문제', item.problem],
                      ['판단', item.judgment],
                      ['결과', item.result],
                    ] as const
                  ).map(([label, body]) => (
                    <View key={label} style={pdfStyles.projectCaseRow}>
                      <Text style={pdfStyles.projectCaseLabel}>{label}</Text>
                      <Text style={pdfStyles.projectCaseText}>{body}</Text>
                    </View>
                  ))}
                  {item.links && item.links.length > 0 && (
                    <Text style={pdfStyles.projectCaseLinkRow}>
                      {item.links.map((link, k) => (
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
        ))}
      </View>
    </View>
  );
}
