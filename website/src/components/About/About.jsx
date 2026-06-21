import GitHubRepoLink from '../GitHubRepoLink/GitHubRepoLink';
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
          Polyglot systems engineer with 6.4 years of experience across
          healthcare and edtech. My foundation is in Java and Python — Spring
          Boot services, JasperReports reporting, bulk PDF generation, and 40+
          automation utilities that cut manual work from days to minutes. Over
          the last 2 years working as a Golang developer at CitiusTech — 40+
          AWS Lambda microservices with gRPC and GraphQL, plus open source
          projects like{' '}
          <GitHubRepoLink
            repo="chinmay-sawant/gopdfsuit"
            href="https://github.com/chinmay-sawant/gopdfsuit"
            className="about-link"
          >
            GoPDFSuit
          </GitHubRepoLink>
          ,{' '}
          <GitHubRepoLink
            repo="chinmay-sawant/deslop"
            href="https://github.com/chinmay-sawant/deslop"
            className="about-link"
          >
            deslop
          </GitHubRepoLink>
          , and currently building{' '}
          <a
            href="https://github.com/chinmay-sawant/SlopGuard"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            SlopGuard
          </a>
          .
        </p>
        <p>
          I use AI-assisted development (Copilot, Windsurf, Codex, Opencode, Cursor) to ship faster and
          pick up new stacks quickly — which is how I&apos;ve moved from
          Java/Python backends into Go microservices and now Rust for static
          analysis tooling.
        </p>
        <p>
          Beyond my day-to-day project work, I like to explore other
          technologies and stacks — VS Code extensions, Chrome extensions, and
          side projects in languages I haven&apos;t used at work yet.
        </p>
      </div>
    </section>
  );
};

export default About;