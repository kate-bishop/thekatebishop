import { useState, useEffect } from 'react';

export const a11yProps = (index: number) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
};

export function useScrollspy(ids: string[], offset: number = 100) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (ids.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { 
        root: null,
        rootMargin: `-${offset}px 0px -40% 0px`,
        threshold: 0.05 
      }
    );

    // Give the CSSTransition 350ms to finish mounting the elements into the DOM
    const timer = setTimeout(() => {
      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });
    }, 350); // same as transition timeout duration

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [ids, offset]);

  return activeId;
}
