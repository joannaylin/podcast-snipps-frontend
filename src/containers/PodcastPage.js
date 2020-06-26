import React, { Component } from "react";
import { connect } from "react-redux";
import EpisodeList from "./containers/EpisodeList"

class PodcastPage extends Component {
  render() {
    const { name, description } = this.props.show;
    return (
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.podcasts.show.info,
    episodes: state.podcasts.show.episodes
  };
};

export default connect(mapStateToProps)(PodcastPage);
