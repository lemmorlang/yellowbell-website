import React, { Component } from 'react';
import './App.css';
import Toolbar from './component/Navbar/Toolbar';
import Backdrop from './component/Backdrop/Backdrop';
import SideDrawer from './component/SideDrawer/SideDrawer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Enrollmentform from './component/Pages/Enrollmentform';
import ListOfOnlineE from './component/Pages/ListOfOnlineE';
import Confirm from './component/Pages/Confirm';
import HomePage from './component/Pages/HomePage';

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
      <Router>
        <div className="App" style={{ height: '100%' }}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}

          <main style={{ marginTop: '64px' }}>
            <div>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/Enrollmentform" component={Enrollmentform} />
                <Route path="/ListOfOnlineE" component={ListOfOnlineE} />
                <Route path="/Confirm" component={Confirm} />
              </Switch>
            </div>
          </main>


        </div>
      </Router>
    )
  }
}

export default App
