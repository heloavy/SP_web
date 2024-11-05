import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Close } from '@mui/icons-material';
import './MobileNav.css';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="mobile-menu-button"
        onClick={() => setIsOpen(true)}
      >
        <Menu />
      </button>

      <div 
        className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
      />
      
      <div className={`mobile-menu-content ${isOpen ? 'open' : ''}`}>
        <button 
          className="close-button"
          onClick={() => setIsOpen(false)}
        >
          <Close />
        </button>

        <nav className="mobile-nav-links">
          <Link to="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/author" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
            Author
          </Link>
          <Link to="/about" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link to="/blog" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link to="/contact" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
            Get in Touch
          </Link>
        </nav>
      </div>
    </>
  );
}

export default MobileNav; 