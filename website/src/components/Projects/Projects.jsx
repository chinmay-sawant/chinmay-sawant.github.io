import ProjectCard from '../ProjectCard/ProjectCard';
import { projectsdata } from '../../utils/projectsData';
import './Projects.css';

const categories = [
  {
    key: 'go',
    title: 'Go',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
  },
  {
    key: 'java',
    title: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    key: 'python',
    title: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    key: 'react',
    title: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    key: 'vscode',
    title: 'VS Code',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  },
  {
    key: 'chrome',
    title: 'Chrome',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg',
  },
  {
    key: 'vibe',
    title: 'Experiments',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
];

const Projects = () => {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-label">
        <span className="section-number">04</span>
        <h2 className="section-title">Projects</h2>
        <span className="section-divider" />
      </div>

      {categories.map((category) => {
        const projects = projectsdata[category.key];
        if (!projects?.length) return null;

        return (
          <div key={category.key} className="projects-category">
            <h3 className="projects-category-title">
              <img src={category.icon} alt="" className="projects-category-icon" />
              {category.title}
            </h3>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;