import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Trip from '../components/Trip';

const Service = () => {
    return (
        <div>
           <Hero
           cName="about"
           title="Service"
           btnClass="hide"
           />
           <Trip />
           <Footer />
        </div>
    );
};

export default Service;