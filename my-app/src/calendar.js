import './calendar.css';
import React from 'react';
import logo from "./IMG/Logo.jpg"
import userLogo from "./IMG/userLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGreaterThan,
  faLessThan
} from '@fortawesome/free-solid-svg-icons';
import { DAYS, range } from './cont';


function Calendar() {

    
    return(
        <>
          <div className='container'>
            <div className='calendarHead'>
                <FontAwesomeIcon icon={faLessThan} className="icon"/>
                <p>Oct 2023</p>
                <FontAwesomeIcon icon={faGreaterThan} className="icon"/>
            </div> 
            <div className='sevenColGrid'>
                {DAYS.map((day)  => (
                    <div className='headDay'>{day}</div>
                ))}
            </div>

            <div className='calenderBody'>
                {range(31).map((day) => <span className='styledDay'>{day}</span>)}
            </div>
           </div>  
        </>

    )
}


export default Calendar;