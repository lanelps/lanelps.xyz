import React from 'react';
import { graphql } from 'gatsby';
import tw from 'twin.macro';

import Layout from '~components/Layout';
import Title from '~components/Title';
import Image from '~components/Image';

const About = ({ data: { sanityAboutPage } }) => {
  return (
    <Layout title="About" url="/about">
      <section tw="relative md:sticky block h-min col-start-1 col-span-full md:col-span-6 top-0">
        <Title title={sanityAboutPage.title} text={sanityAboutPage._rawBody} />
      </section>

      <section tw="md:col-start-7 col-span-full md:col-span-6 order-first md:order-1 mb-16 md:mb-0">
        <Image image={sanityAboutPage.image} />
      </section>
    </Layout>
  );
};

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
