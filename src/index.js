import React from 'react';
import ReactDOM from 'react-dom/client';
import Popup from './components/popup/Popup';

const root = ReactDOM.createRoot(document.getElementById('popup'));
root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);