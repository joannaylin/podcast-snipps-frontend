import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import AuthCheck from "./components/AuthCheck";
import { getCurrentUser } from "./actions/user";
import Homepage from "./containers/Homepage";
import PodcastPage from "./containers/PodcastPage"
import EpisodePage from "./containers/EpisodePage"
import UserPage from "./containers/UserPage"
import LoginPage from "./containers/LoginPage"
import "./App.css";
import 'fontsource-roboto';
import SavedEpisodesPage from "./containers/SavedEpisodesPage"

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.getCurrentUser();
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/authorized" component={AuthCheck} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/show/:id" component={PodcastPage} />
          <Route exact path="/episode/:id" component={EpisodePage} />
          <Route exact path="/episodes" component={SavedEpisodesPage} />
          <Route exact path="/bookmarks" component={UserPage} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.users,
  };
};

export default connect(mapStateToProps, { getCurrentUser })(App);
