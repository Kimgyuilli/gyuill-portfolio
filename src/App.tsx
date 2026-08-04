import { useEffect, useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { DEFAULT_PROJECT_FILTER } from '@/constants/projectCategories';
import { Achievements } from '@/components/sections/Achievements';
import { Experience } from '@/components/sections/Experience';
import { Blog } from '@/components/sections/Blog';
import { Contact } from '@/components/sections/Contact';
import { ProjectDetailPage } from '@/components/common/ProjectDetail';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { useProjectRoute } from '@/hooks/useProjectRoute';
import { initAnalytics } from '@/lib/analytics';
import styles from './App.module.css';

export default function App() {
  const { activeProject, openProject, goHome } = useProjectRoute();
  // 상세 페이지에서 목록으로 돌아와도 보고 있던 필터가 유지되도록 여기서 보관한다
  const [projectFilter, setProjectFilter] = useState(DEFAULT_PROJECT_FILTER);

  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <ThemeProvider>
      <div className={styles.app}>
        <Navigation isProjectPage={!!activeProject} onNavigateHome={goHome} />
        {activeProject ? (
          <ProjectDetailPage project={activeProject} onBack={() => goHome('projects')} />
        ) : (
          <>
            <Hero />
            <Skills />
            <Projects
              onOpenProject={openProject}
              filter={projectFilter}
              onFilterChange={setProjectFilter}
            />
            <Achievements />
            <Experience />
            <Blog />
            <Contact />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}
