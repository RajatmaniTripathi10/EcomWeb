import Header from "../Header/Header";
import TabButton from "../TabButton/TabButton";

const Women = () => {
  return (
    <>
    <Header/>
      <input type="text" className="search-input" placeholder="Search Here" />
      <TabButton className="tab-button">Search</TabButton>
    </>
  );
};
export default Women;