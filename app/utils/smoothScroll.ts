import React from 'react';

/**
 * Handle smooth scrolling to a target element when clicking on a link
 * @param event - The click event
 * @param targetId - The target element's ID with # prefix (e.g. "#features")
 */
export const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string): void => {
  event.preventDefault();
  
  // Extract the ID without the '#'
  const targetElementId = targetId.startsWith('#') ? targetId.substring(1) : targetId;
  const targetElement = document.getElementById(targetElementId);
  
  if (targetElement) {
    targetElement.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
    
    // Update URL hash without page jump
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', targetId);
    } else {
      window.location.hash = targetId;
    }
  }
};
