import { Menu, X, Sun, Moon, Github, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NAV_ITEMS, BRAND_NAME } from '@/constants/navigation';
import { useTheme } from '@/contexts/ThemeContext';
import { PdfDownloadButton } from '@/components/pdf/PdfDownloadButton';
import styles from './styles.module.css';

const REPO_URL = 'https://github.com/Kimgyuilli/gyuill-portfolio';
const BLOG_URL = 'https://blog.rlarbdlf222.workers.dev/';

interface NavigationProps {
  /** 프로젝트 상세 페이지에서는 섹션이 마운트돼 있지 않다 */
  isProjectPage?: boolean;
  /** 목록 페이지로 돌아가며 해당 섹션으로 스크롤한다 */
  onNavigateHome?: (sectionId?: string) => void;
}

export function Navigation({ isProjectPage = false, onNavigateHome }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  // 프로젝트 페이지에서는 앵커 이동 대신 목록으로 돌아간 뒤 스크롤한다
  const handleSectionClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isProjectPage || !onNavigateHome) return;
    event.preventDefault();
    onNavigateHome(href.replace('#', ''));
  };

  useEffect(() => {
    // 섹션이 없는 페이지에서는 스크롤 스파이가 의미 없다
    if (isProjectPage) return;

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
  }, [isProjectPage]);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles['nav-content']}>
          <div className={styles.brand}>
            <a
              href="#home"
              className={styles['brand-link']}
              onClick={(e) => handleSectionClick(e, '#home')}
            >
              {BRAND_NAME}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className={styles['desktop-nav']}>
            <div className={styles['nav-links']}>
              {NAV_ITEMS.map((item) => {
                // 프로젝트 페이지에서는 활성 섹션 표시를 비운다
                const isActive = !isProjectPage && activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleSectionClick(e, item.href)}
                    className={`${styles['nav-link']} ${isActive ? styles['nav-link-active'] : ''}`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
            <div className={styles.divider}></div>
            <a
              href={BLOG_URL}
              className={styles['blog-link']}
              aria-label="Tech Blog"
            >
              <BookOpen size={18} />
              <span>Tech Blog</span>
            </a>
            <PdfDownloadButton className={styles['download-btn']} />
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['github-link']}
              aria-label="GitHub Repository"
            >
              <Github size={18} />
            </a>
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
                onClick={(e) => {
                  handleSectionClick(e, item.href);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
            <div className={styles['mobile-divider']}></div>
            <a
              href={BLOG_URL}
              className={styles['mobile-blog-link']}
              onClick={() => setIsOpen(false)}
            >
              <BookOpen size={18} />
              Tech Blog
            </a>
            <PdfDownloadButton
              className={styles['mobile-download-btn']}
              showLabel
              onClick={() => setIsOpen(false)}
            />
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['mobile-github-link']}
              onClick={() => setIsOpen(false)}
            >
              <Github size={18} />
              GitHub Repo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
