import React, { Component } from "react";
import Draggable from "react-draggable";
import './FloatingWindow.css';

function FloatingWindow() {

    return (
        <Draggable defaultPosition={{x:(window.innerWidth/2) - ((window.innerWidth/2)/4), y:(-window.innerHeight/2)- 120}}>
            <div className="windowWrapper">
                <div>Draggable window!</div>
            </div>
        </Draggable>
    );
}

export default FloatingWindow;