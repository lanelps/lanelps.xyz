import React, { useEffect, useRef, useState } from "react";
import tw, { css } from "twin.macro";
import useScroll from "react-use-scroll";
import useWindowSize from "../hooks/useWindowSize";

const Video = ({
  _css,
  autoPause,
  autoPlay,
  loop,
  muted,
  playing,
  playsInline,
  poster,
  src,
}) => {
  const scrollTop = useScroll();
  const windowSize = useWindowSize();
  const videoRef = useRef();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (videoRef?.current && !loaded) {
      setLoaded(true);

      videoRef.current.onpause = () => {
        if (videoRef?.current) {
          videoRef.current.playing = false;
        }
      };

      videoRef.current.onplaying = () => {
        if (videoRef?.current) {
          videoRef.current.playing = true;
        }
      };
    }
  }, [videoRef.current]);

  useEffect(() => {
    if (!autoPause || !loaded) {
      return;
    }

    const { height, top } = videoRef.current.getBoundingClientRect();
    const video = videoRef.current;

    if (top > -height && top < windowSize.height) {
      if (!video.playing) {
        video.play();
      }
    } else if (video.playing) {
      video.pause();
    }
  }, [scrollTop]);

  useEffect(() => {
    if (!loaded) {
      return;
    }

    const video = videoRef.current;

    if (playing) {
      if (!video.playing) {
        video.play();
      }
    } else if (video.playing) {
      video.pause();
    }
  }, [loaded, playing, videoRef.current]);

  return (
    <video
      css={_css}
      ref={videoRef}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      poster={poster}
    >
      <source src={src} />
    </video>
  );
};

export default Video;
