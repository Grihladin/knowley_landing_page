"use client";
import Image from "next/image";
import "client-only";
import FeatureCard from "./FeatureCard";
import BenefitCard from "./BenefitCard";
import AccessibleButton from "./AccessibleButton";
import WaitlistForm from "./WaitlistForm";


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
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow" id="main-content" role="main">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-background to-gray-light">
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
                AI-Powered L&D Solution
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Match Talent to Learning in Minutes
              </h1>
              <p className="text-xl text-gray-dark">
                Knowley cuts qualification upgrade course selection time from weeks to 
                days with AI-powered talent matching that integrates with your existing systems.
              </p>
              <div className="pt-4">
                <ul className="space-y-2" aria-label="Key benefits list">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Speeds up course selection by up to 90%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>No replacement of existing systems required</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Perfect matches for both employees and business needs</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                  href="https://calendly.com/knowleyde" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium inline-block text-center"
                >
                  Schedule Demo
                </a>
                <button className="border border-gray px-6 py-3 rounded-lg hover:bg-gray-light transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Learn more about Knowley">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="relative w-full aspect-video bg-gradient-to-tr from-primary-dark via-primary to-secondary rounded-lg shadow-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <iframe 
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/LDU_Txk06tM?autoplay=0&rel=0&showinfo=0&modestbranding=1"
                    title="Crab Rave Video - Knowley Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    aria-label="Demo video: How Knowley works"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-gray-light" aria-labelledby="features-heading">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="features-heading" className="text-3xl md:text-4xl font-bold mb-6">Powerful AI-Driven Features</h2>
              <p className="text-gray-dark text-lg">
                Our intelligent platform uses advanced algorithms to match employees with 
                the perfect learning opportunities, saving time and maximizing development impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                title="AI Matching Algorithm"
                description="Our proprietary AI analyzes employee skills, learning history, and career goals to recommend the most relevant courses and development opportunities."
                items={["Skills gap analysis", "Learning style compatibility", "Business need alignment"]}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                }
              />
              
              <FeatureCard 
                title="Seamless Integration"
                description="Connect Knowley with your existing HR, LMS, and talent management systems without replacing what already works. We enhance, not replace."
                items={["API-based connectivity", "Fast implementation", "No disruption to workflows"]}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                }
              />
              
              <FeatureCard 
                title="Data-Driven Insights"
                description="Gain valuable insights into your L&D program effectiveness with comprehensive analytics and reporting that highlight ROI and skills progression."
                items={["Customizable dashboards", "Engagement metrics", "Skills development tracking"]}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                }
              />
            </div>
            
            <div className="mt-16 text-center">
              <button className="bg-primary/10 text-primary px-6 py-3 rounded-lg hover:bg-primary/20 transition-colors font-medium inline-flex items-center gap-2">
                <span>Explore All Features</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section id="integration" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="relative bg-white p-6 rounded-xl shadow-lg">
                  <div className="absolute -top-3 -left-3 bg-primary text-white text-xs font-bold py-1 px-3 rounded-full">
                    NO REPLACEMENT NEEDED
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="border border-gray rounded-lg p-4 bg-gray-light flex items-center justify-center h-24">
                      <div className="text-center">
                        <div className="text-xs text-gray-dark mb-1">Your Existing</div>
                        <div className="font-bold">HR System</div>
                      </div>
                    </div>
                    <div className="border border-gray rounded-lg p-4 bg-gray-light flex items-center justify-center h-24">
                      <div className="text-center">
                        <div className="text-xs text-gray-dark mb-1">Your Existing</div>
                        <div className="font-bold">LMS</div>
                      </div>
                    </div>
                    <div className="border border-gray rounded-lg p-4 bg-gray-light flex items-center justify-center h-24">
                      <div className="text-center">
                        <div className="text-xs text-gray-dark mb-1">Your Existing</div>
                        <div className="font-bold">Course Catalog</div>
                      </div>
                    </div>
                    <div className="border border-gray rounded-lg p-4 bg-gray-light flex items-center justify-center h-24">
                      <div className="text-center">
                        <div className="text-xs text-gray-dark mb-1">Your Existing</div>
                        <div className="font-bold">Talent System</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mb-6">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-lg text-center">
                    <div className="font-bold text-xl mb-2">Knowley AI Platform</div>
                    <div className="text-sm opacity-90">Connects with your systems via secure APIs</div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Seamless Integration, 
                  <span className="text-primary"> Zero Disruption</span>
                </h2>
                <p className="text-gray-dark">
                  Knowley is designed to work alongside your existing infrastructure, 
                  not replace it. Our platform connects to your current systems through 
                  secure APIs, enhancing their capabilities without any radical changes.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="bg-success/10 rounded-full p-2 text-success">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Quick Implementation</h3>
                      <p className="text-sm text-gray-dark">
                        Typically deployed within days, not months, with minimal IT resources required
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="bg-success/10 rounded-full p-2 text-success">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Secure Data Exchange</h3>
                      <p className="text-sm text-gray-dark">
                        Enterprise-grade security with data encryption and compliance with industry standards
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="bg-success/10 rounded-full p-2 text-success">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Flexible Connectivity</h3>
                      <p className="text-sm text-gray-dark">
                        Supports various integration methods including REST APIs, SCIM, and SSO
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 px-4 bg-gray-light">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Knowley?</h2>
              <p className="text-gray-dark text-lg">
                Our AI-powered platform delivers tangible benefits for both your business and employees,
                creating a more effective talent development ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BenefitCard 
                title="Time & Cost Savings"
                benefits={[
                  { label: "90% faster matching", description: "Reduce course selection time from weeks to just days with AI-powered recommendations" },
                  { label: "Lower training costs", description: "Eliminate wasted spending on mismatched courses with precise AI recommendations" },
                  { label: "Reduced admin overhead", description: "Automate the course matching process, freeing up L&D staff for strategic initiatives" },
                ]}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              />
              <BenefitCard 
                title="Enhanced Outcomes"
                benefits={[
                  { label: "Higher completion rates", description: "Better matched courses lead to 40% higher completion rates and improved learning outcomes" },
                  { label: "Increased employee satisfaction", description: "Personalized learning paths that align with career goals boost engagement and retention" },
                  { label: "Business-aligned skill development", description: "Close skills gaps faster with learning that aligns with both employee and business objectives" },
                ]}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
              />
            </div>
            
          </div>
        </section>

        {/* CTA Section */}
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
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray py-12 px-4" role="contentinfo">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center items-center mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold mb-4 text-primary" aria-label="Knowley Logo">Knowley</div>
              <p className="text-base text-foreground mb-6 max-w-md">
                AI-powered talent management tool matching employees to L&D/courses seamlessly.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://linkedin.com/company/knowleyai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-primary-dark transition-colors bg-primary/5 p-3 rounded-full"
                  aria-label="Visit Knowley LinkedIn page"
                  title="LinkedIn"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-7 w-7 linkedin-icon linkedin-pulse" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-dark mb-4 md:mb-0">© 2025 Knowley. All rights reserved.</p>
            <a 
              href="mailto:info@knowley.ai" 
              className="text-base text-gray-dark hover:text-primary transition-colors"
            >
              info@knowley.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
