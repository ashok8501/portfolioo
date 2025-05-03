import { useState, useEffect } from 'react';

export function useInView(ref, options = {}) {
  const { threshold = 0, once = false, rootMargin = '0px' } = options;
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && once && isInView === false) {
          setIsInView(true);
          observer.disconnect();
        } else if (!once) {
          setIsInView(entry.isIntersecting);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, once, rootMargin, isInView]);

  return isInView;
}
