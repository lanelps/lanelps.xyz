import React from "react";
import { Global, css } from "@emotion/react";
import { GlobalStyles as BaseStyles } from "twin.macro";
import SEO from "../components/SEO";

export default function Layout({ title, url, page, children, _css }) {
  const customStyles = css`
    @font-face {
      font-family: "IBM Plex Sans";
      src: url("/fonts/IBM-Plex-Sans-Regular.woff2") format("woff2");
      font-style: normal;
      font-weight: 400;
      font-display: swap;
    }

    @font-face {
      font-family: "IBM Plex Sans";
      src: url("/fonts/IBM-Plex-Sans-Medium.woff2") format("woff2");
      font-style: normal;
      font-weight: 500;
      font-display: fallback;
    }
  `;
  return (
    <>
      <BaseStyles />
      <Global styles={customStyles} />
      <div className={`page ${page && page}`}>
        <SEO title={title} url={url} />
        <main id="content" className="content" css={_css}>
          {children}
        </main>
      </div>
    </>
  );
}
