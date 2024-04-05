import React, { useState } from 'react';
// import './Form.css'; // Import CSS file for styling

const Form = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [guests, setGuests] = useState([]);
    const [otherInfo1, setOtherInfo1] = useState('');
    const [otherInfo2, setOtherInfo2] = useState('');
    const [fiberyWork, setFiberyWork] = useState('');
    const [moreAbout, setMoreAbout] = useState([]);

    const fiberyWorkOptions = [
        { label: '🥕Myself', value: 'myself' },
        { label: '👯< 10 people', value: '<10' },
        { label: '🦄10-50 people', value: '10-50' },
        { label: '🦅50+ people', value: '50+' }
    ];

    const moreaboutOptions = [
        { label: '🗻Leadership', value: 'Leadership' },
        { label: '🦉Consulting', value: 'Consulting' },
        { label: '☀️Product Management', value: 'Product Management' },
        { label: '🎧Sales', value: 'Sales' },
        { label: '🎨Design', value: 'Design' },
        { label: '💻Engeneering', value: 'Engeneering' },
        { label: '💣Marketing', value: 'Marketing' },
        { label: '💎Human Resource', value: 'Human Resource' },
        { label: '📙Education', value: 'Education' },
        { label: '❓Something Else', value: 'Something Else' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, email, guests, otherInfo1, otherInfo2, fiberyWork, moreAbout });
    };

    const handleAddGuest = () => {
        if (email && !guests.includes(email)) {
            setGuests([...guests, email]);
            
        }
    };

    const handleMoreAboutChange = (value) => {
        if (moreAbout.includes(value)) {
            setMoreAbout(moreAbout.filter(item => item !== value));
        } else {
            setMoreAbout([...moreAbout, value]);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <span>Enter Details</span>
            <label htmlFor="name">Name: *</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <div className='email-section'>
                <div>
                    <label htmlFor="email">Email: *</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    {guests[0] && (
                        <ul>
                            {guests.map((guest, index) => (
                                <li key={index}>{guest}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className='guestButton'><button type="button" onClick={handleAddGuest}> Add Guest</button></div>
            </div>
            <div className="Options-section">
                <label htmlFor="fibery-work">I want Fibery to work for: *</label>
                <div>
                    {fiberyWorkOptions.map((option, index) => (
                        <div key={index}>
                            <input
                                type="radio"
                                id={`fiberyWork-${index}`}
                                name="fiberyWork"
                                value={option.value}
                                checked={fiberyWork === option.value}
                                onChange={(e) => setFiberyWork(e.target.value)}
                                required
                            />
                            <label htmlFor={`fiberyWork-${index}`}>{option.label}</label>
                        </div>
                    ))}
                </div>

                <label htmlFor="more-about">You are more about *</label>
                <div>
                    {moreaboutOptions.map((option, index) => (
                        <div key={index}>
                            <input
                                type="checkbox"
                                id={`moreAbout-${index}`}
                                name="moreAbout"
                                value={option.value}
                                checked={moreAbout.includes(option.value)}
                                onChange={(e) => handleMoreAboutChange(e.target.value)}
                                
                            />
                            <label htmlFor={`moreAbout-${index}`}>{option.label}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="other-info-section">
                <label htmlFor="other-info1">Please, Share anything that will help prepare for our meeting:</label>
                <textarea
                    id="other-info1"
                    value={otherInfo1}
                    onChange={(e) => setOtherInfo1(e.target.value)}
                />
                <label htmlFor="other-info2">Please, Share with us the name of your Fibery workspace, if any:</label>
                <textarea
                    id="other-info2"
                    value={otherInfo2}
                    onChange={(e) => setOtherInfo2(e.target.value)}
                />
            </div>
            <button type="submit">Schedule</button>
        </form>
    );
};

export default Form;
