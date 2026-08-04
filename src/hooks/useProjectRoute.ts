import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { projects } from '@/data/projects';
import type { Project } from '@/types';

const PROJECT_QUERY_PARAM = 'project';

/**
 * 프로젝트 상세를 별도 페이지로 보여주기 위한 라우팅.
 *
 * 빌드 결과가 정적 파일로 서빙되므로(`/portfolio/` 하위) 경로형 URL 대신
 * `?project=<slug>` 쿼리 파라미터를 쓴다. 어떤 상세 링크를 직접 열어도
 * 실제 요청 경로는 언제나 `index.html` 하나뿐이라 새로고침·공유가 안전하다.
 */
function readSlug(): string | null {
  return new URLSearchParams(window.location.search).get(PROJECT_QUERY_PARAM);
}

export function useProjectRoute() {
  const [slug, setSlug] = useState<string | null>(() => readSlug());
  // 목록으로 돌아간 뒤 스크롤할 섹션. 섹션은 이 렌더 이후에야 마운트된다.
  const pendingScrollRef = useRef<string | null>(null);

  // 뒤로/앞으로 가기 대응
  useEffect(() => {
    const syncFromUrl = () => setSlug(readSlug());
    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, []);

  // 섹션이 실제로 마운트된 뒤에 스크롤한다
  useEffect(() => {
    if (slug !== null) return;
    const targetId = pendingScrollRef.current;
    if (!targetId) return;
    pendingScrollRef.current = null;
    document.getElementById(targetId)?.scrollIntoView();
  }, [slug]);

  const activeProject = useMemo(
    () => (slug ? (projects.find((project) => project.slug === slug) ?? null) : null),
    [slug],
  );

  const openProject = useCallback((project: Project) => {
    const url = new URL(window.location.href);
    url.searchParams.set(PROJECT_QUERY_PARAM, project.slug);
    url.hash = '';
    window.history.pushState({}, '', url);
    setSlug(project.slug);
    window.scrollTo({ top: 0 });
  }, []);

  /** 목록으로 돌아간다. sectionId를 주면 해당 섹션 위치로 스크롤한다. */
  const goHome = useCallback((sectionId?: string) => {
    const url = new URL(window.location.href);
    url.searchParams.delete(PROJECT_QUERY_PARAM);
    url.hash = sectionId ? `#${sectionId}` : '';
    window.history.pushState({}, '', url);

    pendingScrollRef.current = sectionId ?? null;
    if (!sectionId) window.scrollTo({ top: 0 });
    setSlug(null);
  }, []);

  return { activeProject, openProject, goHome };
}
