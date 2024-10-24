const TabButton = ({ children, className,onClick }) => {
    return (
        <>
            <button className={className} onClick={onClick}>{children}</button>
        </>
    ); 
};

export default TabButton;
