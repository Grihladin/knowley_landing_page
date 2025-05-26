"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { handleSmoothScroll } from "./utils/smoothScroll";
import { YouTubePlayer, YouTubeEvent } from './utils/youtube-types';

export default function HeroSection() {
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
    <section className="pt-10 pb-20 sm:py-20 px-4 from-background via-gray-light to-background bg-gradient-to-br">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 space-y-6">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
            AI-Powered L&D Solution
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Match Talent to<br/>
            Learning in<br/>
            Minutes
          </h1>
          <p className="text-xl text-gray-dark">
            Knowley cuts qualification upgrade course selection time from weeks to 
            days with AI-powered talent matching that integrates with your existing systems.
          </p>
          <div className="pt-4">
            <ul className="space-y-2" aria-label="Key benefits list">
              {["Speeds up course selection by up to 90%",
                "No replacement of existing systems required",
                "Perfect matches for both employees and business needs"].map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2"
                >
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="https://calendly.com/knowleyde"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-dark text-white px-6 py-3 rounded-lg hover:bg-primary font-medium inline-block text-center hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out"
            >
              Schedule Demo
            </a>
            <a
              href="#cta-section"
              onClick={(e) => handleSmoothScroll(e, "#cta-section")}
              className="border border-gray px-6 py-3 rounded-lg hover:bg-gray-light font-medium text-center hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out"
              aria-label="Join our waitlist"
            >
              Waitlist
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="relative w-full aspect-video rounded-2xl shadow-2xl overflow-hidden border-2 border-primary/30 bg-white/10 backdrop-blur-md">
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
                  className="relative flex items-center justify-center cursor-pointer z-20 bg-transparent border-0 group focus:outline-none focus:ring-0 active:outline-none active:ring-0"
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
      </div>
    </section>
  );
}
