import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <span className="floating-book book-1">📚</span>
      <span className="floating-book book-2">📖</span>
      <span className="floating-book book-3">📕</span>
      <span className="floating-book book-4">✏️</span>
      
      <div className="hero-content">
        <h1 className="tagline">Empowering Education Through Quality Publications</h1>
        <button className="cta-button">Start Your Journey</button>
      </div>
    </div>
  );
}

export default Hero; 