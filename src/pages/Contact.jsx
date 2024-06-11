import React, { useState } from "react";
import emailjs from "emailjs-com";

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
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-4xl text-center text-indigo-600 mb-4">KONTAKTA OSS</h1>
      <p className="text-center text-gray-600 mb-8">
        Vänligen kontakta oss via vårt formulär eller våra kontaktuppgifter. Vi
        försöker alltid svara inom 24 timmar.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between mb-4">
          <div className="w-1/2 pr-2">
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-1/2 pl-2">
            <label className="block text-gray-700 font-bold mb-2">
              Telefonnummer
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            E-postadress
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Meddelande</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-black text-white font-bold rounded hover:bg-red-600"
        >
          Skicka
        </button>
      </form>
      {showConfirmation && (
        <div className="mt-4 p-4 border border-green-500 bg-green-100 text-green-700 rounded text-center">
          <p>Your message was sent successfully!</p>
          <button
            onClick={() => setShowConfirmation(false)}
            className="mt-2 py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default Contact;
