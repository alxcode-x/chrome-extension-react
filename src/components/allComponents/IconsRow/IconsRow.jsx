import React from "react";
import classes from './IconsRow.module.css';
import webcam from '../../../../assets/img/webcamIcon.jpg';
import phone from '../../../../assets/img/phoneIcon.png';
import letter from '../../../../assets/img/openLetter.png';
import alert from '../../../../assets/img/warningIcon.png';
import message from '../../../../assets/img/messageIcon.png';

const IconsRow = () => {
    return (
        <div className={classes.iconsRowWrapper}>
            <img className={classes.iconItem} src={webcam} alt="nameIcon"></img>
            <img className={classes.iconItem} src={phone} alt="nameIcon"></img>
            <img className={classes.iconItem} src={letter} alt="nameIcon"></img>
            <img className={classes.iconItem} src={alert} alt="nameIcon"></img>
            <img className={classes.iconItem} src={message} alt="nameIcon"></img>

        </div>
    )
}

export default IconsRow;