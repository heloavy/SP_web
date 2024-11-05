import './EventsCalendar.css';

import { useState } from 'react';
import styled from 'styled-components';
import { 
  ChevronLeft, 
  ChevronRight, 
  Event,
  AccessTime,
  LocationOn 
} from '@mui/icons-material';

const CalendarContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background: #ddd;
  border: 1px solid #ddd;
`;

const WeekDay = styled.div`
  background: ${props => props.theme.colors.accent};
  color: white;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
`;

const Day = styled.div`
  background: white;
  padding: 1rem;
  min-height: 100px;
  position: relative;
  cursor: pointer;
  
  ${props => props.isToday && `
    background: ${props.theme.colors.grey};
  `}
  
  ${props => props.hasEvent && `
    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 50%;
      transform: translateX(-50%);
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${props.theme.colors.primary};
    }
  `}
`;

const EventsList = styled.div`
  margin-top: 2rem;
`;

const EventCard = styled.div`
  padding: 1rem;
  background: ${props => props.theme.colors.grey};
  border-radius: 4px;
  margin-bottom: 1rem;
  
  &:hover {
    background: ${props => props.theme.colors.primary + '10'};
  }
`;

const EventDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;
`;

function EventsCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const events = [
    {
      id: 1,
      title: "Author Workshop",
      date: "2024-03-15",
      time: "14:00",
      location: "Main Auditorium",
      description: "Interactive session with renowned authors"
    },
    {
      id: 2,
      title: "Book Launch",
      date: "2024-03-20",
      time: "16:00",
      location: "Conference Hall",
      description: "Launch of new educational series"
    }
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: days }, (_, i) => i + 1);
  };

  const getEventsForDate = (date) => {
    return events.filter(event => event.date === date);
  };

  return (
    <CalendarContainer>
      <CalendarHeader>
        <MonthNavigation>
          <NavButton onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}>
            <ChevronLeft />
          </NavButton>
          <h2>
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <NavButton onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}>
            <ChevronRight />
          </NavButton>
        </MonthNavigation>
      </CalendarHeader>

      <CalendarGrid>
        {weekDays.map(day => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
        {getDaysInMonth(currentDate).map(day => (
          <Day 
            key={day}
            isToday={day === new Date().getDate()}
            hasEvent={getEventsForDate(`2024-03-${day}`).length > 0}
            onClick={() => setSelectedDate(`2024-03-${day}`)}
          >
            {day}
          </Day>
        ))}
      </CalendarGrid>

      {selectedDate && (
        <EventsList>
          <h3>Events on {selectedDate}</h3>
          {getEventsForDate(selectedDate).map(event => (
            <EventCard key={event.id}>
              <h4>{event.title}</h4>
              <EventDetail>
                <Event /> {event.date}
              </EventDetail>
              <EventDetail>
                <AccessTime /> {event.time}
              </EventDetail>
              <EventDetail>
                <LocationOn /> {event.location}
              </EventDetail>
              <p>{event.description}</p>
            </EventCard>
          ))}
        </EventsList>
      )}
    </CalendarContainer>
  );
}

export default EventsCalendar; 