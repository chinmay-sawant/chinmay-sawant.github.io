import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  useScrollAnimation();

  return (
    <>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className="container">
        <Header />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Interests />
      </div>
      <Footer />
    </>
  );
}

export default App;
