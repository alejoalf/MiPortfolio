import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Container, Row, Col, Button } from 'react-bootstrap';
import perfil from '../assets/perfil.png';
import DecryptedText from './DecryptedText';

const Hero = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} position-relative soft-grid`}
      style={{ minHeight: '100vh', paddingTop: '80px', display: 'flex', alignItems: 'center' }}
    >
      <Container className="section-shell">
        <Row className="align-items-center g-4">
          <Col lg={6} className="mb-5 mb-lg-0">
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
                <DecryptedText text="Desarrollador Full Stack" animateOn="view" revealDirection="end" speed={100} maxIterations={20} />
              </h2>
              <p className="lead mb-4 text-muted">
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
                  className="btn-animated"
                >
                  Contáctame
                </Button>
                <Button
                  href="#projects"
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  size="lg"
                  className={`btn-animated btn-ghost ${darkMode ? '' : 'light'}`}
                >
                  Ver proyectos
                </Button>
              </div>
            </motion.div>
          </Col>

          <Col lg={6} className="text-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="d-flex justify-content-center"
            >
              <div className={`media-frame ${darkMode ? '' : 'light'}`} style={{ width: '320px', height: '320px', borderRadius: '28px', background: '#0d1117' }}>
                <img
                  src={perfil}
                  alt="Foto de perfil"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;