import { Book } from '@mui/icons-material';
import './UpcomingPublications.css';

function UpcomingPublications() {
  const publications = [
    {
      title: "Interactive Mathematics Series",
      date: "Coming June 2024",
      description: "A revolutionary approach to teaching mathematics through interactive exercises",
      image: "/math-series.jpg"
    },
    {
      title: "Early Reader Collection",
      date: "Coming July 2024",
      description: "Engaging stories designed for beginning readers with colorful illustrations",
      image: "/reader-collection.jpg"
    },
    {
      title: "Science Explorer Kit",
      date: "Coming August 2024",
      description: "Hands-on science learning materials with experimental guides",
      image: "/science-kit.jpg"
    }
  ];

  return (
    <section className="publications-section">
      <div className="container">
        <h2 className="title">Upcoming Publications</h2>
        <div className="publications-grid">
          {publications.map((pub, index) => (
            <div key={index} className="publication-card">
              <img 
                src={pub.image} 
                alt={pub.title} 
                className="publication-image"
              />
              <div className="publication-content">
                <h3 className="publication-title">{pub.title}</h3>
                <span className="publication-date">{pub.date}</span>
                <p className="publication-description">{pub.description}</p>
                <button className="learn-more-button">
                  <Book className="book-icon" />
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingPublications; 