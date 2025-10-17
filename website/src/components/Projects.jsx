import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsdata } from '../utils/projectsData';
import './Projects.css';

const Projects = () => {
  const categories = [
    { 
      key: 'python', 
      title: 'python_projects',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    { 
      key: 'go', 
      title: 'go_projects',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg'
    },
    { 
      key: 'java', 
      title: 'java_projects',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    { 
      key: 'react', 
      title: 'react_projects',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
      key: 'vscode', 
      title: 'vscode_extensions',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    },
    { 
      key: 'chrome', 
      title: 'chrome_extensions',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg'
    },
    { 
      key: 'vibe', 
      title: 'vibe_coded_projects',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    }
  ];

  return (
    <section className="section projects-section">
      <h2>featured_projects</h2>
      
      {categories.map(category => (
        <div key={category.key} className="projects-category">
          <h3>
            <img
              src={category.icon}
              className="skill-icon"
              alt={category.title}
              style={{ width: '18px', height: '18px', marginRight: '8px' }}
            />
            {category.title}
          </h3>
          <div className="projects-grid">
            {projectsdata[category.key]?.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
