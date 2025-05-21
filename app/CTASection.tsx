"use client";
import React, { useState, useEffect, useRef } from "react";
import WaitlistForm from "./WaitlistForm";
import ContactForm from "./ContactForm";

export default function CTASection() {
  const [showContactForm, setShowContactForm] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  const toggleContactForm = () => {
    setShowContactForm(prev => !prev);
  };

  return (
    <section className="py-12 sm:py-20 mt-10 sm:mt-16 px-4 bg-gradient-to-br from-primary via-primary to-primary-dark relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ willChange: 'transform' }}
      >
        <div
          className="absolute top-0 left-0 w-48 h-48 rounded-full bg-white blur-3xl"
        />
        <div
          className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl"
        />
      </div>
      <div
        ref={sectionRef}
        className="container mx-auto max-w-4xl text-center relative z-10 px-4 sm:px-6 section-fade-in"
      >
        <div className="inline-block px-3 sm:px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 fade-in-up">
          Start Your AI-Powered L&D Journey
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 fade-in-up">
          Ready to Transform Your Talent Development?
        </h2>
        <p className="text-base sm:text-xl mb-8 sm:mb-10 opacity-90 max-w-2xl mx-auto fade-in-up">
          Join forward-thinking companies that are cutting course selection time 
          from weeks to days while delivering better learning outcomes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 w-full px-4 sm:px-0 max-w-md mx-auto">
          <a
            href="https://calendly.com/knowleyde"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-light transition-colors font-medium text-base sm:text-lg text-center button-hover"
          >
            Schedule a Demo
          </a>
          <button
            onClick={toggleContactForm}
            className="border-2 border-white bg-transparent px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white/10 transition-colors font-medium text-base sm:text-lg text-center button-hover"
          >
            Contact Us
          </button>
        </div>
        <div className="flex flex-col space-y-6 max-w-xl mx-auto w-full px-4 sm:px-0">
          {showContactForm && (
            <div className="bg-white/10 rounded-xl p-4 sm:p-6 w-full overflow-hidden fade-in">
              <ContactForm />
            </div>
          )}
          
          <div className="bg-white/10 rounded-xl p-4 sm:p-6 w-full fade-in">
            <WaitlistForm />
            <p className="text-xs mt-3 opacity-70">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
