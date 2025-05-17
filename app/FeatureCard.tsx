// Reusable FeatureCard component for landing page features
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items?: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, items }) => (
  <div className="bg-white p-4 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow w-full max-w-full">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold leading-snug align-middle">{title}</h3>
    </div>
    <p className="text-gray-dark mb-4 leading-relaxed">{description}</p>
    {items && (
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <div className="mt-1 text-success align-middle">•</div>
            <span className="text-sm align-middle leading-normal">{item}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default FeatureCard;
