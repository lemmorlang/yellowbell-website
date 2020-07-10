import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

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
                    <li> <a href="/">Home</a></li>
                    <li> <a href="/">Pre-Registration</a></li>
                    <li> <a href="/">List of Enrollees</a></li>
                    <li> <a href="/">Confirm</a></li>
                </ul>
            </div>

        </nav>
    </heaader>

);

export default toolbar;
