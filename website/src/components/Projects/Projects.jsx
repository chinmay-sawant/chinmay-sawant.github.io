import { useMemo } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { getFeaturedProjects } from '../../utils/projectsData';
import './Projects.css';

const Projects = () => {
  const featured = useMemo(() => getFeaturedProjects(), []);

  return (
    <section className="section projects-section" id="work" aria-labelledby="work-heading">
      <div className="section-header">
        <div>
          <span className="section-eyebrow">Things I&apos;ve built</span>
          <h1 className="section-title" id="work-heading">
            Selected work<span className="projects-title-dot">.</span>
          </h1>
        </div>
        <span className="section-aside">Independent tools. Open source.</span>
      </div>
      <p className="projects-intro">
        Lately, I&apos;ve been deep in documents. How they&apos;re built, how they&apos;re
        rendered, and what happens inside a PDF. These are the projects I&apos;m working on.
      </p>
      <div className="projects-featured">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} variant="featured" />
        ))}
      </div>
    </section>
  );
};

export default Projects;
