import { Navigation } from '@/components/layout/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Achievements } from '@/components/sections/Achievements';
import { Experience } from '@/components/sections/Experience';
import { Blog } from '@/components/sections/Blog';
import { Contact } from '@/components/sections/Contact';
import { ThemeProvider } from '@/contexts/ThemeContext';
import styles from './App.module.css';

export default function App() {
  return (
    <ThemeProvider>
      <div className={styles.app}>
        <Navigation />
        <Hero />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <Blog />
        <Contact />
      </div>
    </ThemeProvider>
  );
}
