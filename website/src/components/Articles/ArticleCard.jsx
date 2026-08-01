import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  const tags = article.tag_list || [];

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="article-card reveal"
    >
      <div className="article-meta">
        <time>{article.readable_publish_date}</time>
        {article.reading_time_minutes > 0 && (
          <>
            <span className="article-meta-sep" aria-hidden="true">
              ·
            </span>
            <span>{article.reading_time_minutes} min</span>
          </>
        )}
      </div>

      <h3 className="article-title">{article.title}</h3>

      {article.description ? (
        <p className="article-description">{article.description}</p>
      ) : null}

      {tags.length > 0 && (
        <div className="article-tags">
          {tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
};

export default ArticleCard;
