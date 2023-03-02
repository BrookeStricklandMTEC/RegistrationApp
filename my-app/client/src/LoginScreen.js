import React, {useState, useRef, useEffect} from 'react';
import logo from "./IMG/Logo.jpg"
import { Link } from 'react-router-dom';

import LoginScreen from './LoginScreen'

function Login() {
   return (
      <>
        <div className='whiteScreen'> 
            <div className="inside">
                <p className="welcomeText">Welcome,{"\n"}Glad to See You</p>
                
                {/* <div > messages.success_msg </div> */}
                {/* <div > messages.error </div> */}

                <div className='inputs'>
                    <input placeholder="Username" className='input' required></input>
                    <input type="password" placeholder="Password" className='input padtop' required></input>
                </div>

                <Link className='button1 padtop1' to={'/dashboard'}> Login </Link> 
                <Link className='button1 padtop1' to={'/Register'}> Don't Have an Account? </Link> 
                {/* ^^ add node function that reads users priviliges based off login info */}
                <Link className='forgotPass'> Forgot Password </Link>
                {/* idk if we will be able to do this function in time for project submission, might have to implement afterwards */}
            </div>
        </div>
      </>
    );
}

export default Login