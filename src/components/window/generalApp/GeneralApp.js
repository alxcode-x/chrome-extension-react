import React from "react";
import MemberSearch from "../memberSearch/MemberSearch";
import MemberInfo from "../memberInfo/MemberInfo";
import Menu from "../menu/Menu";
import Grid from "../grid/Grid";

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
            <Grid/>
        </div>
    )

}

export default GeneralApp;