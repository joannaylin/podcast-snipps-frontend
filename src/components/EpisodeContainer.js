import React from "react";
import EpisodeCard from "./EpisodeCard";
import { Grid } from "@material-ui/core";

const EpisodeContainer = (props) => {
  const renderEpisodes = () => {
    return props.episodes.map((episodeObj) => {
      return <EpisodeCard key={episodeObj.id} episode={episodeObj} />;
    });
  };

  return <Grid container spacing={2}>{renderEpisodes()}</Grid>;
};

export default EpisodeContainer;
