import React from "react";
import tw from "twin.macro";
import { getGatsbyImageData } from "gatsby-source-sanity";

import { Go, Image } from "~components";

const sanityConfig = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET
};

export const simple = {
  types: {
    block: (props) => {
      if (props.node.style === `normal`) {
        return (
          <p tw="font-main text-heading lg-t:text-heading-md">
            {props.children}
          </p>
        );
      }
    }
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, mark }) => (
      <Go to={mark?.href} newTab css={[tw``]}>
        {children}
      </Go>
    )
  }
};

export default {
  types: {
    block: (props) => {
      switch (props.node.style) {
        case `h1`:
          return <h1>{props.children}</h1>;

        case `h2`:
          return <h2>{props.children}</h2>;

        case `h3`:
          return <h3>{props.children}</h3>;

        case `h4`:
          return <h4>{props.children}</h4>;

        case `h5`:
          return <h5>{props.children}</h5>;

        case `h6`:
          return <h6>{props.children}</h6>;

        case `normal`:
        default:
          return <p>{props.children}</p>;
      }
    },
    blockImage: (props) => {
      const { image } = props.node;

      const fluidProps = getGatsbyImageData(
        image.asset._ref,
        { maxWidth: 1920 },
        sanityConfig
      );

      const imageProps = {
        asset: {
          fluid: fluidProps
        }
      };

      const imageJSX = <Image image={imageProps} alt={props.node.altText} />;

      return imageJSX;
    }
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, mark }) => (
      <Go to={mark.href} newTab>
        {children}
      </Go>
    )
  }
};
