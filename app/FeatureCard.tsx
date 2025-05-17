// Reusable FeatureCard component for landing page features
import React from "react";
import { motion } from "framer-motion";
import { featureCardVariants, featureIconVariants, featureItemVariants } from "./utils/animations";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items?: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, items }) => (
  <motion.div
    variants={featureCardVariants}
    whileHover="hover"
    className="bg-white p-4 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow w-full max-w-full"
  >
    <div className="flex items-center gap-4 mb-6">
      <motion.div
        variants={featureIconVariants}
        className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold leading-snug align-middle">{title}</h3>
    </div>
    <p className="text-gray-dark mb-4 leading-relaxed">{description}</p>
    {items && (
      <motion.ul 
        variants={featureItemVariants}
        className="space-y-2"
      >
        {items.map((item, idx) => (
          <motion.li
            key={idx}
            variants={featureItemVariants}
            className="flex items-center gap-2"
          >
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
              <svg 
                className="w-3 h-3 text-blue-600" 
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
            <span className="text-sm align-middle leading-normal">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    )}
  </motion.div>
);

export default FeatureCard;
