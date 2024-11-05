import { useState } from 'react';
import styled from 'styled-components';
import {
  BarChart,
  LineChart,
  PieChart,
  Timeline,
  TrendingUp,
  TrendingDown
} from '@mui/icons-material';
import './AnalyticsDashboard.css';

const Container = styled.div`
  padding: 2rem;
`;

const FilterBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.active ? props.theme.colors.primary : '#ddd'};
  border-radius: 4px;
  background: ${props => props.active ? props.theme.colors.primary : 'white'};
  color: ${props => props.active ? 'white' : props.theme.colors.text};
  cursor: pointer;

  &:hover {
    background: ${props => props.active ? props.theme.colors.primary : '#f5f5f5'};
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const MetricCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const MetricValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const MetricChange = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.positive ? '#4caf50' : '#f44336'};
  font-size: 0.9rem;
`;

const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ChartCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('7d');

  const metrics = [
    {
      title: 'Total Sales',
      value: '$12,345',
      change: '+15%',
      positive: true
    },
    {
      title: 'Active Users',
      value: '1,234',
      change: '+8%',
      positive: true
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '-0.5%',
      positive: false
    },
    {
      title: 'Avg. Order Value',
      value: '$45.67',
      change: '+12%',
      positive: true
    }
  ];

  return (
    <Container className="analytics-container">
      <h2 className="analytics-title">Sugandini Publications Analytics</h2>

      <FilterBar className="filter-bar">
        <FilterButton 
          className={`filter-button ${timeRange === '7d' ? 'active' : ''}`}
          onClick={() => setTimeRange('7d')}
        >
          Last 7 Days
        </FilterButton>
        <FilterButton 
          active={timeRange === '30d'}
          onClick={() => setTimeRange('30d')}
        >
          Last 30 Days
        </FilterButton>
        <FilterButton 
          active={timeRange === '90d'}
          onClick={() => setTimeRange('90d')}
        >
          Last 90 Days
        </FilterButton>
        <FilterButton 
          active={timeRange === '1y'}
          onClick={() => setTimeRange('1y')}
        >
          Last Year
        </FilterButton>
      </FilterBar>

      <MetricsGrid className="metrics-grid">
        {metrics.map((metric, index) => (
          <MetricCard key={index} className="metric-card">
            <h3 className="metric-title">{metric.title}</h3>
            <MetricValue className="metric-value">{metric.value}</MetricValue>
            <MetricChange 
              className={`metric-change ${metric.positive ? 'positive' : 'negative'}`}
              positive={metric.positive}
            >
              {metric.positive ? <TrendingUp /> : <TrendingDown />}
              {metric.change} from last period
            </MetricChange>
          </MetricCard>
        ))}
      </MetricsGrid>

      <ChartGrid className="chart-grid">
        <ChartCard className="chart-card">
          <h3 className="chart-title">Sales Trend</h3>
          {/* Add Line Chart Component */}
        </ChartCard>

        <ChartCard className="chart-card">
          <h3 className="chart-title">User Demographics</h3>
          {/* Add Pie Chart Component */}
        </ChartCard>

        <ChartCard className="chart-card">
          <h3 className="chart-title">Popular Books</h3>
          {/* Add Bar Chart Component */}
        </ChartCard>

        <ChartCard className="chart-card">
          <h3 className="chart-title">User Engagement</h3>
          {/* Add Area Chart Component */}
        </ChartCard>
      </ChartGrid>
    </Container>
  );
}

export default AnalyticsDashboard; 