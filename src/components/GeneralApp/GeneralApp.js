import React from "react";
import MemberSearch from "../MemberSearch/MemberSearch";
import MemberInfo from "../MemberInfo/MemberInfo";
import Menu from "../window/menu/Menu";

const GeneralApp = () => {
    const generalWrapper = {
        padding: " 8px 32px 8px 32px",
        fontFamily: "'Barlow', sans-serif"
    }
    return (
        <div style={generalWrapper}>
            <MemberSearch/>
            <MemberInfo/>
            <Menu/>
        </div>
    )

}

export default GeneralApp;