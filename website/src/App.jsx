import { useState } from 'react';
import ArticleList from './components/Articles/ArticleList';
import { useTheme } from './hooks/useTheme';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Interests from './components/Interests/Interests';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [view, setView] = useState('profile');

  return (
    <div className="site">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className="container">
        <Header view={view} setView={setView} />

        {view === 'profile' ? (
          <main className="main view-section profile">
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Interests />
          </main>
        ) : (
          <main className="main view-section articles">
            <ArticleList />
          </main>
        )}

        <Footer />
      </div>
    </div>
  );
}

export default App;