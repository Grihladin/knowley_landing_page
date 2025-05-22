import React from "react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  benefits: { label: string; description: string }[];
  colorClass?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, benefits, colorClass }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm">
    <div className={`h-2 ${colorClass || 'bg-primary'}`}></div>
    <div className="p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-bold leading-snug align-middle">
          {title}
        </h3>
      </div>
      <ul className="space-y-4">
        {benefits.map((b, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3"
          >
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
              <svg 
                className="w-3 h-3 text-primary" 
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
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default BenefitCard;
