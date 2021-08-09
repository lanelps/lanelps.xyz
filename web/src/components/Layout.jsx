import React from "react";
import { Global } from "@emotion/react";
import tw, { GlobalStyles as BaseStyles, css, theme } from "twin.macro";
import { useMediaQuery } from "react-responsive";

import SEO from "../components/SEO";
import Git from "../components/Git";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";

export default function Layout({ title, url, children, _css }) {
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

    :root {
      font-size: 10px;
    }
  `;

  const isMobile = useMediaQuery({
    query: `(min-device-width: ${theme`screens.xs.min`})`,
  });

  return (
    <>
      <BaseStyles />
      <Global styles={customStyles} />
      <div
        css={[
          tw`relative h-screen p-16 bg-white font-main text-body dark:bg-black text-black dark:text-white transition-colors duration-400`,
          css``,
        ]}
      >
        <SEO title={title} url={url} />
        <Git />
        {isMobile ? <Header /> : <MobileHeader />}
        <main
          id="content"
          css={[
            tw`relative h-full p-16 border border-black dark:border-white overflow-y-scroll`,
          ]}
        >
          <div css={[tw`relative w-full h-auto grid grid-cols-12 gap-8`]}>
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
