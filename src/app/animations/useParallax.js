import { useEffect, useState } from 'react';
import { useMotionValue, useTransform, animate } from 'framer-motion';

export const useParallax = (ref, distance = 50) => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const initial = Math.max(elementTop - clientHeight, 0);
  const final = elementTop + distance;

  const y = useMotionValue(initial);
  const opacity = useTransform(y, [initial, final], [0, 1]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
  
    const onScroll = () => {
      const rect = element.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
      setClientHeight(window.innerHeight);
      setScrollY(window.scrollY);
    };
  
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const controls = animate(y, Math.max(elementTop - scrollY, 0), {
      type: 'spring',
      stiffness: 400,
      damping: 90
    });

    return controls.stop;
  }, [elementTop, scrollY, y]);

  return { y, opacity };
};