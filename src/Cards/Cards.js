import React from 'react';
import Model1 from '../Assests/Model/Model1.jpg';
import Model2 from '../Assests/Model/Model2.jpg';
import Model3 from '../Assests/Model/Model3.jpg';
import './Cards.css'; // Import the updated CSS file
import TabButton from '../TabButton/TabButton';

const Cards = () => {
    return (
        <div className="card-container">
            <div className="card">
                <img src={Model1} alt="Model1" />
                <TabButton className="transparent-card-button">Shop Now</TabButton>
            </div>
            <div className="card">
                <img src={Model2} alt="Model2" />
                <TabButton className="transparent-card-button">Shop Now</TabButton>
            </div>
            <div className="card">
                <img src={Model3} alt="Model3" />
                <TabButton className="transparent-card-button">Shop Now</TabButton>
            </div>
        </div>
    );
};

export default Cards;
