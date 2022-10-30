import React from "react";
import { graphql } from "gatsby";
import tw from "twin.macro";

import { Layout, Grid, Media, StickyWrapper, PortableText } from "~components";

const About = ({ data: { sanityAboutPage } }) => (
  <Layout>
    <Grid tw="mt-2.5!">
      <StickyWrapper tw="col-span-full md-t:col-span-1 animate-appear">
        <PortableText blocks={sanityAboutPage?._rawBody} />
      </StickyWrapper>

      <Media
        tw="w-full col-span-full md-t:col-span-2 animate-appear"
        contain
        media={sanityAboutPage?.media}
      />
    </Grid>
  </Layout>
);

export default About;

export const query = graphql`
  query About {
    sanityAboutPage {
      title
      _rawBody
      media {
        type
        image {
          altText
          asset {
            gatsbyImageData(
              width: 1440
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        video {
          format
          public_id
        }
      }
    }
  }
`;

export const Head = () => {
  const seo = {
    description: ``,
    domain: `https://lanelps.xyz/about`,
    favicon: {
      mimeType: `image/jpg`,
      url: `/favicon.jpg`
    },
    image: ``,
    keywords: [``],
    robots: `index, follow`,
    title: `About`
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
