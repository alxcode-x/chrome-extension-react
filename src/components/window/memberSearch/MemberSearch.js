import React from "react";

const MemberSearch = () => {
    const textInputWrapper = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    };
    
    const memberSearchText={
        fontSize: "16px",
        marginRight: "16px"
    }
    
    const memberSearchInput = {
        borderColor: "#ccc",
        width: "70%"
    }
    return (
        <div style={textInputWrapper}>
            <p style={memberSearchText}>Member:</p>
            <input style={memberSearchInput} placeholder='1234556'></input>
        </div>
    )
}

export default MemberSearch;