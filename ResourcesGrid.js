import { Book, VideoLibrary, Assignment, School } from '@mui/icons-material';
import './ResourcesGrid.css';

function ResourcesGrid() {
  const resources = [
    {
      icon: <Book />,
      title: "eBooks Library",
      description: "Access our extensive collection of digital educational materials"
    },
    {
      icon: <VideoLibrary />,
      title: "Video Tutorials",
      description: "Watch expert-led educational videos and demonstrations"
    },
    {
      icon: <Assignment />,
      title: "Worksheets",
      description: "Download printable worksheets and activities"
    },
    {
      icon: <School />,
      title: "Teacher Resources",
      description: "Access lesson plans and teaching guides"
    }
  ];

  return (
    <section className="resources-section">
      <div className="grid-container">
        {resources.map((resource, index) => (
          <div key={index} className="resource-card fade-in">
            <div className="icon-wrapper">{resource.icon}</div>
            <h3 className="title">{resource.title}</h3>
            <p className="description">{resource.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ResourcesGrid; 