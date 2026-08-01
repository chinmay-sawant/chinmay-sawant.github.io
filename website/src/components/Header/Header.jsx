import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useActiveSection } from '../../hooks/useActiveSection';
import { HEADER_NAV, scrollToSection } from '../../utils/sections';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  const activeId = useActiveSection();

  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a
          href="#top"
          className={`site-logo${activeId === 'top' ? ' is-active' : ''}`}
          aria-label="Chinmay Sawant - home"
          onClick={(e) => handleNavClick(e, 'top')}
        >
          cs
        </a>

        <nav className="site-nav" aria-label="Primary">
          {HEADER_NAV.map(({ id, label }) => {
            const isActive = activeId === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`site-nav-link${isActive ? ' is-active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => handleNavClick(e, id)}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <div className="site-header-actions">
          <a
            href="mailto:sawantchinmay040@gmail.com"
            className="site-header-cta"
          >
            Email
          </a>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
};

export default Header;
