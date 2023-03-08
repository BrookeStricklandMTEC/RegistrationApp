import './login.css';
import React, { useState } from 'react';
import logo from "./IMG/Logo.jpg"
import { Link } from 'react-router-dom';
import LoginScreen from './LoginScreen'
<<<<<<< HEAD

// import  AddUser  from '../../backend/db/addUser';
=======
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


>>>>>>> 95533d18d286f0cc557efeaa3dd1614055f7bd2a

function Register() {
  const [username, setUsername] = useState()
  const [firstname, setFirstname] = useState()
  const [lastname, setLastname] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  function Submit() {
    if (document.getElementById("username").value !== "") {
      if (document.getElementById("firstName").value !== "") {
        if (document.getElementById("lastName").value !== "") {
          if (document.getElementById("email").value !== "") {
            if (document.getElementById("password").value !== "") {
              if (password.length < 7) {
                toast.error('Your Password Has To Be At Least 7 Characters Long', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                });
              } else {
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

                }).then((res) => res.json())
                  .then(data => {
                    console.log(data)
                    window.location.href = "/Loginscreen";
                  })
              }

            } else {
              toast.error('Please Put In Your Password', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            }
          } else {
            toast.error('Please Put In Your Email', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        } else {
          toast.error('Please Put In Your Last Name', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      } else {
        toast.error('Please Put In Your First Name', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } else {
      toast.error('Please Put In Your Username', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
  return (
    <>
      <div className='whiteScreen1'>
        <div className="inside">
          <p className="welcomeText">Create a Account, To Get Started</p>
          <div className='inputs'>
            <input placeholder="Username" id="username" className='input' required onChange={(e) => { setUsername(e.target.value) }}></input>
            <input placeholder="First Name" id="firstName" className='input padtop' required onChange={(e) => { setFirstname(e.target.value) }}></input>
            <input placeholder="Last Name" id="lastName" className='input padtop' required onChange={(e) => { setLastname(e.target.value) }}></input>
            <input type='email' placeholder="Email" id="email" className='input padtop' required onChange={(e) => { setEmail(e.target.value) }}></input>
            <input type="password" placeholder="Password" id="password" className='input padtop' required onChange={(e) => { setPassword(e.target.value) }}></input>
          </div>
          <button className='button1 padtop2' onClick={Submit}>Sign Up</button>

        </div>
      </div>

      <ToastContainer />
    </>
  );
}



export default Register