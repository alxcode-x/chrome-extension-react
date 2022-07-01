import React from "react";
import ReactDOM from "react-dom";
import FloatingWindow from "/src/components/window/FloatingWindow";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'openWindow') {
    injectWindow();
  }

  sendResponse({status: "true"});
  return true;
});

function injectWindow(){
  const app = document.createElement('div');
  app.id = "extension-root";
  app.style.height = "0px";
  document.body.appendChild(app);

  ReactDOM.render(<FloatingWindow />, app);
}
