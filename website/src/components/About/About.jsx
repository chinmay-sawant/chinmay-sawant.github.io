import './About.css';

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="section-label">
        <span className="section-number">01</span>
        <h2 className="section-title">About</h2>
        <span className="section-divider" />
      </div>
      <div className="section-body">
        <p>
          Software engineer focused on backend systems - primarily Go and Java -
          with experience across edtech and healthcare. I care about clean
          architecture, reliable APIs, and systems that scale without drama.
        </p>
        <p>
          Currently building microservices with Go (Gin, GORM, gqlgen), Python,
          and cloud-native tooling at a healthcare company in Mumbai. Also
          experimenting with devtools - VS Code extensions, Chrome extensions,
          and open source libraries that make developers&apos; lives easier.
        </p>
      </div>
    </section>
  );
};

export default About;