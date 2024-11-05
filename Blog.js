import '../styles/Blog.css';

function Blog() {
  const blogPosts = [
    {
      title: "The Future of Educational Publishing",
      date: "March 15, 2024",
      excerpt: "Exploring how digital transformation is reshaping educational content...",
      image: "/blog1.jpg",
    },
    {
      title: "Effective Learning Strategies for Young Minds",
      date: "March 10, 2024",
      excerpt: "Research-based approaches to enhance early childhood education...",
      image: "/blog2.jpg",
    },
    {
      title: "Making Learning Fun with Interactive Books",
      date: "March 5, 2024",
      excerpt: "Innovative approaches to engage young readers through interactive content...",
      image: "/blog3.jpg",
    },
    // Add more blog posts
  ];

  return (
    <>
      <div className="decorative-circle top-right"></div>
      <div className="decorative-circle bottom-left"></div>
      <div className="blog-container">
        <h1>Latest Articles</h1>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article className="blog-post" key={index}>
              <img className="blog-image" src={post.image} alt={post.title} />
              <div className="blog-content">
                <span className="blog-date">{post.date}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <button className="read-more-btn">Read More</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog; 