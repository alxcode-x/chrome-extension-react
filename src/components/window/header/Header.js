import React from "react";

const Header = () => {
    
    const close = () => {
        console.log("Close");
        console.log(document.getElementById("extension-root"));
        const anchorDraggable = document.getElementById("extension-root");
        anchorDraggable.style.display = "none";
    }

    const headerWrapper = {
        display: "flex",
        background: "#00b3e3",
        width: "100%",
        height: "10%",
        boxSizing: "border-box",
        justifyContent: "space-between",
        alignItems: "center"
    }

    const headerText = {
        color: "white",
        marginLeft: "35%"
    };

    const closeButton = {
        color: "white",
        padding: "1px",
        backgroundColor: "rgb(204, 204, 204)",
        border: "1px solid rgb(0, 0, 0)",
        marginRight: "1%"
    }

    return(
        <div style={headerWrapper}>
            <div style={headerText}>Ava Smart Asistant</div>
            <button style={closeButton} onClick={close}>X</button>
        </div>
    )
}

export default Header;