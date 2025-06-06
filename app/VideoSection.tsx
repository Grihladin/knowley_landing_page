"use client";
import React from "react";
import YouTubeVideoPlayer from "./YouTubeVideoPlayer";

export default function VideoSection() {
  return (
    <section id="video" className="pt-8 pb-20 px-4 bg-gradient-to-b from-background to-gray-light/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8">
          {/* Section heading */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-dark">
              See Knowley in Action
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how Knowley transforms learning material selection from a weeks-long process into minutes of intelligent matching.
            </p>
          </div>

          {/* Video container */}
          <div className="max-w-4xl mx-auto">
            <YouTubeVideoPlayer
              videoId="LDU_Txk06tM"
              thumbnailSrc="https://i.ytimg.com/vi/LDU_Txk06tM/hqdefault.jpg"
              thumbnailAlt="Knowley demo video preview"
              thumbnailSizes="(max-width: 768px) 100vw, 80vw"
              thumbnailPriority={false}
              outerContainerClassName="w-full"
              videoWrapperClassName="relative w-full aspect-video rounded-2xl shadow-2xl overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-white/10 to-gray-light/20 backdrop-blur-md hover:border-primary/40 transition-all duration-300"
              playButtonSize={{ width: 100, height: 100 }}
            />
          </div>

          {/* Optional call-to-action below video */}
          <div className="pt-8">
            <p className="text-gray-600 mb-6">
              Ready to experience the future of learning and development?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a
                href="https://calendly.com/knowleyde"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark font-medium text-center hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out"
              >
                Schedule Your Demo
              </a>
              <a
                href="#cta-section"
                className="border border-primary/30 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-primary/10 hover:border-primary font-medium text-center hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
