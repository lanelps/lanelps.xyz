import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Image = ({ image, alt, loading, objectFit, title, _css }) => {
  const imageData = getImage(image.asset);
  const src = imageData?.images?.fallback?.src;

  return (
    <>
      {(image?.asset?.src?.includes(`.svg`) && (
        <img src={src} alt={alt || ``} title={title || alt || ``} css={_css} />
      )) || (
        <GatsbyImage
          image={imageData}
          alt={alt || image?.altText || ""}
          loading={loading || "lazy"}
          title={title || ""}
          css={_css}
          objectFit={objectFit || "cover"}
        />
      )}
    </>
  );
};

export default Image;
