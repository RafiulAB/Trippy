import React from 'react';
import Destination from '../components/Destination';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Trip from '../components/Trip';

import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            
            <Hero
            cName="hero-text"
            title="Your Journey Your Story"
            text= "Choose Your Favourite Destinations"
            btnText="Travel Plan"
            url="/"
            btnClass="show"
            />
         <Destination /> 
         <Trip />
         <Footer />
        </div>
    );
};

export default Home;