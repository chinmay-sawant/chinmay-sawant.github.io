import { useEffect, useState } from 'react';
import GitHubStarsProvider from './context/GitHubStarsProvider';
import { useTheme } from './hooks/useTheme';
import { useReveal } from './hooks/useReveal';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import WritingWindow from './components/WritingWindow/WritingWindow';
import Interests from './components/Interests/Interests';
import Footer from './components/Footer/Footer';
import SectionNav from './components/Sidebar/SectionNav';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [writingOpen, setWritingOpen] = useState(() => window.location.hash === '#writing');
  useReveal();

  useEffect(() => {
    const syncWriting = () => setWritingOpen(window.location.hash === '#writing');
    window.addEventListener('hashchange', syncWriting);
    return () => window.removeEventListener('hashchange', syncWriting);
  }, []);

  const closeWriting = () => {
    if (window.location.hash === '#writing') {
      window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search);
    }
    setWritingOpen(false);
  };

  return (
    <GitHubStarsProvider>
      <div className="site">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header theme={theme} toggleTheme={toggleTheme} onOpenWriting={() => setWritingOpen(true)} />
        <SectionNav />
        <div className="container">
          <main id="main" className="main">
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Interests />
          </main>
          <Footer onOpenWriting={() => setWritingOpen(true)} />
        </div>
        <WritingWindow open={writingOpen} onClose={closeWriting} />
      </div>
    </GitHubStarsProvider>
  );
}

export default App;
