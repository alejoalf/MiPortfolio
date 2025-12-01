import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollStack, { ScrollStackItem } from './components/ScrollStack';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LetterGlitch from './components/LetterGlitch';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-dark');
      document.body.classList.remove('bg-light');
    } else {
      document.body.classList.add('bg-light');
      document.body.classList.remove('bg-dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.3 }}>
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>
      <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <ScrollStack stackPosition="0" itemDistance={50} baseScale={1} itemScale={0}>
          <ScrollStackItem>
            <Hero darkMode={darkMode} />
          </ScrollStackItem>
          <ScrollStackItem>
            <About darkMode={darkMode} />
          </ScrollStackItem>
          <ScrollStackItem>
            <Skills darkMode={darkMode} />
          </ScrollStackItem>
          <ScrollStackItem>
            <Projects darkMode={darkMode} />
          </ScrollStackItem>
          <ScrollStackItem>
            <Contact darkMode={darkMode} />
          </ScrollStackItem>
          <ScrollStackItem>
            <Footer darkMode={darkMode} />
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </div>
  );
}

export default App;
