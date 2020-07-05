import React from "react";
import styled from "styled-components";

const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
`;

const SpotifyLogin = styled.a`
  padding: 10px;
  text-decoration: none;
  background-color: rgb(30, 215, 96);
  width: 172px;
  height: 37px;
  border-radius: 100px;
`;

const SpotifyLogo = styled.img`
  height: 30px;
  width: 30px;
  margin: 3px;
  vertical-align: middle;
`

const LoginButton = () => {
  return (
    <LoginDiv>
      <SpotifyLogin href="http://localhost:3000/api/v1/login">
        <SpotifyLogo src="/spotify-icon.png" alt="spotify logo"/>Login with Spotify
      </SpotifyLogin>
    </LoginDiv>
  );
};

export default LoginButton;
