import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch { /* Private browsing may disable storage. */ }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light');
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content', theme === 'light' ? '#f6f4ee' : '#15191e',
    );
    try { localStorage.setItem('theme', theme); } catch { /* The theme still works without persistence. */ }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};
