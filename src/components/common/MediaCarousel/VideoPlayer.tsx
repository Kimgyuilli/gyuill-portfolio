import { useRef, useEffect } from 'react';
import styles from './MediaCarousel.module.css';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  isActive: boolean;
}

function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export function VideoPlayer({ src, poster, isActive }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const youtubeId = getYouTubeVideoId(src);

  useEffect(() => {
    if (!videoRef.current || youtubeId) return;

    if (isActive) {
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked by browser
      });
    } else {
      videoRef.current.pause();
    }
  }, [isActive, youtubeId]);

  // YouTube embed
  if (youtubeId) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${isActive ? 1 : 0}&mute=1&loop=1&playlist=${youtubeId}`}
        className={styles.video}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      />
    );
  }

  // Local video
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
