import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../actions/user";
import { fetchEpisode } from "../actions/episode";
import { addComment, getComments } from "../actions/comment";
import NavBar from "../components/NavBar";
import Iframe from "../components/Iframe";
import Comment from "../components/Comment";
import { styled } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  List,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core";

const EpisodeDiv = styled(Grid)({
  paddingTop: "150px",
  paddingLeft: "300px",
  paddingRight: "100px",
  backgroundColor: "rgba(0,0,0,0.3)",
});

const CardDiv = styled(Card)({
  backgroundColor: "black",
  color: "white",
  paddingTop: "0px",
  verticalAlign: "middle",
});

const FormField = styled(TextField)({
  background: "white",
  borderRadius: "100px",
  width: "400px",
  height: "20px",
  paddingBottom: "30px",
});

const FormButton = styled(Button)({
  backgroundColor: "#1DB954",
  "&:hover": {
    background: "#1DB954",
  },
  borderRadius: "100px",
  margin: "5px",
  padding: "10px 15px",
});

class EpisodePage extends Component {
  constructor() {
    super();
    this.state = {
      note: "",
    };
  }

  componentDidMount() {
    this.props.fetchEpisode(this.props.location.state.episodeId);
    this.props.getComments();
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
    this.setState({ note: "" });
  };

  durationMinutes = () =>
    Math.ceil((this.props.currentPage.duration_ms / 1000) * (1 / 60));

  grabEpisodeComments = () => {
    const comments = this.props.comments.filter(
      (commentObj) =>
        commentObj.episode.spotify_episode_id === this.props.currentPage.id
    );
    return comments.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ));
  };

  render() {
    console.log(this.props.currentPage);

    const { id, name, description, release_date, uri } = this.props.currentPage;
    return (
      <div>
        <NavBar />
        <EpisodeDiv container>
          <Grid item xs={6}>
            {this.props.loader ? (
              <Typography variant="h1" style={{ color: "white" }}>
                Loading
              </Typography>
            ) : (
              <Iframe id={id} title={name} />
            )}
            {/* <SpotifyPlayer token={this.props.user.access} uris={[uri]} /> */}
            {/* <SpotifyPlayer
          token={this.props.user.access}
          uris={["spotify:artist:6HQYnRM4OzToCYPpVBInuU"]}
        /> */}
            <br />
            <br />
            <form onSubmit={this.handleSubmit}>
              <FormField
                variant="outlined"
                type="text"
                value={this.state.note}
                onChange={this.handleChange}
                placeholder="interesting note here.."
              ></FormField>
              <FormButton type="submit">Add Note</FormButton>
            </form>
            <br />
            <br />
            <Typography variant="h3" gutterBottom>
              Thoughts?
            </Typography>
            <List>{this.grabEpisodeComments()}</List>
          </Grid>
          <Grid item xs={6}>
            <CardDiv>
              <CardContent>
                <Typography
                  variant="h3"
                  gutterBottom
                  style={{ color: "#1DB954" }}
                >
                  {name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  {release_date} · {this.durationMinutes()} minutes
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {description}
                </Typography>
              </CardContent>
            </CardDiv>
          </Grid>
        </EpisodeDiv>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.episodes.currentPage,
    comments: state.comments,
    user: state.users.user,
    loader: state.loader,
  };
};

export default connect(mapStateToProps, {
  fetchEpisode,
  addComment,
  getComments,
  getCurrentUser,
})(EpisodePage);
