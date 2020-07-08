import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";

const ECard = styled(Card)({
  color: "white",
  width: "500px",
  backgroundColor: "rgba(0,0,0,0)",
  "&:hover": {
    background: "rgba(255,255,255,0.2)",
  },
  borderRadius: "20px",
});

const CardButton = styled(Button)({
  backgroundColor: "#1DB954",
  borderRadius: "100px",
  padding: "10px 15px",
});

const EpisodeCard = (props) => {
  const {
    episode_name,
    show_name,
    spotify_episode_id,
    duration,
  } = props.episode;
  return (
    <Grid item xs={6}>
      <ECard>
        <CardContent>
          <Typography variant="h4">{episode_name}</Typography>
          <Typography variant="body1">{show_name}</Typography>
          <Typography variant="body1">{duration} minutes</Typography>
        </CardContent>
        <CardActions>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={{
              pathname: `/episode/${spotify_episode_id}`,
              state: { episodeId: spotify_episode_id },
            }}
          >
            <CardButton>Go to Listen</CardButton>
          </Link>
        </CardActions>
      </ECard>
    </Grid>
  );
};

export default EpisodeCard;
