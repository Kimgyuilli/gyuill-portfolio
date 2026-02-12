import { StyleSheet } from '@react-pdf/renderer';

// 사이트 CSS 변수 값 매핑
export const colors = {
  accent: '#10b981', // emerald-500
  textPrimary: '#0f172a', // slate-900
  textSecondary: '#334155', // slate-700
  textMuted: '#64748b', // slate-500
  borderLight: '#cbd5e1', // slate-300
  white: '#ffffff',
  // 스킬 레벨 색상
  levelPrimary: '#f97316', // orange-500
  levelExperienced: '#eab308', // yellow-500
  levelLearning: '#9ca3af', // gray-400
};

export const pdfStyles = StyleSheet.create({
  page: {
    fontFamily: 'Spoqa Han Sans Neo',
    fontSize: 9,
    color: colors.textPrimary,
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 36,
    lineHeight: 1.5,
  },
  // Header
  headerRow: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  profileImage: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginRight: 16,
  },
  headerInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 700,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  contactLine: {
    fontSize: 8.5,
    color: colors.textSecondary,
    marginBottom: 3,
  },
  socialLink: {
    fontSize: 8.5,
    color: colors.accent,
    textDecoration: 'none',
    marginTop: 2,
  },
  // Section
  sectionTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: colors.textPrimary,
    marginBottom: 4,
    paddingBottom: 4,
    borderBottomWidth: 2,
    borderBottomColor: colors.accent,
    marginTop: 14,
  },
  // About
  paragraph: {
    fontSize: 9,
    color: colors.textSecondary,
    marginBottom: 4,
    lineHeight: 1.6,
  },
  // Education
  educationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  educationSchool: {
    fontSize: 9,
    fontWeight: 500,
    color: colors.textPrimary,
  },
  educationPeriod: {
    fontSize: 8.5,
    color: colors.textMuted,
  },
  // Skills
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  skillCategory: {
    width: '48%',
    marginBottom: 8,
  },
  skillCategoryTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  skillLevelRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  skillLevelDot: {
    fontSize: 9,
    marginRight: 4,
    width: 12,
  },
  skillLevelText: {
    fontSize: 8.5,
    color: colors.textSecondary,
    flex: 1,
  },
  skillFlatText: {
    fontSize: 8.5,
    color: colors.textSecondary,
  },
  // Experience
  experienceItem: {
    marginTop: 10,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  experienceCompany: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.textPrimary,
  },
  experiencePeriod: {
    fontSize: 8.5,
    color: colors.textMuted,
  },
  experiencePosition: {
    fontSize: 9,
    color: colors.textMuted,
    marginBottom: 4,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 2,
    paddingLeft: 4,
  },
  bullet: {
    fontSize: 9,
    color: colors.textSecondary,
    marginRight: 6,
  },
  bulletText: {
    fontSize: 8.5,
    color: colors.textSecondary,
    flex: 1,
  },
  // Achievements
  achievementItem: {
    marginTop: 10,
  },
  achievementHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  achievementTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.textPrimary,
  },
  achievementTitleLink: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.accent,
    textDecoration: 'none',
  },
  achievementMeta: {
    fontSize: 8.5,
    color: colors.textMuted,
  },
  achievementDesc: {
    fontSize: 8.5,
    color: colors.textSecondary,
    marginTop: 2,
  },
});
