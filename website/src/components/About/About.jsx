import Hero from '../Hero/Hero';
import './About.css';

const About = () => (
  <section className="section about-section" id="about" aria-labelledby="hero-name">
    <img className="about-art" src="/images/about-botanical.webp" alt="" width="1536" height="1024" decoding="async" />
    <Hero />
    <details className="about-more">
      <summary>A little more about me <span aria-hidden="true">+</span></summary>
      <div className="section-body">
        <p>
          I own features from the first conversation with a customer to the code
          that ships. At CitiusTech, I work on patient care journeys with Go
          microservices on AWS, using Lambda, gRPC, and GraphQL. Earlier, at NSEIT,
          I modernized exam platforms and built reporting and automation with
          Java and Python.
        </p>
        <p>
          Outside product work, I make tools for problems I keep running into:
          PDF engines, HTML rendering, static analysis, call-graph visualizers,
          and browser and editor extensions. My current focus is gopdfsuit,
          gowkhtmltopdf, and SpectrePS. I also explore AI-assisted workflows with
          Copilot, Cursor, and Codex.
        </p>
        <p>
          I write down architecture decisions, performance findings, and open
          source lessons so I can return to them and other people can build on
          them. Some projects stay experiments. Others become tools I maintain
          and share.
        </p>
      </div>
    </details>
    <div className="about-context">
      <div><span className="context-label">Currently</span><p>Senior Golang Developer <span>at CitiusTech</span></p></div>
      <div><span className="context-label">Building</span><p>PDF tools &amp; backend systems</p></div>
      <div><span className="context-label">Beyond the keyboard</span><p>Books, bicycles &amp; a bit of chess</p></div>
    </div>
  </section>
);
export default About;
