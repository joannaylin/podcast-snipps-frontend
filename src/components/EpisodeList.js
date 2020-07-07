import React from "react";
import EpisodeItem from "./EpisodeItem";
import { Typography } from "@material-ui/core";

const EpisodeList = (props) => {
  const renderEpisodes = () => {
    return props.episodes.map((episode) => (
      <EpisodeItem key={episode.id} episode={episode} />
    ));
  };

  return (
    <div>
      <Typography style={{color: "#1DB954"}} variant="h4" gutterBottom>Recent Episodes</Typography>
      {renderEpisodes()}
    </div>
  );
};

export default EpisodeList;
