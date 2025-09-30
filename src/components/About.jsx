import { motion } from 'framer-motion';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import perfil from '../assets/perfil2.png'; // Asegúrate de que la ruta y el nombre coincidan

const About = ({ darkMode }) => {
  return (
    <section id="about" className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container className="py-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3">Sobre Mí</h2>
          <div className="border-bottom border-primary mx-auto" style={{width: '80px', height: '4px'}}></div>
        </motion.div>
        
        <Row className="align-items-center gy-4">
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div 
                className="d-flex align-items-center justify-content-center rounded shadow-sm" 
                style={{ height: "400px", width: "100%", background: 'var(--primary)', overflow: 'hidden' }}
              >
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
              <h3 className="fs-2 fw-semibold mb-3">Desarrollador Web Apasionado</h3>
              <p className="lead mb-4">
                Soy un desarrollador web full stack con experiencia creando aplicaciones web modernas y atractivas. Me especializo en React, Node.js y bases de datos SQL.
              </p>
              <p className="mb-4">
                Mi objetivo es crear soluciones digitales que no solo se vean bien, sino que también proporcionen una experiencia de usuario excepcional y resuelvan problemas reales.
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
              
              <Button 
                href="#contact" 
                variant="primary"
                size="lg"
              >
                Contáctame
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;