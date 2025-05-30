"use client";
import React from 'react';
import Image from 'next/image';
import { useYouTubePlayer } from '@/app/utils/useYouTubePlayer';

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
  const { playerRef, videoActivated, ytPlayer, handlePlayVideo } = useYouTubePlayer({ videoId });

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
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${ytPlayer.current ? 'opacity-100' : 'opacity-0'}`}>
            <div ref={playerRef} className="w-full h-full rounded-xl" />
          </div>
        )}
      </div>
    </div>
  );
}
