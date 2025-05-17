// AccessibleButton: a button with improved accessibility and focus styles
import React from "react";

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  children?: React.ReactNode;
}

const AccessibleButton: React.FC<AccessibleButtonProps> = ({ label, children, ...props }) => (
  <button
    aria-label={label}
    className="border border-gray px-6 py-3 rounded-lg hover:bg-gray-light transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary"
    {...props}
  >
    {children || label}
  </button>
);

export default AccessibleButton;
