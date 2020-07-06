import React from "react";
import { PlainLink } from "../shared/Links";
import { Link } from "react-router-dom";
import { Title } from "../shared/Titles";
import { ListItem } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { List } from "@material-ui/core";
import styled from "styled-components";
import ChatIcon from '@material-ui/icons/Chat';

const TitleListItem = styled(Typography)({
  backgroundColor: "rgba(0,0,0,0.2)",
  "&:hover": {
    background: "rgba(255,255,255,0.2)",
  },
  padding: "20px",
});

const NListItem = styled(ListItem)({
  marginLeft: "25px"
})

const StyledChatIcon = styled(ChatIcon)({
  marginRight: "10px"
})

const BookmarkContainer = (props) => {
  const spotifyEpisodeId = props.episode[1][0].episode.spotify_episode_id;

  const renderComments = () => {
    return props.episode[1].map((comment) => (
      <NListItem key={comment.id}><StyledChatIcon/>{comment.note}</NListItem>
    ));
  };

  console.log(props)
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
