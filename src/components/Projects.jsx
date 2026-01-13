import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import celulares1 from '../assets/celulares1.png'; // Asegúrate de que el nombre coincida
import angus from '../assets/angus.png';  
import TextPressure from './TextPressure';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: 'Rio cuarto celulares',
      description: 'Aplicación de comercio electrónico con carrito de compras y pasarela de pago para un negocio de venta de celulares.',
      image: celulares1,
      tags: ['React', 'Node.js', 'PostgreSQL'],
      frontcode: 'https://github.com/alejoalf/frontriocuartocelulares',
      backcode: 'https://github.com/alejoalf/frontriocuartocelulares',
      demo: 'https://riocuartocelulares.vercel.app/'
    },
     {
      title: 'Angus bar',
      description: 'Sistema web para el manejo de pedidos en un bar en tiempo real y gestion de productos.',
      image: angus,
      tags: ['React', 'Supabase'],
      frontcode: 'https://github.com/alejoalf/Sistema-bar',
      demo: 'https://sistema-bar-vert.vercel.app/'
    },

  ];

  return (
    <section id="projects" className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container className="py-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <div style={{ position: 'relative', height: '150px', marginBottom: '1rem' }}>
            <TextPressure
              text="Mis Proyectos"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor={darkMode ? "#ffffff" : "#212529"}
              strokeColor="#ff0000"
              minFontSize={36}
            />
          </div>
          <div className="border-bottom border-primary mx-auto" style={{ width: '80px', height: '4px' }}></div>
        </motion.div>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-100 shadow ${darkMode ? 'bg-secondary text-light' : ''}`}>
                  <div className="d-flex align-items-center justify-content-center" style={{ height: '200px', overflow: 'hidden' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="fs-4 mb-2">{project.title}</Card.Title>
                    <Card.Text className="mb-3">{project.description}</Card.Text>
                    <div className="d-flex flex-wrap mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          bg="primary"
                          className="me-2 mb-2"
                          key={tagIndex}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="d-flex gap-3">
                      {project.frontcode && (
                        <Button
                          href={project.frontcode}
                          variant="outline-primary"
                          size="sm"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex align-items-center"
                        >
                          <FaGithub className="me-1" /> Front
                        </Button>
                      )}
                      {project.backcode && (
                        <Button
                          href={project.backcode}
                          variant="outline-primary"
                          size="sm"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex align-items-center"
                        >
                          <FaGithub className="me-1" /> Back
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          href={project.github}
                          variant="outline-primary"
                          size="sm"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex align-items-center"
                        >
                          <FaGithub className="me-1" /> Código
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          href={project.demo}
                          variant="primary"
                          size="sm"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex align-items-center"
                        >
                          <FaExternalLinkAlt className="me-1" /> Demo
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;