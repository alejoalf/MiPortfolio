import { motion } from 'framer-motion';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import perfil from '../assets/perfil2.png'; // Asegúrate de que la ruta y el nombre coincidan

const About = ({ darkMode }) => {
  return (
    <section id="about" className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container className="py-5 section-shell">
        <div className="section-divider" aria-hidden="true"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <div className={`eyebrow mb-3 ${darkMode ? '' : 'light'}`}>Sobre mí</div>
          <h2 className="display-5 fw-bold mb-3">Diseño, código y foco en detalle</h2>
          <div className="section-title-accent"></div>
        </motion.div>
        
        <Row className="align-items-center gy-4">
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`media-frame ${darkMode ? '' : 'light'}`} style={{ height: '420px', width: '100%' }}>
                <img 
                  src={perfil} 
                  alt="Foto de perfil" 
                  style={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: "16px" }} 
                />
              </div>
            </motion.div>
          </Col>
          
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="ps-lg-4"
            >
              <h3 className="fs-2 fw-semibold mb-3">Desarrollador Apasionado</h3>
              <p className="lead mb-4 text-muted">
                Soy un desarrollador full stack con experiencia creando productos modernos y funcionales. Trabajo con React, Node.js y bases de datos SQL.
              </p>
              <p className="mb-4 text-muted">
                Mi objetivo es construir interfaces limpias, accesibles y rápidas que entreguen valor real a usuarios y negocios.
              </p>
              
              <Row className="mb-4 gy-3">
                <Col sm={6}>
                  <p className="mb-1 fw-semibold">Nombre:</p>
                  <p>Alejo Alfonso</p>
                </Col>
                <Col sm={6}>
                  <p className="mb-1 fw-semibold">Email:</p>
                  <p>alejoalfonsoaa@email.com</p>
                </Col>
                <Col sm={6}>
                  <p className="mb-1 fw-semibold">Ubicación:</p>
                  <p>Cordoba, Argentina</p>
                </Col>
                <Col sm={6}>
                  <p className="mb-1 fw-semibold">Disponibilidad:</p>
                  <p>Disponible</p>
                </Col>
              </Row>
              <div className="d-flex flex-wrap gap-3">
                <Button 
                  href="#contact" 
                  variant="primary"
                  size="lg"
                  className="btn-animated"
                >
                  Contáctame
                </Button>
                <Button
                  href="/cv.pdf"
                  variant={darkMode ? 'outline-light' : 'outline-dark'}
                  size="lg"
                  className={`btn-animated btn-ghost ${darkMode ? '' : 'light'}`}
                  download
                >
                  Descargar CV
                </Button>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;