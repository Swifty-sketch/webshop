import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./Contact.css";

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
    <Container className="contact-container mx-auto p-4 bg-gray-100 rounded-lg shadow-md max-w-xl">
      <h1 className="contact-title text-4xl text-center text-blue-600 mb-4">
        KONTAKTA OSS
      </h1>
      <p className="contact-subtitle text-center text-gray-600 mb-8">
        Vänligen kontakta oss via vårt formulär eller våra kontaktuppgifter. Vi
        försöker alltid svara inom 24 timmar.
      </p>
      <Form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Form.Group controlId="formName">
            <Form.Label className="form-label block text-gray-700 font-bold mb-2">
              NAMN
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="NAMN"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-control block w-full p-2 border border-gray-300 rounded"
            />
          </Form.Group>
        </div>
        <div className="mb-4">
          <Form.Group controlId="formPhone">
            <Form.Label className="form-label block text-gray-700 font-bold mb-2">
              Telefonnummer
            </Form.Label>
            <Form.Control
              type="tel"
              placeholder="Telefonnummer"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-control block w-full p-2 border border-gray-300 rounded"
            />
          </Form.Group>
        </div>
        <div className="mb-4">
          <Form.Group controlId="formEmail">
            <Form.Label className="form-label block text-gray-700 font-bold mb-2">
              E-postadress
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="E-postadress"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control block w-full p-2 border border-gray-300 rounded"
            />
          </Form.Group>
        </div>
        <div className="mb-4">
          <Form.Group controlId="formMessage">
            <Form.Label className="form-label block text-gray-700 font-bold mb-2">
              Meddelande
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Meddelande"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-control block w-full p-2 border border-gray-300 rounded"
            />
          </Form.Group>
        </div>
        <Button
          variant="danger"
          type="submit"
          className="submit-button w-full py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600"
        >
          Skicka
        </Button>
      </Form>
      {showConfirmation && (
        <div className="confirmation-dialog mt-4 p-4 border border-green-500 bg-green-100 text-green-700 rounded text-center">
          <p>Your message was sent successfully!</p>
          <Button
            onClick={() => setShowConfirmation(false)}
            className="mt-2 py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
          >
            OK
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Contact;
