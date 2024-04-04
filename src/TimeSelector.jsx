import React from "react";
import { useState } from "react";

const TimeSelector = ({ onChange}) => {
    const times = ['09:00', '09:30', '10:00','10:30','11:00','11:30','12:00','12:30','1:00']; // Add more time options if needed

    const [selectedTime, setSelectedTime] = useState('');

    const handleTimeChange = (e) => {
        const selectedTime = e.target.innerText;
        setSelectedTime(selectedTime);
        onChange(selectedTime);
    };
    return (
        <div className="time-selector-container">
            <label htmlFor="time">Select a Time:</label>
            <ul style={{ listStyleType: 'none' }}>
                {times.map((time, index) => (
                    <li key={index} onClick={handleTimeChange}>{time}</li>
                ))}
            </ul>
        </div>
    );
};

export default TimeSelector;


