"use client";
import React, { useState } from "react";
import WaitlistForm from "./WaitlistForm";
import ContactForm from "./ContactForm";

export default function CTASection() {
  const [showContactForm, setShowContactForm] = useState(false);
  
  const toggleContactForm = () => {
    setShowContactForm(prev => !prev);
  };

  return (
    <section className="py-12 sm:py-20 mt-10 sm:mt-16 px-4 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
      >
        <div
          className="absolute top-0 left-0 w-48 h-48 rounded-full bg-white blur-3xl"
        />
        <div
          className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl"
        />
      </div>
      <div
        className="container mx-auto max-w-4xl text-center relative z-10 px-4 sm:px-6 text-white"
      >
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 w-full px-4 sm:px-0 max-w-md mx-auto">
          <a
            href="https://calendly.com/knowleyde"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg text-center"
          >
            Schedule a Demo
          </a>
          <button
            onClick={toggleContactForm}
            className="border-2 border-white bg-transparent px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg text-center"
          >
            Contact Us
          </button>
        </div>
        <div className="flex flex-col space-y-6 max-w-xl mx-auto w-full px-4 sm:px-0">
          <div
            className={`
              bg-white/20 rounded-xl w-full overflow-hidden
              transition-all duration-300 ease-in-out
              ${showContactForm ? 'max-h-[1000px]' : 'max-h-0'}
            `}
            aria-hidden={!showContactForm}
          >
            <div className={`
              p-4 sm:p-6
              transition-opacity duration-300 ease-in-out
              ${showContactForm ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
            `}>
              {showContactForm && <ContactForm />}
            </div>
          </div>
          
          <div className="bg-white/10 rounded-xl p-4 sm:p-6 w-full text-white">
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
