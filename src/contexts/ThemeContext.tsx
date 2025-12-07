import { createContext, useContext, useEffect, useState, ReactNode, useMemo } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    return stored || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Check if View Transitions API is supported
    const supportsViewTransitions = 'startViewTransition' in document;

    if (!prefersReducedMotion && supportsViewTransitions && document.startViewTransition) {
      // Use View Transitions API for smooth cross-fade
      document.startViewTransition(() => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
      });
    } else if (!prefersReducedMotion) {
      // Fallback: Use CSS transition class
      document.documentElement.classList.add('theme-transition');
      setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

      // Remove transition class after animation completes
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
      }, 1000);
    } else {
      // No animation for users who prefer reduced motion
      setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
