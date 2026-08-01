import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-links">
          <a
            href="https://github.com/chinmay-sawant"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/chinmaysawant06"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:sawantchinmay040@gmail.com">Email</a>
          <a href="https://dev.to/chinmay-sawant" target="_blank" rel="noopener noreferrer">
            Dev.to
          </a>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Chinmay Sawant</p>
    </footer>
  );
};

export default Footer;
