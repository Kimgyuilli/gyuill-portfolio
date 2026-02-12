import { Document, Page } from '@react-pdf/renderer';
import './fonts';
import { pdfStyles } from './styles';
import { PdfHeader } from './sections/PdfHeader';
import { PdfAbout } from './sections/PdfAbout';
import { PdfSkills } from './sections/PdfSkills';
import { PdfExperience } from './sections/PdfExperience';
import { PdfAchievements } from './sections/PdfAchievements';
import { heroData } from '@/data/hero';
import { contactInfoData, socialLinksData } from '@/data/contact';
import { skillCategories } from '@/data/skills';
import { experiences } from '@/data/experiences';
import { achievements } from '@/data/achievements';

interface ResumePdfProps {
  profileImageBase64: string | null;
}

export function ResumePdf({ profileImageBase64 }: ResumePdfProps) {
  return (
    <Document title="김규일 - 이력서" author="김규일">
      <Page size="A4" style={pdfStyles.page}>
        <PdfHeader
          name={heroData.name}
          portfolioUrl={heroData.portfolioUrl}
          contactInfo={contactInfoData}
          socialLinks={socialLinksData}
          profileImageBase64={profileImageBase64}
        />
        <PdfAbout about={heroData.about} education={heroData.education} />
        <PdfSkills categories={skillCategories} />
        <PdfExperience experiences={experiences} />
        <PdfAchievements achievements={achievements} />
      </Page>
    </Document>
  );
}
