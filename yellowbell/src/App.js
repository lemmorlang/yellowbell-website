import React, { Component } from 'react';
import './App.css';
import Enrollmentform from './component/Enrollmentform';
import ListOfOnlineE from './component/ListOfOnlineE';
import Confirm from './component/Confirm';
import Nav from './component/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './component/HomePage';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/Enrollmentform" component={Enrollmentform} />
            <Route path="/ListOfOnlineE" component={ListOfOnlineE} />
            <Route path="/Confirm" component={Confirm} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
