import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle logo animation
  const handleLogoClick = () => {
    const logo = document.querySelector('.logo');
    logo.style.animation = 'none';
    logo.offsetHeight; // Trigger reflow
    logo.style.animation = 'wiggle 0.5s ease, float 6s ease-in-out infinite';
  };

  return (
    <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <img 
          src="/logo.png" 
          alt="Sugandhini Publications" 
          className="logo"
          onClick={handleLogoClick}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/fallback-logo.png'; // Fallback image
          }}
        />
      </div>

      <button 
        className={`mobile-menu-button ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className="hamburger-icon"></span>
      </button>

      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link 
          to="/" 
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/author" 
          className={`nav-link ${location.pathname === '/author' ? 'active' : ''}`}
        >
          Author
        </Link>
        <Link 
          to="/about" 
          className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
        >
          About Us
        </Link>
        <Link 
          to="/blog" 
          className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}
        >
          Blog
        </Link>
        <Link 
          to="/contact" 
          className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
        >
          Get in Touch
        </Link>
        <Link 
          to="/books" 
          className={`nav-link ${location.pathname === '/books' ? 'active' : ''}`}
        >
          Books
        </Link>
      </nav>

      <button className="auth-button">
        LOGIN/SIGNUP
      </button>
    </header>
  );
}

export default Header; 