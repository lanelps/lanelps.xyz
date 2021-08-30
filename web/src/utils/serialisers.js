import React from "react";
import tw, { css, theme } from "twin.macro";

import Go from "../components/Go";

export const simple = {
  types: {
    block: props => {
      if (props.node.style === `normal`) {
        return <h2 tw="font-main text-heading">{props.children}</h2>;
      }
    }
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, mark }) => (
      <Go to={mark.href} newTab _css={[tw``]}>
        {children}
      </Go>
    )
  }
};
