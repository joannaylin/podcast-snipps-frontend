import React from "react";
import EpisodeItem from "./EpisodeItem";

const EpisodeList = (props) => {
  const renderEpisodes = () => {
    return props.episodes.map((episode) => (
      <EpisodeItem key={episode.id} episode={episode} />
    ));
  };

  return (
    <div>
      <h1>Recent Episodes</h1>
      <br/>
      <ul>{renderEpisodes()}</ul>
    </div>
  );
};

export default EpisodeList;
