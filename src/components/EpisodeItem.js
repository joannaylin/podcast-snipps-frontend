import React from "react";
import { PlainLink } from "../shared/Links";
import { Title } from "../shared/Titles.js";
import { Description } from "../shared/Descriptions.js";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ECard = styled(Card)({
  backgroundColor: "black",
  "&:hover": {
    background: "rgba(255,255,255,0.2)",
  },
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
