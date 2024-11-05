import './BookPreview.css';

import { useState } from 'react';
import { 
  Close, 
  ArrowForward, 
  ArrowBack,
  BookmarkBorder,
  Share,
  ShoppingCart
} from '@mui/icons-material';

function BookPreview({ book, onClose }) {
  const [currentPage, setCurrentPage] = useState(0);

  const samplePages = [
    {
      content: "Chapter 1: Introduction to Mathematics",
      pageNumber: 1
    },
    {
      content: "In this chapter, we will explore the fundamental concepts...",
      pageNumber: 2
    },
    {
      content: "Practice exercises and examples...",
      pageNumber: 3
    }
  ];

  return (
    <div className="preview-overlay" onClick={onClose}>
      <div className="preview-container" onClick={e => e.stopPropagation()}>
        <div className="book-cover">
          <img className="cover-image" src={book.coverImage} alt={book.title} />
          <h2>{book.title}</h2>
          <p>By {book.author}</p>
          <p>Grade: {book.grade}</p>
          <p>Price: ${book.price}</p>
          
          <div className="action-buttons">
            <button className="button button-primary">
              <ShoppingCart /> Add to Cart
            </button>
            <button className="button button-secondary">
              <BookmarkBorder /> Save
            </button>
            <button className="button button-secondary">
              <Share /> Share
            </button>
          </div>
        </div>

        <div className="preview-content">
          <h3>Book Preview</h3>
          <div className="preview-pages">
            <div className="preview-page">
              {samplePages[currentPage].content}
              <p>Page {samplePages[currentPage].pageNumber}</p>
            </div>

            <div className="navigation-buttons">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                disabled={currentPage === 0}
              >
                <ArrowBack /> Previous
              </button>
              <button 
                onClick={() => setCurrentPage(prev => Math.min(samplePages.length - 1, prev + 1))}
                disabled={currentPage === samplePages.length - 1}
              >
                Next <ArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookPreview; 