import GitHubStarsProvider from './context/GitHubStarsProvider';
import { useTheme } from './hooks/useTheme';
import { useReveal } from './hooks/useReveal';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ArticleList from './components/Articles/ArticleList';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  useReveal();

  return (
    <GitHubStarsProvider>
      <div className="site">
        <a href="#main" className="sr-only">
          Skip to content
        </a>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <div className="container">
          <main id="main" className="main">
            <Hero />
            <Projects />
            <Experience />
            <About />
            <Skills />
            <ArticleList />
          </main>
          <Footer />
        </div>
      </div>
    </GitHubStarsProvider>
  );
}

export default App;
