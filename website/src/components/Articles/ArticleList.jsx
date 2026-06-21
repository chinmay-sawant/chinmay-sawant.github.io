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

  if (loading) return <div className="loading">Loading Articles...</div>;

  if (error) return <div className="loading">Failed to load articles</div>;

  const allArticles = [...devtoArticles, ...articlesData.map(toDevtoFormat)];

  return (
    <div className="article-list section">
      {allArticles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
