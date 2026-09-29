import { useEffect, useRef, useState } from 'react';
import savedArticles from '../data/articles.json';

const DEVTO_API = 'https://dev.to/api/articles?username=chinmay-sawant';
const REQUEST_TIMEOUT = 8000;

function parseSavedPublishDate(timestamp) {
  if (typeof timestamp !== 'string') return '';

  const dateText = timestamp.split('·').pop().trim();
  const date = new Date(dateText);
  return Number.isNaN(date.getTime()) ? '' : date.toISOString();
}

function getPublishTime(article) {
  const publishedAt = Date.parse(article.published_at || '');
  if (!Number.isNaN(publishedAt)) return publishedAt;

  const readableDate = article.readable_publish_date || '';
  const dateText = readableDate.split('·').pop().trim();
  const parsedDate = Date.parse(dateText);
  return Number.isNaN(parsedDate) ? 0 : parsedDate;
}

const localArticles = savedArticles.map((article) => ({
  id: `saved-${article.id}`,
  title: article.text,
  description: '',
  url: article.link,
  readable_publish_date: article.timestamp,
  published_at: parseSavedPublishDate(article.timestamp),
  tag_list: [],
  source: 'X',
}));

function mergeArticles(remoteArticles) {
  const seenIds = new Set();
  const seenUrls = new Set();

  return [...remoteArticles, ...localArticles].filter((article) => {
    if (seenIds.has(article.id) || seenUrls.has(article.url)) return false;
    seenIds.add(article.id);
    seenUrls.add(article.url);
    return true;
  }).sort((left, right) => getPublishTime(right) - getPublishTime(left));
}

function readRemoteArticles(data) {
  if (!Array.isArray(data)) throw new Error('Invalid article response');

  return data
    .filter((article) => (
      article && typeof article.title === 'string'
      && typeof article.url === 'string'
      && /^https?:\/\//.test(article.url)
    ))
    .map((article) => ({
      id: `devto-${typeof article.id === 'number' || typeof article.id === 'string'
        ? article.id : article.url}`,
      title: article.title,
      description: typeof article.description === 'string' ? article.description : '',
      url: article.url,
      readable_publish_date: typeof article.readable_publish_date === 'string'
        ? article.readable_publish_date : '',
      published_at: typeof article.published_at === 'string' ? article.published_at : '',
      reading_time_minutes: typeof article.reading_time_minutes === 'number'
        ? article.reading_time_minutes : 0,
      tag_list: Array.isArray(article.tag_list)
        ? article.tag_list.filter((tag) => typeof tag === 'string')
        : [],
      source: 'Dev.to',
    }));
}

export const useDevtoArticles = (enabled = true) => {
  const [articles, setArticles] = useState(() => mergeArticles([]));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (!enabled || loaded.current) return;

    const controller = new AbortController();
    let cancelled = false;
    const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

    setLoading(true);
    setError(null);

    async function fetchArticles() {
      try {
        const response = await fetch(DEVTO_API, { signal: controller.signal });
        if (!response.ok) throw new Error('Could not load recent articles');
        const remoteArticles = readRemoteArticles(await response.json());
        if (cancelled) return;
        setArticles(mergeArticles(remoteArticles));
        loaded.current = true;
      } catch (fetchError) {
        if (!cancelled) setError(fetchError.message);
      } finally {
        window.clearTimeout(timeout);
        if (!cancelled) setLoading(false);
      }
    }

    fetchArticles();

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [enabled]);

  return { articles, loading, error };
};
