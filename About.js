import '../styles/About.css';
import FAQ from '../components/FAQ';

function About() {
  const directors = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "20+ years experience in educational publishing",
      image: "/director1.jpg"
    },
    {
      name: "Prof. Michael Chen",
      role: "Academic Director",
      bio: "Leading curriculum development expert",
      image: "/director2.jpg"
    },
    {
      name: "Ms. Priya Patel",
      role: "Operations Director",
      bio: "Streamlining educational resource distribution",
      image: "/director3.jpg"
    }
  ];

  const pricingPackages = [
    {
      name: "Basic",
      price: "$499",
      features: ["Standard editing", "Basic layout", "Digital format"],
      popular: false
    },
    {
      name: "Professional",
      price: "$999",
      features: ["Advanced editing", "Custom layout", "Print & Digital", "Marketing support"],
      popular: true
    },
    {
      name: "Premium",
      price: "$1499",
      features: ["Full service package", "Global distribution", "Marketing campaign"],
      popular: false
    }
  ];

  return (
    <div className="page-container">
      <div className="hero-section">
        <h1>About Sugandhini Publications</h1>
        <p>Dedicated to advancing education through quality publications since 1995</p>
      </div>

      <h2>Board of Directors</h2>
      <div className="directors-grid">
        {directors.map((director, index) => (
          <div className="director-card" key={index}>
            <img className="director-image" src={director.image} alt={director.name} />
            <div className="director-info">
              <h3>{director.name}</h3>
              <h4>{director.role}</h4>
              <p>{director.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pricing-section">
        <h2>Publishing Packages</h2>
        <div className="pricing-table">
          {pricingPackages.map((pkg, index) => (
            <div className={`pricing-card ${pkg.popular ? 'popular' : ''}`} key={index}>
              <h3>{pkg.name}</h3>
              <h2>{pkg.price}</h2>
              <ul>
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button>Choose Plan</button>
            </div>
          ))}
        </div>
      </div>

      <FAQ />
    </div>
  );
}

export default About; 