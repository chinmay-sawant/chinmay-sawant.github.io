import './Hero.css';

const Hero = () => (
  <div className="hero" id="top">
    <p className="hero-eyebrow"><span aria-hidden="true" /> Software engineer · Mumbai, India</p>
    <h1 className="hero-name" id="hero-name">Chinmay<br />Sawant<span>.</span></h1>
    <p className="hero-note">Systems thinking. A curious mind.</p>
    <p className="hero-lede">
      I build backend systems and developer tools in <strong>Go</strong>,
      with roots in Java and Python. My work spans healthcare, edtech,
      and the open source projects that start with a simple question:
      <em> could this work better?</em>
    </p>
    <div className="hero-actions">
      <a href="#work" className="btn btn-primary">Explore my work <span aria-hidden="true">↗</span></a>
      <a href="mailto:sawantchinmay040@gmail.com" className="hero-contact">Say hello <span aria-hidden="true">↗</span></a>
    </div>
    <div className="hero-links">
      <a href="https://github.com/chinmay-sawant" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      <span aria-hidden="true">/</span>
      <a href="https://www.linkedin.com/in/chinmaysawant06" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
    </div>
  </div>
);
export default Hero;
