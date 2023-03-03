import './login.css';
import React, {useState} from 'react';
import logo from "./IMG/Logo.jpg"
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'; 

import LoginScreen from './LoginScreen';
import Register from './Register';

function LoginSign() {
  return (
        <div className='whiteScreen'>
            <div className="inside">
             <img src={logo} alt="Logo" className='logo' />
                <div className='buttons'>
                  {/* these will be links, <Link id="start" className="button" to={'/category'} > Start Game </Link> */}
                   <Link className="button1" to={'/LoginScreen'}> Login </Link>
                    <Link className='button2' to={'/Register'}> Sign Up </Link>
                </div>
            </div>
        </div>
  );
}

export default LoginSign;