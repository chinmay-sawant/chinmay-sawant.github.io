import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll('.project-card, .experience-item');
    elementsToObserve.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elementsToObserve.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
};
