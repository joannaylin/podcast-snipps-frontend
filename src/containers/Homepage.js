import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/user";
import { Link } from "react-router-dom"

class Homepage extends Component {
  render() {
    return (
      <div>
        This is the homepage component
        <Link to="/login">Log Out</Link>
      </div>
    );
  }
}

export default connect(null, { logoutUser })(Homepage);
