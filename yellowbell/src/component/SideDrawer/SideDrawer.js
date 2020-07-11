import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <Link to='/'>
                    <li> <a href="/">Home</a></li>
                </Link>
                <Link to='/Enrollmentform'>
                    <li>Enrollment Form</li>
                </Link>
                <Link to='/ListOfOnlineE'>
                    <li>List of Enrollees</li>
                </Link>
                <Link to='/Confirm'>
                    <li>Confirm Page</li>
                </Link>
            </ul>
        </nav>);
};
export default sideDrawer;