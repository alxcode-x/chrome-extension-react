import React from "react";

function Popup() {
    const openWindow = () => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "openWindow"}, function(response) {});  
        });
    }

    return (
        <div>
            <h1>Hello World!</h1>
            <button onClick={openWindow}>Window</button>
        </div>
    )
}

export default Popup;