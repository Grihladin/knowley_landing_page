"use client";
import { useState, useRef, useCallback, useEffect } from 'react';
import type { YouTubePlayer, YouTubeEvent } from './youtube-types';

interface UseYouTubePlayerOptions {
  videoId: string;
}

export function useYouTubePlayer({ videoId }: UseYouTubePlayerOptions) {
  const [videoActivated, setVideoActivated] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const ytPlayer = useRef<YouTubePlayer | null>(null);

  const initializePlayer = useCallback(() => {
    if (playerRef.current && !ytPlayer.current && window.YT && window.YT.Player) {
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
        },
        events: {
          onReady: (event: YouTubeEvent) => {
            event.target.playVideo();
          },
        },
      });
    }
  }, [videoId]);

  const loadYouTubeAPI = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (!window.YT || !window.YT.Player) {
        // If API is not loaded, set up the callback and load the script
        const existingCallback = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
          if (existingCallback) {
            // @ts-ignore
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
          // If script tag exists but API might not be fully ready on our player instance
           initializePlayer();
        }
      } else {
        // If API is already loaded, initialize the player directly
        initializePlayer();
      }
    }
  }, [initializePlayer]);

  const handlePlayVideo = useCallback(() => {
    if (!videoActivated) {
      setVideoActivated(true);
      // API loading and player initialization will be triggered by useEffect
    } else if (ytPlayer.current && typeof ytPlayer.current.playVideo === 'function') {
      ytPlayer.current.playVideo();
    }
  }, [videoActivated]);

  useEffect(() => {
    if (videoActivated) {
      loadYouTubeAPI();
    }
  }, [videoActivated, loadYouTubeAPI]);

  // Cleanup effect
  useEffect(() => {
    const playerInstance = ytPlayer.current;
    return () => {
      if (playerInstance && typeof playerInstance.destroy === 'function') {
        playerInstance.destroy();
      }
      ytPlayer.current = null;
      // It's tricky to clean up window.onYouTubeIframeAPIReady if multiple players might use it.
      // For simplicity, we're not removing it here, but in a more complex app,
      // a more robust queueing or callback management system for onYouTubeIframeAPIReady might be needed.
    };
  }, []);

  return {
    playerRef,
    videoActivated,
    ytPlayer,
    handlePlayVideo,
  };
}
