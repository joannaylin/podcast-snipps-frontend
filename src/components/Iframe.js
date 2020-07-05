import React from "react";

const Iframe = (props) => {
  return (
    <iframe
      src={`https://open.spotify.com/embed-podcast/episode/${props.id}`}
      title={props.title}
      width="100%"
      height="232"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
      id="audio"
    />
  );

  // pauseVideo = () => {
  //   console.log("Hi");
  //   this.player.pause();
  // };

  // render() {
  //   // <iframe
  //   //   src={`https://open.spotify.com/embed-podcast/episode/${props.id}`}
  //   //   title={props.title}
  //   //   width="100%"
  //   //   height="232"
  //   //   frameBorder="0"
  //   //   allowtransparency="true"
  //   //   allow="encrypted-media"
  //   //   id="audio"
  //   // />

  //   return (
  //     <div>
  //       <audio id="audio" width="320" height="240" controls>
  //         <source
  //           id="source"
  //           src={`https://open.spotify.com/embed-podcast/episode/${this.props.id}`}
  //           width="100%"
  //           height="232"
  //           frameBorder="0"
  //         />
  //       </audio>
  //       <audio id="second" controls>
  //         <source src="https://www.computerhope.com/jargon/m/example.mp3" />
  //       </audio>
  //     </div>
  //     // <object src={`https://open.spotify.com/embed-podcast/episode/${props.id}`} width="100%" height="232" type="audio"></object>
  //   );

  // return (
  //   <div>
  //     <embed
  //       src={`https://open.spotify.com/embed-podcast/episode/${this.props.id}`}
  //       title={this.props.title}
  //       type="audio/mp4"
  //       width="100%"
  //       height="232"
  //       ref={this.player}
  //     ></embed>
  //     <button onClick={this.pauseVideo}>Hit me</button>
  //   </div>
  // );
};

export default Iframe;

// https://open.spotify.com/episode/5VfEme8vxSnn5LPsAcGgPJ
