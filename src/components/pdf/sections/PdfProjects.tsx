import { View, Text, Link } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import type { ResumeLink, ResumeProject } from '@/data/resume';

interface PdfProjectsProps {
  projects: ResumeProject[];
  /**
   * true 로 두면 프로젝트 하나가 한 페이지를 통째로 차지한다. 프로젝트 페이지는 깔끔해지지만
   * 앞 페이지 하단이 비므로 기본값은 false(이어서 흐름)다. 케이스를 늘려 프로젝트 하나가
   * 한 페이지에 가까워지면 그때 켜는 편이 낫다.
   */
  pageBreak?: boolean;
}

interface PdfProjectCaseRowProps {
  label: '문제' | '판단' | '결과';
  body: string;
  links?: ResumeLink[];
}

function PdfProjectCaseRow({ label, body, links }: PdfProjectCaseRowProps) {
  return (
    <View style={pdfStyles.projectCaseRow} wrap={false}>
      <Text style={pdfStyles.projectCaseLabel}>{label}</Text>
      <View style={pdfStyles.projectCaseTextGroup}>
        {body.split(/\n+/).map((para, k) => (
          <Text
            key={para.slice(0, 24)}
            style={
              k === 0
                ? pdfStyles.projectCaseText
                : [pdfStyles.projectCaseText, pdfStyles.projectCaseTextPara]
            }
          >
            {para}
          </Text>
        ))}
        {links && links.length > 0 && (
          <Text style={pdfStyles.projectCaseLinkRow}>
            {links.map((link, k) => (
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
    </View>
  );
}

export function PdfProjects({ projects, pageBreak = false }: PdfProjectsProps) {
  return (
    <View style={pdfStyles.sectionRow} break={pageBreak}>
      <Text style={pdfStyles.sectionLabel}>프로젝트</Text>
      <View style={pdfStyles.sectionContent}>
        {projects.map((proj, i) => (
          <View
            key={proj.title}
            style={
              i === projects.length - 1
                ? [pdfStyles.projectItem, pdfStyles.projectItemLast]
                : pdfStyles.projectItem
            }
            break={pageBreak && i > 0}
          >
            <View style={pdfStyles.projectSummary} wrap={false}>
              <View style={pdfStyles.projectHeadingRow}>
                <View style={pdfStyles.projectHeadingText}>
                  <Text style={pdfStyles.projectTitle}>{proj.title}</Text>
                  <Text style={pdfStyles.projectDesc}>{proj.description}</Text>
                </View>
                <Text style={pdfStyles.projectPeriod}>{proj.period}</Text>
              </View>

              <Text style={pdfStyles.projectBodyLead}>{proj.role}</Text>
              {proj.note && <Text style={pdfStyles.projectNote}>{proj.note}</Text>}

              <View style={pdfStyles.projectLinkRow}>
                {proj.github && (
                  <Text style={pdfStyles.projectLinkItem}>
                    <Text style={pdfStyles.projectMetaLabel}>GitHub </Text>
                    <Link src={proj.github} style={pdfStyles.projectGithub}>
                      {proj.github.replace('https://github.com/', '')}
                    </Link>
                  </Text>
                )}
                {proj.demo && (
                  <Text style={pdfStyles.projectLinkItem}>
                    <Text style={pdfStyles.projectMetaLabel}>Service </Text>
                    <Link src={proj.demo} style={pdfStyles.projectGithub}>
                      {proj.demo.replace(/^https?:\/\//, '')}
                    </Link>
                  </Text>
                )}
                {proj.portfolio && (
                  <Text style={pdfStyles.projectLinkItem}>
                    <Text style={pdfStyles.projectMetaLabel}>상세 기록 </Text>
                    <Link src={proj.portfolio} style={pdfStyles.projectGithub}>
                      {proj.portfolio.replace(/^https?:\/\//, '')}
                    </Link>
                  </Text>
                )}
              </View>

              <View style={pdfStyles.projectStackList}>
                {proj.stack.map((item) => (
                  <View key={item.label} style={pdfStyles.projectStackRow}>
                    <Text style={pdfStyles.projectStackLabelColumn}>{item.label}</Text>
                    <Text style={pdfStyles.projectStackValue}>{item.value}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={pdfStyles.projectBody}>
              {proj.cases.map((item, j) => (
                <View key={item.title} style={pdfStyles.projectCase}>
                  {/* 사례 제목만 페이지 하단에 남지 않도록 문제 행까지 한 묶음으로 둔다. */}
                  <View wrap={false}>
                    <Text style={pdfStyles.projectCaseTitle}>
                      {j + 1}. {item.title}
                    </Text>
                    <PdfProjectCaseRow label="문제" body={item.problem} />
                  </View>
                  <PdfProjectCaseRow label="판단" body={item.judgment} />
                  <PdfProjectCaseRow label="결과" body={item.result} links={item.links} />
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
