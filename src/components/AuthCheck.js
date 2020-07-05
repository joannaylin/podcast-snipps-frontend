import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAuth, getCurrentUser } from "../actions/user";

// component needed to confirm authorization code
// immediately goes to homepage if successful, otherwise redirected to "/"
class AuthCheck extends Component {
  componentDidMount() {
    // save url queryString and check if it contains a code
    // if yes, send it to the api (this is used to exchange with an access token)
    const queryString = this.props.location.search;
    if (queryString.includes("code")) {
      const code = queryString.split("=")[1];
      this.props.fetchAuth(code).then(this.props.history.push("/homepage"));
    } else {
      this.props.history.push("/");
    }
  }

  render() {
    return <div></div>;
  }
}

export default connect(null, { fetchAuth, getCurrentUser })(AuthCheck);
