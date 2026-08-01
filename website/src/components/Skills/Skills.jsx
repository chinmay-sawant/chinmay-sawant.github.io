import { useMemo, useState } from 'react';
import { skillsData, skillGroups, primarySkills } from '../../utils/data';
import './Skills.css';

const skillMap = Object.fromEntries(skillsData.map((s) => [s.name, s]));

const SkillTag = ({ name }) => {
  const skill = skillMap[name];
  if (!skill) return null;
  return (
    <span className="skill-tag">
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
};

const Skills = () => {
  const [expanded, setExpanded] = useState(false);

  const alsoUsedGroups = useMemo(() => {
    const primary = new Set(primarySkills);
    return skillGroups
      .map((group) => ({
        ...group,
        skills: group.skills.filter((name) => !primary.has(name)),
      }))
      .filter((group) => group.skills.length > 0);
  }, []);

  const alsoCount = alsoUsedGroups.reduce((n, g) => n + g.skills.length, 0);

  return (
    <section className="section skills-section reveal" id="stack">
      <div className="section-header">
        <h2 className="section-title">Stack</h2>
        <span className="section-aside">What I use most</span>
      </div>

      <div className="skills-primary" aria-label="Primary skills">
        {primarySkills.map((name) => (
          <SkillTag key={name} name={name} />
        ))}
      </div>

      {alsoCount > 0 && (
        <div className="skills-more">
          <button
            type="button"
            className="skills-more-toggle"
            aria-expanded={expanded}
            aria-controls="skills-also-used"
            onClick={() => setExpanded((v) => !v)}
          >
            <span>{expanded ? 'Hide also used' : 'Also used'}</span>
            <span className="skills-more-count">{alsoCount}</span>
            <span
              className={`skills-more-chevron${expanded ? ' is-open' : ''}`}
              aria-hidden="true"
            >
              ▾
            </span>
          </button>

          <div
            id="skills-also-used"
            className={`skills-also${expanded ? ' is-open' : ''}`}
            hidden={!expanded}
          >
            <div className="skills-groups">
              {alsoUsedGroups.map((group) => (
                <div key={group.label} className="skill-group">
                  <h3 className="skill-group-label">{group.label}</h3>
                  <div className="skills-grid">
                    {group.skills.map((name) => (
                      <SkillTag key={name} name={name} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
