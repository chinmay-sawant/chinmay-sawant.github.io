import ArticleCard from './ArticleCard';
import { useDevtoArticles } from '../../hooks/useDevtoArticles';
import articlesData from '../../data/articles.json';
import './ArticleList.css';

const toDevtoFormat = (tweet) => ({
  id: tweet.id,
  title: tweet.text,
  description: '',
  url: tweet.link,
  user: {
    name: tweet.author.name,
    profile_image_90: tweet.author.avatar,
  },
  readable_publish_date: tweet.timestamp,
  reading_time_minutes: 1,
  tag_list: [],
  public_reactions_count: tweet.metrics.likes,
  comments_count: tweet.metrics.comments,
});

const ArticleList = () => {
  const { articles: devtoArticles, loading, error } = useDevtoArticles();

  const allArticles = [
    ...(devtoArticles || []),
    ...articlesData.map(toDevtoFormat),
  ];

  return (
    <section className="section article-list-section" id="writing">
      <div className="section-header">
        <h2 className="section-title">Writing</h2>
        <a
          href="https://dev.to/chinmay-sawant"
          target="_blank"
          rel="noopener noreferrer"
          className="section-aside projects-github-link"
        >
          On Dev.to
        </a>
      </div>

      {loading && <p className="loading">Loading articles…</p>}
      {error && !allArticles.length && (
        <p className="loading">Could not load articles right now.</p>
      )}

      {!loading && allArticles.length > 0 && (
        <div className="article-list">
          {allArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ArticleList;
