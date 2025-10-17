import React from 'react';
import { experienceData } from '../utils/data';
import './Experience.css';

const Experience = () => {
  return (
    <section className="section experience-section">
      <h2>experience</h2>
      {experienceData.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.company}</h3>
          <div className="role">{exp.role}</div>
          <div className="duration">{exp.duration}</div>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
