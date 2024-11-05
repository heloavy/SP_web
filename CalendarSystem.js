import { useState } from 'react';
import styled from 'styled-components';
import {
  ChevronLeft,
  ChevronRight,
  Add,
  Event,
  AccessTime,
  LocationOn,
  People,
  Delete
} from '@mui/icons-material';
import './CalendarSystem.css';

const CalendarContainer = styled.div`
  padding: 2rem;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const MonthNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  &:hover {
    background: ${props => props.theme.colors.grey};
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background: ${props => props.theme.colors.grey};
  border: 1px solid ${props => props.theme.colors.grey};
  border-radius: 8px;
  overflow: hidden;
`;

const WeekDay = styled.div`
  background: white;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
`;

const Day = styled.div`
  background: white;
  min-height: 120px;
  padding: 0.5rem;
  position: relative;

  ${props => props.isToday && `
    background: #e3f2fd;
  `}

  ${props => props.isOtherMonth && `
    opacity: 0.5;
  `}
`;

const DayNumber = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  
  ${props => props.isToday && `
    background: ${props.theme.colors.primary};
    color: white;
  `}
`;

const EventList = styled.div`
  margin-top: 2rem;
`;

const Event = styled.div`
  margin: 0.2rem 0;
  padding: 0.3rem;
  border-radius: 4px;
  font-size: 0.8rem;
  background: ${props => props.color || props.theme.colors.primary};
  color: white;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const EventModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  width: 400px;
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  z-index: 999;
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

function CalendarSystem() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "Mathematics Quiz",
      date: "2024-03-15",
      time: "09:00 AM",
      location: "Room 101",
      attendees: ["John Doe", "Jane Smith"],
      color: "#2196f3"
    },
    // More events...
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    return { firstDay, lastDay };
  };

  const renderCalendar = () => {
    const { firstDay, lastDay } = getDaysInMonth(currentDate);
    const days = [];
    // Add calendar rendering logic here
    return days;
  };

  return (
    <CalendarContainer>
      <CalendarHeader>
        <MonthNavigation>
          <NavButton onClick={() => {/* Previous month logic */}}>
            <ChevronLeft />
          </NavButton>
          <h2>March 2024</h2>
          <NavButton onClick={() => {/* Next month logic */}}>
            <ChevronRight />
          </NavButton>
        </MonthNavigation>
        <Button primary>
          <Add /> Add Event
        </Button>
      </CalendarHeader>

      <CalendarGrid>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
        {renderCalendar()}
      </CalendarGrid>

      {showEventModal && (
        <>
          <Overlay onClick={() => setShowEventModal(false)} />
          <EventModal>
            <h3>{selectedEvent.title}</h3>
            <div style={{ margin: '1rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <AccessTime />
                {selectedEvent.time}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <LocationOn />
                {selectedEvent.location}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <People />
                {selectedEvent.attendees.join(', ')}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <Button>
                <Delete /> Delete
              </Button>
              <Button primary>
                <Event /> Edit Event
              </Button>
            </div>
          </EventModal>
        </>
      )}
    </CalendarContainer>
  );
}

export default CalendarSystem; 