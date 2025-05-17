// IntegrationSection.tsx
"use client";

export default function IntegrationSection() {
  return (
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
  );
}
