"use client";
import React from "react";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  // Section ref and animation code were removed as they were unused

  return (
    <section id="features" className="py-6 sm:py-12 px-2 sm:px-4 bg-gray-light" aria-labelledby="features-heading">
      <div
        className="container mx-auto max-w-full sm:max-w-6xl"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            id="features-heading" 
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Powerful AI-Driven Features
          </h2>
          <p className="text-gray-dark text-lg">
            Our intelligent platform uses advanced algorithms to match employees with 
            the perfect learning opportunities, saving time and maximizing development impact.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCard 
            title="AI Matching Algorithm"
            description="Our AI analyzes employee skills and learning history to recommend the most relevant courses and development opportunities."
            items={["Skills gap analysis", "Learning style compatibility", "Business need alignment"]}
            icon={
              <div className="relative flex items-center justify-center w-16 h-16">
                <div className="absolute w-full h-full rounded-full bg-primary/10"></div>
                <div className="absolute w-12 h-12 rounded-full bg-primary/20"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="relative h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
            }
          />
          <FeatureCard 
            title="Seamless Integration"
            description="Connect Knowley with your existing HR, LMS, and talent management systems without replacing what already works. We enhance, not replace."
            items={["API-based connectivity", "Fast implementation", "No disruption to workflows"]}
            icon={
              <div className="relative flex items-center justify-center w-16 h-16">
                <div className="absolute w-full h-full rounded-full bg-primary/10"></div>
                <div className="absolute w-12 h-12 rounded-full bg-primary/20"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="relative h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
            }
          />
          <FeatureCard 
            title="Learning Analytics & Feedback"
            description="Gain valuable insights into your L&D program effectiveness with comprehensive analytics and reporting that highlight ROI and skills progression."
            items={["Customizable dashboards", "Engagement metrics", "Skills development tracking"]}
            icon={
              <div className="relative flex items-center justify-center w-16 h-16">
                <div className="absolute w-full h-full rounded-full bg-primary/10"></div>
                <div className="absolute w-12 h-12 rounded-full bg-primary/20"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="relative h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
