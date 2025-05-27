"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { handleSmoothScroll } from "./utils/smoothScroll";
import { YouTubePlayer, YouTubeEvent } from './utils/youtube-types';

export default function VideoComponent() {
  const [videoActivated, setVideoActivated] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const ytPlayer = useRef<YouTubePlayer | null>(null);

  // This function loads the YouTube API script and initializes the player
  const loadYouTubeAndPlay = () => {
    if (videoActivated) {
      // If already activated, just play the video
      ytPlayer.current?.playVideo();
      return;
    }

    setVideoActivated(true);

    // Function to initialize the player once API is loaded
    const initializePlayer = () => {
      if (playerRef.current && !ytPlayer.current && window.YT) {
        ytPlayer.current = new window.YT.Player(playerRef.current, {
          videoId: "LDU_Txk06tM",
          playerVars: {
            autoplay: 1, // Auto play once loaded
            rel: 0,
            showinfo: 0,
            modestbranding: 1,
            playsinline: 1,
            enablejsapi: 1,
            origin: window.location.origin,
          },
          events: {
            onReady: (event: YouTubeEvent) => {
              event.target.playVideo(); // Ensure video plays when ready
            },
            onStateChange: () => {
              // 1 = playing, 2 = paused, 0 = ended
            },
          },
        });
      }
    };

    // Load YouTube IFrame API if not already loaded
    if (typeof window !== 'undefined') {
      if (!window.YT) {
        // Define callback before loading script
        window.onYouTubeIframeAPIReady = initializePlayer;
        
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        tag.async = true;
        tag.defer = true;
        document.head.appendChild(tag);
      } 
      // If API is already loaded
      else if (window.YT && window.YT.Player) {
        initializePlayer();
      }
    }
  };

  return (
        <div className="py-20 px-4 w-full mt-8 md:mt-0">
          <div className="container relative w-full aspect-video rounded-2xl shadow-2xl overflow-hidden border-2 border-primary/30 bg-white/10 backdrop-blur-md">
            {/* YouTube Video Facade - shown only until video is activated for the first time */}
            {!videoActivated && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/5 backdrop-blur-sm">
                {/* Video thumbnail with proper width/height for CLS prevention */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="https://i.ytimg.com/vi/LDU_Txk06tM/hqdefault.jpg"
                    alt="Video preview"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={true}
                    className="object-cover object-center"
                  />
                </div>
                
                {/* Play button */}
                <button 
                  className="relative flex items-center justify-center cursor-pointer z-20 bg-transparent border-0 group focus:outline-none focus:ring-0 active:outline-none active:ring-0 hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out"
                  onClick={loadYouTubeAndPlay}
                  aria-label="Play video"
                >
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                    <circle cx="40" cy="40" r="38" fill="#fff" fillOpacity="1"/>
                    <circle cx="40" cy="40" r="38" stroke="#6366F1" strokeWidth="4"/>
                    <polygon points="34,28 58,40 34,52" fill="#6366F1"/>
                  </svg>
                </button>
              </div>
            )}
            
            {/* YouTube iframe - rendered when activated, and stays visible */}
            {videoActivated && (
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100`}>
                <div ref={playerRef} className="w-full h-full rounded-2xl" />
              </div>
            )}
          </div>
        </div>
  );
}