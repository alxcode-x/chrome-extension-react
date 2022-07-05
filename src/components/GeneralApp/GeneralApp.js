import React from "react";
import MemberSearch from "../MemberSearch/MemberSearch";
import MemberInfo from "../MemberInfo/MemberInfo";

const GeneralApp = () => {
    const generalWrapper = {
        padding: " 8px 32px 8px 32px",
        fontFamily: "'Barlow', sans-serif"
    }
    return (
        <div style={generalWrapper}>
            <MemberSearch/>
            <MemberInfo/>
        </div>
    )

}

export default GeneralApp;