import React, { Component } from "react";
import Draggable from "react-draggable";
import Header from "../Header/Header";

function FloatingWindow() {
    console.log("Hello from Window");

    const windowStyle = {
        width: "120px",
        border: "2px solid black",
        background: "#D6E1E9",
        color: "black"
    };

    const windowWrapper = {
        width: "50%",
        border: "1px solid black"
    }

    return (
        <Draggable defaultPosition={{x:0, y:(-window.innerHeight/2)- 120}}>
            <div style={windowWrapper}>
                <Header/>
                <div style={windowStyle}>Draggable window!</div>
                <div>
                    <p>How are you look to us!</p>
                </div>
            </div>
        </Draggable>
    );

}

export default FloatingWindow;