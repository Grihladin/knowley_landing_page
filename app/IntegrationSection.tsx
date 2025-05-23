"use client";
import React from "react";

export default function IntegrationSection() {
  return (
    <section
      id="integration"
      className="py-20 px-4 bg-gray-light"
      aria-labelledby="integration-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="integration-heading"
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Seamless Integration,{" "}
            <span className="text-primary">Zero Disruption</span>
          </h2>
          <p className="text-gray-dark text-lg">
            Knowley is designed to work alongside your existing infrastructure,
            enhancing capabilities without disrupting your workflow.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative bg-white p-6 rounded-xl shadow-lg">
              <div className="absolute -top-3 -left-3 bg-primary-dark text-white text-xs font-bold py-1 px-3 rounded-full">
                PLUG & PLAY
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {["HR System", "LMS", "Course Catalog", "Talent System"].map(
                  (system, index) => (
                    <div
                      key={index}
                      className="border border-gray rounded-lg p-4 bg-gray-light/50 flex items-center justify-center h-24"
                    >
                      <div className="text-center">
                        <div className="text-xs text-gray-dark mb-1">
                          Your Existing
                        </div>
                        <div className="font-bold">{system}</div>
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="flex justify-center mb-6">
                <div className="bg-primary-dark text-white rounded-full w-10 h-10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
              </div>
              <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg text-center">
                <div className="font-bold text-xl mb-2">Knowley AI Platform</div>
                <div className="text-sm opacity-90">
                  Connects with your systems via secure APIs
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              {[
                {
                  title: "Quick Implementation",
                  description:
                    "Typically deployed within days, not months, with minimal IT resources required",
                },
                {
                  title: "Secure Data Exchange",
                  description:
                    "Enterprise-grade security with data encryption and compliance with industry standards",
                },
                {
                  title: "Flexible Connectivity",
                  description:
                    "Supports various integration methods including REST APIs, SCIM, and SSO",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="bg-primary/20 rounded-full p-2 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-dark">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
