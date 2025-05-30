import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items?: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, items }) => (
  <div className="p-4 sm:p-8 w-full max-w-full bg-white/70 backdrop-blur-md rounded-xl shadow-xl border border-primary/20">
    <div className="flex items-center gap-4 mb-6">
      <div className="flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold leading-snug align-middle">{title}</h3>
    </div>
    <p className="text-gray-dark mb-4 leading-relaxed">{description}</p>
    {items && (
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2"
          >
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mr-3 flex-shrink-0">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 text-primary" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
            </div>
            <span className="text-sm align-middle leading-normal">{item}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default FeatureCard;
