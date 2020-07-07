import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardActions, Button, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const ECard = styled(Card)({
  backgroundColor: "black",
  "&:hover": {
    background: "rgba(255,255,255,0.2)",
  },
  borderRadius: "20px"
});

const EButton = styled(Button)({
  backgroundColor: "#1DB954",
  borderRadius: "100px",
  padding: "10px 15px",
});

const EpisodeItem = (props) => {
  const { name, description, release_date } = props.episode;
  return (
    <ECard>
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to={{
          pathname: `/episode/${props.episode.id}`,
          state: { episodeId: props.episode.id },
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {release_date}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {description}
          </Typography>
          <CardActions>
            <EButton style={{ color: "1DB954" }}>View More</EButton>
          </CardActions>
        </CardContent>
      </Link>
    </ECard>
  );
};

export default EpisodeItem;
