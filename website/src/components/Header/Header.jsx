import './Header.css';

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Header = ({ view, setView }) => {
  return (
    <header className="header">
      <nav className="header-nav" aria-label="Site navigation">
        <span className="header-nav-name">cs</span>
        <div className="view-toggle" role="tablist" aria-label="Content view">
          <button
            role="tab"
            aria-selected={view === 'profile'}
            className={`view-toggle-btn ${view === 'profile' ? 'active' : ''}`}
            onClick={() => setView('profile')}
          >
            profile
          </button>
          <button
            role="tab"
            aria-selected={view === 'articles'}
            className={`view-toggle-btn ${view === 'articles' ? 'active' : ''}`}
            onClick={() => setView('articles')}
          >
            writing
          </button>
        </div>
      </nav>

      <div className="hero">
        <p className="hero-eyebrow">backend engineer · open source maintainer</p>
        <h1 className="hero-name">Chinmay Sawant</h1>
        <p className="hero-tagline">
          Maintainer of{' '}
          <a
            href="https://github.com/chinmay-sawant/gopdfsuit"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-accent hero-link"
          >
            GoPDFSuit
          </a>{' '}
          with 575+ ⭐ on GitHub. Building scalable systems with{' '}
          <span className="hero-accent">Go</span>, PostgreSQL, and microservices.
        </p>
        <p className="hero-location">Mumbai, India</p>

        <div className="hero-links">
          <a
            href="https://github.com/chinmay-sawant"
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
          >
            github
            <ExternalIcon />
          </a>
          <span className="hero-links-sep" aria-hidden="true">·</span>
          <a
            href="https://www.linkedin.com/in/chinmaysawant06"
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
          >
            linkedin
            <ExternalIcon />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;