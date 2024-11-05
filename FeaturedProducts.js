import './FeaturedProducts.css';

function FeaturedProducts() {
  const products = [
    {
      icon: <Book />,
      title: "Academic Books",
      description: "Comprehensive educational materials for all learning levels"
    },
    {
      icon: <School />,
      title: "Curriculum Development",
      description: "Structured learning paths aligned with educational standards"
    },
    {
      icon: <MenuBook />,
      title: "Research Journals",
      description: "Peer-reviewed publications for academic advancement"
    },
    {
      icon: <Computer />,
      title: "Digital Resources",
      description: "Interactive eBooks and online learning platforms"
    }
  ];

  return (
    <section className="section">
      <h2 className="title">Featured Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="icon-wrapper">{product.icon}</div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts; 