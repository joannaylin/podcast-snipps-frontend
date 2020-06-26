import React from "react";
import { Link } from "react-router-dom";

const SearchItem = (props) => {
  const { description, id, name } = props.podcast;
  const imgUrl = props.podcast.images[2].url;

  return (
    <div>
      <Link to={{ pathname: `/show/${id}`, state: { showid: id } }} key={id}>
        <img src={imgUrl} alt="podcast logo" />
        <h1>{name}</h1>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default (SearchItem);
