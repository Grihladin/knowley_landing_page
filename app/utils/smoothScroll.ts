import React from 'react';

export const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId.substring(1)); // Remove '#' from id
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};
