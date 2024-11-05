import { useState } from 'react';
import {
  Book,
  Assignment,
  Timeline,
  Notifications,
  Event,
  Star,
  TrendingUp,
  CheckCircle
} from '@mui/icons-material';
import './StudentDashboard.css';

function StudentDashboard() {
  const [assignments] = useState([
    {
      id: 1,
      title: "Mathematics Assignment 3",
      subject: "Mathematics",
      dueDate: "2024-03-20",
      status: "pending"
    },
    {
      id: 2,
      title: "Science Lab Report",
      subject: "Science",
      dueDate: "2024-03-18",
      status: "completed"
    },
    {
      id: 3,
      title: "History Essay",
      subject: "History",
      dueDate: "2024-03-15",
      status: "overdue"
    }
  ]);

  const stats = [
    {
      title: "Courses",
      value: "6",
      icon: <Book />,
      color: "#2196f3"
    },
    {
      title: "Assignments",
      value: "12",
      icon: <Assignment />,
      color: "#ff9800"
    },
    {
      title: "Average Grade",
      value: "85%",
      icon: <Star />,
      color: "#4caf50"
    },
    {
      title: "Attendance",
      value: "92%",
      icon: <CheckCircle />,
      color: "#9c27b0"
    }
  ];

  return (
    <div className="dashboard-container">
      <div className="welcome-bar">
        <div>
          <h2>Welcome back, John!</h2>
          <p>Here's your learning progress</p>
        </div>
        <Notifications style={{ cursor: 'pointer' }} />
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="icon-box" style={{ background: stat.color }}>
              {stat.icon}
            </div>
            <div>
              <h3>{stat.title}</h3>
              <h2>{stat.value}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="main-grid">
        <div>
          <div className="assignment-list">
            <h3>Upcoming Assignments</h3>
            {assignments.map(assignment => (
              <div className="assignment-item" key={assignment.id}>
                <Assignment />
                <div style={{ flex: 1 }}>
                  <h4>{assignment.title}</h4>
                  <small>{assignment.subject} • Due: {assignment.dueDate}</small>
                </div>
                <div className={`badge ${assignment.status}`}>
                  {assignment.status}
                </div>
              </div>
            ))}
          </div>

          <div className="progress-section">
            <h3>Course Progress</h3>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Mathematics</span>
                <span>75%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Science</span>
                <span>60%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="calendar">
            <h3>Upcoming Events</h3>
            <div className="empty-state">
              No upcoming events scheduled
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard; 