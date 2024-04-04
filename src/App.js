import React, { useEffect, useState } from 'react';
import "./App.css";
import Calendar from './Calender';
import TimeSelector from './TimeSelector';
import Form from './Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faCalendar, faVideo, faUser, faCheck, faClock} from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSubmited, setIsSubmited] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(null);
  const [selectedTimeZone, setSelectedTimeZone] = useState('');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleNextClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
    setIsSubmited(true);
  };

  const handleTimeZoneChange = (timezone) => {
    setSelectedTimeZone(timezone);
  };

  return (
    <div className="parent">
    <div>
      {/* {!isOpen && <button className="demo-btn" onClick={toggleModal}>Get a demo</button>} */}
      {isOpen && (
        <div className="modal-container">
          {!isSubmited && (<div className="left-section" style={{width : selectedDate ?'25%' : '40%' }}>
            <div className='logo'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjfkBAEpv7f-lNLGbJB_YOx_spMKG-55COw&s' alt='img' className="close-btn" onClick={toggleModal} />
            </div>
            <div className='description'>
              <h2>Fibery Demo</h2>
              <span style={{fontWeight:'bold', color:"#646262"}}><FontAwesomeIcon icon={faClock}/> 45 min</span><br/><br/>
              {showForm && selectedDate && selectedTime && (<span style={{fontWeight:'bold', color:"#646262"}}> {selectedTime}, {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>)}<br/>
              {showForm && selectedTimeZone && (<span style={{fontWeight:'bold', color:"#646262"}}><br></br><FontAwesomeIcon icon={faGlobe} /> {selectedTimeZone}</span>)}
              <p>Book a meeting with our Fibery team. Talk to a real person about how to get your processes set up with us or not.</p>
            </div>
          </div>)}
          {!isSubmited && (<div className='right-section' style={{width : selectedDate ?'55%' : '40%' }}>
            {!showForm && <h1>Select Date and Time</h1>}

            <div className="calendar-time-container">
              <div className="calendar-container" >
                {/* Calendar */}
                {!showForm && <Calendar  onChange={handleDateChange} onTimeZoneChange={handleTimeZoneChange} />}
              </div>
              <div className="time-selector-container" hidden={!selectedDate}>
                {/* Time selector (displayed only when a date is selected) */}
                {!showForm && selectedDate && <TimeSelector onChange={handleTimeChange} />}
              </div>
            </div>
            {/* Next button (displayed when both date and time are selected) */}
            {!showForm && selectedDate && selectedTime && (
              <button className="modal-action-btn" onClick={handleNextClick}>Next</button>
            )}

            {/* Form (displayed when "Next" button is clicked) */}
            {showForm && (
              <div>
                <Form onSubmit={handleFormSubmit}></Form>
              </div>
            )}
          </div>)}
          {formData && (
            <div className="form-data">
              <div className='topmost'>
              <h2><FontAwesomeIcon icon={faCheck}/> You are scheduled</h2>
              <p>A calendar invitation has been sent to your email address.</p>
              </div>

              <div className='info'>
                <h2>Fibery Demo</h2>
                <span><FontAwesomeIcon icon={faUser}/>    {formData.name}</span>
                <span><FontAwesomeIcon icon={faCalendar}/>  {selectedTime}, {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span><FontAwesomeIcon icon={faGlobe}/>     {selectedTimeZone}</span>
                <span><FontAwesomeIcon icon={faVideo}/>    web conferencing details to follow</span>       
              </div>

              <div className='layer3'>
                <h2 className='h2'>Schedule your own meeting with calendy for free</h2>
                <h4 >Eliminate the back and forth emails for finding time</h4>
              </div>

              <div className='signup-options'>
              <div className='google'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/640px-Google_%22G%22_logo.svg.png' alt='img'/> Signup with google</div>
              <div className='microsoft'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhqZsr5q4Dz-ecvcVg_9WzU0VsmEw6l6pYYaq9RdWKw&s' alt='img'/> Signup with microsoft</div>
              <div className='other'>Signup with work email</div>          
              </div>
              </div>            
          )}
        </div>
        
      )}
      </div>
    </div>
  );
};

export default App;


