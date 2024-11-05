import { useState, useEffect } from 'react';
import { FormatQuote } from '@mui/icons-material';
import '../styles/TestimonialsCarousel.css';

function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "The curriculum has transformed how our students learn and engage with content.",
      author: "Dr. Sarah Johnson",
      role: "School Principal"
    },
    {
      quote: "Sugandhini Publications has set new standards in educational publishing.",
      author: "Prof. Michael Chen",
      role: "Education Consultant"
    },
    {
      quote: "The learning materials are innovative and perfectly suited for young minds.",
      author: "Mrs. Priya Patel",
      role: "Teacher"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="testimonials-container">
      <div className="carousel-container">
        <div className="testimonial-slide" key={currentSlide}>
          <FormatQuote className="quote-icon" />
          <p className="quote">{testimonials[currentSlide].quote}</p>
          <div className="author">
            {testimonials[currentSlide].author}
            <br />
            <small>{testimonials[currentSlide].role}</small>
          </div>
        </div>

        <div className="dot-container">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsCarousel; 