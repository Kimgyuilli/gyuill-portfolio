import { StyleSheet } from '@react-pdf/renderer';

export const colors = {
  accent: '#10b981',
  textPrimary: '#0f172a',
  textSecondary: '#334155',
  textMuted: '#64748b',
  borderLight: '#cbd5e1',
  borderDark: '#1e293b',
};

const LABEL_WIDTH = 72;

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

  // ── Header ──
  header: {
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: colors.borderDark,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  headerName: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 20,
  },
  headerLinkRow: {
    flexDirection: 'row',
  },
  headerLink: {
    fontSize: 8.5,
    color: colors.accent,
    textDecoration: 'none',
    marginRight: 14,
  },
  headerContactItem: {
    fontSize: 8.5,
    color: colors.textSecondary,
    marginBottom: 2,
    textAlign: 'right',
  },

  // ── 2-column section row ──
  sectionRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
    paddingTop: 10,
    paddingBottom: 10,
  },
  sectionLabel: {
    width: LABEL_WIDTH,
    fontSize: 10,
    fontWeight: 700,
    color: colors.textPrimary,
    paddingRight: 12,
  },
  sectionContent: {
    flex: 1,
  },

  // ── Introduce ──
  introItem: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  introBullet: {
    fontSize: 9,
    color: colors.textSecondary,
    marginRight: 6,
  },
  introText: {
    fontSize: 9,
    color: colors.textSecondary,
    flex: 1,
    lineHeight: 1.6,
  },

  // ── Education ──
  educationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

  // ── Experience ──
  experienceItem: {
    marginBottom: 10,
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
    marginBottom: 3,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 1,
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

  // ── Achievements ──
  achievementItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  achievementTitle: {
    fontSize: 9,
    color: colors.textPrimary,
  },
  achievementTitleLink: {
    fontSize: 9,
    color: colors.accent,
    textDecoration: 'none',
  },
  achievementDate: {
    fontSize: 8.5,
    color: colors.textMuted,
  },

  // ── Projects ──
  projectItem: {
    marginBottom: 10,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  projectTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.textPrimary,
  },
  projectPeriod: {
    fontSize: 8.5,
    color: colors.textMuted,
  },
  projectDesc: {
    fontSize: 8.5,
    color: colors.textSecondary,
    marginBottom: 3,
  },
  projectTagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 3,
  },
  projectTag: {
    fontSize: 7.5,
    color: colors.accent,
    backgroundColor: '#d1fae5',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 4,
    marginBottom: 2,
  },

  // ── Skills ──
  skillLine: {
    fontSize: 9,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  skillCategory: {
    fontWeight: 700,
    color: colors.textPrimary,
  },
});
