import { useRef, useEffect } from 'react';
import styles from './MediaCarousel.module.css';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  isActive: boolean;
}

export function VideoPlayer({ src, poster, isActive }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isActive) {
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked by browser
      });
    } else {
      videoRef.current.pause();
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className={styles.video}
      controls
      loop
      muted
      playsInline
    />
  );
}
