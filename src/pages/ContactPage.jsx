import { useState } from 'react';
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
      // Form submission logic
    }
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && <p>{errors.message}</p>}
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
