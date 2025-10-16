import { useState, useEffect } from 'react';

export const useGitHubStars = (repo) => {
  const [stars, setStars] = useState('Loading...');

  useEffect(() => {
    if (!repo) return;

    const fetchStars = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error('Error fetching GitHub stars:', error);
        setStars('N/A');
      }
    };

    fetchStars();
  }, [repo]);

  return stars;
};
