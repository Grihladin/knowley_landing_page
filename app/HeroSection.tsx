"use client";
import { motion } from "framer-motion";
import {
  heroContainerVariants,
  heroTextVariants,
  heroTagVariants,
  heroListItemVariants,
  buttonVariants,
  heroImageVariants,
} from "./utils/animations";
import React, { useEffect, useRef, useState } from "react";
import { handleSmoothScroll } from "./utils/smoothScroll";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const ytPlayer = useRef<any>(null);

  useEffect(() => {
    // Load YouTube IFrame API if not already loaded
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
    (window as any).onYouTubeIframeAPIReady = () => {
      if (playerRef.current && !ytPlayer.current) {
        ytPlayer.current = new (window as any).YT.Player(playerRef.current, {
          videoId: "LDU_Txk06tM",
          playerVars: {
            autoplay: 0,
            rel: 0,
            showinfo: 0,
            modestbranding: 1,
          },
          events: {
            onStateChange: (event: any) => {
              if (event.data === 1) setIsPlaying(true); // 1 = playing
              else if (event.data === 2 || event.data === 0) setIsPlaying(false); // 2 = paused, 0 = ended
            },
          },
        });
      }
    };
    // If API is already loaded
    if ((window as any).YT && (window as any).YT.Player && playerRef.current && !ytPlayer.current) {
      (window as any).onYouTubeIframeAPIReady();
    }
    // Cleanup
    return () => {
      if (ytPlayer.current && ytPlayer.current.destroy) ytPlayer.current.destroy();
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-gray-light overflow-hidden">
      <motion.div 
        variants={heroContainerVariants} // Main stagger container
        initial="hidden"
        animate="visible"
        className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12"
      >
        {/* Text content block - no longer uses heroContainerVariants itself */}
        <motion.div 
          className="w-full md:w-1/2 space-y-6"
        >
          <motion.div
            variants={heroTagVariants}
            className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2"
          >
            AI-Powered L&D Solution
          </motion.div>
          <motion.h1
            variants={heroTextVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            Match Talent to Learning in Minutes
          </motion.h1>
          <motion.p
            variants={heroTextVariants}
            className="text-xl text-gray-dark"
          >
            Knowley cuts qualification upgrade course selection time from weeks to 
            days with AI-powered talent matching that integrates with your existing systems.
          </motion.p>
          {/* List wrapper - no longer uses heroContainerVariants */}
          <motion.div 
            className="pt-4"
          >
            <ul className="space-y-2" aria-label="Key benefits list">
              {["Speeds up course selection by up to 90%",
                "No replacement of existing systems required",
                "Perfect matches for both employees and business needs"].map((benefit, index) => (
                <motion.li
                  key={index}
                  variants={heroListItemVariants}
                  className="flex items-center gap-2"
                >
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          {/* Buttons wrapper - no longer uses heroContainerVariants */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <motion.a
              href="https://calendly.com/knowleyde"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium inline-block text-center"
            >
              Schedule Demo
            </motion.a>
            <motion.a
              href="#waitlist"
              onClick={(e) => handleSmoothScroll(e, "#waitlist")}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap" 
              className="border border-gray px-6 py-3 rounded-lg hover:bg-gray-light transition-colors font-medium text-center"
              aria-label="Join our waitlist"
            >
              Waitlist
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          variants={heroImageVariants} // Image block uses its own specific animation
          className="w-full md:w-1/2 mt-8 md:mt-0"
        >
          <div className="relative w-full aspect-video rounded-2xl shadow-2xl overflow-hidden border-2 border-primary/30 bg-white/10 backdrop-blur-md">
            {/* Play button overlay, hidden when video is playing */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center cursor-pointer z-10" onClick={() => {
                if (ytPlayer.current) ytPlayer.current.playVideo();
              }}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                  <circle cx="40" cy="40" r="38" fill="#fff" fillOpacity="1"/>
                  <circle cx="40" cy="40" r="38" stroke="#6366F1" strokeWidth="4"/>
                  <polygon points="34,28 58,40 34,52" fill="#6366F1"/>
                </svg>
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center">
              <div ref={playerRef} className="w-full h-full rounded-2xl" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
