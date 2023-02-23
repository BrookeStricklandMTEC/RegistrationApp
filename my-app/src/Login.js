import './App.css';
import React from 'react';
import logo from "./IMG/Logo.jpg"
function LoginSign() {
  return (
    <>
      <div className='whiteScreen'>
          <div class="inside">
          <img src={logo} alt="Logo" className='logo' />
            <div className='buttons'>
                <button className="button1">Login</button>
                <button className='button2'>Sign Up</button>
            </div>
          </div>
      </div>
    </>
  );
}

export default LoginSign;
