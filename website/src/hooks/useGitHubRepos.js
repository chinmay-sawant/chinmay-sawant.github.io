import { useContext, useMemo } from 'react';
import { GitHubStarsContext } from '../context/githubStarsContext';
import { filterRecentRepos } from '../utils/github';

export const useGitHubRepos = () => {
  const { repos, loading } = useContext(GitHubStarsContext);
  return { repos, loading };
};

/** Recent GitHub repos excluding already-curated project keys. */
export const useRecentGitHubRepos = (knownRepoKeys, limit = 8) => {
  const { repos, loading } = useContext(GitHubStarsContext);
  // Stable join so parent can pass a new array each render without thrashing.
  const knownKey = (knownRepoKeys || []).join('|');

  const recent = useMemo(
    () => filterRecentRepos(repos, knownKey ? knownKey.split('|') : [], limit),
    [repos, knownKey, limit],
  );

  return { recent, loading };
};
