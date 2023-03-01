import './login.css';
import React, {useState} from 'react';
import logo from "./IMG/Logo.jpg"
import { Link } from 'react-router-dom';
import LoginScreen from './LoginScreen'
// import  AddUser  from '../../backend/db/addUser';




function Register() {
  const [username, setUsername]= useState()
  const [firstname, setFirstname] = useState()
  const [lastname, setLastname] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  function Submit(){
    fetch("/addUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            firstname,
            lastname,
            email,
            password
        })
  
    }).then((res)=> res.json())
    .then(data => {
        // AddUser(username, firstname,lastname,email,password)
        console.log(data)
    })
  }
    return (
      <> 
        <div className='whiteScreen1'> 
            <div className="inside">
                <p className="welcomeText">Create a Account, To Get Started</p>
                <div className='inputs'>
                    <input placeholder="Username" id="username" className='input' required onChange={(e)=>{setUsername(e.target.value)}}></input>
                    <input placeholder="First Name" id="firstName"className='input padtop' required onChange={(e)=>{setFirstname(e.target.value)}}></input>
                    <input placeholder="Last Name" id="lastName"className='input padtop' required onChange={(e)=>{setLastname(e.target.value)}}></input>
                    <input type='email'placeholder="Email" id="email" className='input padtop' required onChange={(e)=>{setEmail(e.target.value)}}></input>
                    <input type="password" placeholder="Password" id="password" className='input padtop' required onChange={(e)=>{setPassword(e.target.value)}}></input>
                </div>
                <button className='button1 padtop2' onClick={Submit}>Sign Up</button>
                
            </div>
        </div>
      </>
    );
}



export default Register