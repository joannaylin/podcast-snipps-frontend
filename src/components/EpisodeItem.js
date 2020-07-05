import React from "react";
import { PlainLink} from "../shared/Links"
import { Title } from "../shared/Titles.js"
import { Description } from "../shared/Descriptions.js"


const EpisodeItem = (props) => {
  const { name, description, release_date } = props.episode;
  return (
    <div>
      <PlainLink
        to={{
          pathname: `/episode/${props.episode.id}`,
          state: { episodeId: props.episode.id },
        }}
      >
        <Title>{name}</Title>
        <Description>{release_date}</Description>
        <Description>{description}</Description>
      </PlainLink>
    </div>
  );
};

export default EpisodeItem;
