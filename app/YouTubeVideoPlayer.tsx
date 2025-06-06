"use client";
import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';

// --- BEGIN INLINED TYPES from useYouTubePlayer.ts (originally youtube-types.ts) ---
interface YouTubeEvent { // Removed export
  data: number; // 1 = playing, 2 = paused, 0 = ended
  target: YouTubePlayer;
}

interface YouTubePlayer { // Removed export
  playVideo: () => void;
  pauseVideo: () => void;
  stopVideo: () => void;
  destroy: () => void;
}

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement | string,
        options: {
          videoId: string;
          playerVars?: Record<string, string | number | boolean>;
          events?: {
            onReady?: (event: YouTubeEvent) => void;
            onStateChange?: (event: YouTubeEvent) => void;
            [key: string]: ((event: YouTubeEvent) => void) | undefined;
          };
        }
      ) => YouTubePlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}
// --- END INLINED TYPES ---

// --- BEGIN INLINED HOOK LOGIC from useYouTubePlayer.ts ---
interface UseYouTubePlayerOptions {
  videoId: string;
}

function useYouTubePlayer({ videoId }: UseYouTubePlayerOptions) {
  const [videoActivated, setVideoActivated] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const ytPlayer = useRef<YouTubePlayer | null>(null);

  const initializePlayer = useCallback(() => {
    if (playerRef.current && window.YT && window.YT.Player) {
      if (ytPlayer.current && typeof ytPlayer.current.destroy === 'function') {
        ytPlayer.current.destroy();
        ytPlayer.current = null;
      }
      setIsPlayerReady(false);
      ytPlayer.current = new window.YT.Player(playerRef.current, {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          rel: 0,
          showinfo: 0,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1,
          origin: typeof window !== 'undefined' ? window.location.origin : '',
          wmode: 'opaque',
        },
        events: {
          onReady: (event: YouTubeEvent) => {
            event.target.playVideo();
            setIsPlayerReady(true);
          },
          onError: (event: any) => {
            console.error('YouTube Player Error:', event.data);
            setIsPlayerReady(false);
          },
        },
      });
    }
  }, [videoId]);

  const loadYouTubeAPI = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (!window.YT || !window.YT.Player) {
        const existingCallback = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
          if (existingCallback) {
            existingCallback();
          }
          initializePlayer();
        };
        if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
          const tag = document.createElement('script');
          tag.src = "https://www.youtube.com/iframe_api";
          tag.async = true;
          tag.defer = true;
          document.head.appendChild(tag);
        } else if (window.YT && window.YT.Player) {
          initializePlayer();
        }
      } else {
        initializePlayer();
      }
    }
  }, [initializePlayer]);

  const handlePlayVideo = useCallback(() => {
    if (!videoActivated) {
      setVideoActivated(true);
    } else if (ytPlayer.current && typeof ytPlayer.current.playVideo === 'function' && isPlayerReady) {
      ytPlayer.current.playVideo();
    }
  }, [videoActivated, isPlayerReady]);

  useEffect(() => {
    if (videoActivated) {
      loadYouTubeAPI();
    }
    return () => {
      if (ytPlayer.current && typeof ytPlayer.current.destroy === 'function') {
        ytPlayer.current.destroy();
        ytPlayer.current = null;
      }
      setIsPlayerReady(false);
    };
  }, [videoActivated, videoId, loadYouTubeAPI]);

  return {
    playerRef,
    videoActivated,
    isPlayerReady,
    handlePlayVideo,
  };
}
// --- END INLINED HOOK LOGIC ---

interface YouTubeVideoPlayerProps {
  videoId: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
  thumbnailSizes: string;
  thumbnailPriority?: boolean;
  outerContainerClassName?: string;
  videoWrapperClassName?: string;
  playButtonSize?: { width: number; height: number };
}

export default function YouTubeVideoPlayer({
  videoId,
  thumbnailSrc,
  thumbnailAlt,
  thumbnailSizes,
  thumbnailPriority = false,
  outerContainerClassName = "w-full",
  videoWrapperClassName = "relative w-full aspect-video rounded-xl shadow-xl overflow-hidden border-2 border-primary/30 bg-white/10 backdrop-blur-sm",
  playButtonSize = { width: 64, height: 64 }
}: YouTubeVideoPlayerProps) {
  const { playerRef, videoActivated, handlePlayVideo, isPlayerReady } = useYouTubePlayer({ videoId });

  return (
    <div className={outerContainerClassName}>
      <div className={videoWrapperClassName}>
        {!videoActivated && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/5 backdrop-blur-xs">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={thumbnailSrc}
                alt={thumbnailAlt}
                fill
                sizes={thumbnailSizes}
                priority={thumbnailPriority}
                className="object-cover object-center"
              />
            </div>
            <button
              className="relative flex items-center justify-center cursor-pointer z-20 bg-transparent border-0 group focus:outline-none focus:ring-0 active:outline-none active:ring-0 hover:scale-105 transition-transform duration-200 ease-in-out"
              onClick={handlePlayVideo}
              aria-label="Play video"
            >
              <svg width={playButtonSize.width} height={playButtonSize.height} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                <circle cx="40" cy="40" r="38" fill="#fff" fillOpacity="1"/>
                <circle cx="40" cy="40" r="38" stroke="#6366F1" strokeWidth="4"/>
                <polygon points="34,28 58,40 34,52" fill="#6366F1"/>
              </svg>
            </button>
          </div>
        )}
        {videoActivated && (
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlayerReady ? 'opacity-100' : 'opacity-0'}`}>
            <div ref={playerRef} className="w-full h-full rounded-xl" />
          </div>
        )}
      </div>
    </div>
  );
}
