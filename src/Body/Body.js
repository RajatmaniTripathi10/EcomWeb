import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import TabButton from "../TabButton/TabButton";
import './Body.css'; // Import the CSS file

const Body = () => {
    return (
        <>
            <Header />
            <div className="body-content">
                <h4 className="announcement">Raining Offers For Hot Summer!</h4>
                <h6 className="offer">25% Off On All Products</h6>
                <div className="button-container">
                    <TabButton>SHOP NOW</TabButton>
                    <TabButton>FIND MORE</TabButton>
                </div>
            </div>
            <Logo />
        </>
    );
}

export default Body;