// Reusable BenefitCard component for landing page benefits
import React from "react";
import { motion } from "framer-motion";
import { benefitCardVariants, benefitIconVariants, benefitItemVariants } from "./utils/animations";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  benefits: { label: string; description: string }[];
  colorClass?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, benefits, colorClass }) => (
  <motion.div
    variants={benefitCardVariants}
    whileHover="hover"
    className={`bg-white rounded-xl overflow-hidden shadow-sm transform-gpu`}
  >
    <div className={`h-2 ${colorClass || 'bg-primary'}`}></div>
    <div className="p-8">
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          variants={benefitIconVariants}
          className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center transform-gpu"
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold leading-snug align-middle">
          {title}
        </h3>
      </div>
      <ul className="space-y-4">
        {benefits.map((b, idx) => (
          <motion.li
            key={idx}
            variants={benefitItemVariants}
            className="flex items-start gap-3"
          >
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1">
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
            <div>
              <span className="font-medium leading-normal">{b.label}</span>
              <p className="text-sm text-gray-dark mt-1 leading-relaxed">
                {b.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default BenefitCard;
