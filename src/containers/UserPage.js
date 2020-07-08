import React, { Component } from "react";
import { connect } from "react-redux";
import { getComments } from "../actions/comment";
import NavBar from "../components/NavBar";
import BookmarkContainer from "../components/BookmarkContainer";
import { List, Grid, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const BookmarkDiv = styled(Grid)({
  paddingTop: "50px",
  paddingLeft: "250px",
  paddingRight: "100px",
});

class UserPage extends Component {
  componentDidMount() {
    this.props.getComments();
  }

  renderBookmarkContainers = () => {
    const array = Object.entries(this.props.episodes);
    return array.map((episode) => (
      <BookmarkContainer key={episode[0]} episode={episode} />
    ));
  };

  render() {
    return (
      <div>
        <NavBar />
        <BookmarkDiv>
          <Typography variant="h2" style={{ color: "#1DB954" }} gutterBottom>
            Notes to Self
          </Typography>
          <List>{this.renderBookmarkContainers()}</List>
        </BookmarkDiv>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    episodes: state.comments.reduce((a, b) => {
      a[b.episode.episode_name] = [...(a[b.episode.episode_name] || []), b];
      return a;
    }, {}),
  };
};

export default connect(mapStateToProps, { getComments })(UserPage);
