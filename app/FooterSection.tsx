"use client";
import Image from "next/image"; // Added import for Image component

export default function FooterSection() {
  return (
    <footer className="bg-white border-t border-gray py-12 px-4" role="contentinfo">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center items-center mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center text-2xl font-bold mb-4 text-primary" aria-label="Knowley Logo">
              <Image src="/knowley_transparent_logo.svg" alt="Knowley Logo" width={50} height={50} className="-mr-2" />
              Knowley
            </div>
            <p className="text-base text-foreground mb-6 max-w-md">
              AI-powered talent management tool matching employees to L&D/courses seamlessly.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://linkedin.com/company/knowleyai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary bg-primary/5 p-3 rounded-lg inline-flex items-center justify-center"
                aria-label="Visit Knowley LinkedIn page"
                title="LinkedIn"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-7 w-7" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-dark mb-4 md:mb-0">© 2025 Knowley. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a 
              href="mailto:info@knowley.de" 
              className="text-base text-gray-dark hover:text-primary"
            >
              info@knowley.de
            </a>
            <a
              href="https://github.com/Grihladin/knowley_landing_page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-gray-dark hover:text-primary flex items-center gap-1"
              aria-label="View GitHub repository"
              title="GitHub Repository"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.092-.647.35-1.089.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.421-.012 2.751 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
        <div className="w-full text-center mt-4 text-sm text-gray-500">
          If you want to suggest improvements, <a href="https://github.com/Grihladin/knowley_landing_page/issues" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">open an issue or suggestion here</a>.
        </div>
      </div>
    </footer>
  );
}
