import { useState, type ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './styles.module.css';

interface ExpandableSectionProps {
  children: ReactNode;
  collapsedMaxHeight: string;
  showToggle?: boolean;
}

export function ExpandableSection({
  children,
  collapsedMaxHeight,
  showToggle = true,
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.content} ${
          showToggle ? (isExpanded ? styles.expanded : styles.collapsed) : ''
        }`}
        style={showToggle && !isExpanded ? { maxHeight: collapsedMaxHeight } : undefined}
      >
        {children}
      </div>

      {showToggle && (
        <div className={styles['toggle-container']}>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={styles['toggle-button']}
            aria-label={isExpanded ? '접기' : '더보기'}
          >
            {isExpanded ? (
              <>
                <ChevronUp className={styles.icon} />
                <span>접기</span>
              </>
            ) : (
              <>
                <ChevronDown className={styles.icon} />
                <span>더보기</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
