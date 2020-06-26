import React, { Component } from "react";
import EpisodeItem from "../components/EpisodeItem";

class EpisodeList extends Component {
  renderEpisodes = () => {
    return this.props.episodes.map((episode) => (
      <EpisodeItem key={episode.id} episode={episode} />
    ));
  };

  render() {
    return (
      <div>
        <h1>Recent Episodes</h1>
        <ul>{this.renderEpisodes()}</ul>
      </div>
    );
  }
}

export default EpisodeList;
