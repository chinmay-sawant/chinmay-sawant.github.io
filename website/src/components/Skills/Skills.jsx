import { skillsData, skillGroups } from '../../utils/data';
import './Skills.css';

const skillMap = Object.fromEntries(skillsData.map((s) => [s.name, s]));

const Skills = () => {
  return (
    <section className="section skills-section" id="stack">
      <div className="section-label">
        <span className="section-number">03</span>
        <h2 className="section-title">Stack</h2>
        <span className="section-divider" />
      </div>
      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div key={group.label} className="skill-group">
            <h3 className="skill-group-label">{group.label}</h3>
            <div className="skills-grid">
              {group.skills.map((name) => {
                const skill = skillMap[name];
                if (!skill) return null;
                return (
                  <span key={name} className="skill-tag">
                    <img src={skill.icon} className="skill-icon" alt="" />
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;