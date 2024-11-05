import { useState } from 'react';
import styled from 'styled-components';
import {
  Add,
  Edit,
  Delete,
  People,
  Book,
  Assignment,
  Assessment,
  Settings,
  MoreVert,
  Search,
  FilterList
} from '@mui/icons-material';

const CourseContainer = styled.div`
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 300px;

  input {
    border: none;
    flex: 1;
    padding: 0.5rem;
    &:focus {
      outline: none;
    }
  }
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const CourseCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
`;

const CourseHeader = styled.div`
  height: 120px;
  background: ${props => props.color || props.theme.colors.primary};
  position: relative;
  padding: 1rem;
  color: white;
`;

const CourseContent = styled.div`
  padding: 1rem;
`;

const CourseStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem 0;
`;

const StatItem = styled.div`
  text-align: center;
  
  small {
    color: ${props => props.theme.colors.textLight};
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  background: ${props => props.primary ? props.theme.colors.primary : 'white'};
  color: ${props => props.primary ? 'white' : props.theme.colors.text};
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  &:hover {
    background: ${props => props.primary ? props.theme.colors.accent : '#f5f5f5'};
  }
`;

const ActionMenu = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

function CourseManagement() {
  const [courses] = useState([
    {
      id: 1,
      title: "Mathematics",
      description: "Advanced Mathematics for Grade 6",
      instructor: "Dr. Smith",
      students: 25,
      assignments: 12,
      progress: 75,
      color: "#2196f3"
    },
    {
      id: 2,
      title: "Science",
      description: "General Science with Lab Work",
      instructor: "Prof. Johnson",
      students: 28,
      assignments: 15,
      progress: 68,
      color: "#4caf50"
    },
    // More courses...
  ]);

  return (
    <CourseContainer>
      <Header>
        <h2>Course Management</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <SearchBar>
            <Search />
            <input placeholder="Search courses..." />
          </SearchBar>
          <Button>
            <FilterList /> Filter
          </Button>
          <Button primary>
            <Add /> New Course
          </Button>
        </div>
      </Header>

      <CourseGrid>
        {courses.map(course => (
          <CourseCard key={course.id}>
            <CourseHeader color={course.color}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <ActionMenu>
                <MoreVert style={{ color: 'white', cursor: 'pointer' }} />
              </ActionMenu>
            </CourseHeader>
            
            <CourseContent>
              <p><strong>Instructor:</strong> {course.instructor}</p>
              
              <CourseStats>
                <StatItem>
                  <People />
                  <h4>{course.students}</h4>
                  <small>Students</small>
                </StatItem>
                <StatItem>
                  <Assignment />
                  <h4>{course.assignments}</h4>
                  <small>Assignments</small>
                </StatItem>
                <StatItem>
                  <Assessment />
                  <h4>{course.progress}%</h4>
                  <small>Progress</small>
                </StatItem>
              </CourseStats>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button>
                  <Edit /> Edit
                </Button>
                <Button>
                  <Settings /> Settings
                </Button>
                <Button>
                  <Delete /> Delete
                </Button>
              </div>
            </CourseContent>
          </CourseCard>
        ))}
      </CourseGrid>
    </CourseContainer>
  );
}

export default CourseManagement; 