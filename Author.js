import '../styles/Author.css';

function Author() {
  return (
    <div className="page-container">
      <div className="hero-section">
        <img className="author-image" src="/author-image.jpg" alt="Author Name" />
        <h1>Dr. Author Name</h1>
        <p>Educational Expert & Published Author</p>
      </div>

      <div className="journey-section">
        <h2>My Journey</h2>
        <p>
          With over 20 years of experience in educational publishing and curriculum
          development, Dr. Author Name has been at the forefront of innovative
          learning methodologies...
        </p>
      </div>

      <div className="achievements-section">
        <h2>Achievements & Research</h2>
        <div className="achievement">
          <h3>Educational Innovation Award 2023</h3>
          <p>Recognized for contributions to early childhood education</p>
        </div>
        <div className="achievement">
          <h3>Published Research</h3>
          <p>Over 30 research papers in leading educational journals</p>
        </div>
        <div className="achievement">
          <h3>Curriculum Development</h3>
          <p>Developed comprehensive learning programs adopted by 100+ schools</p>
        </div>
      </div>
    </div>
  );
}

export default Author; 