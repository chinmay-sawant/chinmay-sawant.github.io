import { skillsData, curatedSkillGroups } from '../../utils/data';
import './Skills.css';

const skillMap = Object.fromEntries(skillsData.map((s) => [s.name, s]));

const Skills = () => {
  return (
    <section className="section skills-section reveal" id="stack">
      <div className="section-header">
        <h2 className="section-title">Stack</h2>
        <span className="section-aside">What I use most</span>
      </div>
      <div className="skills-groups">
        {curatedSkillGroups.map((group) => (
          <div key={group.label} className="skill-group">
            <h3 className="skill-group-label">{group.label}</h3>
            <div className="skills-grid">
              {group.skills.map((name) => {
                const skill = skillMap[name];
                if (!skill) return null;
                return (
                  <span key={name} className="skill-tag">
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        className="skill-icon"
                        alt=""
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    )}
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
