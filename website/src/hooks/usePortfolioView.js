import { useEffect, useLayoutEffect, useState } from 'react';
import { viewFromHash } from '../utils/views';

export function usePortfolioView() {
  const [view, setView] = useState(() => viewFromHash(window.location.hash) ?? 'about');

  useEffect(() => {
    const syncView = () => {
      const next = viewFromHash(window.location.hash);
      if (next) setView(next);
      else if (!window.location.hash) setView('about');
    };
    window.addEventListener('hashchange', syncView);
    window.addEventListener('popstate', syncView);
    return () => {
      window.removeEventListener('hashchange', syncView);
      window.removeEventListener('popstate', syncView);
    };
  }, []);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  const navigate = (event, id) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button > 0) return;
    event.preventDefault();
    if (window.location.hash !== `#${id}`) window.history.pushState(null, '', `#${id}`);
    setView(id);
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.getElementById('main')?.focus({ preventScroll: true });
    });
  };

  return { view, navigate };
}
