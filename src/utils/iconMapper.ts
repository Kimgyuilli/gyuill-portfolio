import type { LucideIcon } from 'lucide-react';

/**
 * 아이콘 맵핑 유틸리티
 * 데이터에 아이콘을 주입하는 공통 로직
 */
export function mapWithIcons<T, K extends string>(
  items: T[],
  getKey: (item: T) => K,
  iconMap: Record<K, LucideIcon>,
  defaultIcon?: LucideIcon
): (T & { icon: LucideIcon })[] {
  return items.map((item) => ({
    ...item,
    icon: iconMap[getKey(item)] || defaultIcon || iconMap[getKey(item)],
  }));
}
