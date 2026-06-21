import { useContext } from 'react';
import { GitHubStarsContext } from '../context/githubStarsContext';

export const useGitHubStars = (repo) => {
  const { starsMap, loading } = useContext(GitHubStarsContext);

  if (!repo) {
    return { stars: null, loading: false };
  }

  return {
    stars: starsMap[repo.toLowerCase()] ?? null,
    loading,
  };
};