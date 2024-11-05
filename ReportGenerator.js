import { useState } from 'react';
import './ReportGenerator.css';
import {
  BarChart,
  PieChart,
  GetApp,
  Print,
  Share,
  FilterList,
  DateRange,
  Assessment
} from '@mui/icons-material';

function ReportGenerator() {
  const [reportType, setReportType] = useState('performance');
  const [dateRange, setDateRange] = useState('month');
  const [loading, setLoading] = useState(false);

  const generateReport = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="report-container">
      <h2 className="title">Report Generator</h2>

      <div className="control-panel">
        <div className="filter-group">
          <FilterList />
          <select className="select" 
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
          >
            <option value="performance">Performance Report</option>
            <option value="progress">Progress Report</option>
            <option value="attendance">Attendance Report</option>
            <option value="assessment">Assessment Report</option>
          </select>
        </div>

        <div className="filter-group">
          <DateRange />
          <select className="select"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="quarter">Last Quarter</option>
            <option value="year">Last Year</option>
          </select>
        </div>

        <button className="button button-primary" onClick={generateReport}>
          <Assessment /> Generate Report
        </button>

        <button className="button">
          <GetApp /> Download
        </button>

        <button className="button">
          <Print /> Print
        </button>

        <button className="button">
          <Share /> Share
        </button>
      </div>

      <div className="report-grid">
        <div className="report-card">
          <h3 className="card-title">Performance Overview</h3>
          <div className="chart-container">
            {/* Add chart component here */}
          </div>
        </div>

        <div className="report-card">
          <h3 className="card-title">Subject Distribution</h3>
          <div className="chart-container">
            {/* Add chart component here */}
          </div>
        </div>

        <div className="report-card">
          <h3 className="card-title">Progress Trends</h3>
          <div className="chart-container">
            {/* Add chart component here */}
          </div>
        </div>
      </div>

      <table className="data-table">
        <thead>
          <tr className="table-header">
            <th>Subject</th>
            <th>Score</th>
            <th>Progress</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mathematics</td>
            <td>85%</td>
            <td>90%</td>
            <td>Excellent</td>
          </tr>
          <tr>
            <td>Science</td>
            <td>78%</td>
            <td>85%</td>
            <td>Good</td>
          </tr>
          {/* Add more rows */}
        </tbody>
      </table>
    </div>
  );
}

export default ReportGenerator;