import React from "react";
import { Link } from "react-router-dom";
import { PodcastImage } from "../shared/Images.js";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const SCard = styled(Card)({
  width: "550px",
  height: "auto",
  backgroundColor: "rgba(0,0,0,0)",
  "&:hover": {
    background: "rgba(255,255,255,0.2)",
  },
  borderRadius: "20px"
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
        </Link>
      </SCard>
    </Grid>
  );
};

export default SearchItem;
