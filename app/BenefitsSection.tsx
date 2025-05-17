// BenefitsSection.tsx
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BenefitCard from "./BenefitCard";
import { benefitSectionVariants, fadeInUp } from "./utils/animations";

export default function BenefitsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="benefits" className="py-20 px-4 bg-gray-light">
      <motion.div
        ref={ref}
        variants={benefitSectionVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto max-w-6xl"
      >
        <motion.div 
          variants={benefitSectionVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Why Choose Knowley?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-gray-dark text-lg"
          >
            Our AI-powered platform delivers tangible benefits for both your business and employees,
            creating a more effective talent development ecosystem.
          </motion.p>
        </motion.div>
        <motion.div 
          variants={benefitSectionVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
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
              <svg xmlns="http://www.w3.org/2000/svg"            className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            colorClass="bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
