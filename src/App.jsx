import { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
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
  const darkMode = true;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scroller = document.querySelector('.scroll-stack-scroller');
    if (!scroller) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const handleScroll = () => ScrollTrigger.update();

    scroller.addEventListener('scroll', handleScroll, { passive: true });

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      ScrollTrigger.defaults({ scroller });

      gsap.utils.toArray('[data-animate="section"]').forEach(section => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 78%',
              end: 'bottom 60%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      gsap.utils.toArray('[data-parallax]').forEach(element => {
        const strength = Number(element.dataset.parallax || 0.2);
        gsap.to(element, {
          yPercent: strength * 30,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });

      gsap.utils.toArray('[data-scrub="accent"]').forEach(element => {
        gsap.fromTo(
          element,
          { scaleX: 0.2, transformOrigin: 'left center' },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              end: 'bottom 70%',
              scrub: true
            }
          }
        );
      });

      gsap.utils.toArray('[data-pin="true"]').forEach(element => {
        ScrollTrigger.create({
          trigger: element,
          start: 'top center',
          end: '+=240',
          pin: true,
          pinSpacing: true,
          pinType: 'transform'
        });
      });
    }, scroller);

    ScrollTrigger.refresh();

    return () => {
      scroller.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    document.body.classList.add('bg-dark');
    document.body.classList.remove('bg-light');
  }, []);

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
        <Navbar />
        <ScrollStack
          stackPosition="calc(50% - 48px)"
          scaleEndPosition="calc(50% - 48px)"
          itemDistance={0}
          baseScale={1}
          itemScale={0}
          itemStackDistance={0}
        >
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
