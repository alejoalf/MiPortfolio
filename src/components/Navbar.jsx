import { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BootstrapNavbar 
      expand="lg" 
      fixed="top" 
      expanded={expanded}
      className="navbar-dark nav-glass py-2 force-dark-nav"
    >
      <Container>
        <BootstrapNavbar.Brand href="#home" className="d-flex align-items-center gap-2 fw-bold">
          <span className="badge bg-success-subtle text-dark px-3 py-2 rounded-pill">AA</span>
          <span className="text-uppercase" style={{ letterSpacing: '0.08em' }}>Alejo Alfonso</span>
        </BootstrapNavbar.Brand>
        <div className="d-flex d-lg-none">
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
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;