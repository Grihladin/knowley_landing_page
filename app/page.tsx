"use client";
import Image from "next/image";
import "client-only";
import FeatureCard from "./FeatureCard";
import BenefitCard from "./BenefitCard";
import AccessibleButton from "./AccessibleButton";
import WaitlistForm from "./WaitlistForm";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import IntegrationSection from "./IntegrationSection";
import BenefitsSection from "./BenefitsSection";
import CTASection from "./CTASection";
import FooterSection from "./FooterSection";
import TeamSection from "./TeamSection";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-gray/20" role="banner">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="text-2xl font-bold text-primary mb-2 sm:mb-0" aria-label="Knowley Home">Knowley</div>
            <nav className="flex space-x-4 sm:space-x-8 mx-auto text-sm sm:text-base" aria-label="Main navigation">
              <a href="#features" className="hover:text-primary transition-colors" aria-label="Features section">Features</a>
              <a href="#integration" className="hover:text-primary transition-colors" aria-label="Integration section">Integration</a>
              <a href="#benefits" className="hover:text-primary transition-colors" aria-label="Benefits section">Benefits</a>
              <a href="#team" className="hover:text-primary transition-colors" aria-label="Team section">Team</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow" id="main-content" role="main">
        {/* Hero Section */}
        <HeroSection />
        {/* Features Section */}
        <FeaturesSection />
        {/* Integration Section */}
        <IntegrationSection />
        {/* Benefits Section */}
        <BenefitsSection />
        {/* Team Section */}
        <TeamSection />
        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
