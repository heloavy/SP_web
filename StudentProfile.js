import './StudentProfile.css';

function StudentProfile() {
  const [student] = useState({
    name: "John Doe",
    grade: "6th Grade",
    email: "john.doe@school.com",
    phone: "(555) 123-4567",
    address: "123 School Street, City, State",
    dateOfBirth: "2012-05-15",
    enrollmentDate: "2023-09-01",
    courses: [
      { name: "Mathematics", progress: 85, color: "#2196f3" },
      { name: "Science", progress: 78, color: "#4caf50" },
      { name: "English", progress: 92, color: "#ff9800" },
      { name: "History", progress: 88, color: "#9c27b0" }
    ],
    achievements: [
      { title: "Perfect Attendance", icon: <Star />, value: "3 Months" },
      { title: "Top Performer", icon: <TrendingUp />, value: "Mathematics" },
      { title: "Books Read", icon: <Book />, value: "25" }
    ]
  });

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="avatar">
          <img src="/path-to-avatar.jpg" alt={student.name} />
          <button className="edit-button">
            <Edit />
          </button>
        </div>

        <div className="profile-info">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2>{student.name}</h2>
              <p>{student.grade}</p>
            </div>
            <button className="button button-primary">
              <Edit /> Edit Profile
            </button>
          </div>

          <div className="info-grid">
            <div className="info-item">
              <Email />
              {student.email}
            </div>
            <div className="info-item">
              <Phone />
              {student.phone}
            </div>
            <div className="info-item">
              <LocationOn />
              {student.address}
            </div>
            <div className="info-item">
              <CalendarToday />
              Born: {student.dateOfBirth}
            </div>
            <div className="info-item">
              <School />
              Enrolled: {student.enrollmentDate}
            </div>
          </div>
        </div>
      </div>

      <div className="main-grid">
        <div>
          <div className="card">
            <h3>Academic Progress</h3>
            {student.courses.map((course, index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{course.name}</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${course.progress}%`, backgroundColor: course.color }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="card">
            <h3>Recent Activities</h3>
            {/* Add activity timeline */}
          </div>
        </div>

        <div>
          <div className="card">
            <h3>Achievements</h3>
            <div className="achievement-grid">
              {student.achievements.map((achievement, index) => (
                <div key={index} className="achievement">
                  {achievement.icon}
                  <h4>{achievement.title}</h4>
                  <p>{achievement.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>Upcoming Events</h3>
            {/* Add calendar/events component */}
          </div>

          <div className="card">
            <h3>Documents</h3>
            {/* Add document list */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile; 