import React from 'react';
import './SpecialCards.css'; // Import the CSS file for styling
import TabButton from '../TabButton/TabButton';

const SpecialCards = () => {
    return (
        <section className="special-cards-section">
            <div className="text-content">
                <h6>Limited Time Offer</h6>
                <h2>Special Edition</h2>
                <h6>Buy This T-shirt At 20% Discount, Use Code OFF20</h6>
            </div>
            <TabButton className="transparent-card-button">Shop Now</TabButton>
        </section>
    );
}

export default SpecialCards;
