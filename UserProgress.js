import './UserProgress.css';
import { useState } from 'react';
import {
  CheckCircle,
  RadioButtonUnchecked,
  Timeline,
  TrendingUp,
  Star
} from '@mui/icons-material';

function UserProgress() {
  const [courses] = useState([
    {
      id: 1,
      title: "Mathematics Grade 6",
      progress: 75,
      chapters: [
        { id: 1, title: "Numbers and Operations", completed: true },
        { id: 2, title: "Algebra", completed: true },
        { id: 3, title: "Geometry", completed: false },
        { id: 4, title: "Statistics", completed: false }
      ]
    },
    {
      id: 2,
      title: "Science Grade 6",
      progress: 50,
      chapters: [
        { id: 1, title: "Matter and Energy", completed: true },
        { id: 2, title: "Life Science", completed: true },
        { id: 3, title: "Earth Science", completed: false },
        { id: 4, title: "Space Science", completed: false }
      ]
    }
  ]);

  const overallProgress = 
    courses.reduce((acc, course) => acc + course.progress, 0) / courses.length;

  return (
    <div className="progress-container">
      <div className="progress-header">
        <h2>Learning Progress</h2>
      </div>

      <div className="progress-stats">
        <div className="stat-card">
          <h3>Overall Progress</h3>
          <div className="progress-bar">
            <div 
              className="progress" 
              style={{width: `${overallProgress}%`}}
            ></div>
          </div>
          <p>{overallProgress}% Complete</p>
        </div>

        <div className="stat-card">
          <h3>Active Courses</h3>
          <h2>{courses.length}</h2>
        </div>

        <div className="stat-card">
          <h3>Achievements</h3>
          <div className="achievement-stars">
            <Star style={{ color: '#ffd700' }} />
            <Star style={{ color: '#ffd700' }} />
            <Star style={{ color: '#ffd700' }} />
          </div>
        </div>
      </div>

      <div className="courses-list">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <div className="course-header">
              <h3>{course.title}</h3>
              <div className="progress-bar">
                <div 
                  className="progress" 
                  style={{width: `${course.progress}%`}}
                ></div>
              </div>
              <p>{course.progress}% Complete</p>
            </div>

            <div className="chapter-list">
              {course.chapters.map(chapter => (
                <div className="chapter" key={chapter.id}>
                  <div className={`completion-icon ${chapter.completed ? 'completed' : ''}`}>
                    {chapter.completed ? 
                      <CheckCircle /> : 
                      <RadioButtonUnchecked />
                    }
                  </div>
                  <div>
                    <p>{chapter.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProgress; 