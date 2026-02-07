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
  const techItems = [
    { label: 'Python', icon: <FaPython /> },
    { label: 'HTML5', icon: <FaHtml5 /> },
    { label: 'CSS', icon: <FaCss3Alt /> },
    { label: 'JavaScript', icon: <FaJs /> },
    { label: 'React', icon: <FaReact /> },
    { label: 'Node.js', icon: <FaNodeJs /> },
    { label: 'MySQL', icon: <FaDatabase /> },
    { label: 'Postgres', icon: <FaDatabase /> },
    { label: 'Bootstrap', icon: <FaBootstrap /> },
    { label: 'TailwindCSS', icon: <FaCode /> },
    { label: 'Supabase (Auth/Backend)', icon: <FaCloud /> },
    { label: 'Gemini API', icon: <FaRobot /> },
    { label: 'SpeechRecognition', icon: <FaMicrophone /> },
    { label: 'pyttsx3', icon: <FaMicrophone /> },
    { label: 'MediaPipe', icon: <FaProjectDiagram /> },
    { label: 'JWT', icon: <FaKey /> },
    { label: 'Socket.IO', icon: <FaProjectDiagram /> },
    { label: 'REST APIs', icon: <FaServer /> },
    { label: 'Git', icon: <FaGitAlt /> },
    { label: 'GitHub', icon: <FaGithub /> },
    { label: 'Visual Studio Code', icon: <FaCode /> },
    { label: 'Gestion de repositorios', icon: <FaGitAlt /> },
    { label: 'Control de versiones', icon: <FaGitAlt /> },
    { label: 'Python os', icon: <FaTools /> }
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
        
        <Row className="g-4" data-animate-child>
          {techItems.map((item, index) => (
            <Col md={6} lg={4} key={item.label}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`card h-100 tech-group tech-card ${darkMode ? '' : 'light'}`}
              >
                <div className="card-body">
                  <span className={`tech-badge ${darkMode ? '' : 'light'}`}>
                    <span className="tech-badge-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    {item.label}
                  </span>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;