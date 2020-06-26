import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPodcastInfo, fetchPodcastEpisodes } from "../actions/podcast.js";
import EpisodeList from "./EpisodeList"
import NavBar from "../components/NavBar"

class PodcastPage extends Component {
  componentDidMount() {
    this.props.fetchPodcastInfo(this.props.location.state.showid)
    this.props.fetchPodcastEpisodes(this.props.location.state.showid)
  }

  render() {
    const { name, description } = this.props.show;
    return (
      <div>
        <NavBar />
        <h1>{name}</h1>
        <p>{description}</p>
        <EpisodeList episodes={this.props.episodes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.podcasts.show.info,
    episodes: state.podcasts.show.episodes,
  };
};

export default connect(mapStateToProps, {fetchPodcastInfo, fetchPodcastEpisodes})(PodcastPage);
