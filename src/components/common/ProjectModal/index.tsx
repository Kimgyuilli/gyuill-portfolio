import { X, Github, ExternalLink, Calendar, Users, Briefcase } from 'lucide-react';
import { useEffect } from 'react';
import type { Project } from '@/types';
import { ImageWithFallback } from '../ImageWithFallback';
import { TechStackSection } from './TechStackSection';
import { ProjectDetails } from './ProjectDetails';
import modalStyles from './Modal.module.css';
import contentStyles from './ModalContent.module.css';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // ESC 키로 모달 닫기 & 스크롤 방지
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  // 모달 배경 클릭 시 닫기
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const hasProjectInfo = project.duration || project.teamSize || project.role;

  return (
    <div className={modalStyles.backdrop} onClick={handleBackdropClick}>
      <div className={modalStyles.modal}>
        {/* 닫기 버튼 */}
        <button onClick={onClose} className={modalStyles['close-button']} aria-label="Close modal">
          <X size={24} />
        </button>

        {/* 헤더 이미지 */}
        <div className={modalStyles['image-container']}>
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className={modalStyles.image}
          />
        </div>

        {/* 컨텐츠 */}
        <div className={contentStyles.content}>
          {/* 제목과 카테고리 */}
          <div className={contentStyles.header}>
            <h2 className={contentStyles.title}>{project.title}</h2>
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
              <Github size={20} />
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
      </div>
    </div>
  );
}
