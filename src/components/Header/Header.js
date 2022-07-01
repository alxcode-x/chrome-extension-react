import React from "react";

const Header = () => {
    
    const headerWrapper = {
        display: "flex",
        background: "#00b3e3",
        width: "100%",
        height: "10%",
        boxSizing: "border-box",
        justifyContent: "center",
        alignItems: "center"
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