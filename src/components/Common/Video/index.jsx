import React, { useEffect, useRef } from "react";
import tw, { styled } from "twin.macro";
import { v4 as uuidv4 } from "uuid";

const Container = tw.div`relative w-full h-full`;

const VideoElement = styled.video(({ contain }) => [
  tw`relative w-full transition-opacity object-cover invert`,
  contain && tw`object-contain`
]);

const Video = ({
  autoPlay = true,
  className,
  id,
  muted = true,
  loop = true,
  sources = [],
  contain = false
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (muted) {
      // open bug since 2017 that you cannot set muted in video element https://github.com/facebook/react/issues/10389
      ref.current.defaultMuted = true;
      ref.current.muted = true;
    }
  }, [ref, sources, muted]);

  return (
    <Container className={className}>
      <VideoElement
        ref={ref}
        id={id}
        autoPlay={autoPlay}
        playsInline
        loop={loop}
        contain={contain}
      >
        {sources.map((src) => (
          <source
            key={uuidv4()}
            src={src?.url}
            type={src?.type && `video/${src?.type}`}
          />
        ))}
        Sorry, your browser doesn&#39;t support embedded videos.
      </VideoElement>
    </Container>
  );
};

export default Video;
