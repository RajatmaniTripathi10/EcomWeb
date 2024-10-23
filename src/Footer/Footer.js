import React from 'react';
import TabButton from "../TabButton/TabButton";
import './Footer.css'; // Assuming we will style this in a separate CSS file

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="brand-section">
                <h2>BRAND NAME</h2>
                <p>The best look anytime, anywhere.</p>
            </div>
            <div className="lists-container">
                {/* For Her Section */}
                <div className="list-section">
                    <h4>For Her</h4>
                    <ul>
                        <li><TabButton className="text-button">Women Jeans</TabButton></li>
                        <li><TabButton className="text-button">Tops and Shirts</TabButton></li>
                        <li><TabButton className="text-button">Women Jackets</TabButton></li>
                        <li><TabButton className="text-button">Heels and Flats</TabButton></li>
                    </ul>
                </div>
                {/* For Him Section */}
                <div className="list-section">
                    <h4>For Him</h4>
                    <ul>
                        <li><TabButton className="text-button">Men Jeans</TabButton></li>
                        <li><TabButton className="text-button">Men Shirts</TabButton></li>
                        <li><TabButton className="text-button">Men Shoes</TabButton></li>
                        <li><TabButton className="text-button">Men Accessories</TabButton></li>
                        <li><TabButton className="text-button">Men Jackets</TabButton></li>
                    </ul>
                </div>
            </div>
            {/* Subscribe Section */}
            <div className="subscribe-section">
                <h4>Subscribe</h4>
                <input type="email" placeholder="Enter your email" />
                <TabButton className="subscribe-button">Subscribe</TabButton>
            </div>
        </footer>
    );
};

export default Footer;
