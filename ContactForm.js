import { useState } from 'react';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import '../styles/ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="form-container">
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you. Please fill out the form or contact us directly.</p>
        
        <div className="info-item">
          <Email />
          <span>contact@sugandhini.com</span>
        </div>
        
        <div className="info-item">
          <Phone />
          <span>+1 234 567 8900</span>
        </div>
        
        <div className="info-item">
          <LocationOn />
          <span>123 Publishing Street, Book City, 12345</span>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <select
          className="form-select"
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          required
        >
          <option value="">Select Inquiry Type</option>
          <option value="submission">Book Submission</option>
          <option value="general">General Inquiry</option>
          <option value="support">Support</option>
        </select>
        
        <textarea
          className="form-textarea"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        
        <button className="submit-button" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;