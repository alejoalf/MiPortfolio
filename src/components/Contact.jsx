import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Contact = ({ darkMode }) => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(false);
    setError(false);

    emailjs.sendForm(
      'service_xwz5vdc',     // Reemplaza por tu Service ID
      'template_iji7j8p',    // Reemplaza por tu Template ID
      form.current,
      'LL3Y_ooyJ9TTR32VW'         // Reemplaza por tu Public Key
    )
    .then(() => {
      setSent(true);
      form.current.reset();
    }, () => {
      setError(true);
    });
  };

  return (
    <section id="contact" data-animate="section" className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container className="py-5 section-shell">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <div className={`eyebrow mb-3 ${darkMode ? '' : 'light'}`}>Contacto</div>
          <h2 className="display-5 fw-bold mb-3">Cuéntame tu idea</h2>
          <div className="section-title-accent" data-scrub="accent"></div>
        </motion.div>
        
        <Row className="g-4">
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className={`contact-pane ${darkMode ? '' : 'light'}`}
            >
              <h3 className="fs-2 fw-semibold mb-4">Información de Contacto</h3>
              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-start">
                  <div className={`p-3 rounded-circle ${darkMode ? 'bg-primary' : 'bg-primary bg-opacity-10'} me-3 contact-icon-circle ${darkMode ? '' : 'light'}`}>
                    <FaEnvelope className={darkMode ? 'text-white' : 'text-primary'} />
                  </div>
                  <div>
                    <h4 className="fs-5 fw-medium">Email</h4>
                    <p className="contact-email">alejoalfonsoaa@gmail.com</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className={`p-3 rounded-circle ${darkMode ? 'bg-primary' : 'bg-primary bg-opacity-10'} me-3`}>
                    <FaPhone className={darkMode ? 'text-white' : 'text-primary'} />
                  </div>
                  <div>
                    <h4 className="fs-5 fw-medium">Teléfono</h4>
                    <p>3584018143</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className={`p-3 rounded-circle ${darkMode ? 'bg-primary' : 'bg-primary bg-opacity-10'} me-3`}>
                    <FaMapMarkerAlt className={darkMode ? 'text-white' : 'text-primary'} />
                  </div>
                  <div>
                    <h4 className="fs-5 fw-medium">Ubicación</h4>
                    <p>Cordoba, Argentina</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>
          
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className={`card-raise ${darkMode ? '' : 'light'}`}
            >
              <div className="p-4 p-lg-5">
                <h3 className="fs-2 fw-semibold mb-4">Envíame un Mensaje</h3>
                <Form ref={form} onSubmit={sendEmail}>
                  <Form.Group className="mb-3">
                    <Form.Control 
                      type="text" 
                      name="user_name"
                      placeholder="Tu Nombre" 
                      className={darkMode ? 'bg-secondary border-dark text-light' : ''}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control 
                      type="email" 
                      name="user_email"
                      placeholder="Tu Email" 
                      className={darkMode ? 'bg-secondary border-dark text-light' : ''}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control 
                      type="text" 
                      name="subject"
                      placeholder="Asunto" 
                      className={darkMode ? 'bg-secondary border-dark text-light' : ''}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control 
                      as="textarea" 
                      rows={5} 
                      name="message"
                      placeholder="Tu Mensaje" 
                      className={darkMode ? 'bg-secondary border-dark text-light' : ''}
                      required
                    />
                  </Form.Group>
                  <Button 
                    variant="primary" 
                    type="submit" 
                    size="lg"
                    className="btn-animated"
                  >
                    Enviar Mensaje
                  </Button>
                  {sent && <Alert variant="success" className="mt-3">¡Mensaje enviado!</Alert>}
                  {error && <Alert variant="danger" className="mt-3">Error al enviar. Intenta de nuevo.</Alert>}
                </Form>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;