import React from 'react';
import './Trip.css';

const TripData = (props) => {
    const {header,photos,text}= props;
    return (
        <div className='t-card'>
            <div className="t-image">
                <img src={photos} alt="images" />
            </div>
            <h4>{header}</h4>
            <p>{text}</p>
            
        </div>
    );
};

export default TripData;