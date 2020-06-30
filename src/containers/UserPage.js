import React, { Component } from "react";
import { connect } from "react-redux";
import { getComments } from "../actions/comment";
import NavBar from "../components/NavBar";
import BookmarkContainer from "../components/BookmarkContainer";

class UserPage extends Component {
  componentDidMount() {
    this.props.getComments();
  }

  renderBookmarkContainers = () => {
    const array = Object.entries(this.props.episodes)
    return array.map(episode => <BookmarkContainer key={episode[0]} episode={episode} />)
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>My Notes</h1>
        <ul>{this.renderBookmarkContainers()}</ul>
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

