import React from "react";
import { Link } from "react-router-dom";
import { ListItem, Typography, List } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import styled from "styled-components";

const TitleListItem = styled(Typography)({
  backgroundColor: "rgba(0,0,0,0.2)",
  "&:hover": {
    background: "rgba(255,255,255,0.2)",
  },
  padding: "20px",
  borderRadius: "30px",
});

const NListItem = styled(ListItem)({
  background: "rgba(0,0,0,0.2)",
});

const StyledChatIcon = styled(ChatIcon)({
  marginLeft: "20px",
  marginRight: "10px",
});

const BookmarkContainer = (props) => {
  const spotifyEpisodeId = props.episode[1][0].episode.spotify_episode_id;

  const renderComments = () => {
    return props.episode[1].map((comment) => (
      <NListItem key={comment.id}>
        <StyledChatIcon />
        {comment.note}
      </NListItem>
    ));
  };

  console.log(props);
  return (
    <div>
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to={{
          pathname: `/episode/${spotifyEpisodeId}`,
          state: { episodeId: spotifyEpisodeId },
        }}
      >
        <TitleListItem variant="h4">{props.episode[0]}</TitleListItem>
      </Link>
      <List>{renderComments()}</List>
    </div>
  );
};

export default BookmarkContainer;
