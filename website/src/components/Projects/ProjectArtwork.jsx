import './ProjectArtwork.css';

const DocumentArtwork = () => (
  <div className="art-document-stack">
    <div className="art-paper art-paper-back" />
    <div className="art-paper art-paper-front">
      <span className="art-paper-kicker">DOCUMENT / 001</span>
      <span className="art-paper-heading" />
      <div className="art-paper-lines"><i /><i /><i /></div>
      <div className="art-paper-table"><i /><i /><i /><i /><i /><i /></div>
      <span className="art-paper-signature">Chinmay.</span>
      <span className="art-paper-page">01</span>
    </div>
    <span className="art-file-label">.pdf</span>
  </div>
);

const LayoutArtwork = () => (
  <div className="art-layout-flow">
    <div className="art-code-window">
      <div className="art-window-bar"><i /><i /><i /></div>
      <div className="art-code-lines">
        <span>&lt;article&gt;</span>
        <span>&nbsp; &lt;h1&gt;Hello.&lt;/h1&gt;</span>
        <span>&nbsp; &lt;p&gt;An idea...&lt;/p&gt;</span>
        <span>&lt;/article&gt;</span>
      </div>
    </div>
    <span className="art-layout-arrow">↗</span>
    <div className="art-layout-page">
      <span>Hello.</span>
      <i /><i />
      <div className="art-layout-blocks"><i /><i /></div>
      <small>01 / 03</small>
    </div>
  </div>
);

const VectorArtwork = () => (
  <div className="art-vector-drawing">
    <svg viewBox="0 0 280 160" fill="none" aria-hidden="true">
      <path className="art-vector-guide" d="M50 115 82 34M206 45 234 113M50 115H234" />
      <path className="art-vector-curve" d="M50 115C82 34 206 45 234 113" />
      <path className="art-vector-shape" d="M87 113V73h109v40" />
      <circle className="art-vector-anchor" cx="50" cy="115" r="4" />
      <circle className="art-vector-anchor" cx="234" cy="113" r="4" />
      <circle className="art-vector-handle" cx="82" cy="34" r="3" />
      <circle className="art-vector-handle" cx="206" cy="45" r="3" />
    </svg>
    <span className="art-vector-origin">0,0</span>
    <span className="art-vector-label">path → pixels</span>
  </div>
);

const ProjectArtwork = ({ kind }) => (
  <div className={`project-artwork project-artwork--${kind}`} aria-hidden="true">
    {kind === 'document' && <DocumentArtwork />}
    {kind === 'layout' && <LayoutArtwork />}
    {kind === 'vector' && <VectorArtwork />}
  </div>
);

export default ProjectArtwork;
