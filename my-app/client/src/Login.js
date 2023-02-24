import './login.css';
import React, {useState} from 'react';
import logo from "./IMG/Logo.jpg"
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'; 
import { useState } from 'react';

import LoginScreen from './LoginScreen'
import Register from './Register'

function LoginSign() {
  return (
    <>
     <ResultsContext.Provider>
      <Router> 
       <Routes>
        <div className='whiteScreen'>
            <div class="inside">
             <img src={logo} alt="Logo" className='logo' />
                <div className='buttons'>
                    <Route path='/LoginScreen.js' element={<button className="button1" > Login </button>}> </Route>
                    <Route path='/Register.js' element={<button className='button2'> Sign Up </button>}> </Route>
                    {/* <button className="button1" > Login </button> */}
                    {/* <button className='button2'> Sign Up </button> */}
                </div>
            </div>
        </div>
       </Routes>
      </Router>
     </ResultsContext.Provider>
    </>
  );
}

export default LoginSign;