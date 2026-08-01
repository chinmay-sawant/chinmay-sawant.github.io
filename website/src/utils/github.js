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

/** Fetch user repos (sorted by last update). Caches result for stars + recent lists. */
export const fetchGitHubRepos = async () => {
  if (reposCache) return reposCache;

  if (!reposPromise) {
    reposPromise = fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
      { headers: { Accept: 'application/vnd.github+json' } },
    )
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`GitHub API responded with ${response.status}`);
        }
        const data = await response.json();
        reposCache = data.map(normalizeRepo);
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

/** Loose name aliases so curated rows match GitHub renames. */
const REPO_ALIASES = {
  youtubecommentstracker: 'youtubecommentsviewer',
  youtubecommentsviewer: 'youtubecommentstracker',
  motionsaver: 'motionsaver',
};

/**
 * Recent non-fork, non-archived repos not already in the curated project set.
 * @param {string[]} knownRepoKeys lowercase owner/name keys already shown
 * @param {number} limit
 */
export const filterRecentRepos = (repos, knownRepoKeys = [], limit = 8) => {
  const known = new Set(knownRepoKeys.map((k) => k.toLowerCase()));
  const knownNames = new Set(
    [...known].map((k) => {
      const name = k.split('/')[1] || k;
      return name.toLowerCase();
    }),
  );
  // Expand aliases both ways
  for (const name of [...knownNames]) {
    if (REPO_ALIASES[name]) knownNames.add(REPO_ALIASES[name]);
  }

  return repos
    .filter((repo) => {
      if (repo.fork || repo.archived) return false;
      const name = repo.name.toLowerCase();
      if (EXCLUDED_REPO_NAMES.has(name)) return false;
      if (known.has(repo.fullName.toLowerCase())) return false;
      if (knownNames.has(name)) return false;
      if (!repo.description?.trim() || repo.description.trim().length < 12) {
        return false;
      }
      return true;
    })
    .slice(0, limit);
};

export { GITHUB_USER };
