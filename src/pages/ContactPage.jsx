// Contact.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { validateEmail, validateField } from '../utils/formValidation';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!validateField(form.name)) newErrors.name = 'Name is required';
    if (!validateEmail(form.email)) newErrors.email = 'Invalid email address';
    if (!validateField(form.message)) newErrors.message = 'Message is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Form submission logic here
      console.log('Form submitted:', form);
      // Example: clear form and errors after successful submission
      setForm({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
          />
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>
        <button type="submit" className="submit-button">Send</button>
      </form>
      <div className="back-link">
        <Link to="/" className="btn btn-secondary">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default Contact;

