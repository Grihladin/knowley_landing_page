// CTASection.tsx
"use client";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import WaitlistForm from "./WaitlistForm";
import ContactForm from "./ContactForm";
import {
  ctaSectionVariants,
  ctaTagVariants,
  ctaHeadingVariants,
  buttonVariants,
  formContainerVariants
} from "./utils/animations";

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showContactForm, setShowContactForm] = useState(false);
  
  const toggleContactForm = () => {
    setShowContactForm(prev => !prev);
  };

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="waitlist" className="py-20 mt-16 px-4 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-48 h-48 rounded-full bg-white blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl"
        />
      </motion.div>
      <motion.div
        ref={ref}
        variants={ctaSectionVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto max-w-4xl text-center relative z-10"
      >
        <motion.div
          variants={ctaTagVariants}
          className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
        >
          Start Your AI-Powered L&D Journey
        </motion.div>
        <motion.h2
          variants={ctaHeadingVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          Ready to Transform Your Talent Development?
        </motion.h2>
        <motion.p
          variants={ctaHeadingVariants}
          className="text-xl mb-10 opacity-90 max-w-2xl mx-auto"
        >
          Join forward-thinking companies that are cutting course selection time 
          from weeks to days while delivering better learning outcomes.
        </motion.p>
        <motion.div
          variants={ctaSectionVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            href="https://calendly.com/knowleyde"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-light transition-colors font-medium text-lg"
          >
            Schedule a Demo
          </motion.a>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={toggleContactForm}
            className="border-2 border-white bg-transparent px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium text-lg"
          >
            Contact Us
          </motion.button>
        </motion.div>
        {/* Form Container - Stacked layout where both forms can be visible */}
        <div className="flex flex-col space-y-6 max-w-xl mx-auto">
          {/* Contact Form - Shows at the top when active */}
          <div className="min-h-0 overflow-hidden" style={{ 
                maxHeight: showContactForm ? '1000px' : '0px',
                marginBottom: showContactForm ? 16 : 0,
                transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), margin 0.3s ease-in-out'
              }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ 
                opacity: showContactForm ? 1 : 0,
                scale: showContactForm ? 1 : 0.9,
                y: showContactForm ? 0 : -10,
              }}
              transition={{
                opacity: { duration: 0.2 },
                scale: { duration: 0.3 },
                y: { duration: 0.3 }
              }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full origin-top"
            >
              <ContactForm />
            </motion.div>
          </div>
          
          {/* Waitlist Form - Always present */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full"
            layout
            layoutId="waitlist-form"
            transition={{ 
              type: "tween",
              duration: 0.3,
              ease: "easeOut"
            }}
          >
            <WaitlistForm />
            <motion.p
              variants={ctaHeadingVariants}
              className="text-xs mt-3 opacity-70"
            >
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
