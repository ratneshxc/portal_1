import React, { Component } from 'react';
import { BrowserRouter as Router,
    Switch,
    Route } from 'react-router-dom';
import Home from '../Home/index';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }

  render() {
    return (
      <React.Fragment>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </React.Fragment>
    );
  }
}


export default Main;
