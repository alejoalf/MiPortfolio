import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Container, Row, Col, Button } from 'react-bootstrap';
import perfil from '../assets/perfil.png';
import DecryptedText from './DecryptedText';

const TypingText = ({ text, speed = 70, className = '' }) => {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplay('');

    const interval = setInterval(() => {
      index += 1;
      setDisplay(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {display}
      <span className="typing-cursor" aria-hidden="true">|</span>
    </span>
  );
};

const Hero = ({ darkMode }) => {
  const heroRef = useRef(null);
  const introRef = useRef(null);

  useLayoutEffect(() => {
    const scope = heroRef.current;
    if (!scope) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups = [];

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion && introRef.current) {
        const text = introRef.current.dataset.splitText || introRef.current.textContent || '';
        introRef.current.dataset.splitText = text;
        const words = text.trim().split(/\s+/);
        introRef.current.innerHTML = words
          .map(word => `<span class="split-word"><span>${word}</span></span>`)
          .join(' ');

        const wordSpans = introRef.current.querySelectorAll('.split-word > span');
        gsap.from(wordSpans, {
          yPercent: 120,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.03,
          scrollTrigger: {
            trigger: introRef.current,
            start: 'top 85%'
          }
        });
      }

      gsap.utils.toArray('[data-magnetic]', scope).forEach(target => {
        const strength = Number(target.dataset.magnetic || 12);
        const setX = gsap.quickTo(target, 'x', { duration: 0.4, ease: 'power3.out' });
        const setY = gsap.quickTo(target, 'y', { duration: 0.4, ease: 'power3.out' });

        const handleMove = event => {
          const rect = target.getBoundingClientRect();
          const relX = (event.clientX - rect.left - rect.width / 2) / rect.width;
          const relY = (event.clientY - rect.top - rect.height / 2) / rect.height;
          setX(relX * strength);
          setY(relY * strength);
        };

        const handleLeave = () => {
          setX(0);
          setY(0);
        };

        target.addEventListener('pointermove', handleMove);
        target.addEventListener('pointerleave', handleLeave);

        cleanups.push(() => {
          target.removeEventListener('pointermove', handleMove);
          target.removeEventListener('pointerleave', handleLeave);
        });
      });
    }, scope);

    return () => {
      cleanups.forEach(cleanup => cleanup());
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="home"
      data-animate="fade-up"
      className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} position-relative soft-grid`}
      style={{ minHeight: '100vh', paddingTop: '80px', display: 'flex', alignItems: 'center' }}
      ref={heroRef}
    >
      <Container className="section-shell">
        <Row className="align-items-center g-4">
          <Col lg={6} className="mb-5 mb-lg-0" data-animate-child>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-3">
                <span className={`eyebrow ${darkMode ? '' : 'light'}`}>Disponible para nuevos proyectos</span>
              </div>
              <h1 className="display-4 fw-bold mb-3">
                <DecryptedText text="Hola, soy " animateOn="view" revealDirection="start" speed={100} maxIterations={20} />
                <span className="text-primary">
                  <DecryptedText text="Alejo Alfonso" animateOn="view" revealDirection="center" speed={100} maxIterations={20} />
                </span>
              </h1>
              <h2 className="fs-2 mb-4 text-secondary">
                <TypingText text="Desarrollador Full Stack" className="hero-typing" />
              </h2>
              <p className="lead mb-4 text-muted" ref={introRef} data-split="words">
                Apasionado por crear experiencias precisas y veloces. Especializado en front y back con un enfoque en productos escalables.
              </p>
              <div className="d-flex gap-3 mb-4">
                <a href="https://github.com/alejoalf" className="fs-3 text-reset">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/alejo-alfonso-68632633a/" className="fs-3 text-reset">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/ale.alfonsoo/" className="fs-3 text-reset">
                  <FaInstagram />
                </a>
              </div>
              <div className="d-flex flex-wrap gap-3 hero-cta">
                <Button
                  href="#contact"
                  variant="primary"
                  size="lg"
                  className="btn-animated magnetic-target"
                  data-magnetic="14"
                >
                  Contáctame
                </Button>
                <Button
                  href="#projects"
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  size="lg"
                  className={`btn-animated btn-ghost magnetic-target ${darkMode ? '' : 'light'}`}
                  data-magnetic="14"
                >
                  Ver proyectos
                </Button>
              </div>
            </motion.div>
          </Col>

          <Col lg={6} className="text-center" data-animate-child>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="d-flex justify-content-center"
            >
              <div className="hero-media-pin" data-pin="true">
                <div
                  className={`media-frame magnetic-target ${darkMode ? '' : 'light'}`}
                  style={{ width: '320px', height: '320px', borderRadius: '28px', background: '#0d1117' }}
                  data-magnetic="10"
                  data-parallax="0.25"
                >
                  <img
                    src={perfil}
                    alt="Foto de perfil"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;