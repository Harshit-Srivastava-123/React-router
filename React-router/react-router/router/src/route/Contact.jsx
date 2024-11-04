import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Custom validation for Name
    if (!name) {
      nameInput.setCustomValidity('Please fill name yaar');
      nameInput.reportValidity();
      return;
    } else {
      nameInput.setCustomValidity(''); // Reset if valid
    }

    // Custom validation for Email
    if (!email) {
      emailInput.setCustomValidity('Please email also yaar');
      emailInput.reportValidity();
      return;
    } else {
      emailInput.setCustomValidity(''); // Reset if valid
    }

    // Custom validation for Message
    if (!message) {
      messageInput.setCustomValidity('Please enter your message yaar');
      messageInput.reportValidity();
      return;
    } else {
      messageInput.setCustomValidity(''); // Reset if valid
    }

    // If all fields are valid, proceed with form submission
    if (name && email && message) {
      alert('Message sent successfully!');
      // Handle form submission here
    }
  };

  return (
    <div className="contact-container">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Please fill out the form below, and we’ll get in touch with you as soon as possible.</p>
      </section>
      <section className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onInput={(e) => e.target.setCustomValidity('')} // Reset on input
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onInput={(e) => e.target.setCustomValidity('')} // Reset on input
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onInput={(e) => e.target.setCustomValidity('')} // Reset on input
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
