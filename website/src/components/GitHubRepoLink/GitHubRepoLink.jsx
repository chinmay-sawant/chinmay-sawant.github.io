import { useGitHubStars } from '../../hooks/useGitHubStars';
import './GitHubRepoLink.css';

const GitHubRepoLink = ({
  repo,
  href,
  children,
  className = '',
  showStars = true,
}) => {
  const { stars, loading } = useGitHubStars(repo);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      {showStars && !loading && stars > 0 && (
        <span className="repo-stars"> ({stars})</span>
      )}
    </a>
  );
};

export default GitHubRepoLink;
