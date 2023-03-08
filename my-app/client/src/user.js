<<<<<<< HEAD
// import './user.css';
// import React from 'react';
// import {useState, useEffect} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faHouse,
//   faArrowsLeftRight,
//   faSearch,
//   faCalendar,
//   faA,
//   faPlus,
//   faEnvelope,
// } from '@fortawesome/free-solid-svg-icons';
// import logo from "./IMG/Logo.jpg"
// import userLogo from "./IMG/userLogo.png"
// import Calendar from './calendar';

// var open = false

// function Dashboard() {
//     return(
//         <>
//             <div className='sidebar' id="mysidebar">
//                 <div className="top">
//                     <div className='a'>
//                         <FontAwesomeIcon icon={faHouse} className="icon"/> <a className="text"> Dashboard</a>
//                     </div>
//                     <div className='a'>
//                         <FontAwesomeIcon icon={faCalendar} className="icon"/> <a className="text"> Calendar</a>
//                     </div>
//                     <div className='a'>
//                         <FontAwesomeIcon icon={faA} className="icon"/><FontAwesomeIcon icon={faPlus} className="icon"/> <a className="text"> Grades</a>
//                     </div>
//                     <div className='a'>
//                         <FontAwesomeIcon icon={faEnvelope} className="icon"/> <a className="text"> Inbox</a>
//                     </div>
=======
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
import Calendar from './DCGI/calendar';
import Inbox from './DCGI/inbox';
import MainScreen from './DCGI/dashboard';
var open = false

function Dashboard() {
    const [dashboardScreen, setDashboardScreen] = useState("1")
    function updateDashboardScreen({currentTarget}){
        setDashboardScreen(currentTarget.id)
        console.log(currentTarget.id)
        running()
    }
    
    function running(){
        if(dashboardScreen === "1"){
            return(
               <MainScreen />
            )
        } else if(dashboardScreen === "2"){
            return(
                <Calendar startingDate = {new Date}/>
            )
        }else if(dashboardScreen === "3"){
            return(
                <></>
                //nothing so far
            )
        }else if(dashboardScreen === "4"){
            return(
                <Inbox />
            )
        }
    }
    // dashboardScreen.onchange = running()
    return(
        <>
            <div className='sidebar' id="mysidebar">
                <div className="top">
                    <div className='a' id="1" onClick={updateDashboardScreen} >
                        <FontAwesomeIcon icon={faHouse} className="icon"  /> <a className="text" > Dashboard</a>
                    </div>
                    <div className='a' id="2" onClick={updateDashboardScreen}>
                        <FontAwesomeIcon icon={faCalendar} className="icon" /> <a className="text" > Calendar</a>
                    </div>
                    <div className='a' id="3" onClick={updateDashboardScreen}>
                        <FontAwesomeIcon icon={faA} className="icon" /><FontAwesomeIcon icon={faPlus} className="icon" /> <a className="text" > Grades</a>
                    </div>
                    <div className='a' id="4" onClick={updateDashboardScreen}>
                        <FontAwesomeIcon icon={faEnvelope} className="icon" /> <a className="text" > Inbox</a>
                    </div>
>>>>>>> 95533d18d286f0cc557efeaa3dd1614055f7bd2a

//                 </div>
//                 <div className="bottom" id="bottom">
//                     <FontAwesomeIcon icon={faArrowsLeftRight} className="arrow" onClick={openClose}/>
//                 </div>
//             </div>

//             <div className="topbar">
//                 <div className="left">
//                     <img src={logo} alt="Logo" className='logo' />
//                 </div>
//                 <div className="right">
//                     <div className='search'>
//                         <FontAwesomeIcon icon={faSearch} className="searchIcon" />
//                         <input className='input' placeholder='Search'></input>
//                     </div>
                    
//                     <div className="dropdown">
//                         <img src={userLogo} alt="Logo" className='user dropbtn' onClick={myFunction} />
//                         <div id="myDropdown" className="dropdown-content">
//                             <a href="#home">System</a>
//                             <a href="#about">Edit</a>
//                             <a href="#contact">Profile</a>
//                         </div>
//                     </div>
                    
//                 </div>
//             </div> 

        
<<<<<<< HEAD
//             <div id="main">
//                 <Calendar startingDate = {new Date}/>
//                 {/* This Need % different Screen Types Dashboard Grades Calendar Inbox And Search Methods */}
//             </div>
//         </>
//     )
// }
=======
            <div id="main">
                
                {running()}
            </div>
        </>
    )
}
>>>>>>> 95533d18d286f0cc557efeaa3dd1614055f7bd2a


// function openClose() {
//     if( open === false){
//         document.getElementById("mysidebar").style.width = "75px";
//         document.getElementById("main").style.marginLeft = "95px";
//         document.querySelectorAll(".text").forEach(element =>{
//             element.innerHTML = ""
//         })

//         open = true
//     } else if (open === true) {
//         document.getElementById("mysidebar").style.width = "200px";
//         document.getElementById("main").style.marginLeft = "220px";
//         var run = 1
//         delay(700).then(() =>
//             document.querySelectorAll(".text").forEach(element =>{
        
//                 if(run === 1){
//                     element.innerHTML = " Dashboard"
//                 } else if(run === 2){
//                     element.innerHTML = " Calendar"
//                 } else if(run === 3){
//                     element.innerHTML = " Grades"
//                 }else if(run === 4){
//                     element.innerHTML = " Inbox"
//                 }
//                 run++
//             })
//         )
        
//         open = false
//     }
// }

// function myFunction() {
//     console.log("Hello")
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
// }

// function delay(time) {
//     return new Promise(resolve => setTimeout(resolve, time));
// }

<<<<<<< HEAD
// export default Dashboard;
=======
export default Dashboard; 
>>>>>>> 95533d18d286f0cc557efeaa3dd1614055f7bd2a
