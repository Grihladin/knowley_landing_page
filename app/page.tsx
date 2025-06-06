"use client";
import "client-only";
import React from 'react'; // Added React import
import Image from "next/image"; // Added import for Image component
import HeroSection from "./HeroSection";
import VideoSection from "./VideoSection";
import FeaturesSection from "./FeaturesSection";
import BenefitsSection from "./BenefitsSection";
import CTASection from "./CTASection";
import FooterSection from "./FooterSection";
import TeamSection from "./TeamSection";
import { handleSmoothScroll } from './utils/smoothScroll';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-gray/20" role="banner">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="flex items-center text-2xl font-bold text-primary mb-2 sm:mb-0" aria-label="Knowley Home">
              <Image src="/knowley_transparent_logo.svg" alt="Knowley Logo" width={50} height={50} className="-mr-2" />
              Knowley
            </div>
            <nav className="flex space-x-4 sm:space-x-8 mx-auto text-sm sm:text-base" aria-label="Main navigation">
              <a href="#video" onClick={(e) => handleSmoothScroll(e, "#video")} className="hover:text-primary" aria-label="Video section">Video</a>
              <a href="#features" onClick={(e) => handleSmoothScroll(e, "#features")} className="hover:text-primary" aria-label="Features section">Features</a>
              <a href="#benefits" onClick={(e) => handleSmoothScroll(e, "#benefits")} className="hover:text-primary" aria-label="Benefits section">Benefits</a>
              <a href="#team" onClick={(e) => handleSmoothScroll(e, "#team")} className="hover:text-primary" aria-label="Team section">Team</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow" id="main-content" role="main">
        <HeroSection />
        <VideoSection />
        <FeaturesSection />
        <BenefitsSection />
        <TeamSection />
        <CTASection />
      </main>

      <FooterSection />
    </div>
  );
}
