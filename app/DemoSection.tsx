"use client";
import React from "react";
import YouTubeVideoPlayer from "./YouTubeVideoPlayer";

export default function DemoSection() {
  return (
    <section id="demo" className="pt-2 pb-12 px-4 bg-gradient-to-b from-background to-gray-light/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8">
          {/* Video container */}
          <div className="max-w-4xl mx-auto">
            <YouTubeVideoPlayer
              videoId="Qn_o0JOAOMU"
              thumbnailSrc="https://i.ytimg.com/vi/Qn_o0JOAOMU/maxresdefault.jpg"
              thumbnailAlt="Knowley demo video preview"
              thumbnailSizes="(max-width: 768px) 100vw, 80vw"
              thumbnailPriority={false}
              outerContainerClassName="w-full"
              videoWrapperClassName="relative w-full aspect-video rounded-2xl shadow-2xl overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-white/10 to-gray-light/20 backdrop-blur-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
