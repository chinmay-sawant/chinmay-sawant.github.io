import './About.css';

const About = () => {
  return (
    <section className="section about-section reveal" id="about">
      <div className="section-header">
        <h2 className="section-title">About</h2>
      </div>
      <div className="section-body">
        <p>
          I ship backend systems end to end — APIs, data pipelines, and the
          tools teams need to debug and understand them. At CitiusTech I work
          on patient-care microservices (AWS Lambda, gRPC, GraphQL); earlier at
          NSEIT I modernized exam platforms and built reporting and automation
          in Java and Python.
        </p>
        <p>
          Outside product work I maintain open-source PDF and static-analysis
          tools, and use AI-assisted workflows (Copilot, Cursor, Codex) to move
          faster across stacks — including Rust for language tooling.
        </p>
        <p>
          Side projects range from VS Code and Chrome extensions to experiments
          in languages I do not use day to day.
        </p>
      </div>
    </section>
  );
};

export default About;
