import React from "react";
import { Link } from "react-router-dom";

const BookmarkContainer = (props) => {
  const spotifyEpisodeId = props.episode[1][0].episode.spotify_episode_id;

  const renderComments = () => {
    return props.episode[1].map((comment) => (
      <li key={comment.id}>{comment.note}</li>
    ));
  };

  return (
    <div>
      <Link
        to={{
          pathname: `/episode/${spotifyEpisodeId}`,
          state: { episodeId: spotifyEpisodeId },
        }}
      >
        <h1>{props.episode[0]}</h1>
      </Link>
      <ul>{renderComments()}</ul>
    </div>
  );
};

export default BookmarkContainer;
