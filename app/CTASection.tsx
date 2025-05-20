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

  // Optimize scroll animation for better performance
  const { scrollYProgress } = useScroll({
    // Use layout effect: false for better performance
    layoutEffect: false
  });
  // Apply a more efficient transform with reduced precision for better performance
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="waitlist" className="py-12 sm:py-20 mt-10 sm:mt-16 px-4 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10 will-change-transform"
        style={{ y: backgroundY }}
      >
        <div
          className="absolute top-0 left-0 w-48 h-48 rounded-full bg-white blur-3xl"
        />
        <div
          className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl"
        />
      </motion.div>
      <motion.div
        ref={ref}
        variants={ctaSectionVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto max-w-4xl text-center relative z-10 px-4 sm:px-6"
      >
        <motion.div
          variants={ctaTagVariants}
          className="inline-block px-3 sm:px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
        >
          Start Your AI-Powered L&D Journey
        </motion.div>
        <motion.h2
          variants={ctaHeadingVariants}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
        >
          Ready to Transform Your Talent Development?
        </motion.h2>
        <motion.p
          variants={ctaHeadingVariants}
          className="text-base sm:text-xl mb-8 sm:mb-10 opacity-90 max-w-2xl mx-auto"
        >
          Join forward-thinking companies that are cutting course selection time 
          from weeks to days while delivering better learning outcomes.
        </motion.p>
        <motion.div
          variants={ctaSectionVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 w-full px-4 sm:px-0 max-w-md mx-auto"
        >
          <motion.a
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            href="https://calendly.com/knowleyde"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-light transition-colors font-medium text-base sm:text-lg text-center"
          >
            Schedule a Demo
          </motion.a>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={toggleContactForm}
            className="border-2 border-white bg-transparent px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white/10 transition-colors font-medium text-base sm:text-lg text-center"
          >
            Contact Us
          </motion.button>
        </motion.div>
        {/* Form Container - Using layout prop for smoother transitions */}
        <motion.div 
          layout
          className="flex flex-col space-y-6 max-w-xl mx-auto w-full px-4 sm:px-0"
        >
          {/* Contact Form - Improved animation */}
          <AnimatePresence mode="popLayout">
            {showContactForm && (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  type: "tween",
                  duration: 0.3,
                  ease: "easeOut"
                }}
                className="bg-white/10 rounded-xl p-4 sm:p-6 w-full overflow-hidden will-change-transform"
              >
                <ContactForm />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Waitlist Form - Added layout prop for smooth transitions */}
          <motion.div
            layout
            className="bg-white/10 rounded-xl p-4 sm:p-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
        </motion.div>
      </motion.div>
    </section>
  );
}
