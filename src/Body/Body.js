import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import SpecialCards from "../SpecialCards/SpecialCards";
import TabButton from "../TabButton/TabButton";
import './Body.css';

const Body = () => {
    return (
        <>
            <Header className="header-background" />
            <div className="body-content">
                <h4 className="announcement">Raining Offers For Hot Summer!</h4>
                <h6 className="offer">25% Off On All Products</h6>
                <div className="button-container">
                    <TabButton>SHOP NOW</TabButton>
                    <TabButton>FIND MORE</TabButton>
                </div>
            </div>
            <div className="logo-background">
                <Logo />
            </div>
            <div className="cards-background">
                <Cards />
            </div>
            <br />
            <div className="special-cards-background">
                <SpecialCards />
            </div>
            <br />
            <div className="footer-background">
                <Footer />
            </div>
        </>
    );
}

export default Body;