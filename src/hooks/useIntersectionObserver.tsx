import { useState, useEffect } from 'react';

const useIntersectionObserver = (options:IntersectionObserverInit, ref: React.MutableRefObject<any>
    ) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [])

  return {inView};
};

export default useIntersectionObserver;
