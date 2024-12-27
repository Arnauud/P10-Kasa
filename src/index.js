import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./style/main.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(process.env.REACT_APP_URLDATA)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
