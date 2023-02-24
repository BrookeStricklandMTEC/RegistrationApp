import React, {useState} from 'react';
import logo from "./IMG/Logo.jpg"
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'; 
import { useState } from 'react';

import { Link } from 'react-router-dom';

function Login() {
    return (
      <>
        <div className='whiteScreen'> 
            <div className="inside">
                <p className="welcomeText">Welcome,{"\n"}Glad to See You</p>
                <div className='inputs'>
                    <input placeholder="Username" className='input' required></input>
                    <input type="password" placeholder="Password" className='input padtop' required></input>
                </div>

                <Link className='button1 padtop1'> Login </Link> 
                {/* ^^ add node function that reads users priviliges based off login info */}
                <Link className='forgotPass'> Forgot Password</Link>
                {/* idk if we will be able to do this function in time for project submission, might have to implement afterwards */}
            </div>
        </div>
      </>
    );
  }