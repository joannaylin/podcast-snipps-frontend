import React, { Component } from "react";
import SearchItem from "../components/SearchItem";

class SearchList extends Component {
  renderSearchItems = () => {
    return this.props.results.map((result) => (
      <SearchItem key={result.id} podcast={result} />
    ));
  };

  render() {
    return <ul>{this.renderSearchItems()}</ul>;
  }
}

export default SearchList;
