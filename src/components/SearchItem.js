import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPodcastInfo, fetchPodcastEpisodes } from "../actions/podcast.js"

const SearchItem = (props) => {
  const { description, id, name } = props.podcast;
  const imgUrl = props.podcast.images[2].url;

  const handleClick = () =>  {
    props.fetchPodcastInfo(id)
    props.fetchPodcastEpisodes(id)
  }

  return (
    <div>
      <Link to={`/show/${id}`} key={id} onClick={handleClick} >
        <img src={imgUrl} alt="podcast logo"/>
        <h1>{name}</h1>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default connect(null, { fetchPodcastInfo, fetchPodcastEpisodes })(SearchItem);
