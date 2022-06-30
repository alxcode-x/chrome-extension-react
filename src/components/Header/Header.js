import React from "react";


const Header = () => {
    
    const headerText = {
        width: "100%",
        border: "1px solid black",
        background: "#00b3e3",
        color: "white",
        boxSizing: "border-box"
    };
    return(
        <div >
            <div style={headerText}>Ava Smart Asistant</div>
        </div>
    )
}

export default Header;