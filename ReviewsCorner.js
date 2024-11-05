import { Star } from '@mui/icons-material';
import './ReviewsCorner.css';

function ReviewsCorner() {
  const reviews = [
    {
      rating: 5,
      text: "The curriculum has helped my child develop a strong foundation in reading and writing.",
      name: "Sarah Johnson",
      role: "Parent",
      image: "/reviewer1.jpg"
    },
    {
      rating: 5,
      text: "Excellent learning materials that make teaching enjoyable and effective.",
      name: "Mark Williams",
      role: "Teacher",
      image: "/reviewer2.jpg"
    },
    {
      rating: 5,
      text: "The progressive learning stages have shown remarkable results in our school.",
      name: "Dr. Priya Sharma",
      role: "School Principal",
      image: "/reviewer3.jpg"
    }
  ];

  return (
    <section className="reviews-section">
      <h2 className="title">Experience Corner</h2>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="stars">
              {[...Array(review.rating)].map((_, i) => (
                <Star className="star" key={i} />
              ))}
            </div>
            <p className="review-text">{review.text}</p>
            <div className="reviewer">
              <img 
                className="reviewer-image" 
                src={review.image} 
                alt={review.name} 
              />
              <div className="reviewer-info">
                <h4 className="reviewer-name">{review.name}</h4>
                <p className="reviewer-role">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReviewsCorner; 