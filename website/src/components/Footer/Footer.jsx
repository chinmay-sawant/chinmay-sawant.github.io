import './Footer.css';

const Footer = ({ onOpenWriting }) => {
  return (
    <footer className="footer">
      <div className="footer-invitation">
        <p className="section-eyebrow">Have something in mind?</p>
        <a href="https://github.com/chinmay-sawant" target="_blank" rel="noopener noreferrer">Let’s build something<span aria-hidden="true"> ↗</span></a>
      </div>
      <div className="footer-top">
        <div className="footer-links">
          <button type="button" onClick={onOpenWriting} aria-haspopup="dialog">Writing ↗</button>
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
          <a href="https://github.com/chinmay-sawant" target="_blank" rel="noopener noreferrer">GitHub profile</a>
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
