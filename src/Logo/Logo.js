import React, { useRef } from 'react';
import Chanel from '../Assests/Logo/Chanel.png';
import Ck from '../Assests/Logo/Ck.png';
import Nike from '../Assests/Logo/Nike.jpg';
import RL from '../Assests/Logo/RL.jpg';
import Levis from '../Assests/Logo/Levis_logo.png';
import versace from '../Assests/Logo/versace.jpeg';
import puma from '../Assests/Logo/Puma.png';
import GS from '../Assests/Logo/GymShark.png';
import LV from '../Assests/Logo/LV.png';
import './Logo.css';

const Logo = () => {
    const logoListRef = useRef(null); // Ref to access the logo list

    // Function to scroll logos left
    const scrollLeft = () => {
        if (logoListRef.current) {
            logoListRef.current.scrollBy({
                left: -300, // Adjust the scroll amount
                behavior: 'smooth',
            });
        }
    };

    // Function to scroll logos right
    const scrollRight = () => {
        if (logoListRef.current) {
            logoListRef.current.scrollBy({
                left: 300, // Adjust the scroll amount
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="logo-carousel">
            {/* Left arrow */}
            <button className="arrow-button left" onClick={scrollLeft}>
                &#8249; {/* Left arrow icon */}
            </button>

            {/* Logo list */}
            <div className="logo-list" ref={logoListRef}>
                <div><img className="logo-image" src={Chanel} alt="Chanel" /></div>
                <div><img className="logo-image" src={Ck} alt="CK" /></div>
                <div><img className="logo-image" src={Nike} alt="Nike" /></div>
                <div><img className="logo-image" src={RL} alt="RL" /></div>
                <div><img className="logo-image" src={Levis} alt="Levis" /></div>
                <div><img className="logo-image" src={versace} alt="Versace" /></div>
                <div><img className="logo-image" src={puma} alt="Puma" /></div>
                <div><img className="logo-image" src={GS} alt="GymShark" /></div>
                <div><img className="logo-image" src={LV} alt="LV" /></div>
            </div>

            {/* Right arrow */}
            <button className="arrow-button right" onClick={scrollRight}>
                &#8250; {/* Right arrow icon */}
            </button>
        </div>
    );
};

export default Logo;
