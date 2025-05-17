// Reusable BenefitCard component for landing page benefits
import React from "react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  benefits: { label: string; description: string }[];
  colorClass?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, benefits, colorClass }) => (
  <div className={`bg-white rounded-xl overflow-hidden shadow-sm`}>
    <div className={`h-2 ${colorClass || 'bg-primary'}`}></div>
    <div className="p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-bold leading-snug align-middle">{title}</h3>
      </div>
      <ul className="space-y-4">
        {benefits.map((b, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="flex items-center justify-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <span className="font-medium leading-normal align-middle">{b.label}</span>
              <p className="text-sm text-gray-dark mt-1 leading-relaxed">{b.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default BenefitCard;
