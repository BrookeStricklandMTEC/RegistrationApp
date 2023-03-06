import './dashboard.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus
} from '@fortawesome/free-solid-svg-icons';

function MainScreen() {
    return (
        <>
            <div className='Classes'>
                
            </div>        
            <div className='join'>
                <FontAwesomeIcon icon={faPlus} className="icon" />
            </div>


        </>
    )
}


export default MainScreen;