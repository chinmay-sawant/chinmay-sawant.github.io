import { useContext, useMemo, useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { getOtherProjects } from '../../utils/projectsData';
import { getGitHubRepo } from '../../utils/github';
import { GitHubStarsContext } from '../../context/githubStarsContext';
import RecentProjects from './RecentProjects';
import './Projects.css';

const starCountFor = (project, starsMap) => {
  const repo = getGitHubRepo(project);
  return repo ? starsMap[repo.toLowerCase()] ?? 0 : 0;
};

const ProjectArchive = () => {
  const [category, setCategory] = useState('all');
  const [expanded, setExpanded] = useState(false);
  const { starsMap } = useContext(GitHubStarsContext);
  const projects = useMemo(() => [...getOtherProjects()].sort(
    (a, b) => starCountFor(b, starsMap) - starCountFor(a, starsMap),
  ), [starsMap]);
  const categories = useMemo(
    () => ['all', ...new Set(projects.map((project) => project.category))],
    [projects],
  );
  const filtered = category === 'all'
    ? projects
    : projects.filter((project) => project.category === category);
  const visible = expanded ? filtered : filtered.slice(0, 4);

  return (
    <section className="section projects-section" id="archive" aria-labelledby="archive-heading">
      <div className="section-header">
        <div>
          <span className="section-eyebrow">Tools, experiments &amp; side projects</span>
          <h1 className="section-title" id="archive-heading">
            Archived projects<span className="projects-title-dot">.</span>
          </h1>
        </div>
        <span className="section-aside projects-archive-count">
          {projects.length} projects &amp; experiments
        </span>
      </div>
      <p className="projects-intro">
        Static analyzers, browser extensions, and the other ideas I&apos;ve put into code.
        Browse by technology or open the full collection.
      </p>
      <div className="projects-more">
        <div className="project-filters" role="group" aria-label="Filter projects by technology">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={`project-filter${category === item ? ' is-active' : ''}`}
              aria-pressed={category === item}
              onClick={() => { setCategory(item); setExpanded(false); }}
            >
              {item === 'all' ? 'All projects' : item === 'vscode' ? 'VS Code' : item}
            </button>
          ))}
        </div>
        <p className="projects-filter-summary" aria-live="polite">
          Showing {visible.length} of {filtered.length} projects
        </p>
        <div className="projects-grid" id="project-archive">
          {visible.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
        {filtered.length > 4 && (
          <button
            className="projects-expand"
            type="button"
            aria-expanded={expanded}
            aria-controls="project-archive"
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? 'Show fewer projects' : `Explore all ${filtered.length} projects`}
            <span aria-hidden="true">{expanded ? '−' : '+'}</span>
          </button>
        )}
      </div>
      <RecentProjects />
    </section>
  );
};

export default ProjectArchive;
