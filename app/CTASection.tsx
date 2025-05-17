// CTASection.tsx
"use client";
import WaitlistForm from "./WaitlistForm";

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl"></div>
      </div>
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
          Start Your AI-Powered L&D Journey
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Transform Your Talent Development?
        </h2>
        <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
          Join forward-thinking companies that are cutting course selection time 
          from weeks to days while delivering better learning outcomes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="https://calendly.com/knowleyde" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-light transition-colors font-medium text-lg flex items-center justify-center gap-2"
          >
            <span>Schedule a Demo</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <button className="border-2 border-white bg-transparent px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium text-lg">
            Contact Sales
          </button>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-xl mx-auto">
          <WaitlistForm />
          <p className="text-xs mt-3 opacity-70">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}
