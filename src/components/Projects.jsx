import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TextPressure from './TextPressure';
import { projects } from '../data/projects';

const Projects = ({ darkMode }) => {
  const orderedProjects = projects;

  return (
    <section id="projects" data-animate="zoom-in" className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
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
          <div className="section-title-accent" data-scrub="accent"></div>
        </motion.div>

        <Row className="g-4">
          {orderedProjects.map((project, index) => (
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
                      {project.slug && (
                        <Button
                          as={Link}
                          to={`/project/${project.slug}`}
                          variant={darkMode ? 'outline-light' : 'outline-dark'}
                          size="sm"
                          className="d-flex align-items-center"
                        >
                          <FaInfoCircle className="me-1" /> Detalles
                        </Button>
                      )}
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