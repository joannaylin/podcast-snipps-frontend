import React from "react";

const Iframe = (props) => {

  return (
    <div>
      <iframe
        src={`https://open.spotify.com/embed-podcast/episode/${props.id}`}
        title={props.title}
        width="100%"
        height="232"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default Iframe;
