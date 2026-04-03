import { View, Text, Link } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import type { AchievementData } from '@/data/achievements';

interface PdfAchievementsProps {
  achievements: AchievementData[];
}

export function PdfAchievements({ achievements }: PdfAchievementsProps) {
  return (
    <View style={pdfStyles.sectionRow}>
      <Text style={pdfStyles.sectionLabel}>수상/자격</Text>
      <View style={pdfStyles.sectionContent}>
        {achievements.map((ach, i) => (
          <View key={i} style={pdfStyles.achievementItem}>
            {ach.link ? (
              <Link src={ach.link} style={pdfStyles.achievementTitleLink}>
                {ach.title}
              </Link>
            ) : (
              <Text style={pdfStyles.achievementTitle}>{ach.title}</Text>
            )}
            <Text style={pdfStyles.achievementDate}>{ach.date}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
