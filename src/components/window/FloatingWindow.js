import React, { Component } from "react";
import Draggable from "react-draggable";
import './FloatingWindow.css';
import Header from "../Header/Header";

function FloatingWindow() {
    console.log("Hello from Window");

    // const windowStyle = {
    //     width: "120px",
    //     border: "2px solid black",
    //     background: "#D6E1E9",
    //     color: "black"
    // };

    const windowWrapper = {
        width: "50%",
        height: "250px",
        border: "1px solid black",
        boxSizing: "border-box",
        backgroundColor: "#fff"
    }

    return (
        <Draggable defaultPosition={{x:(window.innerWidth/2) - ((window.innerWidth/2)/4), y:(-window.innerHeight/2)- 120}}>
            <div style={windowWrapper}>
                <Header/>
            </div>
        </Draggable>
    );
}

export default FloatingWindow;