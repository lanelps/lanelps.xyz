import React from "react";
import { graphql } from "gatsby";
import tw from "twin.macro";

import { Layout, Title, ContactForm } from "~components";

const Contact = ({ data: { sanityContactPage } }) => (
  <Layout title="Contact" url="/contact">
    <section tw="relative md:sticky block h-min col-start-1 col-span-full md:col-span-6 top-0">
      <Title
        title={sanityContactPage.title}
        text={sanityContactPage._rawBody}
      />
    </section>

    <section tw="md:col-start-7 col-span-full md:col-span-6">
      <ContactForm />
    </section>
  </Layout>
);

export default Contact;

export const query = graphql`
  query Contact {
    sanityContactPage {
      title
      _rawBody
    }
  }
`;

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
