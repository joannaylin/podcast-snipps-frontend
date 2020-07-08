import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPodcastInfo, fetchPodcastEpisodes } from "../actions/podcast.js";
import EpisodeList from "../components/EpisodeList";
import NavBar from "../components/NavBar";
import { PodcastImage } from "../shared/Images";
import { Typography, Grid, Divider, Container } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const PodcastDiv = styled(Grid)({
  paddingTop: "50px",
  paddingLeft: "300px",
  paddingRight: "100px",
  backgroundColor: "rgba(0,0,0,0.3)",
});

const InfoDiv = styled(Container)({
  display: "inline-block",
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
        {this.props.loader ? (
          <Typography variant="h3">Loading...</Typography>
        ) : (
          <PodcastDiv>
            <InfoDiv>
              <PodcastImage src={this.props.location.state.imgUrl} />
              <Typography
                variant="h3"
                gutterBottom
                style={{ color: "#1DB954" }}
              >
                {name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {description}
              </Typography>
              <br />
            </InfoDiv>
            <Divider style={{ backgroundColor: "#414141" }} variant="middle" />
            <br />
            <br />
            <EpisodeList episodes={this.props.episodes} />
          </PodcastDiv>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.podcasts.show.info,
    episodes: state.podcasts.show.episodes,
    loader: state.loader,
  };
};

export default connect(mapStateToProps, {
  fetchPodcastInfo,
  fetchPodcastEpisodes,
})(PodcastPage);
