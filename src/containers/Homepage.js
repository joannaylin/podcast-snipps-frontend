import React, { Component } from "react";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchSearchResults } from "../actions/podcast";
import SearchList from "../components/SearchList";

const HomeDiv = styled.div`
  display: block;
  text-align: center;
`;

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
      <HomeDiv>
        <NavBar />
        <h1>Podcast Snippets</h1>
        <h2>Search Podcasts</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="Name a podcast, any podcast.."
            value={this.state.query}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Search</button>
        </form>
        <SearchList results={this.props.searchResults}/>
        {/* TODO: render an error message when searchResults are 0  */}
      </HomeDiv>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.podcasts.searchResults,
  };
};

export default connect(mapStateToProps, { fetchSearchResults })(Homepage);
