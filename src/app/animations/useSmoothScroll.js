import { useEffect } from 'react';
import { animate } from 'framer-motion';

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - 80; // 80 is header height

          animate(window.scrollY, offsetPosition, {
            type: 'spring',
            stiffness: 100,
            damping: 20,
            onUpdate: (value) => window.scrollTo(0, value)
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  const scrollToElement = (elementId) => {
    const element = document.querySelector(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80;

      animate(window.scrollY, offsetPosition, {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        onUpdate: (value) => window.scrollTo(0, value)
      });
    }
  };

  const scrollToTop = () => {
    animate(window.scrollY, 0, {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      onUpdate: (value) => window.scrollTo(0, value)
    });
  };

  return { scrollToElement, scrollToTop };
};