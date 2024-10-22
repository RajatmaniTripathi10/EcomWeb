import TabButton from "../TabButton/TabButton";
import './Header.css';

const Header = () => {
    return (
        <>
                <header className="header">
                    <div className="left-section">
                        <h1 className="header-title">DNK</h1>
                        <ul className="tab-buttons">
                            <li><TabButton className="tab-button">Everything</TabButton></li>
                            <li><TabButton className="tab-button">Women</TabButton></li>
                            <li><TabButton className="tab-button">Men</TabButton></li>
                            <li><TabButton className="tab-button">Accessories</TabButton></li>
                        </ul>
                    </div>
                    <ul className="right-buttons">
                        <li><TabButton className="right-button">About</TabButton></li>
                        <li><TabButton className="right-button">Contact Us</TabButton></li>
                        <li><TabButton className="right-button">Profile</TabButton></li>
                    </ul>
                </header>
        </>
    );
};

export default Header;
