import { Text } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';

interface SectionTitleProps {
  children: string;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return <Text style={pdfStyles.sectionTitle}>{children}</Text>;
}
