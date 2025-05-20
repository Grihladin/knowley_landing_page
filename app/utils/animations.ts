import { Variants } from "framer-motion";

// Shared animation variants
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    willChange: "transform, opacity", // Added will-change
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
    willChange: "transform, opacity", // Added will-change
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)", // Keep boxShadow for now, monitor if perf issues arise
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
      staggerChildren: 0.1, 
      ease: "easeOut",
      duration: 0.3, 
    },
  },
};

export const teamCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10, 
    scale: 0.98,
    willChange: "transform, opacity", // Added will-change
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3, 
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.01, 
    y: -2, 
    transition: {
      duration: 0.2,
      type: "tween", 
    },
  },
};

export const imageFrameVariants: Variants = {
  hover: {
    scale: 1.03, 
    willChange: "transform", // Added will-change for scale
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
      staggerChildren: 0.15, // Adjusted stagger time
      delayChildren: 0.1,  // Adjusted delay
    },
  },
};

export const heroTextVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    willChange: "transform, opacity", // Added will-change
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, 
      ease: [0.215, 0.61, 0.355, 1], 
    },
  },
};

export const heroTagVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    willChange: "transform, opacity", // Added will-change
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
    willChange: "transform, opacity", // Added will-change
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
    willChange: "transform, opacity", // Added will-change
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6, 
      ease: [0.215, 0.61, 0.355, 1], 
    },
  },
};

export const featureSectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Adjusted stagger time
      delayChildren: 0.1,
    },
  },
};

export const featureCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
    willChange: "transform, opacity", // Added will-change
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.03,
    willChange: "transform", // Added will-change for scale
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const featureIconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    willChange: "transform, opacity", // Added will-change
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.1,
    willChange: "transform", // Added will-change for scale
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const featureItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
    willChange: "transform, opacity", // Added will-change
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
      staggerChildren: 0.15, // Adjusted stagger time
      delayChildren: 0.1,
    },
  },
};

export const ctaTagVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    y: 20,
    willChange: "transform, opacity", // Added will-change
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const ctaHeadingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    willChange: "transform, opacity", // Added will-change
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Using unified buttonVariants instead

export const formContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    willChange: "transform, opacity", // Added will-change
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.05, // Keep small stagger for form elements
    },
  },
};

export const formInputVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10, 
    willChange: "transform, opacity", // Added will-change
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.2,
      ease: "easeOut",
    },
  },
  focus: {
    scale: 1.01,
    willChange: "transform", // Added will-change for scale
    transition: {
      type: "tween",
      duration: 0.15,
    },
  },
};

// Using unified buttonVariants instead
