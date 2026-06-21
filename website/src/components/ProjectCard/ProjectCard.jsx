import { useGitHubStars } from '../../hooks/useGitHubStars';
import { getGitHubRepo } from '../../utils/github';
import './ProjectCard.css';

const formatLinkLabel = (text) => {
  const normalized = text.replace(' →', '').trim().toLowerCase();

  if (normalized.includes('view_source') || normalized === 'view source') {
    return '📂 view_source';
  }
  if (normalized.includes('live_demo') || normalized === 'live demo') {
    return '🚀 live_demo';
  }
  if (normalized.includes('vscode')) {
    return '🧩 vscode marketplace';
  }
  if (normalized.includes('chrome_store') || normalized.includes('chrome store')) {
    return '🌐 chrome_store';
  }

  return text.replace(' →', '');
};

const ProjectCard = ({ project }) => {
  const repo = getGitHubRepo(project);
  const { stars, loading } = useGitHubStars(repo);
  const chromeRating = project.chromeRating ?? project.chromerating;
  const sourceUrl = project.links?.find((link) => link.url?.includes('github.com'))?.url;

  return (
    <article className="project-card">
      <div className="project-card-header">
        <h3 className="project-card-title">
          {project.title}
          {project.active && <span className="project-active-badge">active</span>}
        </h3>
        {repo && !loading && stars > 0 && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-stars"
            aria-label={`${stars} GitHub stars`}
          >
            ⭐ <span>{stars}</span>
          </a>
        )}
      </div>

      <p className="project-card-description">{project.description}</p>

      {project.badges && (
        <div className="project-badges">
          {project.badges.map((badge, index) => (
            <a
              key={index}
              href={project.links[0]?.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={badge.alt}
            >
              <img src={badge.src} alt={badge.alt} />
            </a>
          ))}
        </div>
      )}

      <div className="project-links">
        {project.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            {link.icon && (
              <img src={link.icon} alt="" className="project-link-icon" />
            )}
            {formatLinkLabel(link.text)}
          </a>
        ))}

        {chromeRating && (
          <span className="project-rating">
            ⭐ {chromeRating.rating.toFixed(1)}
            <span className="project-rating-count">
              ({chromeRating.reviewcount ?? chromeRating.reviewCount} reviews)
            </span>
          </span>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;