const GITHUB_USER = 'chinmay-sawant';

let starsMapCache = null;
let starsMapPromise = null;

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

  const githubLink = project?.links?.find((link) => link.url?.includes('github.com'));
  return githubLink ? parseGitHubRepo(githubLink.url) : null;
};

export const fetchAllGitHubStars = async () => {
  if (starsMapCache) return starsMapCache;

  if (!starsMapPromise) {
    starsMapPromise = fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
      { headers: { Accept: 'application/vnd.github+json' } },
    )
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`GitHub API responded with ${response.status}`);
        }
        const repos = await response.json();
        const map = {};

        for (const repo of repos) {
          const key = `${repo.owner.login}/${repo.name}`.toLowerCase();
          map[key] = repo.stargazers_count;
        }

        starsMapCache = map;
        return map;
      })
      .catch((error) => {
        console.warn('Unable to load GitHub star counts:', error.message);
        starsMapCache = {};
        return {};
      })
      .finally(() => {
        starsMapPromise = null;
      });
  }

  return starsMapPromise;
};

export const fetchGitHubStars = async (repo) => {
  if (!repo) return null;
  const map = await fetchAllGitHubStars();
  return map[repo.toLowerCase()] ?? null;
};