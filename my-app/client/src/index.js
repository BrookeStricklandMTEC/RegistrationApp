import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD:my-app/client/src/index.js
import './App.css';
import App from './App.js';
import LoginSign from './LoginSign';
import Register from './Register';
import LoginScreen from './LoginScreen';

=======
import './index.css';
import LoginSign from './Login';
import Login from './Login';
import Sign from './Login';
import Dashboard from './user';
>>>>>>> bubba:my-app/src/index.js
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD:my-app/client/src/index.js
    <App/>
=======
    <Dashboard />

>>>>>>> bubba:my-app/src/index.js
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
