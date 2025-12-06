import { X, Github, ExternalLink, Calendar, Users, Briefcase } from 'lucide-react';
import { useEffect } from 'react';
import type { Project } from '@/types';
import { ImageWithFallback } from '../ImageWithFallback';
import { TechStackSection } from './TechStackSection';
import { ProjectDetails } from './ProjectDetails';
import styles from './styles.module.css';

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
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        {/* 닫기 버튼 */}
        <button onClick={onClose} className={styles['close-button']} aria-label="Close modal">
          <X size={24} />
        </button>

        {/* 헤더 이미지 */}
        <div className={styles['image-container']}>
          <ImageWithFallback src={project.image} alt={project.title} className={styles.image} />
        </div>

        {/* 컨텐츠 */}
        <div className={styles.content}>
          {/* 제목과 카테고리 */}
          <div className={styles.header}>
            <h2 className={styles.title}>{project.title}</h2>
            <span className={styles.category}>{project.category}</span>
          </div>

          {/* 프로젝트 정보 */}
          {hasProjectInfo && (
            <div className={styles['info-grid']}>
              {project.duration && (
                <div className={styles['info-item']}>
                  <Calendar size={16} />
                  <span>{project.duration}</span>
                </div>
              )}
              {project.teamSize && (
                <div className={styles['info-item']}>
                  <Users size={16} />
                  <span>{project.teamSize}</span>
                </div>
              )}
              {project.role && (
                <div className={styles['info-item']}>
                  <Briefcase size={16} />
                  <span>{project.role}</span>
                </div>
              )}
            </div>
          )}

          {/* 기술 스택 태그 */}
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          {/* 프로젝트 상세 정보 */}
          <ProjectDetails project={project} />

          {/* 기술 스택 섹션 */}
          <TechStackSection techStack={project.techStack} />

          {/* 액션 버튼 */}
          <div className={styles.actions}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['action-button']}
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['action-button']}
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
