import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import LoginButton from "./components/LoginButton";
import AuthCheck from "./components/AuthCheck";
import { getCurrentUser } from "./actions/user";
import Homepage from "./containers/Homepage";
import "./App.css";

class App extends Component {
  componentDidMount() {
    console.log("Component Mounted")
    const token = localStorage.getItem("token");
    if (token) {
      this.props.getCurrentUser();
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginButton} />
          <Route exact path="/authorized" component={AuthCheck} />
          <Route exact path="/homepage" component={Homepage} />
          <Route render={() => <h1>ERROR: NO PATH MATCHES</h1>} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.users
  }
};

export default connect(mapStateToProps, { getCurrentUser })(App);
