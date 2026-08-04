import { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Calendar, Users, Briefcase } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import type { Project, MediaItem } from '@/types';
import { ImageWithFallback } from '../ImageWithFallback';
import { MediaCarousel } from '../MediaCarousel';
import { TechStackSection } from './TechStackSection';
import { ProjectDetails } from './ProjectDetails';
import pageStyles from './Page.module.css';
import contentStyles from './Content.module.css';

interface ProjectDetailPageProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetailPage({ project, onBack }: ProjectDetailPageProps) {
  // 프로젝트 페이지로 들어오면 문서 제목을 맞추고, 벗어날 때 되돌린다
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${project.title} · ${previousTitle}`;
    return () => {
      document.title = previousTitle;
    };
  }, [project.title]);

  const hasProjectInfo = project.duration || project.teamSize || project.role;

  // 미디어 배열: project.media가 있으면 사용하고, 없으면 대표 이미지 하나로 구성
  const mediaItems: MediaItem[] = project.media?.length
    ? project.media
    : [{ type: 'image' as const, src: project.image, alt: project.title }];

  const hasCarousel = mediaItems.length > 1 || mediaItems.some((item) => item.type === 'video');

  return (
    <main className={pageStyles.page}>
      <div className={pageStyles.container}>
        <button onClick={onBack} className={pageStyles['back-button']}>
          <ArrowLeft size={16} />
          <span>프로젝트 목록</span>
        </button>

        <article className={pageStyles.card}>
          {/* 헤더 미디어 (캐러셀 또는 단일 이미지) */}
          {hasCarousel ? (
            <MediaCarousel media={mediaItems} title={project.title} />
          ) : (
            <div className={pageStyles['image-container']}>
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className={pageStyles.image}
              />
            </div>
          )}

          <div className={contentStyles.content}>
            {/* 제목과 카테고리 */}
            <div className={contentStyles.header}>
              <h1 className={contentStyles.title}>{project.title}</h1>
              <div className={contentStyles['category-list']}>
                {project.categories.map((category) => (
                  <span key={category} className={contentStyles.category}>
                    {category}
                  </span>
                ))}
              </div>
            </div>

            {/* 프로젝트 정보 */}
            {hasProjectInfo && (
              <div className={contentStyles['info-grid']}>
                {project.duration && (
                  <div className={contentStyles['info-item']}>
                    <Calendar size={16} />
                    <span>{project.duration}</span>
                  </div>
                )}
                {project.teamSize && (
                  <div className={contentStyles['info-item']}>
                    <Users size={16} />
                    <span>{project.teamSize}</span>
                  </div>
                )}
                {project.role && (
                  <div className={contentStyles['info-item']}>
                    <Briefcase size={16} />
                    <span>{project.role}</span>
                  </div>
                )}
              </div>
            )}

            {/* 기술 스택 태그 */}
            <div className={contentStyles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={contentStyles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            {/* 프로젝트 상세 정보 */}
            <ProjectDetails project={project} />

            {/* 기술 스택 섹션 */}
            <TechStackSection techStack={project.techStack} />

            {/* 액션 버튼 */}
            <div className={contentStyles.actions}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={contentStyles['action-button']}
              >
                <SiGithub size={20} />
                <span>GitHub</span>
              </a>
              {project.demo && project.demo !== '#' && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contentStyles['action-button']}
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
