import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './App.css';
import App from './App.js';

import Register from './Register';
import LoginScreen from './LoginScreen';
import LoginSign from './Login';
import Login from './Login';
import Dashboard from './user';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();
