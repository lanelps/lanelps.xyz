import React from "react";
import { css } from "@emotion/react";
import { remToPx } from "~utils/helpers";
import { breakpoint } from "~utils/css";

export const GRID_COLUMNS = 12;
export const GRID_MAX_WIDTH_PX = 1440;

export const GRID_GAP_REM = 1.5;
export const GRID_MOBILE_GAP_REM = 0.5;
export const GRID_GAP_PX = remToPx(GRID_GAP_REM);

export const GRID_PADDING_REM = 1.75;
export const GRID_MOBILE_PADDING_REM = 0.9375;
export const GRID_PADDING_PX = remToPx(GRID_GAP_REM);

/**
 * -----------------------------------------------------------------------------
 * Receive a CSS grid wrapper to style guide spec.
 * @param  {node}   children  Inner JSX
 * @param  {string} node      Wrapper JSX node type (defaults to <div>)
 * @return {node}             The resulting CSS grid node
 */
const Grid = ({ children, className, node }) => {
  const G = `${node}`;

  return (
    <G
      className={className}
      css={[
        css`
          width: 100%;
          position: relative;
          display: grid;
          margin: 0 auto;
          max-width: ${GRID_MAX_WIDTH_PX}px;
          grid-template-columns: repeat(${GRID_COLUMNS}, minmax(0, 1fr));
          gap: 0 ${GRID_MOBILE_GAP_REM}rem;
          padding: 0 ${GRID_MOBILE_PADDING_REM}rem;

          ${breakpoint(`lg-t`)} {
            gap: 0 ${GRID_GAP_REM}rem;
            padding: 0 ${GRID_PADDING_REM}rem;
          }
        `
      ]}
    >
      {children}
    </G>
  );
};

export default Grid;
