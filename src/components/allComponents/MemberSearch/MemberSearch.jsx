import React from 'react';
import styles from './MemberSearch.module.css';

const MemberSearch = () => {
    return (
        <div className={styles.textInputWrapper}>
            <p className={styles.memberSearchText}>Member:</p>
            <input className={styles.memberSearchInput} placeholder='1234556'></input>
        </div>
    )
}

export default MemberSearch;