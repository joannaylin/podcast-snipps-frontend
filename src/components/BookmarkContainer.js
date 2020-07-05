import React from "react";
import { PlainLink } from "../shared/Links";
import { Title } from "../shared/Titles"

const BookmarkContainer = (props) => {
  const spotifyEpisodeId = props.episode[1][0].episode.spotify_episode_id;

  const renderComments = () => {
    return props.episode[1].map((comment) => (
      <li key={comment.id}>{comment.note}</li>
    ));
  };

  return (
    <div>
      <PlainLink
        to={{
          pathname: `/episode/${spotifyEpisodeId}`,
          state: { episodeId: spotifyEpisodeId },
        }}
      >
        <Title>{props.episode[0]}</Title>
      </PlainLink>
      <ul>{renderComments()}</ul>
    </div>
  );
};

export default BookmarkContainer;
