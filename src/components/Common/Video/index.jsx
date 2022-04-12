import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover !important;
`;

const VideoElement = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: opacity 1s;
`;

const Video = ({ id, src, type = `video/mp4`, placeholder, className }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = document.getElementById(id);
    video.addEventListener(`loadeddata`, () => setLoaded(true), false);
    // Force video to show after 4 seconds incase
    // loadeddata listener does not fire
    setTimeout(() => {
      if (!loaded) setLoaded(true);
    }, 4000);
  }, []);

  return (
    <Container
      className={`${className || ``}`}
      style={{ background: `url('${placeholder}') center no-repeat` }}
    >
      <VideoElement
        preload="true"
        autoPlay
        playsInline
        muted
        loop
        id={id}
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <source src={src} type={type} />
        Sorry, your browser doesn&#39;t support embedded videos.
      </VideoElement>
    </Container>
  );
};

export default Video;
