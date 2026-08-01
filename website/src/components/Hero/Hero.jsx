import './Hero.css';

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Hero = () => {
  return (
    <section className="hero section" id="top" aria-labelledby="hero-name">
      <p className="hero-eyebrow">Systems engineer · open source</p>
      <h1 className="hero-name" id="hero-name">
        Chinmay Sawant
      </h1>
      <p className="hero-lede">
        Building microservices and developer tools in{' '}
        <span className="hero-accent">Go</span>, with roots in{' '}
        <span className="hero-accent">Java</span> and{' '}
        <span className="hero-accent">Python</span>. 6+ years across healthcare
        and edtech — currently at CitiusTech, Mumbai.
      </p>
      <p className="hero-proof">
        Open source: GoPDFSuit, deslop, SlopGuard, and related tooling for PDF
        engines and static analysis.
      </p>

      <div className="hero-actions">
        <a href="#work" className="btn btn-primary">
          View work
        </a>
        <a href="mailto:sawantchinmay040@gmail.com" className="btn btn-ghost">
          Get in touch
        </a>
      </div>

      <div className="hero-links">
        <a
          href="https://github.com/chinmay-sawant"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          GitHub
          <ExternalIcon />
        </a>
        <span className="hero-links-sep" aria-hidden="true">
          /
        </span>
        <a
          href="https://www.linkedin.com/in/chinmaysawant06"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          LinkedIn
          <ExternalIcon />
        </a>
        <span className="hero-links-sep" aria-hidden="true">
          /
        </span>
        <a href="mailto:sawantchinmay040@gmail.com" className="external-link">
          Email
          <ExternalIcon />
        </a>
      </div>
    </section>
  );
};

export default Hero;
