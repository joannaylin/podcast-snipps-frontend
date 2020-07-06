import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPodcastInfo, fetchPodcastEpisodes } from "../actions/podcast.js";
import EpisodeList from "../components/EpisodeList";
import NavBar from "../components/NavBar";
import { PodcastImage } from "../shared/Images";
import { Title } from "../shared/Titles";
import { Description } from "../shared/Descriptions";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { Divider } from '@material-ui/core';

const PodcastDiv = styled(Grid)({
  paddingTop: "50px",
  paddingLeft: "250px",
  paddingRight: "100px",
  backgroundColor: "rgba(0,0,0,0.3)",
});

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
        <PodcastDiv>
          <PodcastImage src={this.props.location.state.imgUrl} />
          <Typography variant="h3" gutterBottom  style={{color: "#1DB954"}}>
            {name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {description}
          </Typography>
          <br/>
          <br/>
          <br/>
          <Divider style={{backgroundColor: "#2C3E50"}} variant="middle" />
          <br/>
          <br/>
          <EpisodeList episodes={this.props.episodes} />
        </PodcastDiv>
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
