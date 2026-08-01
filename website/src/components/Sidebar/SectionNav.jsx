import { useState } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import { PAGE_SECTIONS, scrollToSection } from '../../utils/sections';
import './SectionNav.css';

const SectionNav = () => {
  const activeId = useActiveSection();
  const [hovered, setHovered] = useState(false);

  const handleClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <nav
      className={`section-nav${hovered ? ' is-expanded' : ''}`}
      aria-label="Page sections"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setHovered(false);
        }
      }}
    >
      <ul className="section-nav-list">
        {PAGE_SECTIONS.map(({ id, label }) => {
          const isActive = activeId === id;
          return (
            <li key={id} className="section-nav-item">
              <a
                href={`#${id}`}
                className={`section-nav-link${isActive ? ' is-active' : ''}`}
                aria-current={isActive ? 'true' : undefined}
                aria-label={label}
                onClick={(e) => handleClick(e, id)}
              >
                <span className="section-nav-label">{label}</span>
                <span className="section-nav-dash" aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SectionNav;
