import React from "react";
import LoginButton from "../components/LoginButton";
import { Typography, Grid } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Lottie from "react-lottie";
import animationData from "../lotties/8490-audio-wave-micro-interaction.json";

const LoginInfo = styled(Grid)({
  marginTop: "200px",
  marginLeft: "10px",
  marginBottom: "30px",
});

const LoginPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid
      container
      spacing={2}
      justify="center"
      direction="column"
      alignItems="center"
      style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
    >
      <LoginInfo item xs={6} align="center">
        <Typography variant="h1" gutterBottom>
          Podcast Snippets
        </Typography>
        <Typography variant="body1" gutterBottom>
          A place to search, listen, and create notes on all your favorite
          podcasts in one spot.
        </Typography>
      </LoginInfo>
      <Grid item xs={6} align="center">
        <LoginButton />
        <Lottie options={defaultOptions} height={200} width={200}/>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
