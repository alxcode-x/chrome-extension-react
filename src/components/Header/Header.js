import React from "react";


const Header = () => {
    
    const headerText = {
        width: "100%",
        border: "2px solid black",
        background: "#00b3e3",
        color: "white"
    };
    return(
        <div >
            <div style={headerText}>Ava Smart Asistant</div>
        </div>
    )
}

export default Header;