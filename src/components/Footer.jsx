import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-4 footer-accent ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark light'}`}>
      <Container>
        <Row className="py-4 align-items-center">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h3 className="fw-bold">Alejo Alfonso</h3>
            <p className="small mb-0">Desarrollador Web Full Stack</p>
          </Col>
          
          <Col md={4} className="d-flex justify-content-center mb-3 mb-md-0">
            <ul className="nav">
              <li className="nav-item">
                <a href="#home" className="nav-link text-reset">Inicio</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link text-reset">Sobre Mí</a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link text-reset">Habilidades</a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link text-reset">Proyectos</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link text-reset">Contacto</a>
              </li>
            </ul>
          </Col>
          
          <Col md={4} className="d-flex justify-content-center justify-content-md-end">
            <a href="https://github.com/alejoalf" target="_blank" rel="noopener noreferrer" className="text-reset mx-2">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/alejo-alfonso-68632633a/" target="_blank" rel="noopener noreferrer" className="text-reset mx-2">
              <FaLinkedin size={24} />
            </a>
          </Col>
        </Row>
        
        <Row>
          <Col className="text-center pt-3 mt-3">
            <p className="small">&copy; {new Date().getFullYear()} Alejo Alfonso. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;