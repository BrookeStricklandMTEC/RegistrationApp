import './user.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import logo from "./IMG/Logo.jpg"

function Dashboard() {
    return(
        <>
            <div className="topbar">
                <div className="left">
                    <img src={logo} alt="Logo" className='logo' />
                </div>
                <div className="right">
                    <div className='search'>
                        <FontAwesomeIcon icon={faSearch} className="searchIcon"/>
                        <input className='input' placeholder='Search'></input>
                    </div>
                    
                    <div className="user">
                    </div>
                </div>
            </div> 

            <div className='sidebar'>
                <a>Dashbaord</a>
                <a>Calendar</a>
                <a>Grades</a>
                <a>Inbox</a>
            </div>
        </>
    )
}

export default Dashboard;