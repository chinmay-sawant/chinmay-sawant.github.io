import { useEffect, useState } from 'react';
import { fetchGitHubRepos, fetchAllGitHubStars } from '../utils/github';
import { GitHubStarsContext } from './githubStarsContext';

const GitHubStarsProvider = ({ children }) => {
  const [starsMap, setStarsMap] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    Promise.all([fetchGitHubRepos(), fetchAllGitHubStars()]).then(
      ([repoList, map]) => {
        if (cancelled) return;
        setRepos(repoList);
        setStarsMap(map);
        setLoading(false);
      },
    );

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <GitHubStarsContext.Provider value={{ starsMap, repos, loading }}>
      {children}
    </GitHubStarsContext.Provider>
  );
};

export default GitHubStarsProvider;
