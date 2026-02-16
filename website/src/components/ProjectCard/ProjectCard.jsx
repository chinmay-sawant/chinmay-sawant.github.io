import React from 'react';
import { useGitHubStars } from '../../hooks/useGitHubStars';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const stars = useGitHubStars(project.stars);

  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      
      {project.badges && (
        <div className="project-badges">
          {project.badges.map((badge, index) => (
            <a key={index} href={project.links[0]?.url} target="_blank" rel="noopener noreferrer" aria-label={badge.alt}>
              <img src={badge.src} alt={badge.alt} />
            </a>
          ))}
        </div>
      )}
      
      <div className="project-links">
        {project.links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={link.icon ? 'chrome-store-link' : ''}>
            {link.icon && <img src={link.icon} alt="Chrome" style={{ width: '14px', height: '14px', marginRight: '4px', verticalAlign: 'middle' }} />}
            {link.text}
          </a>
        ))}
        
        {project.stars && (
          <a 
            href={project.links[0]?.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-stars"
          >
            ⭐ <span className="star-count">{stars}</span>
          </a>
        )}
        
        {project.chromeRating && (
          <span className="chrome-rating">
            ⭐ <span className="rating-score">{project.chromeRating.rating.toFixed(1)}</span>{' '}
            (<span className="rating-count">{project.chromeRating.reviewCount}</span> reviews)
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
