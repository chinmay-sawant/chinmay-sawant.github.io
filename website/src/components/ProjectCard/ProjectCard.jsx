import { useGitHubStars } from '../../hooks/useGitHubStars';
import { getGitHubRepo } from '../../utils/github';
import ProjectArtwork from '../Projects/ProjectArtwork';
import './ProjectCard.css';

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.6 5.7 21l2.3-7.2-6-4.4h7.6z" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" width="12" height="12" fill="none" aria-hidden="true">
    <path d="M5 15 15 5M5 5h10v10" stroke="currentColor" strokeWidth="1.5" />
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
      {isFeatured && <ProjectArtwork kind={project.artwork} />}
      <div className="project-card-body">
        {isFeatured && (
          <div className="project-card-eyebrow">
            <span>{project.category} / open source</span>
            {project.active && <span className="project-badge">In development</span>}
          </div>
        )}
        <div className="project-card-header">
          <div className="project-card-title-row">
            <h2 className="project-card-title">{project.title}</h2>
            {project.active && !isFeatured && <span className="project-badge">Active</span>}
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

        {isFeatured && <p className="project-card-summary">{project.summary}</p>}
        <p className="project-card-description">{project.description}</p>

        {project.tags && (
          <ul className="project-tags" aria-label="Technologies">
            {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        )}

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
              <ArrowIcon />
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
      </div>
    </article>
  );
};

export default ProjectCard;
