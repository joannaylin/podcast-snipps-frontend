import React from "react";
import styled from "styled-components";
import { Link } from "@material-ui/core";

const SpotifyLogin = styled(Link)({
  textDecoration: "none",
  color: "black",
  backgroundColor: "rgb(30,215,96)",
  width: "190px",
  height: "37px",
  borderRadius: "100px",
  padding: "20px",
});

const SpotifyLogo = styled.img`
  height: 30px;
  width: 30px;
  margin: 3px;
  margin-right: 10px;
  vertical-align: middle;
`;

const LoginButton = () => {
  return (
    <SpotifyLogin
      href="http://localhost:3000/api/v1/login"
      variant="button"
      underline="none"
    >
      <SpotifyLogo src="/spotify-icon.png" alt="spotify logo" />
      Login with Spotify
    </SpotifyLogin>
  );
};

export default LoginButton;
