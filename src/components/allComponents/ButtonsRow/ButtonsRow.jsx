import React from "react";
import classes from './ButtonsRow.module.css';

const bringMeTheWindow = () => {
    chrome.runtime.sendMessage({message:"demo"}, response => {
        console.log(response);
    })
}

const ButtonsRow = () => {
    return (
        <div className={classes.buttonsWrapper}>
            <button className={classes.buttonDemo}>Btn 1</button>
            <button className={classes.buttonDemo}>Btn 2</button>
            <button className={classes.buttonDemo}>Btn 3</button>
            <button className={classes.buttonDemo} onClick={bringMeTheWindow}>Btn 4</button>
        </div>
    )
}

export default ButtonsRow;