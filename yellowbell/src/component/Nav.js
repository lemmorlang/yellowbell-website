import React from 'react'
import { Link } from 'react-router-dom';


function Nav() {

    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <h3>LOGO</h3>
            <ul className="nav-Links">
                <Link style={navStyle} to='/'>
                    <li className="nav-items">Home Page</li>
                </Link>
                <Link style={navStyle} to='/Enrollmentform'>
                    <li className="nav-items">Enrollment Form</li>
                </Link>
                <Link style={navStyle} to='/ListOfOnlineE'>
                    <li className="nav-items">List of Enrollees</li>
                </Link>
                <Link style={navStyle} to='/Confirm'>
                    <li className="nav-items">Confirm Page</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;
