import React from "react";
import NavBar from "../components/NavBar";
import Iframe from "../components/Iframe"

const EpisodePage = (props) => {
  const {
    id,
    name,
    description,
    duration_ms,
    release_date,
  } = props.location.state.episode;

  const durationMinutes = Math.floor((duration_ms/1000)*(1/60))

  return (
    <div>
      <NavBar />
      <h1>{name}</h1>
      <h4>{release_date}</h4>
      <h6>{durationMinutes} minutes</h6>
      <p>{description}</p>
      <Iframe id={id} title={props.name}/>
      <button>Add Comment</button>
    </div>
  );
};

export default EpisodePage;
