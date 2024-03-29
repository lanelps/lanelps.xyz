import React, { forwardRef } from "react";
import tw, { css } from "twin.macro";

import { breakpoint } from "~utils/css";

const Grid = forwardRef((props, ref) => {
  const {
    className,
    children,
    node = `div`,
    columns = [`1`, `3`],
    gap = [`0.625rem 1rem`, `0.625rem 1rem`],
    padding = [`0 0.75rem`, `0 0.75rem`],
    margin = [`auto`, `auto`],
    maxWidth = `1728px`
  } = props;

  const G = `${node}`;

  return (
    <G
      ref={ref}
      css={[
        css`
          grid-template-columns: repeat(${columns[0]}, minmax(0, 1fr));
          grid-gap: ${gap[0]};
          margin: ${margin[0]};
          padding: ${padding[0]};
          max-width: ${maxWidth};

          ${breakpoint(`sm-t`)} {
            grid-template-columns: repeat(${columns[1]}, minmax(0, 1fr));
            grid-gap: ${gap[1]};
            margin: ${margin[1]};
            padding: ${padding[1]};
          }
        `,
        tw`w-full relative grid`
      ]}
      className={className}
    >
      {children}
    </G>
  );
});

export default Grid;
