import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Iframe from "../components/Iframe";
import { connect } from "react-redux";
import { fetchEpisode } from "../actions/episode";
import { addComment } from "../actions/comment";

class EpisodePage extends Component {
  constructor() {
    super();
    this.state = {
      note: "",
    };
  }

  componentDidMount() {
    this.props.fetchEpisode(this.props.location.state.episodeId);
  }

  handleChange = (e) => {
    this.setState({
      note: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const episodeObj = {
      episode_name: this.props.currentPage.name,
      duration: this.durationMinutes(),
      description: this.props.currentPage.description,
      spotify_episode_id: this.props.currentPage.id,
      img_url: this.props.currentPage.images[2].url,
      show_name: this.props.currentPage.show.name,
      spotify_show_id: this.props.currentPage.show.id,
    };
    const commentObj = {
      note: this.state.note,
      start_timestamp: "blank for now",
    };
    this.props.addComment(episodeObj, commentObj);
  };

  durationMinutes = () => {
    return Math.floor((this.props.currentPage.duration_ms / 1000) * (1 / 60));
  };

  render() {
    const { id, name, description, release_date } = this.props.currentPage;
    return (
      <div>
        <NavBar />
        <h1>{name}</h1>
        <h4>{release_date}</h4>
        <h6>{this.durationMinutes()} minutes</h6>
        <p>{description}</p>
        <Iframe id={id} title={name} />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.note}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Add Note</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.episode.currentPage,
    isPlaying: state.episode.currentPage.isPlaying,
  };
};

export default connect(mapStateToProps, { fetchEpisode, addComment })(
  EpisodePage
);
