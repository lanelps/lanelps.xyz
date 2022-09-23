import React from "react";

import { Layout, Image } from "~components";

import tinderbox from "~assets/images/300px-Firemaking.gif";

const Index = () => (
  <Layout>
    <h1 className="h1">Hello world!</h1>
    <Image image={tinderbox} />
  </Layout>
);

export default Index;

export const Head = () => {
  const seo = {
    title: `Gatsby Tinderbox`,
    description: `A simplified bare-bones starter for Gatsby`,
    domain: `https://example.com/`,
    keywords: [`boilerplate`],
    favicon: {
      mimeType: `image/jpg`,
      url: `/favicon.jpg`
    }
  };

  return (
    <>
      <title>{seo?.title}</title>
      <meta name="description" content={seo?.description} />
      <meta name="keywords" content={seo?.keywords} />
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
