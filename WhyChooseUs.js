import { 
  School, 
  Support, 
  Public, 
  Psychology, 
  LocalLibrary 
} from '@mui/icons-material';
import './WhyChooseUs.css';

function WhyChooseUs() {
  const benefits = [
    {
      icon: <School />,
      title: "Expert Educators",
      description: "Our content is developed by experienced educators and subject matter experts"
    },
    {
      icon: <Support />,
      title: "24/7 Support",
      description: "Dedicated support team to assist you throughout your journey"
    },
    {
      icon: <Public />,
      title: "Global Reach",
      description: "Our publications reach students across multiple countries"
    },
    {
      icon: <Psychology />,
      title: "Research-Based",
      description: "Content developed using latest educational research and methodologies"
    },
    {
      icon: <LocalLibrary />,
      title: "Comprehensive Resources",
      description: "Complete suite of learning materials for holistic development"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Why Choose Us</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit">
              <div className="icon-wrapper">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;