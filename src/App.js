import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginButton from "./components/LoginButton"
import "./App.css";


class App extends Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginButton} />
          <Route exact path="/homepage" render={() => <h1>you made it to the homepage!!</h1>} />
          <Route render={() => <h1>ERROR: NO PATH MATCHES</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
