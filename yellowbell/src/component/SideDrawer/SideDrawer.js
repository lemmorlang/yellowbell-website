import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li> <a href="/">Home</a></li>
                <li> <a href="/">Pre-Registration</a></li>
                <li> <a href="/">List of Enrollees</a></li>
                <li> <a href="/">Confirm</a></li>
            </ul>
        </nav>);
};
export default sideDrawer;