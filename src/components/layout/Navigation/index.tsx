import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NAV_ITEMS, BRAND_NAME } from '@/constants/navigation';
import { useTheme } from '@/contexts/ThemeContext';
import { PdfDownloadButton } from '@/components/pdf/PdfDownloadButton';
import styles from './styles.module.css';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));

      // zoom 비율 고려 (0.9 = 90%)
      const zoom = 0.9;
      const scrollPosition = window.scrollY * zoom + 100;

      // 페이지 하단에 도달했는지 확인
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isAtBottom = windowHeight + window.scrollY >= documentHeight - 10;

      // 하단에 도달하면 마지막 섹션 활성화
      if (isAtBottom) {
        setActiveSection(sections[sections.length - 1]);
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = (rect.top + window.scrollY) * zoom;
          const offsetHeight = rect.height * zoom;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 실행
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles['nav-content']}>
          <div className={styles.brand}>
            <a href="#home" className={styles['brand-link']}>
              {BRAND_NAME}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className={styles['desktop-nav']}>
            <div className={styles['nav-links']}>
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`${styles['nav-link']} ${isActive ? styles['nav-link-active'] : ''}`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
            <div className={styles.divider}></div>
            <PdfDownloadButton className={styles['download-btn']} />
            <div className={styles.divider}></div>
            <button
              onClick={toggleTheme}
              className={styles['theme-toggle']}
              aria-label="Toggle theme"
            >
              <div className={styles['toggle-track']}>
                <div
                  className={`${styles['toggle-thumb']} ${theme === 'dark' ? styles['toggle-thumb-dark'] : ''}`}
                >
                  {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
                </div>
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className={styles['mobile-nav']}>
            <button
              onClick={toggleTheme}
              className={styles['theme-toggle-mobile']}
              aria-label="Toggle theme"
            >
              <div className={styles['toggle-track']}>
                <div
                  className={`${styles['toggle-thumb']} ${theme === 'dark' ? styles['toggle-thumb-dark'] : ''}`}
                >
                  {theme === 'dark' ? <Moon size={12} /> : <Sun size={12} />}
                </div>
              </div>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={styles['mobile-button']}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={styles['mobile-menu']}>
          <div className={styles['mobile-menu-content']}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={styles['mobile-nav-link']}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
