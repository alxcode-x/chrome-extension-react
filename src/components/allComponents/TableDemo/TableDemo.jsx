import React from "react";
import classes from './TableDemo.module.css';

const dummyData = [{"Type":"Medical Attendance", "Description":"He came bc he feel weird idk"},{"Type":"Medical Attendance", "Description":"He came bc he feel weird idk"},{"Type":"Medical Attendance", "Description":"He came bc he feel weird idk"},{"Type":"Medical Attendance", "Description":"He came bc he feel weird idk"},{"Type":"Medical Attendance", "Description":"He came bc he feel weird idk"}]


const TableDemo = () => {
    return (
        <div>
            <table className = {
                classes.tableStyle}>
                <thead className={classes.tableHead}>
                    <th><input type="checkbox"></input></th>
                    <th>Type of request</th>
                    <th>Description</th>
                </thead>
                <tbody className={classes.tableBody}>
                    {
                        dummyData.map((item, indx) => {
                            return (
                                <tr key={indx}>
                                    <td><input type="checkbox"></input></td>
                                    <td>{item["Type"]}</td>
                                    <td>{item["Description"]}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}


export default TableDemo;