import { useState } from 'react';
import ProfileToggleButton from './components/ProfileToggleButton/ProfileToggleButton';
import ArticleList from './components/Articles/ArticleList';

import { useTheme } from './hooks/useTheme';
import { useScrollAnimation } from './hooks/useScrollAnimation';
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
  useScrollAnimation();
  const [view, setView] = useState('profile');

  return (
    <>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className="container">
        <Header />
        
        <ProfileToggleButton view={view} setView={setView} />
        
        {view === 'profile' ? (
          <div className="view-section profile">
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Interests />
          </div>
        ) : (
          <div className="view-section articles">
            <ArticleList />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;
