import './BookRecommendations.css';

function BookRecommendations() {
  const [activeTab, setActiveTab] = useState('personalized');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setBooks([
        {
          id: 1,
          title: "Advanced Mathematics Grade 6",
          author: "Dr. Sarah Johnson",
          image: "/book1.jpg",
          rating: 4.5,
          matchScore: 95,
          price: 29.99
        },
        {
          id: 2,
          title: "Science Explorer: Chemistry",
          author: "Prof. Michael Chen",
          image: "/book2.jpg",
          rating: 4.8,
          matchScore: 88,
          price: 34.99
        },
        // Add more books...
      ]);
      setLoading(false);
    }, 1000);
  }, [activeTab]);

  const toggleFavorite = (bookId) => {
    setBooks(books.map(book => 
      book.id === bookId 
        ? { ...book, liked: !book.liked }
        : book
    ));
  };

  return (
    <div className="recommendations-container">
      <h2 className="title">Recommended for You</h2>
      
      <div className="filter-tabs">
        <button 
          className={`tab ${activeTab === 'personalized' ? 'active' : ''}`}
          onClick={() => setActiveTab('personalized')}
        >
          <Star /> Personalized
        </button>
        <button 
          className={`tab ${activeTab === 'trending' ? 'active' : ''}`}
          onClick={() => setActiveTab('trending')}
        >
          <TrendingUp /> Trending
        </button>
        <button 
          className={`tab ${activeTab === 'new' ? 'active' : ''}`}
          onClick={() => setActiveTab('new')}
        >
          <NewReleases /> New Releases
        </button>
      </div>

      <div className="books-grid">
        {books.map(book => (
          <div className="book-card" key={book.id}>
            <div className="book-image-container">
              <img className="book-image" src={book.image} alt={book.title} />
              <div className="match-score">{book.matchScore}% Match</div>
            </div>
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author}</p>
              <div className="book-meta">
                <div className="rating">
                  <Star /> {book.rating}
                </div>
                <span className="price">${book.price}</span>
                <button 
                  className={`favorite-button ${book.liked ? 'liked' : ''}`}
                  onClick={() => toggleFavorite(book.id)}
                >
                  {book.liked ? <Favorite /> : <FavoriteBorder />}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookRecommendations; 