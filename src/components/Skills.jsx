import { motion } from 'framer-motion';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
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
    <section id="skills" className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container className="py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3">Mis Habilidades</h2>
          <div className="border-bottom border-primary mx-auto" style={{width: '80px', height: '4px'}}></div>
        </motion.div>
        
        <Row className="g-4">
          {skills.map((skill, index) => (
            <Col md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card h-100 shadow-sm"
              >
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    {skill.icon}
                    <h3 className="ms-3 fs-5 fw-semibold">{skill.name}</h3>
                  </div>
                  <ProgressBar 
                    now={skill.level} 
                    variant="primary" 
                    style={{ height: '10px' }}
                  />
                  <p className="mt-2 text-end">{skill.level}%</p>
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