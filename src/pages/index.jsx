import React from "react";
import { graphql } from "gatsby";
import tw from "twin.macro";

import { Layout, Grid, Video, PortableText, StickyWrapper } from "~components";

const Index = ({ data: { sanityHomePage } }) => (
  <Layout>
    <Grid tw="mt-2.5!">
      <StickyWrapper tw="col-span-full md-t:col-span-1">
        <PortableText blocks={sanityHomePage?._rawBody} />
      </StickyWrapper>

      <Video
        src={sanityHomePage?.showReel?.asset?.url}
        tw="w-full col-span-full md-t:col-span-2"
        contain
      />
    </Grid>
  </Layout>
);

export default Index;

export const query = graphql`
  query Home {
    sanityHomePage {
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
    description: ``,
    domain: `https://lanelps.xyz/`,
    favicon: {
      mimeType: `image/jpg`,
      url: `/favicon.jpg`
    },
    image: ``,
    keywords: [``],
    robots: `index, follow`,
    title: ``
  };

  return (
    <>
      <title>{seo?.title}</title>
      <meta name="description" content={seo?.description} />
      <meta name="keywords" content={seo?.keywords} />
      <meta name="robots" content={seo?.robots} />
      <meta name="googlebot" content={seo?.robots} />
      <link rel="canonical" href={seo?.domain} />
      <link rel="icon" type={seo?.favicon?.mimeType} href={seo?.favicon?.url} />

      {/* open graph/ twitter */}
      <meta property="og:title" content={seo?.title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={seo?.description} />
      <meta property="og:image" content={seo?.image?.url} />
      <meta property="og:url" content={seo?.domain} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};
