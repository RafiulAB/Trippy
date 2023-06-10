import React from 'react';
import './Destination.css';


const DesData = (props) => {
    const {heading,text,photo1,photo2,className}=props
    console.log(heading);
    return (
        <div>
            <div className={className}>
            <div className="des-text">
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
            <div className="image">
                <img src={photo1} alt="pos" />
                <img src={photo2} alt="beach" />
            </div>
            </div>
        </div>
    );
};

export default DesData;