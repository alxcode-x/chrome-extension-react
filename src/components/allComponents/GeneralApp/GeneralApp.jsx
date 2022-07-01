import React from 'react';
import styles from './GeneralApp.module.css';
import MemberSearch from '../MemberSearch/MemberSearch';
import MemberInfo from '../MemberInfo/MemberInfo';
import IconsRow from '../IconsRow/IconsRow';
import ButtonsRow from '../ButtonsRow/ButtonsRow';
import TableDemo from '../TableDemo/TableDemo';

const GeneralApp = () =>{
    return(
        <div className={styles.generalWrapper}>
            <MemberSearch/>
            <MemberInfo/>
            <IconsRow/>
            <ButtonsRow/>
            <TableDemo/>
        </div>
    )
}

export default GeneralApp;