import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Axios from "axios";
import LoadingIcons from 'react-loading-icons';

//to do
// implement loading icon 
// Create search feature for courses and users
// Logout functionality
// responsive design 
// create admin feature (two different dashboard, one for student, one for admin)

// if (user.admin == true) {
// once logged in they see admin dashboard
//} else {
// once logged in they see student dashboard
//}

// ask around to see how to do the courses and users db fix (where to add what courses a student is enrolled for and how)
// student cannot register for course if full (30 will be full )
// use chatgpt to add 50 new users to users db



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
      <Route path='/dashboard' element={<div> Hello World </div>}> </Route>
    </Routes>
 </Router>
  );
}

export default App 
