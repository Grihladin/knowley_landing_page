// CTASection.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WaitlistForm from "./WaitlistForm";
import {
  ctaSectionVariants,
  ctaTagVariants,
  ctaHeadingVariants,
  ctaButtonVariants,
  formContainerVariants
} from "./utils/animations";

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
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
            variants={ctaButtonVariants}
            whileHover="hover"
            whileTap="tap"
            href="https://calendly.com/knowleyde"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-light transition-colors font-medium text-lg flex items-center justify-center gap-2"
          >
            <span>Schedule a Demo</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ x: -5 }}
              animate={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.a>
          <motion.button
            variants={ctaButtonVariants}
            whileHover="hover"
            whileTap="tap"
            className="border-2 border-white bg-transparent px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium text-lg"
          >
            Contact Sales
          </motion.button>
        </motion.div>
        <motion.div
          variants={formContainerVariants}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-xl mx-auto"
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
    </section>
  );
}
