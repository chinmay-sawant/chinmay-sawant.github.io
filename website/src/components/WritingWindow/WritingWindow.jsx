import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useDevtoArticles } from '../../hooks/useDevtoArticles';
import ArticleList from '../Articles/ArticleList';
import './WritingWindow.css';

const WritingWindow = ({ open, onClose }) => {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const backdropPointerStarted = useRef(false);
  const { articles, loading, error } = useDevtoArticles(open);

  useEffect(() => {
    if (!open) return;

    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const previousWidth = document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    const releasedWidth = document.documentElement.clientWidth - previousWidth;
    if (releasedWidth > 0) {
      const currentPadding = parseFloat(window.getComputedStyle(document.body).paddingRight) || 0;
      document.body.style.paddingRight = `${currentPadding + releasedWidth}px`;
    }
    if (!dialog.open) dialog.showModal();
    closeRef.current.focus({ preventScroll: true });

    return () => {
      backdropPointerStarted.current = false;
      dialog.close();
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [open]);

  function isBackdrop(event) {
    if (event.target !== dialogRef.current) return false;
    const bounds = dialogRef.current.getBoundingClientRect();
    return event.clientX < bounds.left || event.clientX > bounds.right
      || event.clientY < bounds.top || event.clientY > bounds.bottom;
  }

  function closeFromBackdrop(event) {
    const startedOutside = backdropPointerStarted.current;
    backdropPointerStarted.current = false;
    if (startedOutside && isBackdrop(event)) onClose();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="writing-window"
      aria-labelledby="writing-window-title"
      aria-describedby="writing-window-description"
      onPointerDown={(event) => {
        backdropPointerStarted.current = event.button === 0 && isBackdrop(event);
      }}
      onPointerCancel={() => { backdropPointerStarted.current = false; }}
      onClick={closeFromBackdrop}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      <div className="writing-window-toolbar">
        <span className="writing-window-dots" aria-hidden="true">
          <span /><span /><span />
        </span>
        <span className="writing-window-label">The writing room</span>
        <button
          ref={closeRef}
          className="writing-window-close"
          type="button"
          aria-label="Close writing window"
          onClick={onClose}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
      <div className="writing-window-scroll">
        <header className="writing-window-heading">
          <div className="writing-window-eyebrow">
            <span>Ideas, in progress</span>
            <span>{articles.length} {articles.length === 1 ? 'post' : 'posts'}</span>
          </div>
          <h2 id="writing-window-title">Writing.</h2>
          <p id="writing-window-description">
            Notes on Go, PDFs, and the details that make software work.
          </p>
        </header>
        <ArticleList articles={articles} loading={loading} error={error} />
      </div>
      <footer className="writing-window-footer">
        <span>Read a little. Build something.</span>
        <a href="https://dev.to/chinmay-sawant" target="_blank" rel="noopener noreferrer">
          All posts on Dev.to <span aria-hidden="true">↗</span>
          <span className="sr-only">, opens in a new tab</span>
        </a>
      </footer>
    </dialog>,
    document.body,
  );
};

export default WritingWindow;
