import './dashboard.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faSchool,
    faChalkboardUser
} from '@fortawesome/free-solid-svg-icons';




function MainScreen() {
    function set({ target }) {
        const bob = target.id.split("-")
        var panel = document.getElementById("pal-" + bob[1])
        console.log(panel)
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            target.textContent = "Look At Class"
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            target.textContent = "Close Class"
        }
    }

    return (
        <>
            <div className='userTittle'>
                <p className='changingtittle'>Dashboard</p>
                <hr className='line'></hr>
            </div>

            <div className='classes'>
                {/* holder 1 */}
                <div className='holder accordion'>
                    <div className='h-left'>
                        <div className='iconSchool'>
                            <FontAwesomeIcon icon={faChalkboardUser} className="icon" />
                        </div>
                        <div>
                            <p className='h-tittle'>Introduction to Computer Science</p>
                            <p className='h-sub'>CSCI-1001</p>
                        </div>
                    </div>
                    <div className='h-right'>
                        <button className='dashboardbutton' id="bt-12" onClick={set}>Look At Class</button>
                    </div>

                </div>
                <div className="panel" id="pal-12">
                    <hr className='line1'></hr>
                    <div className='lr'>
                        <div className='panel-left'>
                            <span className='panel-tittle'>Introduction: </span>
                            <p>This course will introduce students to the fundamental concepts behind computers and computer programming. Topics covered include basic programming logic, algorithm development, computer architecture, and software engineering.</p>
                        </div>
                        <div className='panel-right'>
                            <p className='numberOfStudents'>16<p>/30</p></p>
                        </div>
                    </div>
                    <div className='panel-bottom'>
                        <p className='panel-mt'>Classroom Schedule: <span className='panel-black'>Monday, Wensday, Friday: 9-10</span></p>
                        <p className='panel-mt'>Credit Hours: <span className='panel-black'>2</span></p>
                        <p className='panel-mt'>Tuition Cost: <span className='panel-black'>$ 900.00</span></p>
                    </div>
                </div>
                {/* holder 2 */}
                <div className='holder'>
                    <div className='h-left'>
                        <div className='iconSchool'>
                            <FontAwesomeIcon icon={faChalkboardUser} className="icon" />
                        </div>
                        <div>
                            <p className='h-tittle'>Introduction to Computer Science</p>
                            <p className='h-sub'>CSCI-1001</p>
                        </div>
                    </div>
                    <div className='h-right'>
                    <button className='dashboardbutton' id="bt-13" onClick={set}>Look At Class</button>
                    </div>

                </div>
                <div className="panel" id="pal-13">
                    <hr className='line1'></hr>
                    <div className='lr'>
                        <div className='panel-left'>
                            <span className='panel-tittle'>Introduction: </span>
                            <p>This course will introduce students to the fundamental concepts behind computers and computer programming. Topics covered include basic programming logic, algorithm development, computer architecture, and software engineering.</p>
                        </div>
                        <div className='panel-right'>
                            
                            <p className='numberOfStudents'>16<p>/30</p></p>
                        </div>
                    </div>
                    <div className='panel-bottom'>
                        <p className='panel-mt'>Classroom Schedule: <span className='panel-black'>Monday, Wensday, Friday: 9-10</span></p>
                        <p className='panel-mt'>Credit Hours: <span className='panel-black'>2</span></p>
                        <p className='panel-mt'>Tuition Cost: <span className='panel-black'>$ 900.00</span></p>
                    </div>
                </div>
                {/* holder 3 */}
                <div className='holder'>
                    <div className='h-left'>
                        <div className='iconSchool'>
                            <FontAwesomeIcon icon={faChalkboardUser} className="icon" />
                        </div>
                        <div>
                            <p className='h-tittle'>Introduction to Computer Science</p>
                            <p className='h-sub'>CSCI-1001</p>
                        </div>
                    </div>
                    <div className='h-right'>
                    <button className='dashboardbutton' id="bt-14" onClick={set}>Look At Class</button>
                    </div>

                </div>
                <div className="panel" id="pal-14">
                    <hr className='line1'></hr>
                    <div className='lr'>
                        <div className='panel-left'>
                            <span className='panel-tittle'>Introduction: </span>
                            <p>This course will introduce students to the fundamental concepts behind computers and computer programming. Topics covered include basic programming logic, algorithm development, computer architecture, and software engineering.</p>
                        </div>
                        <div className='panel-right'>
                            
                            <p className='numberOfStudents'>16<p>/30</p></p>
                        </div>
                    </div>
                    <div className='panel-bottom'>
                        <p className='panel-mt'>Classroom Schedule: <span className='panel-black'>Monday, Wensday, Friday: 9-10</span></p>
                        <p className='panel-mt'>Credit Hours: <span className='panel-black'>2</span></p>
                        <p className='panel-mt'>Tuition Cost: <span className='panel-black'>$ 900.00</span></p>
                    </div>
                </div>
                

            </div>
            <div className='join'>
                <FontAwesomeIcon icon={faPlus} className="icon" />
            </div>



        </>
    )
}


export default MainScreen;