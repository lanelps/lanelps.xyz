import React from "react";
import { graphql } from "gatsby";
import tw from "twin.macro";

import { Layout, Title, Video } from "~components";

const Index = ({ data: { sanityHomePage } }) => (
  <Layout>
    <section tw="relative md:sticky block h-min col-start-1 col-span-full md:col-span-6 top-0">
      <Title title={sanityHomePage.title} text={sanityHomePage._rawBody} />
    </section>

    <section tw="md:col-start-7 col-span-full md:col-span-6 order-first md:order-1 mb-16 md:mb-0">
      <Video src={sanityHomePage.showReel.asset.url} />
    </section>
  </Layout>
);

export default Index;

export const query = graphql`
  query Home {
    sanityHomePage {
      title
      _rawBody
      showReel {
        asset {
          url
        }
      }
    }
  }
`;

export const Head = () => {
  const seo = {
    title: ``,
    description: ``,
    domain: `https://lanelps.xyz/`,
    favicon: {
      mimeType: `image/jpg`,
      url: `/favicon.jpg`
    },
    keywords: [`boilerplate`],
    robots: `index, follow`
  };

  return (
    <>
      <title>{seo?.title}</title>
      <meta name="description" content={seo?.description} />
      <meta name="keywords" content={seo?.keywords} />
      <meta name="robots" content={seo?.robots} />
      <meta name="googlebot" content={seo?.robots} />
      <link rel="canonical" href={seo.domain} />
      <link rel="icon" type={seo?.favicon?.mimeType} href={seo?.favicon?.url} />

      {/* open graph/ twitter */}
      <meta property="og:title" content={seo?.title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={seo?.description} />
      <meta property="og:image" content={seo.image.url} />
      <meta property="og:url" content={seo.domain} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};
