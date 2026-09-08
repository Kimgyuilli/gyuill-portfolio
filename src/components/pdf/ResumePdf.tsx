import { Document, Page } from '@react-pdf/renderer';
import './fonts';
import { pdfStyles } from './styles';
import { PdfHeader } from './sections/PdfHeader';
import { PdfIntroduce } from './sections/PdfIntroduce';
import { PdfEducation } from './sections/PdfAbout';
import { PdfSkills } from './sections/PdfSkills';
import { PdfExperience } from './sections/PdfExperience';
import { PdfProjects } from './sections/PdfProjects';
import {
  resumeCertificates,
  resumeContacts,
  resumeEducation,
  resumeExperiences,
  resumeIntro,
  resumeProfile,
  resumeProjects,
  resumeSkills,
} from '@/data/resume';

/**
 * 이력서 PDF. 내용은 전부 `@/data/resume`에 있고 이 파일은 순서만 정한다.
 * 섹션 순서를 바꾸거나 빼려면 아래 JSX만 고치면 된다.
 */
export function ResumePdf() {
  return (
    <Document title="김규일 - 이력서" author={resumeProfile.name}>
      <Page size="A4" style={pdfStyles.page}>
        <PdfHeader name={resumeProfile.name} role={resumeProfile.role} contacts={resumeContacts} />
        <PdfIntroduce paragraphs={resumeIntro} />
        <PdfSkills categories={resumeSkills} />
        <PdfEducation education={resumeEducation} certificates={resumeCertificates} />
        <PdfExperience experiences={resumeExperiences} />
        <PdfProjects projects={resumeProjects} />
      </Page>
    </Document>
  );
}
