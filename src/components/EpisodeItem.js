import React from "react";
import { Link } from "react-router-dom";

const EpisodeItem = (props) => {
  const { name, description, release_date } = props.episode;
  return (
    <div>
      <Link
        to={{
          pathname: `/episode/${props.episode.id}`,
          state: { episode: props.episode },
        }}
      >
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{release_date}</p>
      </Link>
    </div>
  );
};

export default EpisodeItem;
