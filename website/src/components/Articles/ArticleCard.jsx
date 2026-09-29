import './ArticleCard.css';

const ArticleCard = ({ article, index }) => (
  <a
    href={article.url}
    target="_blank"
    rel="noopener noreferrer"
    className="article-card"
    aria-label={`${article.title}, opens in a new tab`}
  >
    <span className="article-number" aria-hidden="true">
      {String(index + 1).padStart(2, '0')}
    </span>
    <div className="article-content">
      <div className="article-meta">
        <span className="article-source">{article.source}</span>
        {article.readable_publish_date && (
          <>
            <span aria-hidden="true">/</span>
            <span>{article.readable_publish_date}</span>
          </>
        )}
        {article.reading_time_minutes > 0 && (
          <span>{article.reading_time_minutes} min read</span>
        )}
      </div>
      <h3 className="article-title">{article.title}</h3>
      {article.description && (
        <p className="article-description">{article.description}</p>
      )}
      {article.tag_list.length > 0 && (
        <div className="article-tags">
          {[...new Set(article.tag_list)].slice(0, 4).map((tag) => (
            <span key={tag} className="article-tag">#{tag}</span>
          ))}
        </div>
      )}
    </div>
    <svg className="article-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 18 18 6M6 6h12v12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  </a>
);

export default ArticleCard;
