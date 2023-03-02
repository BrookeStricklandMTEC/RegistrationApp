import './calendar.css';
import React, {useState} from 'react';
import logo from "./IMG/Logo.jpg"
import userLogo from "./IMG/userLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGreaterThan,
    faLessThan
} from '@fortawesome/free-solid-svg-icons';
import { DAYS, range, MONTHS, getDaysInMonth, getSortDays, areDatesTheSame, getDateObj } from './cont';


function Calendar({startingDate}){
    const [currentMonth, setCurrentmonth] = useState(startingDate.getMonth())
    const [currentYear, setCurrentyear] = useState(startingDate.getFullYear())
    const daysInMonth = getDaysInMonth(currentMonth, currentYear)
    return (    
        <>
            <div className='container'>
                <div className='calendarHead'>
                    <FontAwesomeIcon icon={faLessThan} className="icon" />
                    <p>{MONTHS[currentMonth]} {currentYear}</p>
                    <FontAwesomeIcon icon={faGreaterThan} className="icon" />
                </div>
                <div className='sevenColGrid'>
                    {getSortDays(currentMonth, currentYear).map((day) => (
                        <div className='headDay'>{day}</div>
                    ))}
                </div>

                <div className='calenderBody' fourCol ={daysInMonth === 28 }>
                    {range(daysInMonth).map((day) => <span actived={areDatesTheSame(new Date(), getDateObj(day, currentMonth, currentYear))} className='styledDay'>{day}</span>)}
                </div>
            </div>
        </>

    )
}


export default Calendar;