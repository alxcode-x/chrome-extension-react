import React from "react";
import ReactDOM from "react-dom";
import FloatingWindow from "./components/window/FloatingWindow";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'openWindow') {
    console.log("Window opened");
    injectWindow();
  }

  sendResponse({status: "true"});
  return true;
});

function injectWindow(){
  const app = document.createElement('div');
  app.id = "extension-root";
  document.body.appendChild(app);

  ReactDOM.render(<FloatingWindow />, app);
}
