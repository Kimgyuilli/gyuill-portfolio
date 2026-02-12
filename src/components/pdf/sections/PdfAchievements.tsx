import { View, Text, Link } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import { SectionTitle } from '../primitives/SectionTitle';
import type { AchievementData } from '@/data/achievements';

interface PdfAchievementsProps {
  achievements: AchievementData[];
}

export function PdfAchievements({ achievements }: PdfAchievementsProps) {
  return (
    <View>
      <SectionTitle>ACHIEVEMENTS</SectionTitle>
      {achievements.map((ach, i) => (
        <View key={i} style={pdfStyles.achievementItem}>
          <View style={pdfStyles.achievementHeader}>
            {ach.link ? (
              <Link src={ach.link} style={pdfStyles.achievementTitleLink}>
                {ach.title}
              </Link>
            ) : (
              <Text style={pdfStyles.achievementTitle}>{ach.title}</Text>
            )}
            <Text style={pdfStyles.achievementMeta}>{ach.date}</Text>
          </View>
          <Text style={pdfStyles.achievementMeta}>{ach.issuer}</Text>
          {ach.description && (
            <Text style={pdfStyles.achievementDesc}>{ach.description}</Text>
          )}
        </View>
      ))}
    </View>
  );
}
