import './inbox.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGreaterThan,
    faLessThan
} from '@fortawesome/free-solid-svg-icons';


function Inbox() {
    return(
        <>
            <div className="Email">
            <section>
                <div className="cont">
                    <form action="https://formspree.io/f/mgeqoyzn" method="POST">
                        <div className="form">
                            <label for="userName" >Username</label>
                            <input type="text" className="userName" name="Username" required />
                        </div>
                        <div className="form">
                            <label for="message">Message</label>
                            <textarea type="text" className="message" name="message" rows="16" required></textarea>
                        </div>
                        
                        <button type="submit">Submit</button>
                    </form>
                </div>
                
            </section>

        </div> 
        </>
    )
}


export default Inbox;