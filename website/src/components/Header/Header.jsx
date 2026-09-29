import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { PORTFOLIO_VIEWS } from '../../utils/views';
import './Header.css';

const Header = ({ theme, toggleTheme, view, onNavigate, onOpenWriting }) => {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="site-header-brand">
          <a href="#about" className="site-logo" aria-label="Chinmay Sawant, home"
            onClick={event => onNavigate(event, 'about')}>cs<span>.</span></a>
        </div>
        <nav className="site-nav" aria-label="Primary">
          {PORTFOLIO_VIEWS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={`site-nav-link${view === id ? ' is-active' : ''}`}
              aria-current={view === id ? 'page' : undefined} onClick={event => onNavigate(event, id)}>{label}</a>
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
