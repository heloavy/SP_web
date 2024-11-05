import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <Link to="/" className="logo">
          <span className="logo-icon">📚</span>
          Sugandini Publications
        </Link>

        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/blog" 
            className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}
          >
            Blog
          </Link>
          <Link 
            to="/author" 
            className={`nav-link ${location.pathname === '/author' ? 'active' : ''}`}
          >
            Author
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
          <Link 
            to="/book-session" 
            className="nav-link book-session"
          >
            Book Session
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 