import React from 'react';
import { Global } from '@emotion/react';
import tw, { GlobalStyles as BaseStyles, css } from 'twin.macro';
import { useCSSMediaQuery } from '~hooks';

import SEO from '../components/SEO';
import Git from '../components/Git';
import Header from '../components/Header';
import MobileHeader from '../components/MobileHeader';
import Footer from '../components/Footer';

export default function Layout({ title, url, children, _css }) {
  const customStyles = css`
    @font-face {
      font-family: 'IBM Plex Sans';
      src: url('/fonts/IBM-Plex-Sans-Regular.woff2') format('woff2');
      font-style: normal;
      font-weight: 400;
      font-display: swap;
    }

    @font-face {
      font-family: 'IBM Plex Sans';
      src: url('/fonts/IBM-Plex-Sans-Medium.woff2') format('woff2');
      font-style: normal;
      font-weight: 500;
      font-display: fallback;
    }

    :root {
      font-size: 10px;
    }
  `;

  const { isDesktop } = useCSSMediaQuery();

  return (
    <>
      <BaseStyles />
      <Global styles={customStyles} />
      <div
        css={[
          tw`relative h-screen p-8 md:p-16 bg-white font-main text-body dark:bg-black text-black dark:text-white transition-colors duration-400`,
          css``
        ]}
      >
        <SEO title={title} url={url} />
        <Git />
        {isDesktop ? <Header /> : <MobileHeader />}

        <main
          id="content"
          css={[
            tw`relative h-full p-8 md:p-16 border border-black dark:border-white overflow-y-scroll transition-colors duration-400`
          ]}
        >
          <div
            css={[
              tw`relative w-full h-auto grid grid-cols-4 md:grid-cols-12 gap-x-4 md:gap-x-8`
            ]}
          >
            {children}
          </div>
        </main>
        {isDesktop && <Footer />}
      </div>
    </>
  );
}
