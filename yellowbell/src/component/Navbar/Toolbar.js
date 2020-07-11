import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { Link } from 'react-router-dom';




const toolbar = props => (


    <heaader className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar-toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><a href="/">LOGO</a></div>
            <div className="spacer" />

            <div className="toolbar_navigation-items">
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
            </div>

        </nav>
    </heaader>
);

export default toolbar;
