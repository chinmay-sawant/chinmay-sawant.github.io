const GITHUB_USER = 'chinmay-sawant';

let reposCache = null;
let reposPromise = null;

export const parseGitHubRepo = (url) => {
  if (!url) return null;

  try {
    const { pathname } = new URL(url);
    const [owner, repo] = pathname.split('/').filter(Boolean);
    return owner && repo ? `${owner}/${repo}` : null;
  } catch {
    return null;
  }
};

export const getGitHubRepo = (project) => {
  if (project?.stars) return project.stars;

  const githubLink = project?.links?.find((link) =>
    link.url?.includes('github.com'),
  );
  return githubLink ? parseGitHubRepo(githubLink.url) : null;
};

const normalizeRepo = (repo) => ({
  id: repo.id,
  name: repo.name,
  fullName: `${repo.owner.login}/${repo.name}`,
  description: repo.description || '',
  url: repo.html_url,
  homepage: repo.homepage || '',
  stars: repo.stargazers_count ?? 0,
  language: repo.language,
  topics: repo.topics || [],
  fork: repo.fork,
  archived: repo.archived,
  pushedAt: repo.pushed_at,
  updatedAt: repo.updated_at,
});

/** Fetch user repos. Caches result for stars + recent lists. */
export const fetchGitHubRepos = async () => {
  if (reposCache) return reposCache;

  if (!reposPromise) {
    reposPromise = fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed&direction=desc`,
      { headers: { Accept: 'application/vnd.github+json' } },
    )
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`GitHub API responded with ${response.status}`);
        }
        const data = await response.json();
        // Prefer last push for “recent”; fall back to updatedAt.
        reposCache = data
          .map(normalizeRepo)
          .sort(
            (a, b) =>
              new Date(b.pushedAt || b.updatedAt || 0) -
              new Date(a.pushedAt || a.updatedAt || 0),
          );
        return reposCache;
      })
      .catch((error) => {
        console.warn('Unable to load GitHub repos:', error.message);
        reposCache = [];
        return [];
      })
      .finally(() => {
        reposPromise = null;
      });
  }

  return reposPromise;
};

export const fetchAllGitHubStars = async () => {
  const repos = await fetchGitHubRepos();
  const map = {};
  for (const repo of repos) {
    map[repo.fullName.toLowerCase()] = repo.stars;
  }
  return map;
};

export const fetchGitHubStars = async (repo) => {
  if (!repo) return null;
  const map = await fetchAllGitHubStars();
  return map[repo.toLowerCase()] ?? null;
};

const EXCLUDED_REPO_NAMES = new Set([
  'chinmay-sawant.github.io',
  'verceltemp',
  'testalt',
  'snapback',
  'python-demo-repos',
  'zerotoone',
]);

/**
 * Most recently pushed public repos (true GitHub activity feed).
 * Drops forks, archived, and known junk — does not hide curated projects.
 * @param {object[]} repos
 * @param {string[]} [_knownRepoKeys] unused; kept for call-site compatibility
 * @param {number} limit
 */
export const filterRecentRepos = (repos, _knownRepoKeys = [], limit = 8) => {
  void _knownRepoKeys;
  return [...repos]
    .filter((repo) => {
      if (repo.fork || repo.archived) return false;
      const name = repo.name.toLowerCase();
      if (EXCLUDED_REPO_NAMES.has(name)) return false;
      return true;
    })
    .sort(
      (a, b) =>
        new Date(b.pushedAt || b.updatedAt || 0) -
        new Date(a.pushedAt || a.updatedAt || 0),
    )
    .slice(0, limit);
};

export { GITHUB_USER };
