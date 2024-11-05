import { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Thank you for subscribing to our newsletter! 🎉');
    setEmail('');
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <h2 className="title">Stay Updated</h2>
        <p className="description">
          Subscribe to our newsletter for the latest publications and educational insights
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="submit-button" type="submit">
            Subscribe
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </section>
  );
}

export default Newsletter; 