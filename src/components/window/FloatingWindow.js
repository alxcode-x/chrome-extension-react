import React, { Component } from "react";
import Draggable from "react-draggable";
import "./FloatingWindow.css";
import Menu from "./menu/Menu";

function FloatingWindow() {

    return (
        <Draggable defaultPosition={{x:(window.innerWidth/1.2) - ((window.innerWidth/2)/4), y:(-window.innerHeight/1.3)- 120}}>
            <div className="windowWrapper">
                <Menu/>
            </div>
        </Draggable>
    );
}

export default FloatingWindow;