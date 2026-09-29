import { useMemo } from 'react';
import { getCuratedRepoKeys } from '../../utils/projectsData';
import { useRecentGitHubRepos } from '../../hooks/useGitHubRepos';
import './Projects.css';

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.6 5.7 21l2.3-7.2-6-4.4h7.6z" />
  </svg>
);

const formatRelativeDate = (iso) => {
  if (!iso) return '';
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / (1000 * 60 * 60 * 24));
  if (days < 1) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
};

const RecentRepoCard = ({ repo }) => (
  <article className="recent-repo reveal">
    <div className="recent-repo-top">
      <a href={repo.url} target="_blank" rel="noopener noreferrer" className="recent-repo-name">
        {repo.name}
      </a>
      <div className="recent-repo-meta">
        {repo.stars > 0 && <span className="recent-repo-stars"><StarIcon />{repo.stars}</span>}
        {repo.language && <span className="recent-repo-lang">{repo.language}</span>}
      </div>
    </div>
    <p className="recent-repo-desc">{repo.description}</p>
    <div className="recent-repo-foot">
      <time dateTime={repo.pushedAt || repo.updatedAt}>
        Updated {formatRelativeDate(repo.pushedAt || repo.updatedAt)}
      </time>
      {repo.homepage && (
        <a
          href={repo.homepage.startsWith('http') ? repo.homepage : `https://${repo.homepage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="recent-repo-home"
        >
          Site
        </a>
      )}
    </div>
  </article>
);

const RecentProjects = () => {
  const curatedRepoKeys = useMemo(() => getCuratedRepoKeys(), []);
  const { recent, loading } = useRecentGitHubRepos(curatedRepoKeys, 6);

  return (
    <section className="projects-recent" id="recent" aria-labelledby="recent-projects-heading">
      <div className="section-header projects-recent-header">
        <h2 className="projects-subhead" id="recent-projects-heading">Fresh from GitHub</h2>
        <a
          href="https://github.com/chinmay-sawant?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="section-aside projects-github-link"
        >
          All repositories
        </a>
      </div>
      {loading && <p className="loading">Loading recent repositories…</p>}
      {!loading && recent.length === 0 && (
        <p className="loading">No additional recent repositories right now.</p>
      )}
      {!loading && recent.length > 0 && (
        <div className="recent-grid">
          {recent.map((repo) => <RecentRepoCard key={repo.id} repo={repo} />)}
        </div>
      )}
    </section>
  );
};

export default RecentProjects;
