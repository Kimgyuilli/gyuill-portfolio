import { Navigation } from '@/components/layout/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Achievements } from '@/components/sections/Achievements';
import { Experience } from '@/components/sections/Experience';
import { Blog } from '@/components/sections/Blog';
import { Contact } from '@/components/sections/Contact';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-200">
        <Navigation />
        <Hero />
        <Stats />
        <About />
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
