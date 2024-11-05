import { useState } from 'react';
import {
  Class,
  People,
  Assignment,
  Assessment,
  Notifications,
  Add,
  MoreVert
} from '@mui/icons-material';
import './TeacherDashboard.css';

function TeacherDashboard() {
  const [classes] = useState([
    {
      id: 1,
      name: "Mathematics - Grade 6",
      students: 25,
      time: "9:00 AM - 10:30 AM",
      progress: 75
    },
    {
      id: 2,
      name: "Mathematics - Grade 7",
      students: 28,
      time: "11:00 AM - 12:30 PM",
      progress: 68
    }
  ]);

  const [tasks] = useState([
    {
      id: 1,
      title: "Grade Math Quiz",
      type: "assignment",
      deadline: "Today, 5:00 PM"
    },
    {
      id: 2,
      title: "Mid-term Exam",
      type: "exam",
      deadline: "Tomorrow, 9:00 AM"
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting",
      type: "meeting",
      deadline: "Mar 20, 2:00 PM"
    }
  ]);

  const stats = [
    {
      title: "Total Classes",
      value: "6",
      icon: <Class />,
      color: "#2196f3"
    },
    {
      title: "Total Students",
      value: "150",
      icon: <People />,
      color: "#ff9800"
    },
    {
      title: "Assignments",
      value: "12",
      icon: <Assignment />,
      color: "#4caf50"
    },
    {
      title: "Average Performance",
      value: "85%",
      icon: <Assessment />,
      color: "#9c27b0"
    }
  ];

  // Function to get badge background color
  const getBadgeBackground = (type) => {
    switch(type) {
      case 'assignment':
        return '#e3f2fd';
      case 'exam':
        return '#fce4ec';
      case 'meeting':
        return '#f3e5f5';
      default:
        return '#f5f5f5';
    }
  };

  return (
    <div className="dashboard-container">
      <div className="header">
        <div>
          <h2>Teacher Dashboard</h2>
          <p>Welcome back, Ms. Smith</p>
        </div>
        <div className="action-buttons">
          <button className="button button-secondary">
            <Notifications />
          </button>
          <button className="button button-primary">
            <Add /> Create New
          </button>
        </div>
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
          <div className="class-list">
            <h3>Today's Classes</h3>
            {classes.map(cls => (
              <div className="class-card" key={cls.id}>
                <div>
                  <h4>{cls.name}</h4>
                  <small>{cls.time} • {cls.students} students</small>
                </div>
                <MoreVert style={{ cursor: 'pointer' }} />
              </div>
            ))}
          </div>

          <div className="performance-section">
            <h3>Class Performance</h3>
            <div className="empty-state">
              Performance charts coming soon
            </div>
          </div>
        </div>

        <div>
          <div className="upcoming-tasks">
            <h3>Upcoming Tasks</h3>
            {tasks.map(task => (
              <div className="task-item" key={task.id}>
                <div style={{ flex: 1 }}>
                  <h4>{task.title}</h4>
                  <small>{task.deadline}</small>
                </div>
                <span 
                  className={`badge ${task.type}`}
                  style={{ background: getBadgeBackground(task.type) }}
                >
                  {task.type}
                </span>
              </div>
            ))}
          </div>

          <div className="calendar-section">
            <h3>Calendar</h3>
            <div className="empty-state">
              Calendar coming soon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard; 