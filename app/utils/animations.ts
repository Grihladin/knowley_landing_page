import { Variants } from "framer-motion";

// Shared animation variants
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Unified button animations to be used across all buttons
export const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
    },
  },
  hover: {
    scale: 1.08,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.98,
  },
  loading: {
    scale: 0.98,
    opacity: 0.8,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Reduced stagger time for smoother overall animation
      ease: "easeOut",
      duration: 0.3, // Add a duration for smoother container fade-in
    },
  },
};

export const teamCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10, // Changed from x to y for more efficient rendering
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3, // Reduced duration
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.01, // Reduced scale amount for smoother animation
    y: -2, // Small lift effect instead of large scale
    transition: {
      duration: 0.2,
      type: "tween", // Use tween instead of spring for more predictable performance
    },
  },
};

export const imageFrameVariants: Variants = {
  hover: {
    scale: 1.03, // Use scale instead of rotation for better performance
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeOut",
    },
  },
};

export const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const heroTextVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1], // easeOutCubic for smooth text reveal
    },
  },
};

export const heroTagVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const heroListItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Using unified buttonVariants instead

export const heroImageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1], // easeOutCubic for smooth scaling
    },
  },
};

export const featureSectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const featureCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1,
    },
  },
  hover: {
    scale: 1.03,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export const featureIconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: -15,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export const featureItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Benefits section animations - exactly matching Features animations
export const benefitSectionVariants = featureSectionVariants;
export const benefitCardVariants = featureCardVariants;
export const benefitIconVariants = featureIconVariants;
export const benefitItemVariants = featureItemVariants;

export const ctaSectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const ctaTagVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
    },
  },
};

export const ctaHeadingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

// Using unified buttonVariants instead

export const formContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      // Use tween instead of spring for more predictable animations
      type: "tween",
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.05,
    },
  },
};

export const formInputVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10, // Change from x to y for more efficient rendering
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      // Use tween for more efficient animations
      type: "tween",
      duration: 0.2,
      ease: "easeOut",
    },
  },
  focus: {
    // Reduce scale amount for better performance
    scale: 1.01,
    transition: {
      type: "tween",
      duration: 0.15,
    },
  },
};

// Using unified buttonVariants instead
