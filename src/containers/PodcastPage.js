import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPodcastInfo, fetchPodcastEpisodes } from "../actions/podcast.js";
import EpisodeList from "../components/EpisodeList";
import NavBar from "../components/NavBar";
import { PodcastImage } from "../shared/Images";
import { Title } from "../shared/Titles";
import { Description } from "../shared/Descriptions";

class PodcastPage extends Component {
  componentDidMount() {
    this.props.fetchPodcastInfo(this.props.location.state.showId);
    this.props.fetchPodcastEpisodes(this.props.location.state.showId);
  }

  render() {
    const { name, description } = this.props.show;

    return (
      <div>
        <NavBar />
        <PodcastImage src={this.props.location.state.imgUrl} />
        <Title>{name}</Title>
        <Description>{description}</Description>
        <br/>
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

export default connect(mapStateToProps, {
  fetchPodcastInfo,
  fetchPodcastEpisodes,
})(PodcastPage);
