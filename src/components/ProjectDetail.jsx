import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Badge, Button, Alert } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { getProjectBySlug } from '../data/projects';
import '../App.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    document.body.classList.add('bg-dark');
    document.body.classList.remove('bg-light');
  }, []);

  if (!project) {
    return (
      <Container className="py-5 text-light">
        <Alert variant="warning" className="mt-5">
          Proyecto no encontrado.
        </Alert>
        <Link to="/" className="btn btn-primary mt-2">Volver al inicio</Link>
      </Container>
    );
  }

  return (
    <div className="text-light" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #050608, #0a0f14 45%, #0b1017 72%, #0f1620)' }}>
      <Container className="py-5 section-shell">
        <div className="d-flex justify-content-between align-items-center mb-4 text-light">
          <div>
            <p className="eyebrow mb-2">Proyecto</p>
            <h1 className="fw-bold mb-1">{project.title}</h1>
            <p className="text-light mb-0">{project.description}</p>
          </div>
          <Link to="/" className="btn btn-outline-light btn-animated">Volver</Link>
        </div>

        <Row className="g-4 align-items-center">
          <Col lg={6}>
            <div className="media-frame" style={{ borderRadius: '20px' }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </Col>
          <Col lg={6}>
            <div className="card-raise p-4" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <p className="mb-3 text-light">{project.longDescription || project.description}</p>
              <div className="d-flex flex-wrap mb-3">
                {project.tags?.map(tag => (
                  <Badge key={tag} className="project-tag me-2 mb-2">{tag}</Badge>
                ))}
              </div>
              {project.highlights?.length ? (
                <ul className="mb-3 text-light">
                  {project.highlights.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {project.tech?.length ? (
                <div className="mb-3">
                  {project.tech.map(t => (
                    <span key={t} className="modal-tech-badge me-2 mb-2">{t}</span>
                  ))}
                </div>
              ) : null}
              <div className="d-flex flex-wrap gap-2">
                {project.frontcode && (
                  <Button
                    href={project.frontcode}
                    variant="outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center code-button"
                  >
                    <FaGithub className="me-2" /> Código Front
                  </Button>
                )}
                {project.backcode && (
                  <Button
                    href={project.backcode}
                    variant="outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center code-button"
                  >
                    <FaGithub className="me-2" /> Código Back
                  </Button>
                )}
                {project.demo && (
                  <Button
                    href={project.demo}
                    variant="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center code-button"
                  >
                    <FaExternalLinkAlt className="me-2" /> Probar demo
                  </Button>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectDetail;
