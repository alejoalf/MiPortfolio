import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const Skills = ({ darkMode }) => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-warning" size={40} />, level: 90 },
    { name: 'CSS', icon: <FaCss3Alt className="text-primary" size={40} />, level: 85 },
    { name: 'JavaScript', icon: <FaJs className="text-warning" size={40} />, level: 80 },
    { name: 'React', icon: <FaReact className="text-info" size={40} />, level: 85 },
    { name: 'Node.js', icon: <FaNodeJs className="text-success" size={40} />, level: 75 },
    { name: 'Bases de Datos', icon: <FaDatabase className="text-secondary" size={40} />, level: 70 },
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
        
        <Row className="g-4">
          {skills.map((skill, index) => (
            <Col md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`card h-100 card-raise ${darkMode ? '' : 'light'}`}
              >
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    {skill.icon}
                    <h3 className="ms-3 fs-5 fw-semibold">{skill.name}</h3>
                  </div>
                  <div className={`skill-progress ${darkMode ? '' : 'light'}`}>
                    <motion.div
                      className="skill-progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.08 }}
                    />
                  </div>
                  <p className="mt-2 text-end mb-0">{skill.level}%</p>
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