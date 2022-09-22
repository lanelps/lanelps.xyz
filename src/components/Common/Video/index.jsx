import React, { useEffect, useRef } from "react";
import tw, { styled } from "twin.macro";

const Container = tw.div`relative w-full h-full`;

const VideoElement = styled.video(({ contain }) => [
  tw`relative w-full h-full transition-opacity object-cover`,
  contain && tw`object-contain`
]);

const Video = ({
  autoPlay = true,
  className,
  id,
  isMuted = true,
  loop = true,
  src,
  type = `video/mp4`,
  contain = false
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (isMuted) {
      // open bug since 2017 that you cannot set muted in video element https://github.com/facebook/react/issues/10389
      ref.current.defaultMuted = true;
      ref.current.muted = true;
    }
  }, [ref, isMuted]);

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
        <source src={src} type={type} />
        Sorry, your browser doesn&#39;t support embedded videos.
      </VideoElement>
    </Container>
  );
};

export default Video;
