import './ArticleCard.css';

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const CommentIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16">
    <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/>
  </svg>
);

const BookmarkIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16">
    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
  </svg>
);

const ArticleCard = ({ article }) => {
  const handleClick = () => {
    window.open(article.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="article-card" onClick={handleClick}>
      <div className="article-header">
        <div className="article-header-left">
          <img
            src={article.user.profile_image_90}
            alt={article.user.name}
            className="article-author-avatar"
          />
          <div className="article-author-info">
            <span className="article-author-name">{article.user.name}</span>
            <span className="article-author-meta">
              {article.readable_publish_date} · {article.reading_time_minutes} min read
            </span>
          </div>
        </div>
      </div>

      <div className="article-content">
        <h3 className="article-title">{article.title}</h3>
        <p className="article-description">{article.description}</p>
      </div>

      <div className="article-tags">
        {article.tag_list.map(tag => (
          <span key={tag} className="tag">#{tag}</span>
        ))}
      </div>

      <div className="article-footer">
        <div className="metric">
          <HeartIcon />
          <span>{article.public_reactions_count}</span>
        </div>
        <div className="metric">
          <CommentIcon />
          <span>{article.comments_count}</span>
        </div>
        <div className="metric">
          <BookmarkIcon />
          <span>{article.reading_time_minutes} min</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
