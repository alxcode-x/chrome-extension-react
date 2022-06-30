import React, { Component } from "react";
import Draggable from "react-draggable";

function FloatingWindow() {
    console.log("Hello from Window");

    const windowStyle = {
        width: "120px",
        border: "2px solid black",
        background: "#D6E1E9",
        color: "black"
    };

    return (
        <Draggable>
            <div className="box">
                <div style={windowStyle}>Draggable window!</div>
            </div>
        </Draggable>
    );
}

export default FloatingWindow;