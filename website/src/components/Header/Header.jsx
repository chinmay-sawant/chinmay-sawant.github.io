import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

const NAV = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
  { href: '#writing', label: 'Writing' },
];

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#top" className="site-logo" aria-label="Chinmay Sawant — home">
          cs
        </a>

        <nav className="site-nav" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="site-nav-link">
              {item.label}
            </a>
          ))}
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
