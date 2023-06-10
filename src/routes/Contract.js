import React from 'react';
import ContractFrom from '../components/ContractFrom';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const Contract = () => {
    return (
        <div>
            <Hero
            cName="about"
            title="Contract"
            btnClass="hide"
            />
            <ContractFrom />
            <Footer />
        </div>
    );
};

export default Contract;