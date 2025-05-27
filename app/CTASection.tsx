"use client";
import React, { useState, useRef, useEffect } from "react";
import WaitlistForm from "./WaitlistForm";
import ContactForm from "./ContactForm";

export default function CTASection() {
  const [showContactForm, setShowContactForm] = useState(false);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile device on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 640);
      };
      
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const contactContainerRef = useRef<HTMLDivElement>(null);

  const toggleContactForm = () => {
    // Toggle the form visibility
    setShowContactForm(prev => !prev);
    
    // If opening the form, scroll to it
    if (!showContactForm) {
      if (isMobile) {
        // For mobile, use smooth scrolling with short delay
        setTimeout(() => {
          if (contactContainerRef.current) {
            contactContainerRef.current.scrollIntoView({ 
              behavior: "smooth", // Smooth scrolling for mobile too
              block: "center" // Center the form in the viewport
            });
          }
        }, 50); // Slightly longer delay for mobile to coordinate with fade animation
      } else {
        // For desktop, use smooth animation
        setTimeout(() => {
          if (contactContainerRef.current) {
            contactContainerRef.current.scrollIntoView({ 
              behavior: "smooth", // Smooth scrolling for desktop
              block: "center" // Center the form in the viewport
            });
          }
        }, 100); // Longer delay for desktop
      }
    }
  };

  return (
    <section 
      id="cta-section"
      className="py-12 sm:py-20 mt-10 sm:mt-16 px-4 bg-gradient-to-r from-primary to-secondary relative overflow-hidden transition-all duration-500 ease-in-out"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-white blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white blur-2xl sm:blur-3xl" />
      </div>
      <div className="container mx-auto max-w-4xl text-center relative z-10 px-4 sm:px-6 text-white">
        <div className="inline-block px-3 sm:px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
          Start Your AI-Powered L&D Journey
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          Ready to Transform Your Talent Development?
        </h2>
        <p className="text-base sm:text-xl mb-8 sm:mb-10 opacity-90 max-w-2xl mx-auto">
          Join forward-thinking companies that are cutting course selection time 
          from weeks to days while delivering better learning outcomes.
        </p>
        <div className="flex flex-col space-y-6 max-w-xl mx-auto w-full px-4 sm:px-0 mb-8">
          <div className="bg-white/10 rounded-xl p-4 sm:p-6 w-full text-white">
            <WaitlistForm />
            <p className="text-xs mt-3 opacity-70">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 w-full px-4 sm:px-0 max-w-md mx-auto">
          <a
            href="https://calendly.com/knowleyde"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg text-center hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out"
          >
            Schedule a Demo
          </a>
          <button
            onClick={toggleContactForm}
            className="border-2 border-white bg-transparent px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg text-center hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out"
          >
            Contact Us
          </button>
        </div>
        
        <div 
          className={`max-w-xl mx-auto w-full px-4 sm:px-0 relative ${!isMobile ? 'transition-[margin-bottom] duration-500 ease-in-out' : ''}`}
          ref={contactContainerRef}
          style={!isMobile ? { marginBottom: showContactForm ? '2rem' : '0rem' } : {}}
        >
          {/* Mobile vs Desktop animation handling */}
          {isMobile ? (
            // No animation for mobile, instant show/hide, manages layout space
            <div
              className={`
                mt-4
                overflow-hidden // Ensures content is clipped and space is managed
                ${showContactForm ? 'opacity-100 max-h-[600px]' : 'opacity-0 max-h-0 pointer-events-none'}
              `}
            >
              <div className="bg-white/20 rounded-xl w-full">
                <div className="p-4">
                  <ContactForm />
                </div>
              </div>
            </div>
          ) : (
            // Improved animated version for desktop using transform, opacity, and proper height transitions
            <div
              ref={contactFormRef}
              className={`
                overflow-hidden
                transition-all duration-500 ease-in-out
                ${showContactForm ? 'opacity-100 translate-y-0 max-h-[600px] mb-8' : 'opacity-0 -translate-y-5 max-h-0 mb-0 pointer-events-none'}
              `}
              style={{ willChange: 'transform, opacity, max-height, margin' }}
            >
              <div
                className="bg-white/20 backdrop-blur-sm rounded-xl w-full"
              >
                <div className="p-4 sm:p-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
