import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { projects } from '@/data/projects';
import type { Project } from '@/types';

/** Vite가 보장하는 형식: 항상 '/'로 끝난다. (dev: '/', prod: '/portfolio/') */
const BASE_URL = import.meta.env.BASE_URL;
const PROJECTS_PREFIX = `${BASE_URL}projects/`;
/** 예전에 공유된 쿼리형 링크 호환용 */
const LEGACY_QUERY_PARAM = 'project';

/**
 * 프로젝트 상세를 별도 페이지로 보여주기 위한 라우팅.
 *
 * 정식 URL은 `{base}projects/<slug>/` 경로형이다. 빌드 시 이 경로마다
 * index.html을 실제 파일로 만들어 두기 때문에(vite.config.ts의
 * emit-project-pages) 새로고침과 직접 접속에도 호스트 설정이 필요 없다.
 */
function toSlug(pathname: string, search: string): string | null {
  if (pathname.startsWith(PROJECTS_PREFIX)) {
    const rest = pathname.slice(PROJECTS_PREFIX.length).replace(/\/+$/, '');
    if (rest) return decodeURIComponent(rest);
  }
  return new URLSearchParams(search).get(LEGACY_QUERY_PARAM);
}

function readSlug(): string | null {
  return toSlug(window.location.pathname, window.location.search);
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
    window.history.pushState({}, '', `${PROJECTS_PREFIX}${project.slug}/`);
    setSlug(project.slug);
    window.scrollTo({ top: 0 });
  }, []);

  /** 목록으로 돌아간다. sectionId를 주면 해당 섹션 위치로 스크롤한다. */
  const goHome = useCallback((sectionId?: string) => {
    window.history.pushState({}, '', `${BASE_URL}${sectionId ? `#${sectionId}` : ''}`);

    pendingScrollRef.current = sectionId ?? null;
    if (!sectionId) window.scrollTo({ top: 0 });
    setSlug(null);
  }, []);

  return { activeProject, openProject, goHome };
}
