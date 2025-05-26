"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { handleSmoothScroll } from "./utils/smoothScroll";
import { YouTubePlayer, YouTubeEvent } from "./utils/youtube-types";

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
    if (typeof window !== "undefined") {
      if (!window.YT) {
        // Define callback before loading script
        window.onYouTubeIframeAPIReady = initializePlayer;

        const tag = document.createElement("script");
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
    <section className="py-20 px-4 from-background via-gray-light to-background bg-gradient-to-br">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 space-y-6">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
            AI-Powered L&D Solution
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Personalized
            <br />
            Learning Paths in 
            <br />
            Minutes
          </h1>
          <p className="text-xl text-gray-dark">
            Making corporate learning quick, precise and hassle free.
          </p>
          <div className="pt-4">
            <ul className="space-y-2" aria-label="Key benefits list">
              {[
                "Speeds up course selection by up to 95%",
                "No replacement of existing systems required",
                "Matches learning materials to employee and business needs",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
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
              className="bg-primary-dark text-white px-6 py-3 rounded-lg hover:bg-primary font-medium inline-block text-center"
            >
              Schedule Demo
            </a>
            <a
              href="#cta-section"
              onClick={(e) => handleSmoothScroll(e, "#cta-section")}
              className="border border-gray px-6 py-3 rounded-lg hover:bg-gray-light font-medium text-center"
              aria-label="Join our waitlist"
            >
              Waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
