'use client';

import { useEffect } from 'react';

export default function ScrollIndicator() {
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;
      const progressBar = document.getElementById('scrollProgress');
      if (progressBar) {
        progressBar.style.width = scrollProgress + '%';
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="scroll-indicator">
      <div id="scrollProgress" className="scroll-progress"></div>
    </div>
  );
}
