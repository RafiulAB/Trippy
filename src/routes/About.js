import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Info from '../components/Info';

const About = () => {
    return (
        <div>
            <Hero 
            cName="about"
            title="About us"
            btnClass="hide"
            />
            <Info />
           <Footer/>
        </div>
    );
};

export default About;