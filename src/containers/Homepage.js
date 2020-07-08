import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSearchResults } from "../actions/podcast";
import NavBar from "../components/NavBar";
import SearchList from "../components/SearchList";
import SearchIcon from "@material-ui/icons/Search";
import { styled } from "@material-ui/core/styles";
import { Button, TextField, Grid, Typography } from "@material-ui/core";
import Lottie from "react-lottie";
import animationData from "../lotties/loading.json";

const STextField = styled(TextField)({
  background: "white",
  borderRadius: "100px",
  width: "300px",
  height: "50px",
  "&:focus": {
    outline: "none",
  },
});

const ContentDiv = styled(Grid)({
  paddingTop: "150px",
  paddingLeft: "300px",
});

const SButton = styled(Button)({
  backgroundColor: "#1DB954",
  "&:hover": {
    background: "#1DB954",
  },
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
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

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
          <form onSubmit={this.handleSubmit}>
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
          {this.props.loader ? (
            <Lottie options={defaultOptions} height={400} width={400} />
          ) : null}
          {this.props.noResults ? (
            <Typography
              variant="h6"
              style={{ color: "#cd2026", backgroundColor: "rgba(0,0,0,0.2)" }}
            >
              Sorry, looks like your search has no matching results..try again?{" "}
            </Typography>
          ) : null}
          <SearchList results={this.props.searchResults} />
        </ContentDiv>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.podcasts.searchResults,
    noResults: state.podcasts.noResults,
    loader: state.loader,
  };
};

export default connect(mapStateToProps, { fetchSearchResults })(Homepage);
