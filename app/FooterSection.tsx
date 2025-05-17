// FooterSection.tsx
"use client";

export default function FooterSection() {
  return (
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
  );
}
