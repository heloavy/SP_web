import { useState } from 'react';
import styled from 'styled-components';
import {
  Dashboard,
  People,
  Book,
  Assessment,
  Settings,
  Notifications,
  TrendingUp,
  AttachMoney
} from '@mui/icons-material';
import './AdminDashboard.css';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;
`;

const Sidebar = styled.div`
  background: #1a237e;
  color: white;
  padding: 2rem 1rem;
`;

const MainContent = styled.div`
  background: #f5f5f5;
  padding: 2rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  padding: 0 1rem;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  cursor: pointer;
  border-radius: 8px;
  color: ${props => props.active ? '#fff' : 'rgba(255,255,255,0.7)'};
  background: ${props => props.active ? 'rgba(255,255,255,0.1)' : 'transparent'};

  &:hover {
    background: rgba(255,255,255,0.1);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StatIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const StatInfo = styled.div`
  flex: 1;
`;

const ChartContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
`;

const RecentActivities = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const ActivityDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.color};
`;

function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const stats = [
    {
      title: 'Total Users',
      value: '1,234',
      icon: <People />,
      color: '#2196f3'
    },
    {
      title: 'Total Books',
      value: '456',
      icon: <Book />,
      color: '#4caf50'
    },
    {
      title: 'Revenue',
      value: '$12,345',
      icon: <AttachMoney />,
      color: '#ff9800'
    },
    {
      title: 'Growth',
      value: '+23%',
      icon: <TrendingUp />,
      color: '#e91e63'
    }
  ];

  const activities = [
    {
      text: 'New user registration',
      time: '5 minutes ago',
      color: '#4caf50'
    },
    {
      text: 'New book published',
      time: '1 hour ago',
      color: '#2196f3'
    },
    {
      text: 'Sales milestone reached',
      time: '2 hours ago',
      color: '#ff9800'
    }
  ];

  return (
    <DashboardContainer className="dashboard-container">
      <Sidebar className="sidebar">
        <Logo className="admin-logo">Sugandini Publications</Logo>
        
        <MenuItem 
          className={`menu-item ${activeMenu === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveMenu('dashboard')}
        >
          <Dashboard /> Dashboard
        </MenuItem>
        
        <MenuItem 
          active={activeMenu === 'users'}
          onClick={() => setActiveMenu('users')}
        >
          <People /> Users
        </MenuItem>
        
        <MenuItem 
          active={activeMenu === 'books'}
          onClick={() => setActiveMenu('books')}
        >
          <Book /> Books
        </MenuItem>
        
        <MenuItem 
          active={activeMenu === 'analytics'}
          onClick={() => setActiveMenu('analytics')}
        >
          <Assessment /> Analytics
        </MenuItem>
        
        <MenuItem 
          active={activeMenu === 'settings'}
          onClick={() => setActiveMenu('settings')}
        >
          <Settings /> Settings
        </MenuItem>
      </Sidebar>

      <MainContent className="main-content">
        <h2>Dashboard Overview</h2>
        
        <StatsGrid className="stats-grid">
          {stats.map((stat, index) => (
            <StatCard key={index} className="stat-card">
              <StatIcon className={`stat-icon ${stat.title.toLowerCase()}`}>
                {stat.icon}
              </StatIcon>
              <StatInfo>
                <h3>{stat.title}</h3>
                <h2>{stat.value}</h2>
              </StatInfo>
            </StatCard>
          ))}
        </StatsGrid>

        <ChartContainer className="chart-container">
          <h3>Sales Analytics</h3>
          {/* Add chart component here */}
        </ChartContainer>

        <RecentActivities className="activities">
          <h3>Recent Activities</h3>
          {activities.map((activity, index) => (
            <ActivityItem key={index} className="activity-item">
              <ActivityDot 
                className="activity-dot"
                style={{ background: activity.color }} 
              />
              <div>
                <p>{activity.text}</p>
                <small>{activity.time}</small>
              </div>
            </ActivityItem>
          ))}
        </RecentActivities>
      </MainContent>
    </DashboardContainer>
  );
}

export default AdminDashboard; 