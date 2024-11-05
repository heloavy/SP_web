import { useState } from 'react';
import styled from 'styled-components';
import { 
  LocalShipping, 
  Inventory, 
  Assignment,
  Check,
  Timeline
} from '@mui/icons-material';

const TrackingContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const OrderInfo = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
`;

const TrackingTimeline = styled.div`
  position: relative;
  padding-left: 2rem;
  margin-top: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${props => props.theme.colors.grey};
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: -2rem;
    top: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${props => props.completed ? props.theme.colors.primary : 'white'};
    border: 2px solid ${props => props.completed ? props.theme.colors.primary : props.theme.colors.grey};
    z-index: 1;
  }
`;

const TimelineContent = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-left: 1rem;
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: ${props => {
    switch(props.status) {
      case 'processing': return '#ffd700';
      case 'shipped': return '#87ceeb';
      case 'delivered': return '#90ee90';
      default: return props.theme.colors.grey;
    }
  }};
  color: ${props => props.status === 'processing' ? 'black' : 'white'};
`;

const OrderDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const DetailCard = styled.div`
  background: ${props => props.theme.colors.grey};
  padding: 1rem;
  border-radius: 4px;
`;

function OrderTracking({ orderId }) {
  const [orderStatus] = useState({
    id: "ORD123456",
    status: "shipped",
    date: "2024-03-15",
    items: [
      { id: 1, name: "Mathematics Textbook", quantity: 2 },
      { id: 2, name: "Science Workbook", quantity: 1 }
    ],
    timeline: [
      {
        id: 1,
        status: "Order Placed",
        date: "2024-03-15 09:00 AM",
        description: "Your order has been confirmed",
        completed: true
      },
      {
        id: 2,
        status: "Processing",
        date: "2024-03-15 02:00 PM",
        description: "Order is being processed",
        completed: true
      },
      {
        id: 3,
        status: "Shipped",
        date: "2024-03-16 10:00 AM",
        description: "Order has been shipped",
        completed: true
      },
      {
        id: 4,
        status: "Out for Delivery",
        date: "2024-03-17",
        description: "Expected delivery by end of day",
        completed: false
      }
    ]
  });

  return (
    <TrackingContainer>
      <OrderInfo>
        <h2>Order #{orderStatus.id}</h2>
        <StatusBadge status={orderStatus.status}>
          {orderStatus.status.toUpperCase()}
        </StatusBadge>

        <OrderDetails>
          <DetailCard>
            <h4>Order Date</h4>
            <p>{orderStatus.date}</p>
          </DetailCard>
          <DetailCard>
            <h4>Items</h4>
            <p>{orderStatus.items.length} items</p>
          </DetailCard>
          <DetailCard>
            <h4>Delivery Expected</h4>
            <p>March 17, 2024</p>
          </DetailCard>
        </OrderDetails>
      </OrderInfo>

      <TrackingTimeline>
        {orderStatus.timeline.map((event) => (
          <TimelineItem key={event.id} completed={event.completed}>
            <TimelineContent>
              <h4>{event.status}</h4>
              <p>{event.date}</p>
              <p>{event.description}</p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TrackingTimeline>
    </TrackingContainer>
  );
}

export default OrderTracking; 