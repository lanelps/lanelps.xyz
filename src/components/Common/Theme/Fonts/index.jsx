import React from "react";
import { Global } from "@emotion/react";
import { css } from "twin.macro";

import IBM_PLEX_REGULAR_WOFF2 from "~assets/fonts/IBMPlexSans-Regular.woff2";
import IBM_PLEX_REGULAR_WOFF from "~assets/fonts/IBMPlexSans-Regular.woff";
import IBM_PLEX_ITALIC_WOFF2 from "~assets/fonts/IBMPlexSans-Italic.woff2";
import IBM_PLEX_ITALIC_WOFF from "~assets/fonts/IBMPlexSans-Italic.woff";

const Fonts = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "IBM Plex Sans";
        src: url(${IBM_PLEX_REGULAR_WOFF2}) format("woff2"),
          url(${IBM_PLEX_REGULAR_WOFF}) format("woff");
        font-display: block;
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "IBM Plex Sans";
        src: url(${IBM_PLEX_ITALIC_WOFF2}) format("woff2"),
          url(${IBM_PLEX_ITALIC_WOFF}) format("woff");
        font-display: block;
        font-weight: normal;
        font-style: italic;
      }
    `}
  />
);
export default Fonts;
