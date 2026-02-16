import React from 'react';
import { skillsData } from '../../utils/data';
import './Skills.css';

const Skills = () => {
  return (
    <section className="section skills-section">
      <h2>technical_skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-tag">
            <img
              src={skill.icon}
              className="skill-icon"
              alt={skill.name}
            />
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
