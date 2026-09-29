import ArticleCard from './ArticleCard';
import './ArticleList.css';

const ArticleList = ({ articles = [], loading = false, error = null }) => (
  <div className="writing-articles">
    <p className="writing-articles-status" role="status">
      {loading && 'Checking for recent posts…'}
      {error && 'Showing saved writing. You can also browse my posts on Dev.to.'}
      {!loading && !error && 'Notes, articles, and occasional progress updates.'}
    </p>
    {articles.length > 0 ? (
      <div className="article-list">
        {articles.map((article, index) => (
          <ArticleCard key={article.id} article={article} index={index} />
        ))}
      </div>
    ) : (
      <p className="writing-articles-empty">More writing is on the way.</p>
    )}
  </div>
);

export default ArticleList;
