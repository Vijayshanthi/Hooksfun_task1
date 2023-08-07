import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Statefun from './Statefun';
import Effectfun from './Effectfun';
import Contextfun from './Contextfun';
import Callbackfun from './Callbackfun';
import Memofun from './Memofun';
import Reducerfun from './Reducerfun';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Statefun/>
    <Effectfun/>
    <Contextfun/>
    <Callbackfun/>
    <Memofun/>
    <Reducerfun/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
