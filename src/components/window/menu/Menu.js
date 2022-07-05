import React from "react";
import "./Menu.css";
import { BiWebcam, BiMessageRoundedError, BiMessageRounded } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { GoMailRead } from "react-icons/go";

function Menu(){
    return(
        <div className="menu-content">
            <div className="item"><BiWebcam/></div>
            <div className="item"><BsTelephone/></div>
            <div className="item"><GoMailRead/></div>
            <div className="item"><BiMessageRoundedError/></div>
            <div className="item"><BiMessageRounded/></div>
        </div>
    );
}

export default Menu;