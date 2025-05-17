// IntegrationSection.tsx
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { featureSectionVariants, fadeInUp } from "./utils/animations";

export default function IntegrationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="integration" className="py-20 px-4 bg-gray-light" aria-labelledby="integration-heading">
      <motion.div
        ref={ref}
        variants={featureSectionVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto max-w-6xl"
      >
        <motion.div
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 id="integration-heading" className="text-3xl md:text-4xl font-bold mb-6">
            Seamless Integration,{" "}
            <span className="text-primary">Zero Disruption</span>
          </h2>
          <p className="text-gray-dark text-lg">
            Knowley is designed to work alongside your existing infrastructure,
            enhancing capabilities without disrupting your workflow.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            variants={fadeInUp}
            className="md:w-1/2"
          >
            <div className="relative bg-white p-6 rounded-xl shadow-lg transform transition-all hover:scale-105">
              <div className="absolute -top-3 -left-3 bg-primary text-white text-xs font-bold py-1 px-3 rounded-full">
                PLUG & PLAY
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="border border-gray rounded-lg p-4 bg-gray-light/50 flex items-center justify-center h-24 transition-all hover:border-primary"
                >
                  <div className="text-center">
                    <div className="text-xs text-gray-dark mb-1">Your Existing</div>
                    <div className="font-bold">HR System</div>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="border border-gray rounded-lg p-4 bg-gray-light/50 flex items-center justify-center h-24 transition-all hover:border-primary"
                >
                  <div className="text-center">
                    <div className="text-xs text-gray-dark mb-1">Your Existing</div>
                    <div className="font-bold">LMS</div>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="border border-gray rounded-lg p-4 bg-gray-light/50 flex items-center justify-center h-24 transition-all hover:border-primary"
                >
                  <div className="text-center">
                    <div className="text-xs text-gray-dark mb-1">Your Existing</div>
                    <div className="font-bold">Course Catalog</div>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="border border-gray rounded-lg p-4 bg-gray-light/50 flex items-center justify-center h-24 transition-all hover:border-primary"
                >
                  <div className="text-center">
                    <div className="text-xs text-gray-dark mb-1">Your Existing</div>
                    <div className="font-bold">Talent System</div>
                  </div>
                </motion.div>
              </div>
              <div className="flex justify-center mb-6">
                <motion.div 
                  animate={{ 
                    scale: 1.05
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </motion.div>
              </div>
              <motion.div 
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg text-center"
              >
                <div className="font-bold text-xl mb-2">Knowley AI Platform</div>
                <div className="text-sm opacity-90">Connects with your systems via secure APIs</div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="md:w-1/2 space-y-6"
          >
            <div className="space-y-4">
              {[
                {
                  title: "Quick Implementation",
                  description: "Typically deployed within days, not months, with minimal IT resources required"
                },
                {
                  title: "Secure Data Exchange",
                  description: "Enterprise-grade security with data encryption and compliance with industry standards"
                },
                {
                  title: "Flexible Connectivity",
                  description: "Supports various integration methods including REST APIs, SCIM, and SSO"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="bg-success/10 rounded-full p-2 text-success">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-dark">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
