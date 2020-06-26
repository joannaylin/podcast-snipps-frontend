import React, { Component } from "react";
import { Link } from "react-router-dom";

const EpisodeItem = (props) => {
  const { name, description, release_date } = props.episode;
  return (
    <div>
      <Link to="/">
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{release_date}</p>
      </Link>
    </div>
  );
};

export default EpisodeItem;
