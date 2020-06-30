import React from "react";
import SearchItem from "./SearchItem";

const SearchList = (props) => {
  const renderSearchItems = () => {
    return props.results.map((result) => (
      <SearchItem key={result.id} podcast={result} />
    ));
  };

  return <ul>{renderSearchItems()}</ul>;
};

export default SearchList;
