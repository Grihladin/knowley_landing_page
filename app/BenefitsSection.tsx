"use client";
import React from "react";

// Define SVG icons as components or inline
const ClockIcon = () => (
  <div className="relative flex items-center justify-center w-16 h-16">
    {/* Outer circle - layer 1 */}
    <div className="absolute w-full h-full rounded-full bg-primary/10"></div>
    {/* Middle circle - layer 2 */}
    <div className="absolute w-12 h-12 rounded-full bg-primary/20"></div>
    {/* Inner icon */}
    <svg xmlns="http://www.w3.org/2000/svg" className="relative h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </div>
);

const TrendingUpIcon = () => (
  <div className="relative flex items-center justify-center w-16 h-16">
    {/* Outer circle - layer 1 */}
    <div className="absolute w-full h-full rounded-full bg-primary/10"></div>
    {/* Middle circle - layer 2 */}
    <div className="absolute w-12 h-12 rounded-full bg-primary/20"></div>
    {/* Inner icon */}
    <svg xmlns="http://www.w3.org/2000/svg" className="relative h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  </div>
);

const CheckIcon = () => (
  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3 flex-shrink-0">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  </div>
);

const benefitCategories = [
  {
    id: "time-cost",
    categoryTitle: "Time & Cost Savings",
    IconComponent: ClockIcon,
    benefits: [
      { label: "90% faster matching", description: "Reduce course selection time from weeks to just days with AI-powered recommendations." },
      { label: "Lower training costs", description: "Eliminate wasted spending on mismatched courses with precise AI recommendations." },
    ]
  },
  {
    id: "outcomes",
    categoryTitle: "Enhanced Outcomes",
    IconComponent: TrendingUpIcon,
    benefits: [
      { label: "Higher completion rates", description: "Better matched courses lead to higher completion rates and improved learning outcomes." },
      { label: "Business-aligned skill development", description: "Close skills gaps faster with learning that aligns with both employee and business objectives." },
    ]
  }
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 px-4 from-background via-gray-light to-background bg-gradient-to-br">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-darker">
            Why Choose Knowley?
          </h2>
          <p className="text-gray-dark text-lg">
            Our AI-powered platform delivers tangible benefits for both your business and employees,
            creating a more effective talent development ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {benefitCategories.map((category) => (
            <div key={category.id} className="flex flex-col items-center text-center p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-xl border border-primary/20">
              <div className="mb-6">
                <category.IconComponent />
              </div>
              <h3 className="text-2xl font-semibold text-gray-darker mb-6">{category.categoryTitle}</h3>
              <ul className="space-y-5 text-left w-full">
                {category.benefits.map((benefit, index) => (
                  <li 
                    key={index} 
                    className="flex items-start p-4 bg-white/80 rounded-lg shadow-md border border-gray-200/80"
                  >
                    <CheckIcon />
                    <div>
                      <h4 className="font-medium text-gray-darker">{benefit.label}</h4>
                      <p className="text-gray-600 text-sm mt-1">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
