import React, { useState } from 'react';
import logo from "./IMG/Logo.jpg"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';    
import Axios from 'axios';

function Login() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    function Submit() {
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
                console.log(data)
        }) .catch((error) => {
            console.log(error)
        })
    }

    // admin to get all logged in users function 

    // const getLoginUser = () => {
    //     Axios({
    //       method: "GET",
    //       withCredentials: true,
    //       url: "http://localhost:3000/api/getLoginUser",
    //     }).then((res) => {
    //       if(res.data.username)
    //         setData(res.data)
    //       else
    //         setData(null); 
    //       console.log(res.data);
    //     });
    // };

    // logout function 

    //   const logout = () => {
    //     Axios({
    //       method: "GET",
    //       withCredentials: true,
    //       url: "http://localhost:4002/logout",
    //     }).then((res) => {
    //       console.log(res.data);
    //       setMessage(res.data);
    //     });
    //   }

    return (
        <>
            <div className='whiteScreen'>
                <div className="inside">
                    <p className="welcomeText">Welcome,{"\n"}Glad to See You</p>

                    <div className ='flash-messages'> 
                        {/* toastr */}
                        {/* toastr */}
                    </div>

                    <div className='inputs'>
                        <input placeholder="Username" className='input' required onChange={(e) => setUsername(e.target.value)}></input>
                        <input type="password" placeholder="Password" className='input padtop' required ></input>
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

export default Login;