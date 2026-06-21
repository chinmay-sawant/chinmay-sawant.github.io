const starsCache = new Map();
const pendingFetches = new Map();

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

export const fetchGitHubStars = async (repo) => {
  if (!repo) return null;

  if (starsCache.has(repo)) {
    return starsCache.get(repo);
  }

  if (pendingFetches.has(repo)) {
    return pendingFetches.get(repo);
  }

  const request = fetch(`https://api.github.com/repos/${repo}`)
    .then(async (response) => {
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      const count = data.stargazers_count ?? null;
      starsCache.set(repo, count);
      pendingFetches.delete(repo);
      return count;
    })
    .catch((error) => {
      console.error(`Error fetching GitHub stars for ${repo}:`, error);
      starsCache.set(repo, null);
      pendingFetches.delete(repo);
      return null;
    });

  pendingFetches.set(repo, request);
  return request;
};