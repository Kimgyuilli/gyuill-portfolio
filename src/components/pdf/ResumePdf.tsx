import { Document, Page } from '@react-pdf/renderer';
import './fonts';
import { pdfStyles } from './styles';
import { PdfHeader } from './sections/PdfHeader';
import { PdfIntroduce } from './sections/PdfIntroduce';
import { PdfEducation } from './sections/PdfAbout';
import { PdfSkills } from './sections/PdfSkills';
import { PdfExperience } from './sections/PdfExperience';
import { PdfAchievements } from './sections/PdfAchievements';
import { heroData } from '@/data/hero';
import { contactInfoData, socialLinksData } from '@/data/contact';
import { experiences } from '@/data/experiences';
import { achievements } from '@/data/achievements';
import type { SkillCategoryData } from '@/data/skills';

const pdfSkills: SkillCategoryData[] = [
  { type: 'flat', title: 'Backend', skills: ['Java', 'Spring Boot'] },
  { type: 'flat', title: 'Frontend', skills: ['React', 'TypeScript'] },
  { type: 'flat', title: 'Database', skills: ['PostgreSQL', 'MySQL', 'Redis'] },
  { type: 'flat', title: 'DevOps', skills: ['Docker', 'AWS', 'GitHub Actions'] },
  { type: 'flat', title: 'Tools', skills: ['Git', 'IntelliJ'] },
];

export function ResumePdf() {
  return (
    <Document title="김규일 - 이력서" author="김규일">
      <Page size="A4" style={pdfStyles.page}>
        <PdfHeader
          name={heroData.name}
          portfolioUrl={heroData.portfolioUrl}
          contactInfo={contactInfoData}
          socialLinks={socialLinksData}
        />
        <PdfIntroduce about={heroData.about} />
        <PdfEducation education={heroData.education} />
        <PdfExperience experiences={experiences} />
        <PdfAchievements achievements={achievements} />
        <PdfSkills categories={pdfSkills} />
      </Page>
    </Document>
  );
}
