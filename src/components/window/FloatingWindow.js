import React, { Component } from "react";
import Draggable from "react-draggable";
import './FloatingWindow.css';

function FloatingWindow() {
    console.log("Hello from Window");

    // const windowStyle = {
    //     width: "120px",
    //     border: "2px solid black",
    //     background: "#D6E1E9",
    //     color: "black"
    // };

    return (
        <Draggable>
            <div>
                <div  className="box">Draggable window!</div>
            </div>
        </Draggable>
    );
}

export default FloatingWindow;