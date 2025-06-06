"use client";
import React from 'react';

interface GradientTextProps {
  colors: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function GradientText({
  colors,
  animationSpeed = 3,
  showBorder = false,
  className = "",
  children
}: GradientTextProps) {
  const gradientString = colors.join(', ');
  
  return (
    <span 
      className={`inline-block ${className}`}
      style={{
        background: `linear-gradient(-45deg, ${gradientString})`,
        backgroundSize: '300% 100%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        animation: `gradient-move ${animationSpeed}s linear infinite`,
      }}
    >
      {children}
    </span>
  );
}
