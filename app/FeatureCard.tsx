// Reusable FeatureCard component for landing page features
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items?: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, items }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-dark mb-4">{description}</p>
    {items && (
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <div className="mt-1 text-success">•</div>
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default FeatureCard;
