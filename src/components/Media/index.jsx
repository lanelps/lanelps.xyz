import React from "react";
import tw from "twin.macro";

import { Image, Video } from "~components";

import { getCloudinaryVideoURL } from "~utils/cloudinary";

const Container = tw.figure`relative w-full`;

const Media = ({ className, contain, media }) => {
  const { type, image, video } = media;

  let source = image;

  if (type === `video`) {
    source = getCloudinaryVideoURL(video?.public_id, {
      format: `auto`,
      quality: `auto:best`,
      width: 1440
    });
  }

  return (
    <Container className={className}>
      {type === `image` && (
        <Image image={source} css={[tw`w-auto`]} contain={contain} />
      )}

      {type === `video` && (
        <Video
          sources={[{ url: source, type: video?.format }]}
          css={[tw`w-auto`]}
          type={video?.format}
          contain={contain}
        />
      )}
    </Container>
  );
};

export default Media;
