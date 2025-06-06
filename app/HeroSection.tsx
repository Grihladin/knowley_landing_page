"use client";
import React from "react";
import { handleSmoothScroll } from "./utils/smoothScroll";
import GradientText from "./GradientText";

export default function HeroSection() {
  return (
    <section className="pt-8 pb-16 px-4 relative overflow-hidden"> {/* Reduced pt-16 to pt-8 */}
      {/* Background decorative elements */}
      {/* Changed background gradient to match VideoSection */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-gray-light/30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-4 sm:space-y-8">
          {/* Badge */}
          <div className="inline-block px-1.5 sm:px-4 py-0.5 sm:py-2 bg-primary/10 text-primary rounded-full text-[10px] sm:text-sm font-medium border border-primary/20">
            <span className="flex items-center gap-0.5 sm:gap-2">
              <svg className="w-2.5 h-2.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              AI-Powered L&D Solution
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-normal py-2">
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
          <p className="text-lg sm:text-xl md:text-2xl text-gray-dark max-w-2xl mx-auto leading-relaxed px-2">
            Knowley cuts learning material selection time from weeks to hours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8 justify-center max-w-xs sm:max-w-md mx-auto">
            <a
              href="https://calendly.com/knowleyde"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:from-primary-dark hover:to-primary font-medium sm:font-semibold inline-block text-center hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out text-base"
            >
              Schedule Demo
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
