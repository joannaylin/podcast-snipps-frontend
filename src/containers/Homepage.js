import React, { Component } from "react";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchSearchResults } from "../actions/podcast";
import SearchList from "../components/SearchList";
import { BaseForm, BaseInput, BaseButton } from "../shared/Forms";
import SpotifyPlayer from "react-spotify-web-playback";

export const Div = styled.div`
  display: block;
  text-align: left;
`;

const H1 = styled.h1`
  letter-spacing: 0.1em;
  padding: 20px;
  margin-left: 130px;
`;

const H2 = styled.h2`
  margin-left: 150px;
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
      <div>
        <NavBar />
        <Div>
          <H1>Podcast Snippets</H1>
          <H2>Search Podcasts</H2>
          <BaseForm onSubmit={(e) => this.handleSubmit(e)}>
            <BaseInput
              type="text"
              placeholder="Name a podcast, any podcast.."
              value={this.state.query}
              onChange={this.handleChange}
            ></BaseInput>
            <BaseButton type="submit">
              <ion-icon name="search"></ion-icon>
            </BaseButton>
          </BaseForm>
          <SearchList results={this.props.searchResults} />
          {/* TODO: render an error message when searchResults are 0  */}
        </Div>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       <NavBar />
  //       <SpotifyPlayer
  //         token="BQCnDgyJUFxFdoOSiehDFVkiKanH7HUfSATLOCegdb3yvh9m1Y5__fFwb3eH_XxP9WMjoob-EwDyn_IeGUOCxG2n3t-MqgfyrKb80QRhogaNSqcVs8dCwl4-jpZ6PmYJ993PHBvE_vV1aa9et10m9bj_zVaW9Ov8KCxVe9NdnP7FbkPkkaH-HCdRDJEEH-Q"
  //         uris={["spotify:album:7KvKuWUxxNPEU80c4i5AQk"]}
  //       />
  //     </div>
  //   );
  // }
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.podcasts.searchResults,
  };
};

export default connect(mapStateToProps, { fetchSearchResults })(Homepage);
