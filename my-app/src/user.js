import './user.css';
import React from 'react';
import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faArrowsLeftRight,
  faSearch,
  faCalendar,
  faA,
  faPlus,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import logo from "./IMG/Logo.jpg"
import userLogo from "./IMG/userLogo.png"
import Calendar from './calendar';

var open = false

function Dashboard() {
    return(
        <>
            <div className='sidebar' id="mysidebar">
                <div className="top">
                    <div className='a'>
                        <FontAwesomeIcon icon={faHouse} className="icon"/> <a className="text"> Dashboard</a>
                    </div>
                    <div className='a'>
                        <FontAwesomeIcon icon={faCalendar} className="icon"/> <a className="text"> Calendar</a>
                    </div>
                    <div className='a'>
                        <FontAwesomeIcon icon={faA} className="icon"/><FontAwesomeIcon icon={faPlus} className="icon"/> <a className="text"> Grades</a>
                    </div>
                    <div className='a'>
                        <FontAwesomeIcon icon={faEnvelope} className="icon"/> <a className="text"> Inbox</a>
                    </div>

                </div>
                <div className="bottom" id="bottom">
                    <FontAwesomeIcon icon={faArrowsLeftRight} className="arrow" onClick={openClose}/>
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
                    
                    <div className="dropdown">
                        <img src={userLogo} alt="Logo" className='user dropbtn' onClick={myFunction} />
                        <div id="myDropdown" className="dropdown-content">
                            <a href="#home">System</a>
                            <a href="#about">Edit</a>
                            <a href="#contact">Profile</a>
                        </div>
                    </div>
                    
                </div>
            </div> 

        
            <div id="main">
                <Calendar />
                {/* This Need % different Screen Types Dashboard Grades Calendar Inbox And Search Methods */}
            </div>
        </>
    )
}


function openClose() {
    if( open === false){
        document.getElementById("mysidebar").style.width = "75px";
        document.getElementById("main").style.marginLeft = "95px";
        document.querySelectorAll(".text").forEach(element =>{
            element.innerHTML = ""
        })

        open = true
    } else if (open === true) {
        document.getElementById("mysidebar").style.width = "200px";
        document.getElementById("main").style.marginLeft = "220px";
        var run = 1
        delay(700).then(() =>
            document.querySelectorAll(".text").forEach(element =>{
        
                if(run === 1){
                    element.innerHTML = " Dashboard"
                } else if(run === 2){
                    element.innerHTML = " Calendar"
                } else if(run === 3){
                    element.innerHTML = " Grades"
                }else if(run === 4){
                    element.innerHTML = " Inbox"
                }
                run++
            })
        )
        
        open = false
    }
}

function myFunction() {
    console.log("Hello")
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export default Dashboard;