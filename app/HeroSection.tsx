"use client";
import React from "react";
import { handleSmoothScroll } from "./utils/smoothScroll";
import { Macbook } from "./LaptopMockup";
import Image from "next/image";
export default function HeroSection() {

  return (
    <section className="pt-4 pb-20 sm:pt-12 sm:pb-20 px-4 from-background via-gray-light to-background bg-gradient-to-br">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 space-y-6">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
            AI-Powered L&D Solution
          </div>
         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Match Talent to<br/>
            Learning in<br/>
            Minutes
          </h1>
          <p className="text-xl text-gray-dark">
            Making corporate learning quick, precise and hassle free.
          </p>
          <div className="pt-4">
            <ul className="space-y-2" aria-label="Key benefits list">
              {[
                "Speeds up course selection by up to 95%",
                "No replacement of existing systems required",
                "Matches learning materials to employee and business needs",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="https://calendly.com/knowleyde"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-dark text-white px-6 py-3 rounded-lg hover:bg-primary font-medium inline-block text-center hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out"
            >
              Schedule Demo
            </a>
            <a
              href="#cta-section"
              onClick={(e) => handleSmoothScroll(e, "#cta-section")}
              className="border border-gray px-6 py-3 rounded-lg hover:bg-gray-light font-medium text-center hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out"
              aria-label="Join our waitlist"
            >
              Waitlist
            </a>
          </div>
        </div>
        
        {/* Right Side - 3D Laptop Mockup */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          {/* <LaptopMockup className="w-full max-w-2xl" /> */}
          <Macbook/>
        </div>
      </div>
    </section>
  );
}
