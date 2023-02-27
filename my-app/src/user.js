import './user.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faArrowRightLong,
  faArrowLeftLong,
  faSearch,
  faCalendar,
  faA,
  faPlus,
  faEnvelope
  
} from '@fortawesome/free-solid-svg-icons';
import logo from "./IMG/Logo.jpg"

var arrow = faArrowLeftLong

function Dashboard() {
    return(
        <>
            <div className='sidebar' id="mysidebar">
                <div className="top">
                    <div className='a'>
                        <FontAwesomeIcon icon={faHouse} /> <a className="text">Dashbaord</a>
                    </div>
                    <div className='a'>
                        <FontAwesomeIcon icon={faCalendar} /> <a className="text">Calendar</a>
                    </div>
                    <div className='a'>
                        <FontAwesomeIcon icon={faA} /><FontAwesomeIcon icon={faPlus} /> <a className="text">Grades</a>
                    </div>
                    <div className='a'>
                        <FontAwesomeIcon icon={faEnvelope} /> <a className="text">Inbox</a>
                    </div>

                </div>
                <div className="bottom">
                    <FontAwesomeIcon icon={arrow} className="arrow" onClick={closeNav}/>
                </div>
            </div>

            <div className="topbar">
                <div className="left">
                    <img src={logo} alt="Logo" className='logo' />
                </div>
                <div className="right">
                    <div className='search'>
                        <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                        <input className='input' placeholder='Search'></input>
                    </div>
                    
                    <div className="user">
                    </div>
                </div>
            </div> 

            <div id="main">
                
            </div>
        </>
    )
}

function openNav() {
    document.getElementById("mysidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    

}


function closeNav(){
    document.getElementById("mysidebar").style.width = "75px";
    document.getElementById("main").style.marginLeft = "75px";
    document.querySelectorAll(".text").forEach(element =>{
        element.innerHTML = ""
    })
}

export default Dashboard;