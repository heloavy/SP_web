import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Notifications,
  Close,
  Book,
  Comment,
  Assignment,
  CheckCircle
} from '@mui/icons-material';

const NotificationContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 5px rgba(0,0,0,0.1);
  transform: translateX(${props => props.show ? '0' : '100%'});
  transition: transform 0.3s ease;
  z-index: 1000;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const NotificationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.grey};
`;

const NotificationList = styled.div`
  height: calc(100vh - 60px);
  overflow-y: auto;
`;

const NotificationItem = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.grey};
  background: ${props => props.unread ? '#f8f9fa' : 'white'};
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.grey};
  }
`;

const NotificationIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const NotificationContent = styled.div`
  flex: 1;
`;

const NotificationTime = styled.small`
  color: #666;
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background: ${props => props.theme.colors.primary};
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const NotificationTrigger = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  z-index: 1001;

  &:hover {
    background: ${props => props.theme.colors.accent};
  }
`;

function NotificationSystem() {
  const [show, setShow] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'comment',
      title: 'New Comment',
      message: 'John commented on your discussion',
      time: '5 minutes ago',
      unread: true,
      color: '#2196f3'
    },
    {
      id: 2,
      type: 'assignment',
      title: 'Assignment Due',
      message: 'Mathematics homework due tomorrow',
      time: '1 hour ago',
      unread: true,
      color: '#ff9800'
    },
    {
      id: 3,
      type: 'book',
      title: 'New Book Available',
      message: 'Science textbook updated with new content',
      time: '2 hours ago',
      unread: false,
      color: '#4caf50'
    }
  ]);

  const getIcon = (type) => {
    switch(type) {
      case 'comment': return <Comment />;
      case 'assignment': return <Assignment />;
      case 'book': return <Book />;
      default: return <CheckCircle />;
    }
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, unread: false } : notif
    ));
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <>
      <NotificationTrigger onClick={() => setShow(true)}>
        <Notifications />
        {unreadCount > 0 && (
          <NotificationBadge>{unreadCount}</NotificationBadge>
        )}
      </NotificationTrigger>

      <NotificationContainer show={show}>
        <NotificationHeader>
          <h3>Notifications</h3>
          <Close 
            style={{ cursor: 'pointer' }}
            onClick={() => setShow(false)}
          />
        </NotificationHeader>

        <NotificationList>
          {notifications.map(notification => (
            <NotificationItem 
              key={notification.id}
              unread={notification.unread}
              onClick={() => markAsRead(notification.id)}
            >
              <NotificationIcon color={notification.color}>
                {getIcon(notification.type)}
              </NotificationIcon>
              <NotificationContent>
                <h4>{notification.title}</h4>
                <p>{notification.message}</p>
                <NotificationTime>{notification.time}</NotificationTime>
              </NotificationContent>
            </NotificationItem>
          ))}
        </NotificationList>
      </NotificationContainer>
    </>
  );
}

export default NotificationSystem;