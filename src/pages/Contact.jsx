import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_5z9i8i9", // Replace with your EmailJS service ID
        "template_ojfo70a", // Replace with your EmailJS template ID
        formData,
        "D6aH5ZFMZU25UCvdA" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setShowConfirmation(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("FAILED...", err);
      });
  };

  return (
    <Container className="contact-container">
      <h1 className="contact-title">KONTAKTA OSS</h1>
      <p className="contact-subtitle">
        Vänligen kontakta oss via vårt formulär eller våra kontaktuppgifter. Vi
        försöker alltid svara inom 24 timmar.
      </p>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label className="form-label">NAMN</Form.Label>
              <Form.Control
                type="text"
                placeholder="NAMN"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-control"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formPhone">
              <Form.Label className="form-label">Telefonnummer</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Telefonnummer"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-control"
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formEmail">
          <Form.Label className="form-label">E-postadress</Form.Label>
          <Form.Control
            type="email"
            placeholder="E-postadress"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-control"
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label className="form-label">Meddelande</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Meddelande"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-control"
          />
        </Form.Group>
        <Button variant="danger" type="submit" className="submit-button">
          Skicka
        </Button>
      </Form>
      {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Your message was sent successfully!</p>
          <Button onClick={() => setShowConfirmation(false)}>OK</Button>
        </div>
      )}
    </Container>
  );
};

export default Contact;
