import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useActiveSection } from '../../hooks/useActiveSection';
import { HEADER_NAV, scrollToSection } from '../../utils/sections';
import './Header.css';

const Header = ({ theme, toggleTheme, onOpenWriting }) => {
  const activeId = useActiveSection();
  const navigate = (event, id) => { event.preventDefault(); scrollToSection(id); };
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#about" className="site-logo" aria-label="Chinmay Sawant, home" onClick={event => navigate(event, 'about')}>cs<span>.</span></a>
        <nav className="site-nav" aria-label="Primary">
          {HEADER_NAV.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={`site-nav-link${activeId === id ? ' is-active' : ''}`}
              aria-current={activeId === id ? 'location' : undefined} onClick={event => navigate(event, id)}>{label}</a>
          ))}
          <button type="button" className="site-nav-link writing-trigger" data-open-writing onClick={onOpenWriting}
            aria-haspopup="dialog">Writing <span aria-hidden="true">↗</span></button>
        </nav>
        <div className="site-header-actions">
          <a href="mailto:sawantchinmay040@gmail.com" className="site-header-cta">Let’s talk <span aria-hidden="true">↗</span></a>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
};
export default Header;
