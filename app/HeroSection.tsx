// HeroSection.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  heroContainerVariants,
  heroTextVariants,
  heroTagVariants,
  heroListItemVariants,
  heroButtonVariants,
  heroImageVariants,
} from "./utils/animations";

export default function HeroSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-gray-light overflow-hidden">
      <motion.div 
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12"
      >
        <motion.div 
          variants={heroContainerVariants}
          className="w-full md:w-1/2 space-y-6"
        >
          <motion.div
            variants={heroTagVariants}
            className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2"
          >
            AI-Powered L&D Solution
          </motion.div>
          <motion.h1
            variants={heroTextVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            Match Talent to Learning in Minutes
          </motion.h1>
          <motion.p
            variants={heroTextVariants}
            className="text-xl text-gray-dark"
          >
            Knowley cuts qualification upgrade course selection time from weeks to 
            days with AI-powered talent matching that integrates with your existing systems.
          </motion.p>
          <motion.div 
            variants={heroContainerVariants}
            className="pt-4"
          >
            <ul className="space-y-2" aria-label="Key benefits list">
              {["Speeds up course selection by up to 90%",
                "No replacement of existing systems required",
                "Perfect matches for both employees and business needs"].map((benefit, index) => (
                <motion.li
                  key={index}
                  variants={heroListItemVariants}
                  className="flex items-center gap-2"
                >
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            variants={heroContainerVariants}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <motion.a
              href="https://calendly.com/knowleyde"
              target="_blank"
              rel="noopener noreferrer"
              variants={heroButtonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium inline-block text-center"
            >
              Schedule Demo
            </motion.a>
            <motion.button
              variants={heroButtonVariants}
              whileHover="hover"
              whileTap="tap" 
              className="border border-gray px-6 py-3 rounded-lg hover:bg-gray-light transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Learn more about Knowley"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={heroImageVariants}
          className="w-full md:w-1/2 mt-8 md:mt-0"
        >
          <div className="relative w-full aspect-video bg-gradient-to-tr from-primary-dark via-primary to-secondary rounded-lg shadow-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <iframe 
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/LDU_Txk06tM?autoplay=0&rel=0&showinfo=0&modestbranding=1"
                title="Crab Rave Video - Knowley Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                aria-label="Demo video: How Knowley works"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
