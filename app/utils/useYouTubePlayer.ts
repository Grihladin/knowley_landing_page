"use client";
import { useState, useRef, useCallback, useEffect } from 'react';

// --- BEGIN INLINED TYPES from youtube-types.ts ---
// Simplified YouTube IFrame API types
export interface YouTubeEvent {
  data: number; // 1 = playing, 2 = paused, 0 = ended
  target: YouTubePlayer;
}

export interface YouTubePlayer {
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

interface UseYouTubePlayerOptions {
  videoId: string;
}

export function useYouTubePlayer({ videoId }: UseYouTubePlayerOptions) {
  const [videoActivated, setVideoActivated] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false); // New state for player readiness
  const playerRef = useRef<HTMLDivElement>(null);
  const ytPlayer = useRef<YouTubePlayer | null>(null);

  const initializePlayer = useCallback(() => {
    if (playerRef.current && window.YT && window.YT.Player) {
      // Destroy any existing player instance before creating a new one
      if (ytPlayer.current && typeof ytPlayer.current.destroy === 'function') {
        ytPlayer.current.destroy();
        ytPlayer.current = null;
      }

      setIsPlayerReady(false); // Reset player ready state

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
          wmode: 'opaque', // Kept from previous change
        },
        events: {
          onReady: (event: YouTubeEvent) => {
            event.target.playVideo();
            setIsPlayerReady(true); // Set player as ready
          },
          onError: (event: any) => { // Added onError handler
            console.error('YouTube Player Error:', event.data);
            setIsPlayerReady(false); // Player is not ready or encountered an error
          },
        },
      });
    }
  }, [videoId]); // playerRef is stable

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
      // If already activated and player is ready, explicitly play.
      // Useful if custom controls for pause/play are added later.
      ytPlayer.current.playVideo();
    }
  }, [videoActivated, isPlayerReady]); // Added isPlayerReady dependency

  useEffect(() => {
    if (videoActivated) {
      loadYouTubeAPI();
    }

    // Cleanup function
    return () => {
      if (ytPlayer.current && typeof ytPlayer.current.destroy === 'function') {
        ytPlayer.current.destroy();
        ytPlayer.current = null;
      }
      setIsPlayerReady(false); // Reset ready state on cleanup
    };
  }, [videoActivated, videoId, loadYouTubeAPI]); // Added videoId for robust cleanup/re-init

  // Removed the old separate cleanup useEffect as its logic is merged above

  return {
    playerRef,
    videoActivated,
    isPlayerReady, // Return new state
    handlePlayVideo,
    // ytPlayer is not directly needed by the component anymore for visibility
  };
}
