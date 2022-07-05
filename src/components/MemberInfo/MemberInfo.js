import React from "react";


const MemberInfo = () => {
    const memberInfoWrapper = {
        display: "flex",
        border: "solid 1px black",
        width: "100%",
        height: "auto",
        padding: "5px",
        marginRight: "8px",
        marginBottom: "8px",
        boxSizing: "border-box"
    }
    
    const memberInfoAvatar = {
        width: "80px",
        height: "80px",
        border: "solid 1px black",
        padding: "2px",
        borderRadius: "50%"
    }
    
    const memberInfoText = {
        border: "solid 1px black",
        marginLeft: "5px",
        textAlign: "justify",
        padding: "3px"
    }
    return(
        <div style = {memberInfoWrapper}>
            <img style={memberInfoAvatar} src={".."} alt="demoAvatar"></img>
            <div style={memberInfoText}>Lorep ipsum text.Lorep ipsum text.Lorep ipsum text.Lorep ipsum text.Lorep ipsum text.Lorep ipsum text.Lorep ipsum text.Lorep ipsum text.Lorep ipsum text.</div>
        </div>
    )
}

export default MemberInfo;