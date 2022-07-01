import React from "react";
import styles from "./Header.module.css";
import marker from "../../../../assets/img/popMarker.png";

const Header = () => {
    return(
        <div className={styles.headerWraper}>
            <img className = {styles.imageMarker}src={marker} alt="A pretier marker"></img>
            <div className={styles.popupHeader}>Ava Smart Asistant</div>

        </div>
    )
}

export default Header;