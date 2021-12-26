import React from 'react';
import { graphql } from 'gatsby';
import tw from 'twin.macro';

import Layout from '~components/Layout';
import Title from '~components/Title';
import Video from '~components/Video';

const Home = ({ data: { sanityHomePage } }) => {
  return (
    <Layout title="Home" url="/">
      <section tw="relative md:sticky block h-min col-start-1 col-span-full md:col-span-6 top-0">
        <Title title={sanityHomePage.title} text={sanityHomePage._rawBody} />
      </section>

      <section tw="md:col-start-7 col-span-full md:col-span-6">
        <Video src={sanityHomePage.showReel.asset.url} autoPlay loop />
      </section>
    </Layout>
  );
};

export default Home;

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
