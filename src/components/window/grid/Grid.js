
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Grid.css';

function Grid() {
    return(
        <div className='grid-container'>
            <Tabs>
                <TabList>
                    <Tab>Meds</Tab>
                    <Tab>Diags</Tab>
                    <Tab>Visits</Tab>
                    <Tab>Labs</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default Grid;