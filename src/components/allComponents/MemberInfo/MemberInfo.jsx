import React from "react";
import avatar from '../../../../assets/img/avatar.png'
import classes from './MemberInfo.module.css';
const MemberInfo = () => {
    return(
        <div className = {classes.memberInfoWrapper}>
            <img className={classes.memberInfoAvatar} src={avatar} alt="demoAvatar"></img>
            <div className={classes.memberInfoText}>Lorep ipsum text.Lorep ipsum text.Lorep ipsum text.Lorep ipsum text.Lorep ipsum text.Lorep ipsum text.Lorep ipsum text.Lorep ipsum text.Lorep ipsum text.</div>
        </div>
    )
}

export default MemberInfo;