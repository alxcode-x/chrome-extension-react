import React, { Component } from "react";
import Draggable from "react-draggable";
import './FloatingWindow.css';
import Header from "../Header/Header";
import GeneralApp from "../GeneralApp/GeneralApp";

function FloatingWindow() {

    return (
        <Draggable defaultPosition={{x:(window.innerWidth/2) - ((window.innerWidth/2)/4), y:(-window.innerHeight/2)- 120}}>
            <div className={"windowWrapper"}>
                <Header/>
                <GeneralApp/>
            </div>
        </Draggable>
    );
}

export default FloatingWindow;