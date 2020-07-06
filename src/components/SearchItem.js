import React from "react";
import { PodcastImage } from "../shared/Images.js";
import { Title } from "../shared/Titles.js";
import { Description } from "../shared/Descriptions.js";
import { PlainLink } from "../shared/Links";
import styled from "styled-components";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";

// const SearchDiv = styled.div`
//   background-color: rgba(0,0,0, 0.6)
//   border-radius: 100px;
//   width: 800px;
//   height: 250px;
//   margin-left: 120px;
//   display: block;
//   overflow: hidden;
// `;

const SCard = styled(Card)({
  width: "550px",
  height: "auto",
  backgroundColor: "rgba(0,0,0,0)",
  "&:hover": {
    background: "rgba(255,255,255,0.2)",
  },
});

const SButton = styled(Button)({
  backgroundColor: "#1DB954",
  borderRadius: "100px",
  padding: "10px 15px",
});

const SearchItem = (props) => {
  const { description, id, name } = props.podcast;
  // not every podcast has 3 images, cannot specify image[2] consistently (may have errors)
  const images = props.podcast.images;
  const imgUrl = images[images.length - 2].url;

  return (
    <Grid item xs={6}>
      <SCard >
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={{
            pathname: `/show/${id}`,
            state: { showId: id, imgUrl: imgUrl },
          }}
          key={id}
        >
          <CardContent>
            <PodcastImage src={imgUrl} alt="podcast logo" />
            <Typography variant="h5" gutterBottom>{name}</Typography>
            <Typography variant="caption" gutterBottom display="block">
              {description.substring(0,300)}...
            </Typography>
          </CardContent>
          <CardActions>
            <SButton size="small">View More</SButton>
          </CardActions>
        </Link>
      </SCard>
    </Grid>
  );
};

export default SearchItem;
