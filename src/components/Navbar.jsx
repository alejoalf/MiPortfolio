import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BootstrapNavbar 
      expand="lg" 
      fixed="top" 
      expanded={expanded}
      className={darkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'}
    >
      <Container>
        <BootstrapNavbar.Brand href="#home" className="text-primary fw-bold">Portfolio</BootstrapNavbar.Brand>
        <div className="d-flex d-lg-none">
          <Button 
            variant={darkMode ? 'dark' : 'light'} 
            onClick={toggleDarkMode}
            className="me-2"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun className="text-warning" /> : <FaMoon />}
          </Button>
          <BootstrapNavbar.Toggle 
            aria-controls="basic-navbar-nav" 
            onClick={() => setExpanded(!expanded)}
          />
        </div>
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={() => setExpanded(false)}>Inicio</Nav.Link>
            <Nav.Link href="#about" onClick={() => setExpanded(false)}>Sobre mí</Nav.Link>
            <Nav.Link href="#skills" onClick={() => setExpanded(false)}>Habilidades</Nav.Link>
            <Nav.Link href="#projects" onClick={() => setExpanded(false)}>Proyectos</Nav.Link>
            <Nav.Link href="#contact" onClick={() => setExpanded(false)}>Contacto</Nav.Link>
          </Nav>
          <Button 
            variant={darkMode ? 'dark' : 'light'} 
            onClick={toggleDarkMode}
            className="d-none d-lg-block ms-2"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun className="text-warning" /> : <FaMoon />}
          </Button>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;