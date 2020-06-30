import React from "react";
import { Link } from "react-router-dom";

const SearchItem = (props) => {
  const { description, id, name } = props.podcast;
  // not every podcast has 3 images, cannot specify image[2] consistently (may have errors)
  const images = props.podcast.images;
  const imgUrl = images[images.length - 1].url;

  return (
    <div>
      <Link to={{ pathname: `/show/${id}`, state: { showId: id } }} key={id}>
        <img src={imgUrl} alt="podcast logo" />
        <h1>{name}</h1>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default SearchItem;
