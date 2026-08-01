import { useEffect } from 'react';

/**
 * Marks .reveal elements with .is-visible when they enter the viewport.
 * Re-observes when the DOM changes (async lists, theme, etc.).
 */
export const useReveal = () => {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealAll = (nodes) => {
      nodes.forEach((el) => el.classList.add('is-visible'));
    };

    let observer = null;

    if (!reduced) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
      );
    }

    const scan = () => {
      const nodes = document.querySelectorAll('.reveal:not(.is-visible)');
      if (!nodes.length) return;
      if (reduced) {
        revealAll(nodes);
        return;
      }
      nodes.forEach((el) => observer.observe(el));
    };

    scan();

    const mutation = new MutationObserver(() => scan());
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutation.disconnect();
      if (observer) observer.disconnect();
    };
  }, []);
};
