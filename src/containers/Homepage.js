import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSearchResults } from "../actions/podcast";
import SpotifyPlayer from "react-spotify-web-playback";
import NavBar from "../components/NavBar";
import SearchList from "../components/SearchList";
import SearchIcon from "@material-ui/icons/Search";
import { styled } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Divider,
} from "@material-ui/core";

const STextField = styled(TextField)({
  background: "white",
  borderRadius: "100px",
  width: "300px",
  height: "50px",
});

const ContentDiv = styled(Grid)({
  paddingTop: "150px",
  paddingLeft: "300px",
});

const SButton = styled(Button)({
  backgroundColor: "#1DB954",
  borderRadius: "100px",
  margin: "5px",
  padding: "10px 15px",
  marginBottom: "30px",
});

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchSearchResults(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <div>
        <NavBar />
        <ContentDiv
          container
          direction="column"
          alignContent="center"
          justify-content="center"
        >
          <Typography variant="h1">Podcast Snippets</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Let's find a podcast for you to listen to.
          </Typography>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <STextField
              id="search"
              variant="outlined"
              type="text"
              placeholder="Name a podcast, any podcast.."
              value={this.state.query}
              onChange={this.handleChange}
            ></STextField>
            <SButton type="submit" startIcon={<SearchIcon />}>
              Search
            </SButton>
          </form>
          <SearchList results={this.props.searchResults} />
          {/* TODO: render an error message when searchResults are 0  */}
        </ContentDiv>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.podcasts.searchResults,
  };
};

export default connect(mapStateToProps, { fetchSearchResults })(Homepage);
