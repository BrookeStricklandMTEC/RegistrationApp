import './user.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch
} from '@fortawesome/free-solid-svg-icons';
function Dashboard() {
    return(
        <>
            <div className="topbar">
                <div className="left">

                </div>
                <div className="right">
                    <div className='search'>
                        <FontAwesomeIcon icon={faSearch} className="searchIcon"/>
                        <input className='input' placeholder='Search'></input>
                    </div>
                    
                </div>
            </div> 
        </>
    )
}

export default Dashboard;