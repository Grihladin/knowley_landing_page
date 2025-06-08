"use client";
import React from "react";
import { handleSmoothScroll } from "./utils/smoothScroll";
import GradientText from "./GradientText";

export default function HeroSection() {
  return (
    <section className="pt-4 pb-12 px-4 relative overflow-hidden"> {/* Increased pb-8 to pb-12 */}
      {/* Background decorative elements */}
      {/* Changed background gradient to match VideoSection */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-gray-light/30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-3 sm:space-y-6">
          {/* Badge */}
          <div className="inline-block px-1.5 sm:px-4 py-0.5 sm:py-2 bg-primary/10 text-primary rounded-full text-[10px] sm:text-sm font-medium border border-primary/20">
            <span className="flex items-center gap-0.5 sm:gap-2">
              <svg className="w-3 h-3 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27l-5.18 2.73l.99-5.81l-4.24-4.13l5.83-.85L12 4.02l2.6 5.19l5.83.85l-4.24 4.13l.99 5.81z" stroke="currentColor" strokeLinejoin="round" strokeWidth="3"/>
              </svg>
              AI-Powered L&D Solution
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none sm:leading-tight py-1">
            <GradientText
              colors={["#6A0DAD", "#4C4AE6", "#2E86FF", "#5771FF", "#6A0DAD"]}
              animationSpeed={8}
            >
              Match Talent to
            </GradientText>
            <br />
            <GradientText
              colors={["#4C4AE6", "#2E86FF", "#5771FF", "#6A0DAD", "#4C4AE6"]}
              animationSpeed={6}
            >
              Learning in Minutes
            </GradientText>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-xl md:text-2xl text-gray-dark max-w-2xl mx-auto leading-relaxed px-2">
            Knowley cuts learning material selection time from weeks to hours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 justify-center max-w-xs sm:max-w-md mx-auto">
            <a
              href="https://calendly.com/knowleyde"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:from-primary-dark hover:to-primary font-medium sm:font-semibold inline-block text-center hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out text-base"
            >
              Schedule Meeting
            </a>
            <a
              href="#cta-section"
              onClick={(e) => handleSmoothScroll(e, "#cta-section")}
              className="border border-gray sm:border-2 sm:border-primary/30 bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:bg-primary/10 hover:border-primary font-medium sm:font-semibold text-center hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out text-base"
              aria-label="Join our waitlist"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
