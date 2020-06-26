import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/user";
import styled from "styled-components"

const NavDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
`

const Nav = styled(NavLink)`
  color: white;
  text-decoration: none;
`

const NavBar = (props) => {
  return (
    <NavDiv>
      <Nav to="/homepage">Home</Nav>
      <Nav to="/bookmarks">My Bookmarks</Nav>
      <Nav to="/login" onClick={props.logoutUser}>Logout</Nav>
    </NavDiv>
  );
};

export default connect(null, { logoutUser })(NavBar);
