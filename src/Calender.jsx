import React from "react";
import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe} from '@fortawesome/free-solid-svg-icons'

const timezones = [
    { value: 'America/New_York', label: 'New York (EST)' },
    { value: 'Europe/London', label: 'London (GMT)' },
    { value: 'Asia/Tokyo', label: 'Tokyo (JST)' },

];

const Calendar = ({ onChange, onTimeZoneChange }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTimezone, setSelectedTimezone] = useState(timezones[1].value);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        onChange(date);
        onTimeZoneChange(selectedTimezone);
    };

    const timeZone = Intl.DateTimeFormat(undefined, { timeZone: selectedTimezone, hour: '2-digit', minute: '2-digit' })
        .format(selectedDate)

    const handleTimezoneChange = (timezone) => {
        setSelectedTimezone(timezone.value);
        onTimeZoneChange(selectedTimezone);
    };
    const customFormat = (weekday) => {
        return weekday.slice(0, 3);
    };
    return (
        <div className="calendar-container">
            <div className="date-picker-wrapper">
                <DatePicker
                    inline
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MM/dd/yyyy"
                    calendarClassName="custom-datepicker"
                    formatWeekDay={nameOfDay => nameOfDay.substr(0, 3)}
                />
            </div>
            <div className="timezone-wrapper" style={{ marginTop: '10px' }}>
                <span style={{ fontWeight: 'bold' }} >Timezone</span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                   <FontAwesomeIcon icon={faGlobe} />
                   <Select
                    value={timezones.find(tz => tz.value === selectedTimezone)}
                    options={timezones}
                    onChange={handleTimezoneChange}
                    styles={{
                        control: (provided) => ({
                            ...provided,
                            border: 'none', // Remove border
                            boxShadow: 'none', // Remove box shadow
                        }),
                        indicatorSeparator: () => ({ display: 'none' })
                    }}
                ></Select>
                </div>
            </div>
        </div>
    );
};

export default Calendar;

