import React from "react";


const Header = () => {
    
    const headerWrapper = {
        display: "flex",
        background: "#00b3e3",
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "center",
        alignContent: "center"
    }

    const headerText = {
        color: "white",
    };
    return(
        <div style={headerWrapper}>
            <div style={headerText}>Ava Smart Asistant</div>
        </div>
    )
}

export default Header;