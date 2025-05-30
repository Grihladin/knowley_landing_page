"use client";
import React from "react";
import Image from "next/image";
import { handleSmoothScroll } from "./utils/smoothScroll";
import YouTubeVideoPlayer from "./YouTubeVideoPlayer";

export default function MobileHeroSection() {
  return (
    <section className="pt-4 pb-16 sm:pt-8 sm:pb-16 px-4 from-background via-gray-light to-background bg-gradient-to-br">
      <div className="container mx-auto max-w-4xl flex flex-col items-center gap-8">
        <div className="w-full text-center space-y-4">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-1">
            AI-Powered L&D Solution
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Match Talent to<br/>
            Learning in Minutes
          </h1>
          <p className="text-lg text-gray-dark px-2">
            Knowley cuts course selection time with AI-powered talent matching.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-4 w-full max-w-xs">
          <a
            href="https://calendly.com/knowleyde"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-dark text-white px-6 py-3 rounded-lg hover:bg-primary font-medium text-center hover:scale-105 hover:shadow-md transition-transform duration-200 ease-in-out text-base"
          >
            Schedule Demo
          </a>
          <a
            href="#cta-section"
            onClick={(e) => handleSmoothScroll(e, "#cta-section")}
            className="border border-gray px-6 py-3 rounded-lg hover:bg-gray-light font-medium text-center hover:scale-105 hover:shadow-md transition-transform duration-200 ease-in-out text-base"
            aria-label="Join our waitlist"
          >
            Waitlist
          </a>
        </div>

        {/* Video Section - similar to desktop but adapted for mobile layout */}
        <YouTubeVideoPlayer
          videoId="LDU_Txk06tM"
          thumbnailSrc="https://i.ytimg.com/vi/LDU_Txk06tM/hqdefault.jpg"
          thumbnailAlt="Video preview"
          thumbnailSizes="100vw" // Simplified sizes for mobile
          thumbnailPriority={true}
          outerContainerClassName="w-full max-w-md mt-6"
          playButtonSize={{ width: 64, height: 64 }}
        />
        
      </div>
    </section>
  );
}
