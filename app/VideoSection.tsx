"use client";
import React from "react";
import YouTubeVideoPlayer from "./YouTubeVideoPlayer";

export default function VideoSection() {
  return (
    <section id="video" className="pt-4 pb-20 px-4 bg-gradient-to-b from-background to-gray-light/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8">
          {/* Video container */}
          <div className="max-w-4xl mx-auto">
            <YouTubeVideoPlayer
              videoId="LDU_Txk06tM"
              thumbnailSrc="https://i.ytimg.com/vi/LDU_Txk06tM/hqdefault.jpg"
              thumbnailAlt="Knowley demo video preview"
              thumbnailSizes="(max-width: 768px) 100vw, 80vw"
              thumbnailPriority={false}
              outerContainerClassName="w-full"
              videoWrapperClassName="relative w-full aspect-video rounded-2xl shadow-2xl overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-white/10 to-gray-light/20 backdrop-blur-md"
              playButtonSize={{ width: 100, height: 100 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
