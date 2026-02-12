import { View, Text } from '@react-pdf/renderer';
import { pdfStyles, colors } from '../styles';
import { SectionTitle } from '../primitives/SectionTitle';
import type { SkillCategoryData } from '@/data/skills';

interface PdfSkillsProps {
  categories: SkillCategoryData[];
}

const LEVEL_SYMBOLS: Record<string, { symbol: string; color: string }> = {
  primary: { symbol: '●', color: colors.levelPrimary },
  experienced: { symbol: '○', color: colors.levelExperienced },
  learning: { symbol: '△', color: colors.levelLearning },
};

export function PdfSkills({ categories }: PdfSkillsProps) {
  return (
    <View>
      <SectionTitle>SKILLS</SectionTitle>
      <View style={pdfStyles.skillsGrid}>
        {categories.map((cat) => (
          <View key={cat.title} style={pdfStyles.skillCategory}>
            <Text style={pdfStyles.skillCategoryTitle}>{cat.title}</Text>
            {cat.type === 'leveled' ? (
              cat.levels
                .filter((lvl) => lvl.skills.length > 0)
                .map((lvl) => {
                  const sym = LEVEL_SYMBOLS[lvl.level];
                  return (
                    <View key={lvl.level} style={pdfStyles.skillLevelRow}>
                      <Text style={[pdfStyles.skillLevelDot, { color: sym.color }]}>
                        {sym.symbol}
                      </Text>
                      <Text style={pdfStyles.skillLevelText}>
                        {lvl.skills.join(', ')}
                      </Text>
                    </View>
                  );
                })
            ) : (
              <Text style={pdfStyles.skillFlatText}>{cat.skills.join(', ')}</Text>
            )}
          </View>
        ))}
      </View>
    </View>
  );
}
