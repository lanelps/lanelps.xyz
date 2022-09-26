import React from "react";
import { graphql } from "gatsby";
import tw from "twin.macro";

import { Layout, Title, Image } from "~components";

const About = ({ data: { sanityAboutPage } }) => (
  <Layout>
    <section tw="relative lg-t:sticky block h-min col-start-1 col-span-full lg-t:col-span-6 top-0">
      <Title title={sanityAboutPage.title} text={sanityAboutPage._rawBody} />
    </section>

    <section tw="lg-t:col-start-7 col-span-full lg-t:col-span-6 order-first lg-t:order-1 mb-16 lg-t:mb-0">
      <Image image={sanityAboutPage.image} />
    </section>
  </Layout>
);

export default About;

export const query = graphql`
  query About {
    sanityAboutPage {
      title
      _rawBody
      image {
        asset {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
        altText
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
