import './About.css';

const About = () => {
  return (
    <section className="section about-section reveal" id="about">
      <div className="section-header">
        <h2 className="section-title">About</h2>
      </div>
      <div className="section-body">
        <p>
          I am a software engineer who owns features end to end: from collaborating
          with customers on refining requirements through to implementing the
          features. At CitiusTech I work on the patient portal, which is based on
          Golang microservices on AWS (Lambda, gRPC, GraphQL), shipping features
          across the full stack of services rather than isolated tickets. Earlier
          at NSEIT I spent years modernizing exam platforms and building reporting
          and automation in Java and Python.
        </p>
        <p>
          Beyond day-to-day product work, I am always exploring and learning,
          especially with AI-assisted workflows (Copilot, Cursor, Codex, and
          friends). That habit has turned into real artifacts: VS Code and
          Chrome extensions, static analyzers for the AI coding era, call-graph
          visualizers for legacy codebases, and a full-fledged PDF engine built
          from scratch in Go (GoPDFSuit, 585+ GitHub stars) when third-party APIs
          were not the right tradeoff.
        </p>
        <p>
          I write about what I find: architecture notes, performance wins, and
          lessons from open source, so the next person (or future me) can move
          faster. Side projects often start as an itch at work or a curiosity
          about a new language or stack; some stay experiments, others become
          tools I maintain and share.
        </p>
        <p>
          If it involves systems thinking, developer experience, or turning a
          half-baked idea into something people can actually use, I am usually
          interested.
        </p>
      </div>
    </section>
  );
};

export default About;
