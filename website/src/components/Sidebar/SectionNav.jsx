import { useActiveSection } from '../../hooks/useActiveSection';
import { PAGE_SECTIONS, scrollToSection } from '../../utils/sections';
import './SectionNav.css';

const SectionNav = () => {
  const activeId = useActiveSection();
  return (
    <nav className="section-nav" aria-label="Page sections">
      <ul className="section-nav-list">
        {PAGE_SECTIONS.map(({ id, label }, index) => (
          <li key={id}>
            <a href={`#${id}`} className={`section-nav-link${activeId === id ? ' is-active' : ''}`}
              aria-current={activeId === id ? 'location' : undefined}
              onClick={event => { event.preventDefault(); scrollToSection(id); }}>
              <span className="section-nav-number" aria-hidden="true">0{index + 1}</span>
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default SectionNav;
