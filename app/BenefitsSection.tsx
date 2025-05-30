"use client";
import React from "react";
import BenefitCard from "./BenefitCard";

export default function BenefitsSection() {
  // Section ref and animation code were removed as they were unused

  return (
    <section id="benefits" className="py-20 px-4 bg-gray-light">
      <div
        className="container mx-auto max-w-6xl"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Knowley?
          </h2>
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
              { label: "Higher completion rates", description: "Better matched courses lead to higher completion rates and improved learning outcomes" },
              { label: "Business-aligned skill development", description: "Close skills gaps faster with learning that aligns with both employee and business objectives" },
            ]}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            colorClass="bg-primary"
          />
        </div>
      </div>
    </section>
  );
}
