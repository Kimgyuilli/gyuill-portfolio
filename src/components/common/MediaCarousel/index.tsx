import { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { MediaItem } from '@/types';
import { ImageWithFallback } from '../ImageWithFallback';
import { VideoPlayer } from './VideoPlayer';
import styles from './MediaCarousel.module.css';

interface MediaCarouselProps {
  media: MediaItem[];
  title: string;
}

// 이미지 프리로드 함수
function preloadImage(src: string): void {
  const img = new Image();
  img.src = src;
}

export function MediaCarousel({ media, title }: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const showNavigation = media.length > 1;

  // 프리로드할 인접 인덱스 계산 (현재 ±2)
  const adjacentIndices = useMemo(() => {
    const indices = new Set<number>();
    for (let offset = -2; offset <= 2; offset++) {
      const idx = (currentIndex + offset + media.length) % media.length;
      indices.add(idx);
    }
    return indices;
  }, [currentIndex, media.length]);

  // 인접 이미지 프리로드
  useEffect(() => {
    adjacentIndices.forEach((idx) => {
      const item = media[idx];
      if (item.type === 'image') {
        preloadImage(item.src);
      }
    });
  }, [adjacentIndices, media]);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentMedia = media[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.mediaContainer}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={styles.slide}
          >
            {currentMedia.type === 'video' ? (
              <VideoPlayer
                src={currentMedia.src}
                poster={currentMedia.poster}
                isActive={true}
              />
            ) : (
              <ImageWithFallback
                src={currentMedia.src}
                alt={currentMedia.alt || title}
                className={styles.image}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {showNavigation && (
        <>
          <button
            onClick={goToPrevious}
            className={`${styles.navButton} ${styles.prevButton}`}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className={`${styles.navButton} ${styles.nextButton}`}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          <div className={styles.indicators}>
            {media.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
