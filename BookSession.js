import { useState } from 'react';
import { CalendarToday, AccessTime, Person } from '@mui/icons-material';
import '../styles/BookSession.css';

function BookSession() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    sessionType: '',
    message: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Book a Session with an Author</h2>
      
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label"><Person /> Full Name</label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Repeat for other form fields */}
        
        <button className="submit-button" type="submit">
          Book Session
        </button>
      </form>

      {showSuccess && (
        <div className="success-message">
          Session booked successfully! We'll contact you shortly.
        </div>
      )}
    </div>
  );
}

export default BookSession; 