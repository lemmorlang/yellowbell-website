import React, { Component } from 'react';
import './App.css';
import Toolbar from './component/Navbar/Toolbar';
import Backdrop from './component/Backdrop/Backdrop';
import SideDrawer from './component/SideDrawer/SideDrawer';

//import Enrollmentform from './component/Enrollmentform';
//import ListOfOnlineE from './component/ListOfOnlineE';
//import Confirm from './component/Confirm';
//import HomePage from './component/HomePage';

export class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }


    return (

      <div className="App" style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

        <main style={{ marginTop: '64px' }}>
          <p>put content here</p>
        </main>
      </div>

    )
  }
}

export default App
