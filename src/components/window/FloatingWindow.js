import React from "react";
import Draggable from "react-draggable";
import './FloatingWindow.css';
import Header from "./header/Header";
import GeneralApp from "./generalApp/GeneralApp";


function FloatingWindow() {

    return (
        <Draggable defaultPosition={{x:(window.innerWidth/1.2) - ((window.innerWidth/2)/4), y:(-window.innerHeight/1.3)- 120}}>
            <div className={"windowWrapper"}>
                <Header/>
                <GeneralApp/>
            </div>
        </Draggable>
    );
}

export default FloatingWindow;