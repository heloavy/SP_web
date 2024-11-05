import { useEffect } from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  LinkedIn,
  Email,
  Phone,
  LocationOn
} from '@mui/icons-material';

function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
  };

  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms" className="footer-link">Terms of Service</Link>
          <Link to="/faq" className="footer-link">FAQs</Link>
          <Link to="/careers" className="footer-link">Careers</Link>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <div className="contact-info">
            <Email /> info@sugandhini.com
          </div>
          <div className="contact-info">
            <Phone /> +1 234 567 8900
          </div>
          <div className="contact-info">
            <LocationOn /> 123 Publishing Street, Book City
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-links">
            <Facebook />
            <Twitter />
            <Instagram />
            <LinkedIn />
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Newsletter</h3>
          <p>Subscribe to get updates on new publications and events</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input 
              className="newsletter-input"
              type="email" 
              placeholder="Enter your email"
              required 
            />
            <button className="newsletter-button" type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Sugandhini Publications. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer; 