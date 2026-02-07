import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
  FaCode,
  FaCloud,
  FaMicrophone,
  FaRobot,
  FaProjectDiagram,
  FaTools,
  FaKey,
  FaServer
} from 'react-icons/fa';

const Skills = ({ darkMode }) => {
  const techGroups = [
    {
      title: 'Lenguajes',
      items: [
        { label: 'Python', icon: <FaPython className="text-info" /> },
        { label: 'HTML5', icon: <FaHtml5 className="text-warning" /> },
        { label: 'CSS', icon: <FaCss3Alt className="text-primary" /> },
        { label: 'JavaScript', icon: <FaJs className="text-warning" /> }
      ]
    },
    {
      title: 'Data Base',
      items: [
        { label: 'MySQL', icon: <FaDatabase className="text-warning" /> },
        { label: 'Postgres', icon: <FaDatabase className="text-primary" /> }
      ]
    },
    {
      title: 'Frameworks y Front',
      items: [
        { label: 'React', icon: <FaReact className="text-info" /> },
        { label: 'Node.js', icon: <FaNodeJs className="text-success" /> },
        { label: 'Bootstrap', icon: <FaBootstrap className="text-purple" /> },
        { label: 'TailwindCSS', icon: <FaCode className="text-info" /> }
      ]
    },
    {
      title: 'APIs y Librerias',
      items: [
        { label: 'Supabase (Auth/Backend)', icon: <FaCloud className="text-success" /> },
        { label: 'Gemini API', icon: <FaRobot className="text-warning" /> },
        { label: 'SpeechRecognition', icon: <FaMicrophone className="text-info" /> },
        { label: 'pyttsx3', icon: <FaMicrophone className="text-info" /> },
        { label: 'MediaPipe', icon: <FaProjectDiagram className="text-primary" /> },
        { label: 'JWT', icon: <FaKey className="text-warning" /> },
        { label: 'Socket.IO', icon: <FaProjectDiagram className="text-info" /> },
        { label: 'REST APIs', icon: <FaServer className="text-success" /> }
      ]
    },
    {
      title: 'Herramientas y entorno',
      items: [
        { label: 'Git', icon: <FaGitAlt className="text-warning" /> },
        { label: 'GitHub', icon: <FaGithub className="text-light" /> },
        { label: 'Visual Studio Code', icon: <FaCode className="text-info" /> },
        { label: 'Gestion de repositorios', icon: <FaGitAlt className="text-warning" /> },
        { label: 'Control de versiones', icon: <FaGitAlt className="text-warning" /> },
        { label: 'Python os', icon: <FaTools className="text-success" /> }
      ]
    }
  ];

  return (
    <section id="skills" data-animate="fade-right" className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container className="py-5 section-shell">
        <div className="section-divider" aria-hidden="true"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <div className={`eyebrow mb-3 ${darkMode ? '' : 'light'}`}>Mis habilidades</div>
          <h2 className="display-5 fw-bold mb-3">Tecnologías con las que construyo</h2>
          <div className="section-title-accent" data-scrub="accent"></div>
        </motion.div>
        
        <div className="tech-groups" data-animate-child>
          <Row className="g-4">
            {techGroups.map(group => (
              <Col md={6} lg={4} key={group.title}>
                <div className={`tech-group ${darkMode ? '' : 'light'}`}>
                  <h3 className="fs-5 fw-semibold mb-3">{group.title}</h3>
                  <div className="d-flex flex-wrap gap-2">
                    {group.items.map(item => (
                      <span
                        key={`${group.title}-${item.label}`}
                        className={`tech-badge tech-badge-large ${darkMode ? '' : 'light'}`}
                      >
                        <span className="tech-badge-icon" aria-hidden="true">
                          {item.icon}
                        </span>
                        {item.label}
                      </span>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Skills;