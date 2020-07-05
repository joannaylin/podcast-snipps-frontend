import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/user";
import styled from "styled-components";

const NavDiv = styled.div`
  overflow: hidden;
  display: block;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const Nav = styled(NavLink)`
  color: white;
  text-decoration: none;
  float: left;
  text-align: center;
  margin-left: 150px;
  font-size: 1.2em;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-right: 150px;
`;

const DropdownDiv = styled.div`
  float: right;
  overflow: hidden;
`;

const DropdownContent = styled.div`
  position: absolute;
  min-width: 160px;
  z-index: 1;
`;

const DropdownNav = styled(NavLink)`
  float: none;
  color: white;
  text-decoration: none;
  display: block;
  text-align: left;
`;

class NavBar extends Component {
  render() {
    return (
      <NavDiv>
        <Nav to="/homepage">
          <ion-icon name="home"></ion-icon> Home
        </Nav>

        <DropdownDiv onClick={this.props.handleClick}>
          <ProfileImg src={this.props.user.user.profile_img_url} />
          <DropdownContent>
            <DropdownNav to="/bookmarks">My Bookmarks</DropdownNav>
            <DropdownNav to="/login" onClick={this.props.logoutUser}>
              Logout
            </DropdownNav>
          </DropdownContent>
        </DropdownDiv>
      </NavDiv>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users,
  };
};

export default connect(mapStateToProps, { logoutUser })(NavBar);
