import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();

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

      gsap.utils.toArray('[data-animate]').forEach(section => {
        const variant = section.dataset.animate || 'fade-up';
        const base = { autoAlpha: 0 };
        const to = {
          autoAlpha: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse'
          }
        };

        switch (variant) {
          case 'fade-left':
            base.x = -60;
            to.x = 0;
            break;
          case 'fade-right':
            base.x = 60;
            to.x = 0;
            break;
          case 'fade-down':
            base.y = -50;
            to.y = 0;
            break;
          case 'zoom-in':
            base.scale = 0.94;
            to.scale = 1;
            break;
          case 'tilt-in':
            base.y = 40;
            base.rotateX = 8;
            to.y = 0;
            to.rotateX = 0;
            break;
          default:
            base.y = 40;
            to.y = 0;
        }

        gsap.fromTo(section, base, to);

        const childItems = section.querySelectorAll('[data-animate-child]');
        if (childItems.length) {
          gsap.from(childItems, {
            y: 24,
            autoAlpha: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: section,
              start: 'top 75%'
            }
          });
        }
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

  useEffect(() => {
    if (!location.hash) return;

    let attempts = 0;
    const tryScroll = () => {
      const target = document.querySelector(location.hash);
      if (target) {
        window.dispatchEvent(
          new CustomEvent('scrollstack:scrollto', {
            detail: { selector: location.hash, offset: -24 }
          })
        );
        return;
      }

      if (attempts < 12) {
        attempts += 1;
        requestAnimationFrame(tryScroll);
      }
    };

    tryScroll();
  }, [location]);

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
