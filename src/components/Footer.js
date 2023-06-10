import React from 'react';
import './Footer.css';
import { AiFillFacebook,AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare} from "react-icons/ai";
const Footer = () => {
    return (
        <div className='footer'>
            <div className="top">
                <div>
                    <h1>Trippy</h1>
                    <p>Choose Your Favourite Destination</p>
                </div>
                <div>
                    <a href="/"> <AiFillFacebook/> </a>
                    <a href="/"> <AiFillInstagram/> </a>
                    <a href="/"> <AiFillTwitterSquare/> </a>
                    <a href="/"> <AiFillLinkedin/> </a>

                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4> Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>

               
                <div>
                    <h4> Community </h4>
                    <a href="/">Github</a>
                    <a href="/">Issue</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>

                <div>
                    <h4> Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Ttoubleshooting</a>
                    <a href="/">Contract us</a>
                    
                </div>

                <div>
                    <h4> Others</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
            </div>
           
        </div>
    );
};

export default Footer;