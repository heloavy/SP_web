import { useState } from 'react';
import { 
  Person, 
  ShoppingCart, 
  Bookmark, 
  History,
  Settings,
  School
} from '@mui/icons-material';
import './Dashboard.css';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const menuItems = [
    { id: 'overview', icon: <School />, label: 'Overview' },
    { id: 'profile', icon: <Person />, label: 'Profile' },
    { id: 'orders', icon: <ShoppingCart />, label: 'Orders' },
    { id: 'saved', icon: <Bookmark />, label: 'Saved Items' },
    { id: 'history', icon: <History />, label: 'Purchase History' },
    { id: 'settings', icon: <Settings />, label: 'Settings' }
  ];

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="user-profile">
          <img className="user-avatar" src="/user-avatar.jpg" alt="User" />
          <h3>John Doe</h3>
          <p>Student</p>
        </div>

        {menuItems.map(item => (
          <div
            key={item.id}
            className={`menu-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.icon}
            {item.label}
          </div>
        ))}
      </div>

      <div className="main-content">
        <h2 className="section-title">Dashboard Overview</h2>
        <div className="dashboard-grid">
          <div className="stat-card">
            <h3>Purchased Books</h3>
            <p>12 Books</p>
          </div>
          <div className="stat-card">
            <h3>Active Courses</h3>
            <p>3 Courses</p>
          </div>
          <div className="stat-card">
            <h3>Saved Items</h3>
            <p>5 Items</p>
          </div>
          <div className="stat-card">
            <h3>Completed Courses</h3>
            <p>8 Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 