import React from "react";
import styled from "styled-components";

const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
`;

const SpotifyLogin = styled.a`
  padding: 10px;
  height: 100%;
  text-decoration: none;
  background-color: rgb(30, 215, 96)
`;

const LoginButton = () => {
  return (
    <LoginDiv>
      <SpotifyLogin href="http://localhost:3000/api/v1/login">
        Login with Spotify
      </SpotifyLogin>
    </LoginDiv>
  );
};

export default LoginButton;
