import { StyleSheet } from '@react-pdf/renderer';

export const colors = {
  accent: '#4b5563',
  textPrimary: '#111111',
  textSecondary: '#333333',
  textMuted: '#666666',
  borderLight: '#e5e7eb',
  borderDark: '#222222',
};

export const pdfStyles = StyleSheet.create({
  page: {
    fontFamily: 'Spoqa Han Sans Neo',
    fontSize: 9,
    color: colors.textPrimary,
    paddingTop: 44,
    paddingBottom: 20,
    paddingHorizontal: 50,
    lineHeight: 1.55,
  },

  // ── Header ──
  header: {
    marginBottom: 20,
    paddingBottom: 14,
    borderBottomWidth: 2,
    borderBottomColor: colors.borderDark,
  },
  headerGreeting: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 8,
  },
  headerIntro: {
    fontSize: 20,
    fontWeight: 400,
    marginBottom: 26,
  },
  headerIntroName: {
    fontWeight: 700,
  },
  headerContactGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  headerContactBlock: {
    width: '25%',
    paddingRight: 10,
    marginBottom: 7,
  },
  headerContactLabel: {
    fontSize: 9.5,
    fontWeight: 700,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  headerContactValue: {
    fontSize: 8,
    color: colors.textMuted,
  },
  headerContactValueLink: {
    fontSize: 8,
    color: colors.textMuted,
    textDecoration: 'underline',
  },
  headerRow: {},
  headerLeft: {},
  headerRight: {},
  headerName: {},
  headerRole: {},
  headerLinkRow: {},
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

  // ── 1-column section block ──
  sectionRow: {
    marginBottom: 10,
  },
  sectionLabel: {
    fontSize: 17,
    fontWeight: 700,
    color: colors.textPrimary,
    paddingBottom: 7,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  sectionContent: {
    width: '100%',
  },

  // ── Introduce ──
  introItem: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  introBullet: {
    fontSize: 9,
    color: colors.textSecondary,
    marginRight: 6,
  },
  introText: {
    fontSize: 9.6,
    color: colors.textSecondary,
    lineHeight: 1.7,
    marginBottom: 7,
  },

  // ── Education ──
  educationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  educationSchool: {
    fontSize: 8.8,
    fontWeight: 700,
    color: colors.textPrimary,
  },
  educationPeriod: {
    fontSize: 8.5,
    color: colors.textMuted,
  },

  // ── Experience ──
  experienceItem: {
    marginBottom: 6,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  experienceCompany: {
    fontSize: 9.5,
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
    fontSize: 9,
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
    marginBottom: 12,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  projectItemLast: {
    marginBottom: 0,
    paddingBottom: 0,
    borderBottomWidth: 0,
  },
  projectSummary: {
    marginBottom: 12,
    paddingBottom: 9,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  projectHeadingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  projectHeadingText: {
    width: '78%',
    paddingRight: 18,
  },
  projectBody: {
    width: '100%',
    paddingHorizontal: 8,
  },
  projectBodyLead: {
    fontSize: 9.2,
    fontWeight: 700,
    color: colors.textSecondary,
    marginBottom: 7,
    lineHeight: 1.6,
  },
  projectHeader: {
    display: 'none',
  },
  projectTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: colors.textPrimary,
    marginBottom: 3,
  },
  projectPeriod: {
    fontSize: 8.5,
    color: colors.textMuted,
    marginTop: 2,
  },
  projectDesc: {
    fontSize: 9,
    color: colors.textSecondary,
    lineHeight: 1.55,
  },
  projectGithub: {
    fontSize: 8,
    color: colors.textMuted,
    textDecoration: 'underline',
    lineHeight: 1.4,
  },
  projectLinkRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 7,
  },
  projectLinkItem: {
    fontSize: 8,
    color: colors.textMuted,
    marginRight: 18,
    lineHeight: 1.4,
  },
  projectMetaLabel: {
    fontWeight: 700,
    color: colors.textSecondary,
  },
  projectStackList: {
    marginTop: 1,
  },
  projectStackRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 1,
  },
  projectStackLabelColumn: {
    width: 52,
    flexShrink: 0,
    fontSize: 8.2,
    fontWeight: 700,
    color: colors.textSecondary,
    lineHeight: 1.5,
  },
  projectStackValue: {
    flex: 1,
    fontSize: 8.2,
    color: colors.textMuted,
    lineHeight: 1.5,
  },
  projectTagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 3,
    display: 'none',
  },
  projectTag: {
    fontSize: 7.5,
    color: colors.accent,
    backgroundColor: '#dbeafe',
    borderRadius: 6,
    paddingHorizontal: 5,
    paddingVertical: 1.5,
    marginRight: 3,
    marginBottom: 1.5,
  },
  projectCase: {
    marginBottom: 12,
  },
  projectCaseTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: colors.textPrimary,
    marginBottom: 6,
    lineHeight: 1.4,
  },
  projectCaseRow: {
    flexDirection: 'row',
    marginBottom: 5,
    paddingLeft: 2,
  },
  projectCaseLabel: {
    width: 40,
    flexShrink: 0,
    fontSize: 9,
    fontWeight: 700,
    color: colors.textMuted,
    lineHeight: 1.6,
  },
  /** 문제·판단·결과 본문을 감싸는 열. 안에 단락이 여러 개 올 수 있다. */
  projectCaseTextGroup: {
    flex: 1,
  },
  projectCaseText: {
    fontSize: 9.1,
    color: colors.textSecondary,
    lineHeight: 1.6,
  },
  /** 두 번째 단락부터 붙는 여백. 빈 줄보다 좁게 둬서 장수를 늘리지 않는다. */
  projectCaseTextPara: {
    marginTop: 4,
  },
  projectNote: {
    fontSize: 8.7,
    color: colors.textMuted,
    lineHeight: 1.6,
    marginBottom: 9,
  },
  projectCaseLinkRow: {
    fontSize: 8,
    lineHeight: 1.5,
    marginTop: 5,
  },
  projectCaseLink: {
    fontSize: 8,
    color: colors.accent,
    textDecoration: 'underline',
  },
  projectCaseLinkSep: {
    fontSize: 8,
    color: colors.textMuted,
  },

  // -- Certificates --
  certificateLine: {
    fontSize: 9,
    color: colors.textSecondary,
    marginTop: 5,
  },
  certificateLabel: {
    fontWeight: 700,
    color: colors.textPrimary,
  },

  // ── Skills ──
  skillRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  skillLine: {
    fontSize: 9,
    color: colors.textSecondary,
    width: '72%',
    lineHeight: 1.45,
  },
  skillCategory: {
    width: '28%',
    fontSize: 9,
    fontWeight: 700,
    color: colors.textPrimary,
  },
});
