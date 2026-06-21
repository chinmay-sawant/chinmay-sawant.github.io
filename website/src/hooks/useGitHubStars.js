import { useState, useEffect } from 'react';
import { fetchGitHubStars } from '../utils/github';

export const useGitHubStars = (repo) => {
  const [stars, setStars] = useState(null);
  const [loading, setLoading] = useState(Boolean(repo));

  useEffect(() => {
    if (!repo) {
      setStars(null);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    fetchGitHubStars(repo).then((count) => {
      if (!cancelled) {
        setStars(count);
        setLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [repo]);

  return { stars, loading };
};