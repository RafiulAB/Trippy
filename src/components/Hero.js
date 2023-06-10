import React from 'react';
import './Hero.css'
import Navbar from './Navbar';



const Hero = (props) => {
    return (
        <div className='hero'>
            <Navbar />
         <div className={props.cName}>
         <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}> <button>{props.btnText}</button> </a>
         </div>
        </div>
    );
};

export default Hero;