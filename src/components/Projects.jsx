import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import { Container, Row, Col, Card, Badge, Button, Modal } from 'react-bootstrap';
import celulares1 from '../assets/celulares1.png'; // Asegúrate de que el nombre coincida
import angus from '../assets/angus.png';
import gretta from '../assets/gretta.png';
import horus from '../assets/horus.png';
import detector from '../assets/detector.png';
import TextPressure from './TextPressure';

const Projects = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Rio cuarto celulares',
      description: 'Aplicación de comercio electrónico con carrito de compras y pasarela de pago para un negocio de venta de celulares.',
      image: celulares1,
      tags: ['React', 'Node.js', 'PostgreSQL'],
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Bootstrap'],
      highlights: [
        'Checkout con pasarela de pago y control de stock en tiempo real.',
        'Panel de administración para productos, órdenes y usuarios.',
        'Despliegue serverless con CI sencillo.'
      ],
      frontcode: 'https://github.com/alejoalf/frontriocuartocelulares',
      backcode: 'https://github.com/alejoalf/frontriocuartocelulares',
      demo: 'https://riocuartocelulares.vercel.app/'
    },
     {
      title: 'Angus bar',
      description: 'Sistema web para el manejo de pedidos en un bar en tiempo real y gestion de productos.',
      image: angus,
      tags: ['React', 'Supabase'],
      tech: ['React', 'Supabase', 'Realtime', 'Role-based auth'],
      highlights: [
        'Pedidos en vivo por mesa y estado, sincronizados en Supabase Realtime.',
        'Gestión de productos y disponibilidad editable por staff.',
        'UI optimizada para tablets y barra.'
      ],
      frontcode: 'https://github.com/alejoalf/Sistema-bar',
      demo: 'https://sistema-bar-vert.vercel.app/'
    },
    {
      title: 'HorusTech',
      description: 'Sitio de la organización dedicada a desarrollar páginas web y sistemas para empresas y clientes.',
      image: horus,
      tags: ['React', 'Branding'],
      tech: ['React', 'Vite', 'Lead capture', 'Landing page'],
      highlights: [
        'Presentación clara de servicios de desarrollo web y sistemas.',
        'Sección de casos y propuesta de valor orientada a empresas.',
        'CTA directa a contacto para nuevas colaboraciones.'
      ],
      demo: 'https://horus-tech.vercel.app/'
    },
    {
      title: 'Hand Gesture Controller',
      description: "Control de interfaz 'sin contacto' mediante visión artificial. Detecta coordenadas de la mano en tiempo real para manejar el navegador/sistema.",
      image: detector,
      tags: ['Python', 'OpenCV'],
      tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer vision'],
      highlights: [
        'Detección de mano y tracking de puntos clave en tiempo real.',
        'Mapeo de gestos a acciones del sistema o navegador.',
        'Interfaz sin contacto para accesibilidad y control rápido.'
      ],
      github: 'https://github.com/alejoalf/control_gestos'
    }

  ];

  return (
    <section id="projects" className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container className="py-5 section-shell">
        <div className="section-divider" aria-hidden="true"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <div className={`eyebrow mb-3 ${darkMode ? '' : 'light'}`}>Portafolio</div>
          <div className="projects-title-wrap" style={{ position: 'relative', height: '150px', marginBottom: '1rem' }}>
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
          <div className="section-title-accent"></div>
        </motion.div>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <Card className={`h-100 card-raise project-card ${darkMode ? '' : 'light'}`}>
                  <div className="d-flex align-items-center justify-content-center project-media" style={{ height: '200px', overflow: 'hidden', background: darkMode ? 'rgba(255,255,255,0.02)' : '#f8f9fa' }}>
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
                          className={`project-tag ${darkMode ? '' : 'light'}`}
                          key={tagIndex}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="d-flex flex-wrap gap-2 project-actions">
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
                      <Button
                        variant={darkMode ? 'outline-light' : 'outline-dark'}
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                        className="d-flex align-items-center"
                      >
                        <FaInfoCircle className="me-1" /> Detalles
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={!!selectedProject} onHide={() => setSelectedProject(null)} centered size="lg" backdrop="static">
        {selectedProject && (
          <>
            <Modal.Header closeButton className={darkMode ? 'bg-dark text-light' : ''}>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className={darkMode ? 'bg-dark text-light' : ''}>
              <p className="mb-3">{selectedProject.description}</p>
              {selectedProject.highlights && (
                <ul className="mb-3">
                  {selectedProject.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              {selectedProject.tech && (
                <div className="mb-3">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className={`modal-tech-badge ${darkMode ? '' : 'light'}`}>{t}</span>
                  ))}
                </div>
              )}
              <div className="d-flex flex-wrap gap-2">
                {selectedProject.frontcode && (
                  <Button
                    href={selectedProject.frontcode}
                    variant="outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center code-button"
                  >
                    <FaGithub className="me-1" /> Front
                  </Button>
                )}
                {selectedProject.backcode && (
                  <Button
                    href={selectedProject.backcode}
                    variant="outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center code-button"
                  >
                    <FaGithub className="me-1" /> Back
                  </Button>
                )}
                {selectedProject.demo && (
                  <Button
                    href={selectedProject.demo}
                    variant="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center code-button"
                  >
                    <FaExternalLinkAlt className="me-1" /> Demo
                  </Button>
                )}
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Projects;