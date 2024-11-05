import { Work, Send } from '@mui/icons-material';
import './WorkWithUs.css';

function WorkWithUs() {
  const positions = [
    {
      title: "Content Writer",
      type: "Full-time",
      description: "Join our creative team to develop engaging educational content for children.",
      requirements: [
        "Experience in children's content writing",
        "Strong understanding of educational principles",
        "Creative storytelling abilities",
        "Excellent command of English"
      ]
    },
    {
      title: "Illustrator",
      type: "Contract",
      description: "Create captivating illustrations for our children's books and educational materials.",
      requirements: [
        "Portfolio of children's book illustrations",
        "Proficiency in digital illustration",
        "Understanding of child-friendly design",
        "Ability to work with art directors"
      ]
    },
    {
      title: "Educational Consultant",
      type: "Part-time",
      description: "Help shape our educational content strategy and curriculum development.",
      requirements: [
        "Teaching experience",
        "Curriculum development expertise",
        "Understanding of modern education trends",
        "Strong communication skills"
      ]
    }
  ];

  return (
    <section className="work-section">
      <div className="container">
        <h2 className="title">Work With Us</h2>
        <p className="subtitle">Join our team in creating inspiring educational content</p>
        
        <div className="positions-grid">
          {positions.map((position, index) => (
            <div key={index} className="position-card">
              <h3 className="position-title">
                <Work className="position-icon" />
                {position.title}
              </h3>
              <span className="position-type">{position.type}</span>
              <p className="position-description">{position.description}</p>
              <ul className="requirements-list">
                {position.requirements.map((requirement, index) => (
                  <li key={index} className="requirement-item">
                    <Send className="requirement-icon" />
                    {requirement}
                  </li>
                ))}
              </ul>
              <button className="apply-button">
                <Send className="apply-icon" />
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkWithUs; 