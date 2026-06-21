import { experienceData } from '../../utils/data';
import './Experience.css';

const Experience = () => {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-label">
        <span className="section-number">02</span>
        <h2 className="section-title">Experience</h2>
        <span className="section-divider" />
      </div>
      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <article key={index} className="experience-item">
            <div className="experience-meta">
              <time className="experience-duration">{exp.duration}</time>
            </div>
            <div className="experience-content">
              <h3 className="experience-role">{exp.role}</h3>
              <p className="experience-company">{exp.company}</p>
              {exp.highlights ? (
                <ul className="experience-highlights">
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="experience-description">{exp.description}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;