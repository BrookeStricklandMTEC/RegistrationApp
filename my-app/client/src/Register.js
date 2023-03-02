import './login.css';
import React, {useState} from 'react';
import logo from "./IMG/Logo.jpg"

import { Link } from 'react-router-dom';
import LoginScreen from './LoginScreen'

function Register() {
    return (
      <> 
        <div className='whiteScreen1'> 
            <div className="inside">
                <p className="welcomeText"> Create an Account, To Get Started! </p>
                <div className='inputs'>
                    <input placeholder="Username" className='input' required></input>
                    <input placeholder="First Name" className='input padtop' required></input>
                    <input placeholder="Last Name" className='input padtop' required></input>
                    <input type='email'placeholder="Email" className='input padtop' required></input>
                    <input type="password" placeholder="Password" className='input padtop' required></input>
                </div>
  
                <Link className='button1 padtop2' to={'/dashboard'}> Sign Up </Link>
                <Link className='button1 padtop2' to={'/LoginScreen'}> Already Have an Account? </Link>
            </div>
        </div>
      </>
    );
}

export default Register