import React, { useState } from 'react';
import logo from "./IMG/Logo.jpg"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom';



function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    
    function Submit() {
        if (document.getElementById("login-username").value === "") {
            console.log('username not inputed')
            toast.error('Please Input Your Username', {
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
    
        if (document.getElementById("login-password").value === "") {
            console.log('password not inputed')
            toast.error('Please Input Your Password', {
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

        else {
            console.log('wrong username or password')
            toast.error('Username or Password is Incorrect', {
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

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then((res) => res.json())
            .then(data => {
                console.log(data, data.message, data.isadmin);
                if(data.isadmin === true){
                    window.location.href = '/dashboard-admin';
                } else {
                    window.location.href = '/dashboard'; 
                }
        }) .catch((error) => {
            console.log(error)
          })
    }

    return (
        <>
            <div className='whiteScreen'>
                <div className="inside">
                    <p className="welcomeText"> Welcome, Glad to See You </p>

                    <div className='inputs'>
                        <input placeholder="Username" id='login-username' className='input1' required onChange={(e) => setUsername(e.target.value)}></input>
                        <input type="password" id='login-password' placeholder="Password" className='input1 padtop' required onChange={(e) => setPassword (e.target.value)}></input>
                    </div>

                    <Link className='button1 padtop1' onClick={Submit}> Login </Link>
                    <Link className='button1 padtop1' to={'/Register'}> Don't Have an Account? </Link>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}



export default Login