import { Award, Trophy, FileCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// 실제 achievements 데이터의 title과 매칭
export const ACHIEVEMENT_ICONS: Record<string, LucideIcon> = {
  'AYU 컴퓨터공학과 캡스톤 경진대회 최우수상': Trophy,
  'SOPT 37기 해커톤 웹 서비스 대상': Trophy,
  SQLD: FileCheck,
  'Groomthon univ 경인지부 9ITHON 최우수상': Trophy,
};

export const DEFAULT_ACHIEVEMENT_ICON = Award;
