'use client';

import { useRef, useEffect, useState } from 'react';

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  priority?: boolean;
}

/**
 * Optimized Video Component with lazy loading and performance optimizations
 *
 * Features:
 * - Lazy loading with Intersection Observer
 * - Preload control for better performance
 * - Poster image support for faster initial paint
 * - Priority mode for above-the-fold videos
 */
export default function OptimizedVideo({
  src,
  poster,
  className = '',
  autoPlay = false,
  loop = false,
  muted = true,
  playsInline = true,
  controls = false,
  preload = 'metadata',
  priority = false,
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Skip intersection observer for priority videos
    if (priority) {
      setIsVisible(true);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '200px', // Start loading 200px before entering viewport
        threshold: 0,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  // Handle video load and autoplay
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVisible) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
      if (autoPlay && muted) {
        video.play().catch(() => {
          // Autoplay was prevented, that's okay
        });
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [isVisible, autoPlay, muted]);

  return (
    <video
      ref={videoRef}
      src={isVisible ? src : undefined}
      poster={poster}
      className={`${className} ${!isLoaded && !poster ? 'bg-gray-900' : ''}`}
      autoPlay={autoPlay && isVisible}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      controls={controls}
      preload={priority ? 'auto' : preload}
    />
  );
}
