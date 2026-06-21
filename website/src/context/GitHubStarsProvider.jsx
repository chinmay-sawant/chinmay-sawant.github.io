import { useEffect, useState } from 'react';
import { fetchAllGitHubStars } from '../utils/github';
import { GitHubStarsContext } from './githubStarsContext';

const GitHubStarsProvider = ({ children }) => {
  const [starsMap, setStarsMap] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllGitHubStars().then((map) => {
      setStarsMap(map);
      setLoading(false);
    });
  }, []);

  return (
    <GitHubStarsContext.Provider value={{ starsMap, loading }}>
      {children}
    </GitHubStarsContext.Provider>
  );
};

export default GitHubStarsProvider;