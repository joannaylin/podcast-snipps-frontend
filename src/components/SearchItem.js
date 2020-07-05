import React from "react";
import { PodcastImage } from "../shared/Images.js"
import { Title } from "../shared/Titles.js"
import { Description } from "../shared/Descriptions.js"
import { PlainLink } from "../shared/Links"
import styled from "styled-components";

const SearchDiv = styled.div`
  background-color: rgba(0,0,0, 0.6)
  border-radius: 100px;
  width: 800px;
  height: 250px;
  margin-left: 120px;
  display: block;
  overflow: hidden;
`;

const SearchItem = (props) => {
  const { description, id, name } = props.podcast;
  // not every podcast has 3 images, cannot specify image[2] consistently (may have errors)
  const images = props.podcast.images;
  const imgUrl = images[images.length - 2].url;

  return (
    <SearchDiv>
      <PlainLink to={{ pathname: `/show/${id}`, state: { showId: id, imgUrl: imgUrl } }} key={id}>
        <PodcastImage src={imgUrl} alt="podcast logo" />
        <Title>{name}</Title>
        <Description>{description.substring(0, 300)}...</Description>
      </PlainLink>
    </SearchDiv>
  );
};

export default SearchItem;
