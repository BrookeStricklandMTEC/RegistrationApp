import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Axios from "axios";


import LoginSign from './LoginSign';
import Login from './LoginScreen.js';
import LoginScreen from './LoginScreen';
import Register from './Register.js';

function App() {

return (
  <Router> 
    <Routes>
      <Route path='/' element={<div className='whiteScreen'> <LoginSign> </LoginSign>  </div>} > </Route>
      <Route path='/LoginScreen' element={ <div className='whiteScreen'> <LoginScreen> </LoginScreen> </div>} > </Route>
      <Route path='/Register' element={ <div className='whiteScreen1'> <Register> </Register> </div>} > </Route>
      {/* Add future paths down here */}
    </Routes>
 </Router>
  );
}

export default App 
