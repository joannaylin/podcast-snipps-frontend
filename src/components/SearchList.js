import React from "react";
import SearchItem from "./SearchItem";
import { Grid } from "@material-ui/core";

const SearchList = (props) => {
  const renderSearchItems = () => {
    return props.results.map((result) => (
      <SearchItem key={result.id} podcast={result} />
    ));
  };

  return <Grid container spacing={2} direction="row" style={{margin: 0, width: "100%"}} >{renderSearchItems()}</Grid>;
};

export default SearchList;
