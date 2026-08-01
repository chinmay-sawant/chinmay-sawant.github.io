import { useContext, useMemo } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import {
  getFeaturedProjects,
  getOtherProjects,
} from '../../utils/projectsData';
import { getGitHubRepo } from '../../utils/github';
import { GitHubStarsContext } from '../../context/githubStarsContext';
import { useRecentGitHubRepos } from '../../hooks/useGitHubRepos';
import './Projects.css';

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.6 5.7 21l2.3-7.2-6-4.4h7.6z" />
  </svg>
);

const formatRelativeDate = (iso) => {
  if (!iso) return '';
  const date = new Date(iso);
  const diff = Date.now() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days < 1) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
};

const RecentRepoCard = ({ repo }) => (
  <article className="recent-repo reveal">
    <div className="recent-repo-top">
      <a
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="recent-repo-name"
      >
        {repo.name}
      </a>
      <div className="recent-repo-meta">
        {repo.stars > 0 && (
          <span className="recent-repo-stars">
            <StarIcon />
            {repo.stars}
          </span>
        )}
        {repo.language && (
          <span className="recent-repo-lang">{repo.language}</span>
        )}
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

const starCountFor = (project, starsMap) => {
  const repo = getGitHubRepo(project);
  if (!repo) return 0;
  return starsMap[repo.toLowerCase()] ?? 0;
};

const Projects = () => {
  const { starsMap } = useContext(GitHubStarsContext);
  const featured = useMemo(() => getFeaturedProjects(), []);
  const others = useMemo(() => {
    const list = getOtherProjects();
    return [...list].sort(
      (a, b) => starCountFor(b, starsMap) - starCountFor(a, starsMap),
    );
  }, [starsMap]);
  const { recent, loading: recentLoading } = useRecentGitHubRepos([], 8);

  return (
    <section className="section projects-section" id="work">
      <div className="section-header">
        <h2 className="section-title">Selected work</h2>
        <span className="section-aside">Open source &amp; side projects</span>
      </div>

      <div className="projects-featured">
        {featured.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            variant="featured"
          />
        ))}
      </div>

      {others.length > 0 && (
        <div className="projects-more">
          <h3 className="projects-subhead">More projects</h3>
          <div className="projects-grid">
            {others.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      )}

      <div className="projects-recent" id="recent">
        <div className="section-header projects-recent-header">
          <h3 className="projects-subhead">Recent on GitHub</h3>
          <a
            href="https://github.com/chinmay-sawant?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="section-aside projects-github-link"
          >
            All repositories
          </a>
        </div>

        {recentLoading && (
          <p className="loading">Loading recent repositories…</p>
        )}

        {!recentLoading && recent.length === 0 && (
          <p className="loading">No additional recent repositories right now.</p>
        )}

        {!recentLoading && recent.length > 0 && (
          <div className="recent-grid">
            {recent.map((repo) => (
              <RecentRepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
