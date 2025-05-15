import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-gray/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Knowley</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#integration" className="hover:text-primary transition-colors">Integration</a>
            <a href="#benefits" className="hover:text-primary transition-colors">Benefits</a>
          </nav>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
            Get Started
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-background to-gray-light">
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
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
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Speeds up course selection by up to 90%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>No replacement of existing systems required</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Perfect matches for both employees and business needs</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium">
                  Schedule Demo
                </button>
                <button className="border border-gray px-6 py-3 rounded-lg hover:bg-gray-light transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full aspect-video bg-gradient-to-tr from-primary-dark via-primary to-secondary rounded-lg shadow-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-6 bg-white/90 backdrop-blur-sm rounded-lg max-w-xs text-center space-y-3">
                    <div className="flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="font-bold text-primary">AI-Driven Matching</h3>
                    <p className="text-sm text-gray-dark">Our algorithms find the perfect course matches based on employee skills and business objectives</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-lg p-3">
                  <div className="text-white text-xs font-medium">Employee Profile</div>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md rounded-lg p-3">
                  <div className="text-white text-xs font-medium">Course Match: 98%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-gray-light">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful AI-Driven Features</h2>
              <p className="text-gray-dark text-lg">
                Our intelligent platform uses advanced algorithms to match employees with 
                the perfect learning opportunities, saving time and maximizing development impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">AI Matching Algorithm</h3>
                <p className="text-gray-dark mb-4">
                  Our proprietary AI analyzes employee skills, learning history, and career goals 
                  to recommend the most relevant courses and development opportunities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-success">•</div>
                    <span className="text-sm">Skills gap analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-success">•</div>
                    <span className="text-sm">Learning style compatibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-success">•</div>
                    <span className="text-sm">Business need alignment</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Seamless Integration</h3>
                <p className="text-gray-dark mb-4">
                  Connect Knowley with your existing HR, LMS, and talent management systems without 
                  replacing what already works. We enhance, not replace.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-success">•</div>
                    <span className="text-sm">API-based connectivity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-success">•</div>
                    <span className="text-sm">Fast implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-success">•</div>
                    <span className="text-sm">No disruption to workflows</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Data-Driven Insights</h3>
                <p className="text-gray-dark mb-4">
                  Gain valuable insights into your L&D program effectiveness with comprehensive 
                  analytics and reporting that highlight ROI and skills progression.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-success">•</div>
                    <span className="text-sm">Customizable dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-success">•</div>
                    <span className="text-sm">Engagement metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-success">•</div>
                    <span className="text-sm">Skills development tracking</span>
                  </li>
                </ul>
              </div>
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
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="h-2 bg-primary"></div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-primary/10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Time & Cost Savings</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-success font-bold">✓</div>
                      <div>
                        <span className="font-medium">90% faster matching</span>
                        <p className="text-sm text-gray-dark mt-1">
                          Reduce course selection time from weeks to just days with AI-powered recommendations
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-success font-bold">✓</div>
                      <div>
                        <span className="font-medium">Lower training costs</span>
                        <p className="text-sm text-gray-dark mt-1">
                          Eliminate wasted spending on mismatched courses with precise AI recommendations
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-success font-bold">✓</div>
                      <div>
                        <span className="font-medium">Reduced admin overhead</span>
                        <p className="text-sm text-gray-dark mt-1">
                          Automate the course matching process, freeing up L&D staff for strategic initiatives
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="h-2 bg-secondary"></div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-secondary/10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Enhanced Outcomes</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-success font-bold">✓</div>
                      <div>
                        <span className="font-medium">Higher completion rates</span>
                        <p className="text-sm text-gray-dark mt-1">
                          Better matched courses lead to 40% higher completion rates and improved learning outcomes
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-success font-bold">✓</div>
                      <div>
                        <span className="font-medium">Increased employee satisfaction</span>
                        <p className="text-sm text-gray-dark mt-1">
                          Personalized learning paths that align with career goals boost engagement and retention
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-success font-bold">✓</div>
                      <div>
                        <span className="font-medium">Business-aligned skill development</span>
                        <p className="text-sm text-gray-dark mt-1">
                          Close skills gaps faster with learning that aligns with both employee and business objectives
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-16 bg-white p-8 rounded-xl shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-3/5 space-y-4">
                  <div className="text-sm font-medium text-primary">CASE STUDY</div>
                  <h3 className="text-2xl font-bold">
                    "Knowley reduced our L&D matching process from 3 weeks to just 2 days while improving learning outcomes."
                  </h3>
                  <div className="pt-2">
                    <div className="font-medium">Sarah Johnson</div>
                    <div className="text-sm text-gray-dark">Head of Talent Development, Fortune 500 Company</div>
                  </div>
                </div>
                <div className="md:w-2/5">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-primary">85%</div>
                    <div className="text-sm">
                      <div className="font-medium">Time Saved</div>
                      <div className="text-gray-dark">in the L&D matching process</div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray my-4"></div>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-success">32%</div>
                    <div className="text-sm">
                      <div className="font-medium">Increased</div>
                      <div className="text-gray-dark">employee skill development</div>
                    </div>
                  </div>
                </div>
              </div>
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
              <button className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-light transition-colors font-medium text-lg flex items-center justify-center gap-2">
                <span>Schedule a Demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="border-2 border-white bg-transparent px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium text-lg">
                Contact Sales
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-xl mx-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your work email" 
                  className="flex-grow px-4 py-3 rounded-lg text-gray-dark focus:outline-none focus:ring-2 focus:ring-primary-light"
                />
                <button className="bg-accent text-white px-5 py-3 rounded-lg hover:bg-accent/90 transition-colors font-medium whitespace-nowrap">
                  Join Waitlist
                </button>
              </form>
              <p className="text-xs mt-3 opacity-70">
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-dark text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="text-2xl font-bold mb-4 text-primary">Knowley</div>
              <p className="text-sm opacity-70 mb-4">
                AI-powered talent management tool matching employees to L&D/courses seamlessly.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">Integrations</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">Enterprise</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">Security</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">Case Studies</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">Webinars</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">Help Center</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">Partners</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-70 mb-4 md:mb-0">© 2024 Knowley. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}