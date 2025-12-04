import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NAV_ITEMS, BRAND_NAME } from '@/constants/navigation';
import { useTheme } from '@/contexts/ThemeContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-emerald-600 dark:text-emerald-400 font-bold text-xl hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors">
              {BRAND_NAME}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-2 max-md:hidden">
            <div className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10'
                        : 'text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
            <div className="w-px h-6 bg-slate-300 dark:bg-slate-700 mx-2"></div>
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors p-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors rounded-lg"
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
