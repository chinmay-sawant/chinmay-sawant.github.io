import { useGitHubStars } from '../../hooks/useGitHubStars';
import { getGitHubRepo } from '../../utils/github';
import './ProjectCard.css';

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.6 5.7 21l2.3-7.2-6-4.4h7.6z" />
  </svg>
);

const formatLinkLabel = (text) => {
  const normalized = text.replace(/[→_]/g, ' ').trim().toLowerCase();
  if (normalized.includes('view source') || normalized === 'source') return 'Source';
  if (normalized.includes('live demo') || normalized === 'demo') return 'Demo';
  if (normalized.includes('vscode') || normalized.includes('marketplace')) return 'Marketplace';
  if (normalized.includes('chrome')) return 'Chrome Store';
  return text.replace(' →', '').trim();
};

const ProjectCard = ({ project, variant = 'default' }) => {
  const repo = getGitHubRepo(project);
  const { stars, loading } = useGitHubStars(repo);
  const chromeRating = project.chromeRating ?? project.chromerating;
  const sourceUrl = project.links?.find((link) => link.url?.includes('github.com'))?.url;
  const isFeatured = variant === 'featured';

  return (
    <article className={`project-card reveal ${isFeatured ? 'project-card--featured' : ''}`}>
      <div className="project-card-header">
        <div className="project-card-title-row">
          <h3 className="project-card-title">{project.title}</h3>
          {project.active && <span className="project-badge">Active</span>}
          {project.category && !isFeatured && (
            <span className="project-category">{project.category}</span>
          )}
        </div>
        {repo && !loading && stars > 0 && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-stars"
            aria-label={`${stars} GitHub stars`}
          >
            <StarIcon />
            <span>{stars}</span>
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
            {formatLinkLabel(link.text)}
          </a>
        ))}

        {chromeRating && (
          <span className="project-rating">
            <StarIcon />
            {chromeRating.rating.toFixed(1)}
            <span className="project-rating-count">
              ({chromeRating.reviewcount ?? chromeRating.reviewCount})
            </span>
          </span>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
